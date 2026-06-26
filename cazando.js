let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");

const ANCHO_GATO = 50;   
const ALTO_GATO = 50;    
const ANCHO_COMIDA = 25; 
const ALTO_COMIDA = 25;

let gatoX = 0;   
let gatoY = 0;   
let comidaX = 0; 
let comidaY = 0;
let puntaje = 0;
let tiempo = 10;
let intervalo;

function iniciarJuego() {
   
    gatoX = (canvas.width / 2) - (ANCHO_GATO / 2); 
    gatoY = (canvas.height / 2) - (ALTO_GATO / 2);
    
    comidaX = canvas.width - ANCHO_COMIDA;  
    comidaY = canvas.height - ALTO_COMIDA;

    intervalo = setInterval(restarTiempo, 1000);

    graficarGato();
    graficarComida();
}

function graficarGato() { 
    graficarRectangulo(gatoX, gatoY, ANCHO_GATO, ALTO_GATO, "blue");
}

function graficarComida() {
    graficarRectangulo(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA, "red");
}

function graficarRectangulo(x, y, ancho, alto, color){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto);
}

function limpiarCanva() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function moverIzquierda() {
    gatoX = gatoX - 10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

function moverDerecha() {
    gatoX = gatoX + 10; 
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

function moverArriba() {
    gatoY = gatoY - 10; 
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

function moverAbajo() {
    gatoY = gatoY + 10; 
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

function detectarColision() {
    
    if (gatoX + ANCHO_GATO > comidaX && gatoX < comidaX + ANCHO_COMIDA &&
        gatoY + ALTO_GATO > comidaY && gatoY < comidaY + ALTO_COMIDA) {
        
        puntaje = puntaje + 1;
        document.getElementById("puntos").textContent = puntaje;

        if (puntaje === 6) {
            clearInterval(intervalo); // Detiene el reloj
            alert("¡Felicidades! Atrapaste suficiente comida y ganaste el juego 🏆");
            return;
        }

        comidaX = Math.floor(Math.random() * (canvas.width - ANCHO_COMIDA));
        comidaY = Math.floor(Math.random() * (canvas.height - ALTO_COMIDA));

        limpiarCanva();
        graficarGato();
        graficarComida();
    }
}

function restarTiempo() {
    tiempo = tiempo - 1;
    document.getElementById("tiempo").textContent = tiempo;

    if (tiempo === 0) {
        clearInterval(intervalo);
        alert("GAME OVER: Se te acabó el tiempo");
    }
}