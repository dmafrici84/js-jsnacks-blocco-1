//Calcola la somma e la media di 10 numeri inseriti dall'utente (jsnack-15)

var media = 0;
var somma = 0;
var numeriDaInsere = 10;

for (var i = 0; i < numeriDaInsere; i++) {

  // Chiedere all'utente 10 numeri

  var num = parseInt(prompt("Inserisci un numero"), 10);

  document.getElementById("numeri").innerHTML += "<li>" + num + "</li>";
  console.log(num);

  if ( !(isNaN(num)) && num != "") {

    somma += num;

    media = somma / numeriDaInsere;

    document.getElementById("somma").innerHTML = "La somma dei numeri è: " + somma;
    console.log(num);

    document.getElementById("media").innerHTML = "La media dei numeri è: " + media;

    console.log("la somma dei numeri è: " + somma);

    console.log("la media dei numeri è: " + media);

  } else {

    document.getElementById("somma").innerHTML = "IL valore inserito non è corretto.";

     i = numeriDaInsere;

  }


}
