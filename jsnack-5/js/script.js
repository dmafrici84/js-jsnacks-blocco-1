// Nella pagina ci sono due input(num1, num2) e una select con options(somma,sottrai,moltiplica,dividi).
// Al click su un bottone, il programma inserisce in un p#result il risultato dell'operazione scelta.

var btn = document.getElementById("btnCalcola");

btn.addEventListener("click", function () {

  var risultato = document.getElementById("result");

  // prendo i dati inseriti dall'utente
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;

  // i dati inseriti sono una stringa in questo modo li trasformo in numeri
  num1 = parseInt(num1, 10);
  num2 = parseInt(num2, 10);

  console.log(num1 + " " + num2);

  // seleziono l'operazione da svolgere
  var operazione = document.getElementById("operazione").value;

  console.log(num1 + " " + num2);

  // se l'utente non seleziona nulla (!operazione)
  // se l'utente seleziona somma (operazione == "Somma")
  // se l'utente seleziona sottrai (operazione == "Sottrai")
  // se l'utente seleziona moltiplica (operazione == "Moltiplica")
  // se l'utente seleziona dividi (else)
    //se il divisore è ugale a zero ( num2 == 0)
    // se il divisore non è uguale a zero (else)
  
  if (!operazione) {

  risultato.innerHTML = "Non hai selezionato un'operazione!"

  } else if (operazione == "Somma") {

    risultato.innerHTML = num1 + num2;

  } else if (operazione == "Sottrai") {

    risultato.innerHTML = num1 - num2;

  } else if (operazione == "Moltiplica") {

    risultato.innerHTML = num1 * num2;

  } else {

    if ( num2 == 0) {

      risultato.innerHTML = "Il divisore inserito è zero. Non posso fare la divisione!"

    } else {

      risultato.innerHTML = num1 / num2;

    }

  }

});
