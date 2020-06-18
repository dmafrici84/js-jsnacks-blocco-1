// Al click su un bottone, il programma acquisisce tramite prompt un numero. Se il numero è positivo, il background di un p#colore diventa verde, se negativo rosso e se zero blu


var btn = document.getElementById("btnCrea");

btn.addEventListener("click", function () {

  // Chiedere all'utente un numero

  var num1 = parseInt(prompt("Inserisci un numero"), 10);

  console.log(num1);

  // verifico se il numero è positivo (num1 > 0)
  // verifico se il numero è negativo (num1 < 0)
  // verifico se il numero è uguale a zero (else)

  if (num1 > 0) {

    document.getElementById('colore').className = "verde";

  } else if (num1 < 0) {

    document.getElementById('colore').className = "rosso";

  } else {

   document.getElementById('colore').className = "blu";

  }

});
