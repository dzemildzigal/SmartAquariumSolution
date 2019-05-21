#include <DallasTemperature.h>
#include <OneWire.h>

//DATA pin temperaturnog senzora ide na pin 2 Arduina
#define ONE_WIRE_BUS 2

//OneWire biblioteka se može koristiti za svaki OneWire senzor, ne samo temperaturni.
OneWire oneWire(ONE_WIRE_BUS);
//**************************************
//Proslijediti referencu OneWire-a senzoru
DallasTemperature senzor(&oneWire);
void setup(){
 //izlaz će biti na COM serijskom monitoru
  Serial.begin(9600);
  Serial.println("Pokazni primjer temperaturnog senzora");
  senzor.begin(); 
}
void loop(){
  // poziv requestTemperatures() traži vrijednosti temperatura svih povezanih senzora, u ovom slučaju samo jedan
  Serial.println("Daj temperature...");
  senzor.requestTemperatures();
  Serial.println("Dobio sam temperature.");
  Serial.println(senzor.getTempCByIndex(0));
  delay(1000);
}
