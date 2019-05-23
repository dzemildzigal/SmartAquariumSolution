
int relejPin = 3;
int ledPin = 13;
void setup(){
  pinMode(relejPin,OUTPUT);
  pinMode(ledPin,OUTPUT);
}
//RELEJ SE "PALI" NA LOG. 0, GASI NA LOG 1
void loop(){
  delay(1000);
  digitalWrite(relejPin,HIGH);
  digitalWrite(ledPin,LOW);
  delay(1000);
  digitalWrite(relejPin,LOW);
  digitalWrite(ledPin,HIGH);
}
