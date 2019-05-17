#include <dht.h>

dht DHT;
#define DHT11_PIN 7
void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  DHT.temperature = 0;
  DHT.humidity=0;
}

void loop() {
  // put your main code here, to run repeatedly:
  DHT.temperature = 0;
  DHT.humidity=0;
  int vrijednost = DHT.read11(DHT11_PIN);
  if(DHT.temperature >=0 && DHT.humidity >=0){
  Serial.print("Temperatura = ");
  Serial.println(DHT.temperature);
  Serial.print("Vlaznost = ");
  Serial.println(DHT.humidity);
  delay(100);
  }
}
