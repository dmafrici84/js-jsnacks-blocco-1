//Stampa le potenze di 2 fino a 1000. (jsnack-13)

var btn = document.getElementById("calcola");

btn.addEventListener("click", function () {

  btn.className = "nonVisibile";

  for (var i = 0; (2**i) <= 1000; i++) {

    document.getElementById("multipli").innerHTML +="<li>" + "2 ^ " + i + " = " + (2**i) + "</li>";

    console.log((2**i));
  }

});
