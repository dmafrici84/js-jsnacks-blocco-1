//Chiedi un numero di 4 cifre all’utente e calcola la somma
// di tutte le cifre che compongono il numero. (jsnack-14)

var btn = document.getElementById("calcolaSomma");

btn.addEventListener("click", function () {

  var num = document.getElementById("numero").value;

  console.log(num);

  if ( num > 999 && num < 10000 && !(isNaN(num)) && num != "") {

    var somma = 0;

    for (var i = 0; i < num.length; i++) {

      console.log(parseInt(num[i]));

      somma += parseInt(num[i]);
    }

    console.log("La somma delle cifre del numero inserito è: " + somma);

    document.getElementById("somma").innerHTML = "La somma delle cifre del numero inserito è: " + somma;

  } else {

    document.getElementById("somma").innerHTML = "Il valore inserito non è corretto";

  }

});
