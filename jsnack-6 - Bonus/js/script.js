// Nella pagina c'è un bottone#lanciaMoneta.
// Al click su un bottone, il programma genera un numero casuale (tra 0 e 9).
// Se il numero è pari mostra un img con la testa della moneta.
// Se è dispari mostra un'altra img con la croce della moneta


var btn = document.getElementById("lanciaMoneta");

btn.addEventListener("click", function () {

  var result = document.getElementById('result');

  // creo in modo random un numero

  var numMax = 9;
  var numMin = 0;

  var num = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;

  console.log(num);

  // ricreo le classi dell html
  document.getElementById('testa').className = "testa";
  document.getElementById('croce').className = "croce";

  // analizzo la scelta dell'utente
  var scelta = document.getElementById('scelta').value;

  console.log(scelta);

  //(!scelta): l'utente si dimentica di selezionare "testa" o "croce"
  //(scelta == "Testa"): l'utente seleziona testa
    // se il numero generato casulamente è pari (!(num % 2))
    // se il numero generato casulamente è dispari (else)
  //(else): l'utente seleziona croce
    // se il numero generato casulamente è pari (!(num % 2))
    // se il numero generato casulamente è dispari (else)

  if (!scelta) {

    result.innerHTML = "Non hai selezionato alcuna scelta!"

  } else if (scelta == "Testa") {

    if (!(num % 2)) {

      document.getElementById('testa').className = "Visibile";

      result.innerHTML = "Complimenti hai vinto!!!"

    } else {

      document.getElementById('croce').className = "Visibile";

      result.innerHTML = "Mi dispiace hai perso...Ritenta sari più fortunato."

    }

  } else {

    if (!(num % 2)) {

      document.getElementById('testa').className = "Visibile";

      result.innerHTML = "Mi dispiace hai perso...Ritenta sari più fortunato."

    } else {

      document.getElementById('croce').className = "Visibile";

      result.innerHTML = "Complimenti hai vinto!!!"

    }

  }

});
