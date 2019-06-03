import os,sys
import serial
import time
import json
import asyncio
from http.server import HTTPServer, BaseHTTPRequestHandler

ser = serial.Serial('/dev/ttyUSB0',9600,timeout=10); #USB port na kojem je Arduino, baudrate Arduina, timeout komunikacije u s
#Slušaj input, izađi iz skripte ako je timeout prošao bez ikakvog inputa
message={"Greska":"Nije ocitan serijski port"};
T=0;
N=0;
Tmax=0;
Tmin=0;
Nmax=0;
Nmin=0;
def ocitaj_serijski_port():    
    ser.flushInput()
    time.sleep(0.1)
    ser.write("C".encode('utf-8'))
    line = str(ser.readline(),'utf-8')
    line1 = str(ser.readline(),'utf-8')
    ispis = line.replace('\r\n','')
    ispis1 = line1.replace('\r\n','')
    global Tmin
    global Tmax
    global Nmin
    global Nmax
    Tmin = str(ser.readline(),'utf-8')
    Tmax = str(ser.readline(),'utf-8')
    Nmin = str(ser.readline(),'utf-8')
    Nmax = str(ser.readline(),'utf-8')
    print(Tmin+Tmax+Nmin+Nmax)
    if len(line) == 0 or len(line1)==0:
        print("Dostignut je timeout! Izađi! \n")
        sys.exit()
    global T
    global N
    T = float(ispis)
    N = float(ispis1)
    global message
    message = {"Temperatura":str(T), "Nivo":str(N)};
    ser.flushOutput()

def postavi_nove_vrijednosti(podaci):
    index_T=podaci.find("T=".encode('utf-8'))
    index_N=podaci.find("N=".encode('utf-8'))
    global message
    if index_T == -1 or index_N==-1:
        message={"Greska":"Nisu postavljene sve vrijednosti za nivo i/ili temperaturu"};
        return
    else:
        i = index_T+2
        j = index_N+2
        time.sleep(1)
        TMax = int(podaci[i:i+2])+2;
        TMin = TMax-4;
        NMax = int(podaci[j:j+3])+200;
        NMin = NMax - 400;
        ser.flushInput()
        ser.write(("T"+str(TMin)+str(TMax)).encode("utf-8"));
        time.sleep(0.5);
        ser.write(("W"+str(NMin)+str(NMax)).encode("utf-8"));
        
        
        
        

class RequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        ocitaj_serijski_port()
        self.protocol_version = "HTTP/1.1"
        self.send_response(200)
        self.send_header("Content-type","application/json")
        self.end_headers()
        self.wfile.write(json.dumps(message).encode('utf-8'));
        return
    def do_POST(self):
        
        self.protocol_version = "HTTP/1.1"
        content_length= int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        postavi_nove_vrijednosti(post_data)
        self.send_response(200)
        self.send_header("Content-type","text/html")
        self.end_headers()
        self.wfile.write(json.dumps(message).encode('utf-8'));
 
def run():
    server = ('0.0.0.0',8000)
    httpd = HTTPServer(server,RequestHandler)
    httpd.serve_forever()
run()
