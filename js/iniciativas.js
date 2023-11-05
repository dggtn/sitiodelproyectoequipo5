
//Variables globales
let pasoActual = 1;
let pasosTotales = 3;
let montoADonar = 0;
let comboProvincias;
let comboLocalidades;
let comboComedores;


//Javascript object Notation

let provincias = {
    buenosAires: [{value: "vl", nombre:"Vicente López"}, {value: "f", nombre:"Florida"}, {value: "vm", nombre:"Villa Martelli"}],
    mendoza: [{value: "ca", nombre:"Cañon del Atuel"},{value: "cc", nombre:"Chacras de Coria"} ,{value: "cz", nombre:"Colonia Suiza"}],
    cordoba: [{value: "af", nombre:"Alma Fuerte"},{value: "am", nombre:"Amboy"} ,{value: "clm", nombre:"Calmano"}],
}

let comedores = {
    vl: [{value: "c1", nombre:"Comedor Comuna 1"},{value: "c11", nombre:"Comedor Comuna 11"}],
    f: [{value: "c2", nombre:"Comedor Comuna 2"},{value: "c12", nombre:"Comedor Comuna 12"}],
    vm: [{value: "c3", nombre:"Comedor Comuna 3"},{value: "c13", nombre:"Comedor Comuna 13"}],
    ca: [{value: "c4", nombre:"Comedor Comuna 4"},{value: "c14", nombre:"Comedor Comuna 14"}],
    ca: [{value: "c5", nombre:"Comedor Comuna 5"},{value: "c15", nombre:"Comedor Comuna 15"}],
    cc: [{value: "c6", nombre:"Comedor Comuna 6"},{value: "c16", nombre:"Comedor Comuna 16"}],
    cz: [{value: "c7", nombre:"Comedor Comuna 7"},{value: "c17", nombre:"Comedor Comuna 17"}],
    af: [{value: "c8", nombre:"Comedor Comuna 8"},{value: "c18", nombre:"Comedor Comuna 18"}],
    am: [{value: "c9", nombre:"Comedor Comuna 9"},{value: "c19", nombre:"Comedor Comuna 19"}],
    clm: [{value: "c10", nombre:"Comedor Comuna 10"},{value: "c20", nombre:"Comedor Comuna 20"}],
}
window.onload=cargar;

//Dentro de cada función hay variables locales, no las puedo usar en otra función
function cargar() {
    let boton1000 = document.getElementById("btnradio1")
    boton1000.onchange= seleccionar1000;
    let boton1500 = document.getElementById("btnradio2")
    boton1500.onchange= seleccionar1500;
    let boton2000 = document.getElementById("btnradio3")
    boton2000.onchange= seleccionar2000;
    let botonOtroMonto = document.getElementById("btnradio4")
    botonOtroMonto.onchange= seleccionarOtroMonto;

    comboProvincias = document.getElementById("provincia")
    comboProvincias.onchange = seleccionarProvincia

    comboLocalidades = document.getElementById("localidad")
    comboLocalidades.onchange = seleccionarlocalidad;

    comboComedores = document.getElementById("comedor")
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

function seleccionarProvincia() {
    let provinciaSeleccionada = comboProvincias.value;
    cargarLocalidades(provinciaSeleccionada)
}
function seleccionarlocalidad(){
    let localidadSeleccionada = comboLocalidades.value;
    cargarComedores(localidadSeleccionada)
}
function cargarComedores(localidadSeleccionada){
    let opciones;
    let comedoresACargar = comedores[localidadSeleccionada];
    comedoresACargar.forEach(comedor => {
        opciones += `<option value="${comedor.value}">${comedor.nombre}</option>` // "<option>" + localidad + "</option>"
    });
    comboComedores.innerHTML = opciones
}
function cargarLocalidades(provinciaSeleccionada) {
    //ayuda para debugear
    console.log(provincias)
    let localidades = provincias[provinciaSeleccionada]
    //ayuda para debugear
    console.log("Localidades:", localidades)
    let opciones=`<option>Seleccionar Localidad</option>`;
    localidades.forEach(localidad => {
        opciones += `<option value="${localidad.value}">${localidad.nombre}</option>` // "<option>" + localidad + "</option>"
    });

    comboLocalidades.innerHTML = opciones
}