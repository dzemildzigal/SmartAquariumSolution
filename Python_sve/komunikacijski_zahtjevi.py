import os,sys
import serial
import time

ser = serial.Serial('/dev/ttyUSB0',9600,timeout=10); #USB port na kojem je Arduino, baudrate Arduina, timeout komunikacije u s
#Slušaj input, izađi iz skripte ako je timeout prošao bez ikakvog inputa

ser.flushInput()
ser.flushOutput()
while True:
    ser.write("C\n".encode('utf-8'))
    time.sleep(0.25)
    ser.flushOutput()
    podaci = ser.readline()
    podaci1= ser.readline()
    print(podaci)
    print(podaci1)
    ser.flushInput()
