// Al click su un bottone, il programma genera un numero casuale tra 1 e 10. Se il numero è pari, toglie la classe pari da p#numero.pari.dispari altrimenti toglie la classe dispari.


var btn = document.getElementById("btnCrea");

btn.addEventListener("click", function () {

  // creo in modo random un numero

  var numMax = 10;
  var numMin = 1;

  var num = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;

  console.log(num);

  // ricreo le classi dell html
  document.getElementById('numero').classList.add("pari", "dispari");

  // verifico il dato generato casualmente

  // se è pari (!(num % 2))
    // un numero è pari quando il risultato della divisione (%) di quel numero diviso 2 è uguale a 0". Nell'if bisogna ricordarsi che se il valore è 0 vuol dire che è falso (valori booleani). Per renderlo vero metto il not(!) davanti. Due negazioni = vero.
    // elimino la classe .pari

  // se è dispari (else)
    // elimino la classe .dispari

  if (!(num % 2)) {

    document.getElementById('numero').classList.remove("pari");

    // Autput per l'utente

    document.getElementById('numero').innerHTML = num + ", pari, viene tolto lo sfondo giallo";

    console.log("pari, viene tolto lo sfondo giallo");

  } else {

    document.getElementById('numero').classList.remove("dispari");

    // Autput per l'utente

    document.getElementById('numero').innerHTML = num + ", dispari, viene tolto il colore rosso della scritta";

    console.log("dispari, viene tolto il colore rosso della scritta");
  }

});
