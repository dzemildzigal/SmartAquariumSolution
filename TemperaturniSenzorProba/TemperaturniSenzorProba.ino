#include <DallasTemperature.h>
#include <OneWire.h>

//DATA pin temperaturnog senzora ide na pin 2 Arduina
#define ONE_WIRE_BUS 2

//OneWire biblioteka se može koristiti za svaki OneWire senzor, ne samo temperaturni.
OneWire oneWire(ONE_WIRE_BUS);
double temp = 0.0;
int dubina = 0;
//**************************************
//Proslijediti referencu OneWire-a senzoru
DallasTemperature senzor(&oneWire);
void setup(){
   //izlaz će biti na COM serijskom monitoru
  Serial.begin(9600);
  senzor.begin(); 
  
  //za senzor dubine, koristi se A0 analogni ulaz.
  pinMode(A0,INPUT);  
}
void loop(){
  // poziv requestTemperatures() traži vrijednosti temperatura svih povezanih senzora, u ovom slučaju samo jedan
  senzor.requestTemperatures();
  temp = senzor.getTempCByIndex(0);
  dubina = analogRead(A0);
  Serial.println(temp);
  Serial.println(dubina);
  delay(1000);
}
