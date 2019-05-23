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
        line1 = str(ser.readline(),'utf-8')
        ispis = line.replace('\r\n','\n')
        ispis1 = line1.replace('\r\n','\n')
        if len(line) == 0 or len(line1)==0:
            print("Dostignut je timeout! Izađi! \n")
            sys.exit()
        print(ispis+''+ispis1)
        vrijednost = float(ispis.replace('\n',''))
        vrijednost1= float(ispis1.replace('\n',''))
        message = "";
        if vrijednost >30:
            message = "Vrijednost temperature na senzoru: " +"<div style = 'background-color:red'>"+line+"  <div/>"+"Vrijednost dubine na senzoru: " +"<div>"+line1+" <div/>"
        elif vrijednost > 20 and vrijednost <=30:
            message = "Vrijednost temperature na senzoru: " +"<div style = 'background-color:orange'>"+line+"  <div/>"+"Vrijednost dubine na senzoru: " +"<div>"+line1+"  <div/>"
        else:
            message = "Vrijednost temperature na senzoru: " +"<div style = 'background-color:blue'>"+line+"  <div/>"+"Vrijednost dubine na senzoru: " +"<div>"+line1+"  <div/>"
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