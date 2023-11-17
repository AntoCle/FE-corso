// PUNTATORI
// Diciamo al Sig.JavaScript chi sono i nostri pulsanti!
let pulsanteRosso = document.getElementById("redBtn");
let pulsanteGiallo = document.getElementById("yellowBtn");
let pulsanteVerde = document.getElementById("greenBtn");
let boxCheCambiaColore = document.getElementById("box")
// Event Listener "Ascoltatore di eventi"
pulsanteRosso.addEventListener("click", cambioColoreRosso);
pulsanteGiallo.addEventListener("click", cambioColoreGiallo);
pulsanteVerde.addEventListener("click", cambioColoreVerde);
function cambioColoreRosso() {
boxCheCambiaColore.classList.add("bg-red-500");
}
function cambioColoreGiallo() {
boxCheCambiaColore.classList.add("bg-yellow-500");
}
function cambioColoreVerde() {
boxCheCambiaColore.classList.add("bg-green-500");
}