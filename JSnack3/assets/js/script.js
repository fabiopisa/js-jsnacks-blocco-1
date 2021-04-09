var somma = 0;

for(var i=0; i<10; i++){
  var nuovo_numero = parseInt(prompt("inserisci un numero"))
  console.log(nuovo_numero)
  somma += nuovo_numero;
}

console.log("totale " + somma);

document.getElementById('stampa').innerHTML = "La somma dei numeri digitati è " + somma;