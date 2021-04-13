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