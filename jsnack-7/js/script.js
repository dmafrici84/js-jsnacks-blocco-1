// L'utente inserisce due numeri in successione, con due
// prompt. Il software stampa il numeroMaggiore (jsnack-7)

var numeroMaggiore = document.getElementById('js-numero');

// Chiedere all'utente il primo numero
var num1 = parseInt(prompt("Inserisci il primo numero"), 10);

console.log(num1);

// Chiedere all'utente il secondo numero
var num2 = parseInt(prompt("Inserisci il secondo numero"), 10);

console.log(num2);

// verifico quale numero sia maggiore
if (!isNaN(num1) && !isNaN(num2)) {

  if (num1> num2) {
    numeroMaggiore.innerHTML = "Il numero maggiore è: " + num1;
  } else if (num1 < num2) {
    numeroMaggiore.innerHTML = "Il numero maggiore è: " + num2;
  }else {
    numeroMaggiore.innerHTML = "i numeri sono uguali";
  }

} else {

  numeroMaggiore.innerHTML = "I dati inseriti non sono dei numeri"

}
