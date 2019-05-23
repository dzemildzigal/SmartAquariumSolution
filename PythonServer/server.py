import os,sys
import serial
import time
from http.server import HTTPServer, BaseHTTPRequestHandler

ser = serial.Serial('/dev/ttyUSB0',9600,timeout=10); #USB port na kojem je Arduino, baudrate Arduina, timeout komunikacije u s
#Slušaj input, izađi iz skripte ako je timeout prošao bez ikakvog inputa



class RequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        ser.flushInput()
        time.sleep(0.1)
        line = str(ser.readline(),'utf-8')
        ispis = line.replace('\r\n','\n');
        if len(line) == 0:
            print("Dostignut je timeout! Izađi! \n");
            sys.exit();
        print(ispis)
        vrijednost = float(ispis.replace('\n',''));
        message = "";
        if vrijednost >30:
            message = "Vrijednost temperature na senzoru: " +"<div style = 'background-color:red'>"+line+"  <div/>"
        elif vrijednost > 20 and vrijednost <=30:
            message = "Vrijednost temperature na senzoru: " +"<div style = 'background-color:orange'>"+line+"  <div/>"
        else:
            message = "Vrijednost temperature na senzoru: " +"<div style = 'background-color:blue'>"+line+"  <div/>"
        self.protocol_version = "HTTP/1.1"
        self.send_response(200)
        self.send_header("Content-Length",len(message))
        self.send_header("Content-Type","text/html")
        self.end_headers()
        self.wfile.write(bytes(message,'utf8'))
        return
    
    
def run():
    server = ('0.0.0.0',8000)
    httpd = HTTPServer(server,RequestHandler)
    httpd.serve_forever()
run()