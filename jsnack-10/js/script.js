// In un array sono contenuti i nomi degli invitati alla festa del
// grande Gatsby, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa.(jsnack-10)

// al click del bottone
var btn = document.getElementById("verifica");

btn.addEventListener("click", function () {

  // creo l'array con i cognomi
  var listaCognomi = ["ROSSI", "MAGENTA", "VERDI", "ROSA", "BIANCHI", "MARRONI"];

  console.log(listaCognomi);

  var avviso = document.getElementById("avviso");


  // prendo il valore inserito dal cognomeUtente
  var cognomeUtente = document.getElementById('cognome').value;

  // trasformo tutte le lettere del cognomeUtente in lettere maiuscole
  cognomeUtente = cognomeUtente.toLocaleUpperCase();

  console.log(cognomeUtente);

  // pongo delle condizioni affinchè il dato inserito dall'utente sia corretto
  if (isNaN(cognomeUtente) && cognomeUtente != "") {

    var ok = 0;

    for (var i = 0; i < listaCognomi.length; i++) {

      // determino se il cognome inserito dall'utente è nella lista
      if (cognomeUtente == listaCognomi[i]) {

        ok = 1;

      }

    }

    if (ok == 1) {

      document.getElementById("listaCognomi").innerHTML = listaCognomi;
      
      avviso.innerHTML = "Complimenti, Il cognome inserito si trova nella lista";

    } else {

      avviso.innerHTML = "Mi dispiace, il cognome inserito non si trova nella lista";

    }

  } else {

    // se i dati inseriti dall'utente non sono corretti

    avviso.innerHTML = "Attenzione il Cognome inserito non è corretto.";

  }

});
