let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");


function graficarGato() {
    
    const anchoGato = 50;
    const altoGato = 50;
    
    const x = (canvas.width / 2) - (anchoGato / 2); 
    const y = (canvas.height / 2) - (altoGato / 2);

    ctx.fillStyle = "blue";
    ctx.fillRect(x, y, anchoGato, altoGato);
}