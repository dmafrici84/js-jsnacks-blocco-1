// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
// un numero, se è dispari inseriscilo nell’array.(jsnack-11)

var numeri = [];

for (var i = 0; i < 6; i++) {

  // chiedo all'utente 6 numeri

  var num1 = parseInt(prompt("Inserisci un numero"), 10);

  document.getElementById("listaNumeri").innerHTML += "<li>" + num1 + "</li>";

  console.log(num1);

  if ( num1 % 2) {

    numeri.push(num1);

    document.getElementById("array").innerHTML="numeri = [ " + numeri + "]";

    console.log(numeri);
  }

}
