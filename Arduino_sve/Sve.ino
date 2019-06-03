#include <DallasTemperature.h>
#include <OneWire.h>
#include <Servo.h>

//DATA pin temperaturnog senzora ide na pin 2 Arduina
#define ONE_WIRE_BUS 2
#define ODVOD 8
#define DOVOD 9
#define GRIJAC 4
#define SERVO 11
char T = 84; //slovo T
char C = 67; //slovo C
char F = 70; //slovo F
char W = 87; //slovo W
//OneWire biblioteka se može koristiti za svaki OneWire senzor, ne samo temperaturni.
OneWire oneWire(ONE_WIRE_BUS);
char buffer[100] ={0};
int temp = 0;
int dubina = 0;
int tempMin=25;
int tempMax=30;
int dubinaMin=275;
int dubinaMax=350;
int pos=0;
Servo myservo;
//**************************************
//Proslijediti referencu OneWire-a senzoru
DallasTemperature senzor(&oneWire);
void setup(){
   //izlaz će biti na COM serijskom monitoru
  Serial.begin(9600);
  senzor.begin(); 
  myservo.attach(SERVO);
  //za senzor dubine, koristi se A0 analogni ulaz.
  pinMode(A0,INPUT);
  pinMode(GRIJAC,OUTPUT);
  pinMode(ODVOD,OUTPUT);
  pinMode(DOVOD,OUTPUT);  
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

void flushRecieve(){
  while(Serial.available())
      Serial.read();
}
void loop(){
  // poziv requestTemperatures() traži vrijednosti temperatura svih povezanih senzora, u ovom slučaju samo jedan
if(Serial.available()>=1){ //ako ima išta pročitati
  if(Serial.peek()==C){
    
      Serial.read();
      if(Serial.available()==0){
      //RPi je poslao: C, odnosno čitaj.
      senzor.requestTemperatures();
      //digitalWrite(13,HIGH);
      temp = int(senzor.getTempCByIndex(0));
      dubina = analogRead(A0);
      Serial.println(temp);
      Serial.println(dubina);
      Serial.println(tempMin);
      Serial.println(tempMax);
      Serial.println(dubinaMin);
      Serial.println(dubinaMax);  
      Serial.flush();
      flushRecieve();
    }
      //ispisao je vrijenosti i poslao RPi.
  }
   if(Serial.peek()==T){
     //RPi je poslao T, treba regulisati temperaturu
      int i=0;
      Serial.read();
      if(Serial.available()==4){
        
        for(i=0;i<4;++i){
          buffer[i]=Serial.read();
      } 
     tempMin = 1*(buffer[1]-'0')+10*(buffer[0]-'0');
     tempMax = 1*(buffer[3]-'0')+10*(buffer[2]-'0');     
    } 
    Serial.println(tempMin);
    Serial.println(tempMax);
    
}
   if(Serial.peek()==W){
     int i=0;
      Serial.read();
      if(Serial.available()==6){
        
        for(i=0;i<6;++i){
          buffer[i]=Serial.read();
      } 
     dubinaMin = 1*(buffer[2]-'0')+10*(buffer[1]-'0')+100*(buffer[0]-'0');
     dubinaMax = 1*(buffer[5]-'0')+10*(buffer[4]-'0')+100*(buffer[3]-'0');     
    } 
    Serial.println(dubinaMin);
    Serial.println(dubinaMax);
  }
  if(Serial.peek()==F){
    while(Serial.available()!=0)
    Serial.read();
    myservo.write(0);
    delay(200);
    myservo.write(90); 
    delay(200);
    myservo.write(0);   
  }  
}  
  
    senzor.requestTemperatures();
    temp = int(senzor.getTempCByIndex(0));
    dubina = analogRead(A0);
    myservo.write(0);
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
