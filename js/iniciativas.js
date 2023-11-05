let pasoActual = 1;
let pasosTotales = 3;


function siguientePaso() {
    let paso = document.getElementById("paso" + pasoActual)
    paso.style.display = "none";
    pasoActual = pasoActual + 1;
    let pasoSiguiente = document.getElementById("paso" + pasoActual);
    pasoSiguiente.style.display = "block"
}

function pasoAnterior() {
    let paso = document.getElementById("paso" - (pasoActual-1))
    pasoActual.style.display = "none";
    pasoAnterior = pasoActual - 1;
    let pasoAnterior = document.getElementById("paso" - (pasoActual-1));
    pasoAnterior.style.display = "block"

}

function donacionExitosa(){
    alert("Tu donación se ha realizado con éxito ¡Gracias por ser parte de Share Before Waste!")
    let paso = document.getElementById("paso3")
    paso.style.display = "none";
    reiniciarFormulario();
}

function reiniciarFormulario(){
    pasoActual=1;
    let paso = document.getElementById("paso" + pasoActual)
    paso.style.display = "block";
}