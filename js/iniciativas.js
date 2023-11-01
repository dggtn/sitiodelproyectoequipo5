let pasoActual = 1;
let pasosTotales = 3;

function siguientePaso() {
    let paso = document.getElementById("paso" + pasoActual)
    paso.style.display = "none";
    pasoActual = pasoActual + 1;
    let pasoSiguiente = document.getElementById("paso" + pasoActual);
    pasoSiguiente.style.display = "block"
}

function donacionexitosa(){
    alert("Tu donación se ha realizado con éxito ¡Gracias por ser parte de Share Before Waste!")
    let paso = document.getElementById("paso3")
    paso.style.display = "none";

}