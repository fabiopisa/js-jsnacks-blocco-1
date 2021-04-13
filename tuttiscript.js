/* secondo JSnack */
var parola_1 = prompt("digita la prima parola");
var parola_2 = prompt("digita la seconda parola");

console.log(parola_1);
console.log(parola_2);

if(parola_1.length>parola_2.length){
  document.getElementById('stampa').innerHTML = "La parola con il minor numero di lettere è: " + parola_2 + ", rispetto a: " + parola_1
}else if(parola_1.length === parola_2.length){
  alert("le parole sono uguali")
}else{
  document.getElementById('stampa').innerHTML = "La parola con il minor numero di lettere è: " + parola_1 + ", rispetto a: " + parola_2
}
/* /secondo JSnack */

/* terzo JSnack */
var somma = 0;

for(var i=0; i<10; i++){
  var nuovo_numero = parseInt(prompt("inserisci un numero"))
  console.log(nuovo_numero)
  somma += nuovo_numero;
}

console.log("totale " + somma);

document.getElementById('stampa').innerHTML = "La somma dei numeri digitati è " + somma;
/* /terzo JSnack */

/* quarto JSnack */
var nomi_lista = [
  "gino",
  "carlo",
  "rosaria",
  "frenk",
  "mattia",
  "geppetto",
  "spiderman",
  "batman",
  "kirito",
  "goku",
  "ken",
  "marco",
  "tu no",
  "va bene si"
];

var name_to_found = prompt("inserisci il tuo nome");

var partecipazione = false;

for(var i=0; i< nomi_lista.length; i++){
  var invitato = nomi_lista[i];
  console.log(invitato);
  if(invitato === name_to_found){
    partecipazione = true;
    console.log("NOME TROVATO.. PUO' ENTRARE");
    break;
  }
}

if(partecipazione){
  document.getElementById('stampa').innerHTML = "Il tuo nome è sulla lista, può entrare: " + name_to_found
}else{
  document.getElementById('stampa').innerHTML = "Il tuo nome non è sulla lista, non può entrare: " + name_to_found
}
/* /quarto JSnack */

/* quinto JSnack */
var numeri =[]

for(var i=0; i<6; i++){
  var numeri_digitati = parseInt(prompt("digita un numero"));
  /* numeri.push(numeri_digitati) */
  if(numeri_digitati % 2 !=0){
    numeri.push(numeri_digitati)
  }else{}
}

console.log(numeri)
/* /quinto JSnack */

/* sesto JSnack */
var limite = 5;

var somma =0;

for(var i=1; i<=limite; i++){
  
  var numeri_espo = Math.pow(i, 3)
  console.log(i)
  console.log(numeri_espo)
  console.log("--------------")
  somma += Math.pow(i, 3);
}

console.log("la somma dei cubi è " + somma)
/* /sesto JSnack */

/* settimo JSnack */
var limite_somma =1000;
var potenza = 1;
var counter_potenza = 1;

while(potenza < limite_somma){
 console.log(potenza)
 console.log("elevo il 2 alla " + counter_potenza)
 potenza= Math.pow(2, counter_potenza);
 counter_potenza++;
}
/* /settimo JSnack */

/* ottavo JSnack */
var numero_utente = prompt("digita un numero di 4 cifre");
 
var somma = 0;

for (var i = 0; i < numero_utente.length; i++){
  var cifra = numero_utente[i];
  console.log(cifra);
  somma = somma + parseInt(cifra);
};

console.log("La somma delle 4 cifre è " + somma)
/* /ottavo JSnack */