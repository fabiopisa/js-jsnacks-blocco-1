var numero_utente = prompt("digita un numero di 4 cifre");
 
var somma = 0;

for (var i = 0; i < numero_utente.length; i++){
  var cifra = numero_utente[i];
  console.log(cifra);
  somma = somma + parseInt(cifra);
};

console.log("La somma delle 4 cifre è " + somma)
