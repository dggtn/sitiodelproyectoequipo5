//Variables globales
let pasoActual = 1;
let pasosTotales = 3;
let comboProvincias;
let comboLocalidades;
let comboComedores;

//Variables pasoUno
let montoADonar = 0;
let provinciaSeleccionada = "noSeleccionado";
let localidadSeleccionada = "noSeleccionado";
let comedorSeleccionado = "noSeleccionado";

//Variables pasoDos
let nombreIngresado = ""
let apellidoIngresado = ""
let fechaDeNacimientoIngresada = ""
let dniIngresado = ""
let emailIngresado = ""
let emailValido = false;
let telefonoIngresado = ""

//Variables pasoTres
let numeroDeTarjeta = ""
let nombresDelTitular = ""
let apellidosDelTitular = ""
let dni = ""
let fechaDeVencimiento = ""


//Javascript object Notation

let nombresDeProvincias = {
    buenosAires: "Buenos Aires",
    mendoza: "Mendoza",
    cordoba: "Córdoba"
}

let provincias = {
    noSeleccionado: [],
    buenosAires: [{value: "vl", nombre:"Vicente López"}, {value: "f", nombre:"Florida"}, {value: "vm", nombre:"Villa Martelli"}],
    mendoza: [{value: "ca", nombre:"Cañon del Atuel"},{value: "cc", nombre:"Chacras de Coria"} ,{value: "cz", nombre:"Colonia Suiza"}],
    cordoba: [{value: "af", nombre:"Alma Fuerte"},{value: "am", nombre:"Amboy"} ,{value: "clm", nombre:"Calmano"}],
}

let comedores = {
    noSeleccionado: [],
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
    montoADonar=1000
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
    comboComedores.onchange = seleccionarComedor;

    puedeTerminarPasoUno();
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

function agregarOtroMonto() {
    let botonOtroMonto = document.getElementById("otroMonto");
    if (botonOtroMonto.value < 500) {
        botonOtroMonto.value = 500;
    }
}

function puedeTerminarPasoUno() {
    //tuvo que elegir monto
    let validacionOk = montoADonar > 0;
    //tuvo que elegir provincia
    validacionOk = validacionOk && provinciaSeleccionada != "noSeleccionado";
    //tuvo que elegir localidad
    validacionOk = validacionOk && localidadSeleccionada != "noSeleccionado";
    //tuvo que elegir comedor
    validacionOk = validacionOk && comedorSeleccionado != "noSeleccionado";

    var boton = document.getElementById("botonSiguienteUno");
    boton.disabled = !validacionOk;
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



function reiniciarFormulario(){
    pasoActual=1;
    let paso = document.getElementById("paso" + pasoActual)
    paso.style.display = "block";
}

function seleccionarProvincia() {
    provinciaSeleccionada = comboProvincias.value;
    cargarLocalidades(provinciaSeleccionada)
    puedeTerminarPasoUno();
}
function seleccionarlocalidad(){
    localidadSeleccionada = comboLocalidades.value;
    cargarComedores(localidadSeleccionada)
    puedeTerminarPasoUno();
}
function seleccionarComedor() {
    comedorSeleccionado = comboComedores.value;
    puedeTerminarPasoUno();
}
function cargarComedores(localidadSeleccionada){
    comedorSeleccionado = "noSeleccionado"
    let comedoresACargar = comedores[localidadSeleccionada];
    let opciones=`<option value='noSeleccionado'>Seleccionar Comedor</option>`;
    comedoresACargar.forEach(comedor => {
        opciones += `<option value="${comedor.value}">${comedor.nombre}</option>` // "<option>" + localidad + "</option>"
    });
    comboComedores.innerHTML = opciones
}
function cargarLocalidades(provinciaSeleccionada) {
    localidadSeleccionada = "noSeleccionado"
    let localidades = provincias[provinciaSeleccionada]
    let opciones=`<option value='noSeleccionado'>Seleccionar Localidad</option>`;
    localidades.forEach(localidad => {
        opciones += `<option value="${localidad.value}">${localidad.nombre}</option>` // "<option>" + localidad + "</option>"
    });

    comboLocalidades.innerHTML = opciones

    cargarComedores("noSeleccionado")
}

function validarEmail(correoElectronico){
    // Define our regular expression.
    var expresionRegular =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    return expresionRegular.test(correoElectronico);
}

function ingresarNombre(nombre) {
    nombreIngresado = nombre;
    puedeTerminarPasoDos();
}

function ingresarApellido(apellido) {
    apellidoIngresado = apellido;
    puedeTerminarPasoDos()
}

function ingresarFechaDeNacimiento(fechaDeNacimiento) {
    fechaDeNacimientoIngresada = fechaDeNacimiento;
    puedeTerminarPasoDos();
}

function ingresarDni(dni) {
    dniIngresado = dni
    puedeTerminarPasoDos()
}

function ingresarEmail(email) {
    emailIngresado = email;
    emailValido = validarEmail(emailIngresado);
    puedeTerminarPasoDos();
}

function ingresarTelefono(telefono) {
    telefonoIngresado = telefono
    puedeTerminarPasoDos()
}

function puedeTerminarPasoDos() {
    //tuvo que elegir nombre
    let validacionOk = nombreIngresado != "";
    //tuvo que elegir apellido
    validacionOk = validacionOk && apellidoIngresado != ""
    //tuvo que elegir fecha nacimiento
    validacionOk = validacionOk && fechaDeNacimientoIngresada != "";
    //tuvo que elegir dni
    validacionOk = validacionOk && dniIngresado != "";
    //tuvo que elegir correo electronico
    validacionOk = validacionOk && emailValido;
    //tuvo que elegir telefono
    validacionOk = validacionOk && telefonoIngresado != "";

    var boton = document.getElementById("botonSiguienteDos");
    boton.disabled = !validacionOk;
}

function ingresarNumeroDeTarjeta(numeroTarjeta) {
    numeroDeTarjeta = numeroTarjeta;
    puedeTerminarPasoTres();
}

function ingresarNombresDelTitular(nombres) {
    nombresDelTitular = nombres;
    puedeTerminarPasoTres();
}

function ingresarApellidosDelTitular(apellidos) {
    apellidosDelTitular = apellidos;
    puedeTerminarPasoTres();
}


function ingresardniDelTitular(dniIngresado) {
    dni = dniIngresado
    puedeTerminarPasoTres()
}

function ingresarFechaDeVencimiento(fechaVencimiento) {
    fechaDeVencimiento = fechaVencimiento;
    puedeTerminarPasoTres();
}

function puedeTerminarPasoTres() {
    //tuvo que elegir numeroTarjeta
    let validacionOk = numeroDeTarjeta != "";
    //tuvo que elegir nombres
    validacionOk = validacionOk && nombresDelTitular != ""
    //tuvo que elegir apellidos
    validacionOk = validacionOk && apellidosDelTitular != "";
    //tuvo que elegir dni
    validacionOk = validacionOk && dni != "";
    //tuvo que elegir fechadevencimiento
    validacionOk = validacionOk && fechaDeVencimiento != "";

    var boton = document.getElementById("botonSiguienteTres");
    boton.disabled = !validacionOk;
}


function donacionExitosa(){
    var mensaje = `Tu donación se ha realizado con éxito ${nombreIngresado} ${apellidoIngresado}. ¡Gracias por ser parte de Share Before Waste!
    Acá te mostramos los detalles de tu donación:
    Importe: $ ${montoADonar}
    Provincia: ${nombresDeProvincias[provinciaSeleccionada]}
    Localidad: ${obtenerNombreLocalidadSeleccionada()}
    Nombre del comedor: ${obtenerNombreComedorSeleccionado() }

    ¡Gracias por tu donación!
    `
    alert(mensaje)
    let paso = document.getElementById("paso3")
    paso.style.display = "none";
    reiniciarFormulario();

}

function obtenerNombreLocalidadSeleccionada() {
    let localidades = provincias[provinciaSeleccionada]
    let localidad = localidades.find((unaLocalidad) => unaLocalidad.value == localidadSeleccionada);
    return localidad.nombre;
}

function obtenerNombreComedorSeleccionado() {
    let comedoresparadonar = comedores[localidadSeleccionada]
    let comedor = comedoresparadonar.find((unComedor) => unComedor.value == comedorSeleccionado);
    return comedor.nombre;
}
