import os,sys
import serial
import time
import json
from flask import Flask

ser = serial.Serial('/dev/ttyUSB0',9600,timeout=10); #USB port na kojem je Arduino, baudrate Arduina, timeout komunikacije u s
#Slušaj input, izađi iz skripte ako je timeout prošao bez ikakvog inputa
message={"Greska":"Nije ocitan serijski port"};
trenutnaTemperatura=0;
trenutniNivo =0;
def ocitaj_serijski_port():    
    ser.flushInput()
    time.sleep(0.1)
    ser.write("C\n".encode('utf-8'))
    line = str(ser.readline(),'utf-8')
    line1 = str(ser.readline(),'utf-8')
    ispis = line.replace('\r\n','')
    ispis1 = line1.replace('\r\n','')
    if len(line) == 0 or len(line1)==0:
        print("Dostignut je timeout! Izađi! \n")
        sys.exit()
    vrijednost = float(ispis)
    vrijednost1= float(ispis1)
    global message
    global trenutnaTemperatura
    global trenutniNivo
    trenutnaTemperatura = vrijednost
    trenutniNivo = vrijednost1
    message = {"Temperatura":str(vrijednost), "Nivo":str(vrijednost1)};
    ser.flushOutput()
    
app = Flask(__name__)

@app.route('/v',methods=['GET','POST'])
def v():
    if request.method == 'POST':
        return jsonify(message)
    else:
        ocitaj_serijski_port()
        time.sleep(0.1)
        return jsonify(message)
if __name__ == '__main__':
    app.run(host='0.0.0.0',port = 8000)