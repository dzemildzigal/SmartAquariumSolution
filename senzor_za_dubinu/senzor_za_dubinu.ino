int sensorPin = A0;
int sensorValue = 0;  
void setup() {
  // inicijalizacija serijskog porta
  Serial.begin(9600);
  // deklaracija porta za senzor
  pinMode(sensorPin,INPUT);
}

void loop() {
    int inByte = analogRead(sensorPin);
    Serial.println(inByte);
    delay(200);
}
