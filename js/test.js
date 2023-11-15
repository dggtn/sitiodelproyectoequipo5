let velocidad = 3
let deltaX = 0
setInterval(() => {
    var primerImagen = obtenerPrimerImagen()
    if (estaVisible(primerImagen)) {
        moverImagen(primerImagen, velocidad)
    } else {
        pararMovimiento(primerImagen)
        agregarAlFinal(primerImagen)
        marcarSiguienteImagen()
    }    
}, 1000 / 30)

function obtenerPrimerImagen() {
    return document.querySelector(".primera-imagen");
}

function moverImagen(imagen, velocidad) {
    deltaX = deltaX  + velocidad;    
    imagen.style.transform = `translatex(-${deltaX}%)`
}

function pararMovimiento(imagen) {
    deltaX = 0
    imagen.style.transform = ""
    imagen.classList.toggle("primera-imagen");
}

function agregarAlFinal(imagen) {
    document.querySelector(".row").appendChild(imagen);
}

function marcarSiguienteImagen() {
    document.querySelector(".row > div").classList.toggle("primera-imagen")
}

function estaVisible(el) {
    const rect = el.getBoundingClientRect();
    return (rect.right > 0);
}