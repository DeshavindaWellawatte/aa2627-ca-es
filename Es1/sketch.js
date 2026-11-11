function tixy(t, i, x, y) {
    // t = secondi (con decimali)
    // i = indice del pixel
    // x = coordinata x da 0.0 a 1.0
    // y = coordinata y da 0.0 a 1.0

    // coordinate polari rispetto al centro della scena
    let dx = x - 0.5;
    let dy = y - 0.5;
    let raggio = Math.hypot(dx, dy);
    let angolo = Math.atan2(dy, dx);

    // vortice: l'angolo viene distorto in funzione del raggio e del tempo,
    // cosi il pattern si avvita su se stesso invece di provenire da sorgenti
    let vortice = angolo + 5.0 * raggio + t * 0.6;

    // plasma: sovrapposizione di campi sinusoidali (radiale, vortice, diagonali)
    let v = Math.sin(raggio * 11 - t * 2.5)
          + Math.sin(vortice * 20 + t * 1.5)
          + Math.sin((x + y) * 10 + t * 1.2)
          + Math.sin((x - y) * 10 - t * 0.9);
    v *= 0.25; // normalizzato ~ -1..1

    // palette arcobaleno che ruota nel tempo
    let fase = v * Math.PI + t * 0.4;
    let r = 128 + 127 * Math.sin(fase + 0.5);
    let g = 128 + 127 * Math.sin(fase + 0.4);
    let b = 128 + 127 * Math.sin(fase + 0.1);

    return [r, g, b];
}

let risoluzione = 105;
let bitmap;

function setup() {
    createCanvas(600, 600);
    pixelDensity(1);
    noSmooth();
    bitmap = createImage(risoluzione, risoluzione);
    bitmap.loadPixels();
    bitmap.pixels.fill(255);
}

function draw() {
    background(0);
    let i = 0;
    let t = millis()/1000;
    let iPix = 0;
    for (let y = 0; y < risoluzione; y++) {
        let yn = y/risoluzione; 
        for (let x = 0; x < risoluzione; x++, i++) {
            let xn = x/risoluzione;
            let col = tixy(t, i, xn, yn);
            bitmap.pixels[iPix++] = col[0];
            bitmap.pixels[iPix++] = col[1];
            bitmap.pixels[iPix++] = col[2];
            iPix++;
        }
    }
    bitmap.updatePixels();
    image(bitmap, 0, 0, width, height);
}