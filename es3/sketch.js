// Es3. Creatura reattiva
//
// Obiettivo: far generare una creatura fatta di forme geometriche che dia
// l'impressione di essere viva, reagisca all'utente e abbia un carattere
// riconoscibile, ricavato dalle regole del suo movimento e non dal disegno.
//
// Vincoli (specifiche: https://codestesie.it/aa2627/ca/attivita/es3/):
// - canvas grande quanto la finestra, creato con windowWidth e windowHeight
//   e ridimensionato con resizeCanvas() in windowResized();
// - una sola creatura, anche composta di più parti, descritta con variabili
//   globali ed eventualmente con array, per esempio per le posizioni dei
//   segmenti di un corpo;
// - solo forme geometriche disegnate con p5.js (cerchi, ellissi, rettangoli,
//   linee, forme con vertex()): niente immagini, video o caratteri tipografici,
//   e nessuna rappresentazione esplicitamente figurativa, come un volto o la
//   sagoma di un animale;
// - almeno uno stato interno, in una variabile globale, che cambia nel tempo
//   o con le azioni dell'utente e modifica il movimento o l'aspetto;
// - una reazione ad almeno un'azione dell'utente, con il mouse, la tastiera
//   o il microfono;
// - una componente imprevedibile nel movimento, con valori ricavati da
//   random() o da noise();
// - se la creatura reagisce al microfono, p5.sound.js nella versione 0.4.1,
//   caricata nell'index.html subito dopo p5.js:
//   https://cdn.jsdelivr.net/npm/p5.sound@0.4.1/dist/p5.sound.min.js
//   e codice audio scritto secondo la guida:
//   https://codestesie.it/guide/p5sound-p5js2/
// - commento iniziale con la creatura, il suo carattere, lo stato interno,
//   l'interazione e le regole del movimento (schema qui sotto);
// - anteprima "preview.png" con un fotogramma rappresentativo del risultato.
//
// Schema del commento iniziale, da completare quando la creatura è decisa:
// Creatura: che cosa è (animale, pianta, essere immaginario) e il suo carattere
// Stato interno: quale valore cambia, per effetto di che cosa, e che cosa modifica
// Interazione: a quali azioni dell'utente reagisce, e come
// Regole: come si muove, e da che cosa dipendono velocità, direzione e pause

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  // qui va il disegno della creatura
}
