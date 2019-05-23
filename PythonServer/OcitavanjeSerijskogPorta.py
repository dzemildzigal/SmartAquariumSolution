import os,sys
import serial
import time
ser = serial.Serial('/dev/ttyUSB0',9600,timeout=10); #USB port na kojem je Arduino, baudrate Arduina, timeout komunikacije u s

#Slušaj input, izađi iz skripte ako je timeout prošao bez ikakvog inputa
while True:
    line = str(ser.readline(),'utf-8')
    
    ispis = line.replace('\r\n','\n');
    if len(line) == 0:
        print("Dostignut je timeout! Izađi! \n");
        sys.exit();
    print(ispis)