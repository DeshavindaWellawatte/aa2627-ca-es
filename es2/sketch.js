// Es2. Forme autosimili
//
// Obiettivo: far generare una configurazione composta di elementi ripetuti
// (virtualmente) all'infinito e autosomiglianti a diversi rapporti di scala
// usando una funzione ricorsiva.
//
// Vincoli (specifiche: https://codestesie.it/aa2627/ca/attivita/es2/):
// - canvas di almeno 1920x1080 pixel, oppure adattato alla finestra con
//   windowWidth, windowHeight, windowResized() e resizeCanvas();
// - codice organizzato come nello schema: parametri globali, funzione
//   ricorsiva, setupParametri(), setup(), draw() e mouseClicked();
// - funzione ricorsiva con il parametro livello, che cresce di 1 prima delle
//   autochiamate, e la variabile livelloMax, di almeno 2, che ferma comunque
//   la ricorsione, anche quando la condizione ne contiene altre;
// - parametri impostati in setupParametri(), chiamata da setup() e a ogni
//   clic da mouseClicked(), con redraw() alla fine;
// - disegno eseguito una volta per ogni configurazione, con noLoop() in setup();
// - anteprima "preview.png" con una configurazione rappresentativa.
//
// Esempio funzionante (sketch.js compatibile con p5.js 2):
// https://editor.p5js.org/codesthesia/sketches/xmt_lnkvP

// PARAMETRI GLOBALI
let livelloMax;  // numero massimo di ricorsioni

// FUNZIONE RICORSIVA
function disegnaElemento(livello) {
  // qui va il disegno dell'elemento
  livello++;

  // qui vanno le eventuali autochiamate, per esempio
  // if (livello < livelloMax) {
  //   disegnaElemento(livello);
  // }
}

// IMPOSTAZIONE PARAMETRI
function setupParametri() {
  livelloMax = 2;  // da almeno 2 a un valore non troppo alto
  redraw();
}

function setup() {
  createCanvas(1920, 1080);
  noLoop();
  cursor(HAND);
  setupParametri();
}

function draw() {
  background(255);

  // avvio della ricorsione
  disegnaElemento(0);
}

function mouseClicked() {
  setupParametri();
}
