// L’utente inserisce due parole in successione, con due
// prompt. Il software stampa prima la parola più corta, poi la
// parola più lunga.(jsnack-8)

var parolaMaggiore = document.getElementById('js-parola');

// Chiedere all'utente laprima parola
var parola1 = prompt("Inserisci una parola");

console.log(parola1);

// Chiedere all'utente la seconda parola
var parola2 = prompt("Inserisci un'altra parola");

console.log(parola2);

// verifico quale parala sia più lunga e la stampo
if (isNaN(parola1) && parola1 != "" && isNaN(parola2) && parola2 != "") {

  if (parola1.length > parola2.length) {

    parolaMaggiore.innerHTML = "La parola più lunga è: " + parola1;

  } else if (parola1.length < parola2.length) {

    parolaMaggiore.innerHTML = "La parola più lunga è: " + parola2;

  }else {

    parolaMaggiore.innerHTML = "i nomi hanno la stessa lunghezza";

  }

} else {

  parolaMaggiore.innerHTML = "I dati inseriti non sono corretti"

}
