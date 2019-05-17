# PSDS
Projekat pametnog akvarijuma.


Notes:
  RPi nema A/D konvertor, zbog čega se mora koristiti Arduino razvojni sistem za analogne senzore.
  
  Senzor za dubinu je jako osjetljiv. Treba implementirati uzorkovanje od 10 vrijednosti i uzeti srednju vrijednost prije glavnog očitavanja dubine vode.
  
Senzor za temperaturu i vlažnost jako dobro radi osim ako ne prima vrijednosti, temp. i vl. se očitavaju kao -999.0, pa treba dodati if >= 0 ako bi se isti koristio.
