var creaBtn = document.getElementById('creaBiglietto');
var annullaBtn = document.getElementById('annullaBiglietto');

creaBtn.addEventListener("click", function () {
  var prezzoTotale;
  var prezzoKm = 0.21;
  var nome = document.getElementById('nome').value;
  var km = document.getElementById('km').value;
  var categoria = document.getElementById('categoria').value;
  var minCarrozza = 1;
  var maxCarrozza = 10;
  var minNumTreno = 90000;
  var maxNumTreno = 100000;

  if (categoria == "Minorenne") {
    prezzoTotale = km * prezzoKm - 20/100 * (km * prezzoKm);
  } else if (categoria == "Over65") {
    prezzoTotale = km * prezzoKm - 40/100 * (km * prezzoKm);
  } else {
    prezzoTotale = km * prezzoKm;
  }

  var numeroTreno = Math.floor(Math.random()*(maxNumTreno-minNumTreno + 1)) + minNumTreno;
  var carrozza = Math.floor(Math.random()*(maxCarrozza-minCarrozza + 1)) + minCarrozza;

  document.getElementById('passeggero').innerHTML = nome;
  document.getElementById('numeroTreno').innerHTML = numeroTreno;
  document.getElementById('carrozza').innerHTML = carrozza;
  document.getElementById('prezzoBiglietto').innerHTML = prezzoTotale.toFixed(2) + " €";
  document.getElementById('categoriaPasseggero').innerHTML = categoria;

  document.getElementById('biglietto').className = "show";
  document.getElementById('container-biglietto').className = "show";

});

annullaBtn.addEventListener("click", function () {
  document.getElementById('biglietto').className = "hidden";
  document.getElementById('container-biglietto').className = "hidden";
  document.getElementById('nome').value = "";
  document.getElementById('km').value = "";
  document.getElementById('categoria').value = "Maggiorenne";

});
