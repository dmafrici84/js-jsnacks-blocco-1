
var numMaggiore = document.getElementById('js-numero');

// Chiedere all'utente il primo numero

var num1 = parseInt(prompt("Inserisci un numero"), 10);

console.log(num1);

// Chiedere all'utente il secondo numero

var num2 = parseInt(prompt("Inserisci un altro numero"),10);

console.log(num2);

// verifica se i dati inseriti sono dei numeri (!isNaN(num1) && !isNaN(num2))
  // confronto i numeri inseriti dall'utente
  // (num1 > num2) il primo numero inserito è maggiore del secondo
  // (num2 > num1) il secondo numero inserito è maggiore del primo
  // (else) il primo numero inserito è uguale al secondo
// verifica se i dati inseriti non sono dei numeri (else)

if (!isNaN(num1) && !isNaN(num2)) {

  if (num1 > num2) {

    // Autput per l'utente

    numMaggiore.innerHTML = "Il numero maggiore è " + num1;

  } else if (num2 > num1) {

    // Autput per l'utente

    numMaggiore.innerHTML = "Il numero maggiore è " + num2;

  } else {

    // Autput per l'utente

    numMaggiore.innerHTML = "I numeri inseriti sono uguali";

  }

} else {

  numMaggiore.innerHTML = "I dati inseriti non sono dei numeri";

}

  console.log(numMaggiore.innerHTML);
