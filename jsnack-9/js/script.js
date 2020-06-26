// Il software deve chiedere per 5 volte all’utente di inserire un
// numero. Il programma stampa la somma di tutti i numeri
// inseriti. Esegui questo programma in due versioni, con il for
// e con il while.(jsnack-9)

var somma = document.getElementById('somma');

var listaNumeri = document.getElementById('listaNumeri');

var somma1 = 0;

for (var i = 0; i < 5; i++) {

  var num1 = parseInt(prompt("Inserisci un numero"), 10);

  listaNumeri.innerHTML += "<li>" + num1 + "</li>";
  
  console.log(num1);

  if (!(isNaN(num1)) && num1 != "") {

    somma1 += num1;

    somma.innerHTML = "La somma dei numeri è: " + somma1;

    console.log(somma.innerHTML);

   } else {

    somma.innerHTML = "Attenzione il valore inserito non è corretto!!!";

    i = 5;

  }

}

console.log("---------------------------");

var somma = document.getElementById('somma1');

var listaNumeri = document.getElementById('listaNumeri1');

var i = 0;

while (i < 5 ) {

  var num1 = parseInt(prompt("Inserisci un numero"), 10);

  listaNumeri.innerHTML += "<li>" + num1 + "</li>";

  console.log(num1);

  if (!(isNaN(num1)) && num1 != "") {

    somma1 += num1;

    somma.innerHTML = "La somma dei numeri è: " + somma1;

    console.log(somma.innerHTML);

  } else {

    somma.innerHTML = "Attenzione il valore inserito non è corretto!!!";

    i = 5;

  }

  i++;
}
