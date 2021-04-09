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