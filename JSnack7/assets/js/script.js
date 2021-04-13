var limite_somma =1000;
var potenza = 1;
var counter_potenza = 1;

while(potenza < limite_somma){
 console.log(potenza)
 console.log("elevo il 2 alla " + counter_potenza)
 potenza= Math.pow(2, counter_potenza);
 counter_potenza++;
}


//soluzione alternativa del prof

/* while(potenza < limite_somma){
  console.log(potenza);
  potenza *= 2;
}
 */

//soluzione con for

/* for(var i=1; potenza < limite_somma; i++){
  console.log(potenza)
  potenza = Math.pow(2, 1);
} */