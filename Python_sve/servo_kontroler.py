import RPi.GPIO as GPIO
import time


kontrole = [2.5,3,3.5,4,4.5,5,5.5,6,6.5]
servo_pin = 22

GPIO.setmode(GPIO.BOARD) #postavljanje načina rada GPIO pinova.
GPIO.setup(servo_pin,GPIO.OUT) #postavljanje servo pina na dig. izlaz
GPIO.setwarnings(False) #disable all GPIO warnings
p = GPIO.PWM(servo_pin,50) #50Hz frekvencija, potrebna za rad servo motora.

p.start(2.5) #postavljanje servo motora na 0 stepeni

try:
    for y in range(5):
        for x in range(9):
            p.ChangeDutyCycle(kontrole[x])
            time.sleep(0.03)
    p.ChangeDutyCycle(2.5)
except KeyboardInterrupt:
    GPIO.cleanup()
print("Završio")