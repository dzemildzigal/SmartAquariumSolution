#include <Servo.h>
#include <DallasTemperature.h>
#include <OneWire.h>


//DATA pin temperaturnog senzora ide na pin 2 Arduina
#define ONE_WIRE_BUS 2
#define ODVOD 8
#define DOVOD 9
#define GRIJAC 4
char T = 84; //slovo T
char C = 67; //slovo C
char F = 70; //slovo F
char W = 87; //slovo W
//OneWire biblioteka se može koristiti za svaki OneWire senzor, ne samo temperaturni.
OneWire oneWire(ONE_WIRE_BUS);
Servo myservo;

int temp = 0;
int dubina = 0;
int tempMin=25;
int tempMax=30;
int dubinaMin=275;
int dubinaMax=350;
int pos=0;
//**************************************
//Proslijediti referencu OneWire-a senzoru
DallasTemperature senzor(&oneWire);
void setup(){
   //izlaz će biti na COM serijskom monitoru
  Serial.begin(9600);
  senzor.begin(); 
  
  //za senzor dubine, koristi se A0 analogni ulaz.
  pinMode(A0,INPUT);
  pinMode(GRIJAC,OUTPUT);
  pinMode(ODVOD,OUTPUT);
  pinMode(DOVOD,OUTPUT);  
  myservo.attach(6);
  pinMode(13,OUTPUT);
}

void regulisiTemp(String minimum, String maksimum){
  
  tempMin = minimum.toInt();
  tempMax = maksimum.toInt();
}
void regulisiVodu(String minimum, String maksimum){
  
  dubinaMin = minimum.toInt();
  dubinaMax=  maksimum.toInt();
}
void ulij(){
  digitalWrite(ODVOD,HIGH);
  digitalWrite(DOVOD,LOW);
}
void izlij(){
  digitalWrite(ODVOD,LOW);
  digitalWrite(DOVOD,HIGH);
}
void zatvorisve(){
digitalWrite(ODVOD,HIGH);
  digitalWrite(DOVOD,HIGH);
}
void grij(){
  digitalWrite(GRIJAC,LOW);
}
void hladi(){
  digitalWrite(GRIJAC,HIGH);
}
void hrani(){
//for(pos = 0; pos < 180; pos += 10)  // goes from 0 degrees to 180 degrees 
//  {                                  // in steps of 1 degree 
//    myservo.write(pos);              // tell servo to go to position in variable 'pos' 
//    delay(5);                       // waits 5ms for the servo to reach the position 
//  } 
//  for(pos = 180; pos>=1; pos-=10)     // goes from 180 degrees to 0 degrees 
//  {                                
//    myservo.write(pos);              // tell servo to go to position in variable 'pos' 
//    delay(5);                       // waits 5ms for the servo to reach the position 
//  } 
  myservo.write(180);
  delay(1000);
  myservo.write(0);
  delay(1000);

}
void flushRecieve(){
  while(Serial.available())
      Serial.read();
}
void loop(){
  // poziv requestTemperatures() traži vrijednosti temperatura svih povezanih senzora, u ovom slučaju samo jedan
if(Serial.available()>=1){ //ako ima išta pročitati
  if(Serial.find(&C,1)){
      //RPi je poslao: C, odnosno čitaj.
      senzor.requestTemperatures();
      temp = int(senzor.getTempCByIndex(0));
      dubina = analogRead(A0);
      Serial.println(temp);
      Serial.println(dubina);
      //ispisao je vrijenosti i poslao RPi.
  }
    else if(Serial.find(&T,1)){
      //RPi je poslao T, treba regulisati temperaturu
      String tempNoveVrijednostiMin = Serial.readString();
      String tempNoveVrijednostiMax = Serial.readString();
      regulisiTemp(tempNoveVrijednostiMin,tempNoveVrijednostiMax);
  }
    else if(Serial.find(&W,1)){
      //RPi je poslao W, treba regulisati nivo vode
      String vodaNoveVrijednostiMin = Serial.readString();
      String vodaNoveVrijednostiMax = Serial.readString();
      regulisiVodu(vodaNoveVrijednostiMin,vodaNoveVrijednostiMax); 
  }
    else if(Serial.find(&F,1)){
      hrani();
    }
  }
  
    //motorZaHranilicu.write(0);
    senzor.requestTemperatures();
    temp = int(senzor.getTempCByIndex(0));
    dubina = analogRead(A0);
  if(temp>=tempMin && temp<=tempMax){
        hladi();  
    }
  else if(temp<tempMin){
        grij();
    }
  else if(temp>tempMax){
        hladi();
  }
  if(dubina>=dubinaMin && dubina<=dubinaMax){
        zatvorisve();}
  else if(dubina<dubinaMin){
        ulij();}
  else if(dubina>dubinaMax){
        izlij();}  
}
