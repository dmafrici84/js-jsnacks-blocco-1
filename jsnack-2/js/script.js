// al click del bottone stampo nome e cognome

var btn = document.getElementById("btnUnisci");

btn.addEventListener("click", function () {

  // prendo i dati inseriti dall'utente

  var nome = document.getElementById("nome").value;
  var cognome = document.getElementById("cognome").value;

  // unisco i dati inseriti

  var nomeUtente = nome + " " + cognome;

  // Autput per l'utente

  document.getElementById("nomeUtente").innerHTML = nomeUtente;

  console.log(nomeUtente);

});
