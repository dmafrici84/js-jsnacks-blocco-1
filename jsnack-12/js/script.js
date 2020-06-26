// Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.(jsnack-12)

var btn = document.getElementById("calcolaCubo");

btn.addEventListener("click", function () {

  var num = parseInt(document.getElementById("numero").value);

  console.log(num);

  if (!(isNaN(num)) && num != "") {

    for (var i = 1; i < (num + 1); i++) {

      document.getElementById("cuboNumero").innerHTML += "<li>" + "Il cubo del numero "+ i + " è: " + Math.pow(i, 3) + "</li>";

      console.log(Math.pow(i, 3));

    }

  } else {

  document.getElementById("cuboNumero").innerHTML ="Il valore inserito non è corretto";
  }

});
