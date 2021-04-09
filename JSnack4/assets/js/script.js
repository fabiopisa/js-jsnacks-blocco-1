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

