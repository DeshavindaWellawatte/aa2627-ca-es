// Ispirazione a "Electric Sheep" di Scott Draves (1999)
// Equazioni frattali genetiche con automazione, fusione e animazione organica

let particelle = [];
let numParticelle = 1500;
let tempo = 0;

function setup() {
    createCanvas(800, 600);
    colorMode(HSB, 360, 100, 100, 100);
    
    // Genera particelle con "geni" frattali
    for (let i = 0; i < numParticelle; i++) {
        particelle.push({
            x: random(width),
            y: random(height),
            vx: random(-0.5, 0.5),
            vy: random(-0.5, 0.5),
            // Geni frattali ispirati a flam3/electric sheep
            a: random(0.1, 2.0),
            b: random(0.1, 2.0),
            c: random(0.1, 2.0),
            d: random(0.1, 2.0),
            hue: random(0, 360),
            sat: random(60, 90),
            bri: random(80, 100),
            vita: random(100, 200),
            eta: 0,
            seed: random(1000)
        });
    }
}

function draw() {
    // Sfondo semitrasparente per effetto scia (trails)
    background(0, 0, 0, 10);
    
    tempo = frameCount * 0.01;
    
    // Aggiorna e disegna particelle
    for (let i = 0; i < particelle.length; i++) {
        let p = particelle[i];
        p.eta++;
        
        // Moto basato su funzione frattale di tipo Clarke/Draves
        let nx = sin(p.a * p.x * 0.01 + tempo + p.seed) * cos(p.b * p.y * 0.01);
        let ny = cos(p.c * p.y * 0.01 + tempo * 0.7) * sin(p.d * p.x * 0.01);
        
        // Attrazione verso centro con variazione
        let centroX = width / 2 + sin(tempo * 0.3) * 100;
        let centroY = height / 2 + cos(tempo * 0.2) * 80;
        let dx = centroX - p.x;
        let dy = centroY - p.y;
        let dist = sqrt(dx * dx + dy * dy);
        
        if (dist > 0) {
            nx += (dx / dist) * 0.3;
            ny += (dy / dist) * 0.3;
        }
        
        // Aggiorna velocità e posizione
        p.vx = p.vx * 0.2 + nx * 0.2;
        p.vy = p.vy * 0.2 + ny * 0.2;
        p.x += p.vx;
        p.y += p.vy;
        
        // Wrap around schermo
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
        
        // Evoluzione colore (mimando mutazione genetica di Electric Sheep)
        p.hue = (p.hue + sin(tempo + p.seed) * 2 + 0.5) % 360;
        p.bri = map(sin(tempo * 0.5 + p.eta * 0.01), -1, 1, 60, 100);
        
        // Disegna particella con effetto glow
        noStroke();
        fill(p.hue, p.sat, p.bri, 40);
        ellipse(p.x, p.y, 6, 6);
        
        // Traiettorie connesse (simili a filamenti di campi di forza)
        if (p.eta > 50 && p.eta % 2 == 0) {
            fill(p.hue, p.sat - 20, p.bri, 15);
            ellipse(p.x, p.y, 3, 3);
        }
    }
    
    // Connessioni tra particelle vicine (pattern emergente)
    strokeWeight(1);
    for (let i = 0; i < particelle.length; i += 5) {
        let p1 = particelle[i];
        for (let j = i + 3; j < min(i + 50, particelle.length); j += 30) {
            let p2 = particelle[j];
            let d = dist(p1.x, p1.y, p2.x, p2.y);
            if (d < 300) {
                let alpha = map(d, 0, 300, 25, 0);
                stroke((p1.hue + p2.hue) / 2, 80, 90, alpha);
                line(p1.x, p1.y, p2.x, p2.y);
            }
        }
    }
    
    // Evoluzione periodica: "breeding" delle particelle
    if (frameCount % 300 == 0) {
        // Mutazione genetica
        for (let i = 0; i < 10; i++) {
            let idx = floor(random(particelle.length));
            let p = particelle[idx];
            p.a += random(-0.3, 0.3);
            p.b += random(-0.3, 0.3);
            p.c += random(-0.3, 0.3);
            p.d += random(-0.3, 0.3);
            p.hue = random(0, 360);
        }
    }
}
