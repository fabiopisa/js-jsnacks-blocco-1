var numeri =[]

for(var i=0; i<6; i++){
  var numeri_digitati = parseInt(prompt("digita un numero"));
  /* numeri.push(numeri_digitati) */
  if(numeri_digitati % 2 !=0){
    numeri.push(numeri_digitati)
  }else{}
}

console.log(numeri)