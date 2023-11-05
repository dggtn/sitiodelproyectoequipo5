window.onload=cargar;
//Variables globales
let pasoActual = 1;
let pasosTotales = 3;
let montoADonar =0;

//Dentro de cada función hay variables locales, no las puedo usar en otra función

function cargar(){
   let boton1000 = document.getElementById("btnradio1")
   boton1000.onchange= seleccionar1000;
   let boton1500 = document.getElementById("btnradio2")
   boton1500.onchange= seleccionar1500;
   let boton2000 = document.getElementById("btnradio3")
   boton2000.onchange= seleccionar2000;
   let botonOtroMonto = document.getElementById("btnradio4")
   botonOtroMonto.onchange= seleccionarOtroMonto;

   
   
}

function seleccionar1000(){
    montoADonar=1000
    let botonOtroMonto = document.getElementById("otroMon")
    botonOtroMonto.style.display= "none";

}
function seleccionar1500(){
    montoADonar=1500
    let botonOtroMonto = document.getElementById("otroMonto")
    botonOtroMonto.style.display= "none";

}
function seleccionar2000(){
    montoADonar=2000
    let botonOtroMonto = document.getElementById("otroMonto")
    botonOtroMonto.style.display= "none";

}
function seleccionarOtroMonto(){
    montoADonar=500;
    let botonOtroMonto = document.getElementById("otroMonto")
    botonOtroMonto.style.display= "block";
    botonOtroMonto.value=500;
}
function siguientePaso() {
    let paso = document.getElementById("paso" + pasoActual)
    paso.style.display = "none";
    pasoActual = pasoActual + 1;
    let pasoSiguiente = document.getElementById("paso" + pasoActual);
    pasoSiguiente.style.display = "block"
}

function pasoAnterior() {
    //Oculto el paso actual
    let paso = document.getElementById("paso" + pasoActual)
    paso.style.display = "none";

    //Muestro el paso anterior
    let pasoAnterior = document.getElementById("paso" + (pasoActual-1));
    pasoAnterior.style.display ="block";

    //Actualizo pasoActual para saber en donde quede
    pasoActual = pasoActual - 1;
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

function seleccionarMontoADonar(){


}