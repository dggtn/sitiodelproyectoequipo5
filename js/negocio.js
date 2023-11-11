let nombredelnegocio;
let numerodetelefono;
let correoelectronico;
let ciudad;

//validar formularios

function negocio(){
    let formularioValido = true;
    let emailValido = true
    let nombredelnegocio= document.getElementById("nombredelnegocio").value;
    if (nombredelnegocio == ""){
        formularioValido = false;
    }
    let numerodetelefono= document.getElementById("numerodetelefono").value;
    if ( numerodetelefono== ""){
        formularioValido = false;
    }

    let correoelectronico= document.getElementById("correoelectronico").value;
    if (correoelectronico == ""){
        formularioValido = false;
    } else {
        emailValido = validarEmail(correoelectronico)
        if(emailValido == false) {
            formularioValido = false;
        }
    }
    
    let ciudad= document.getElementById("ciudad").value;
    if (ciudad == ""){
        formularioValido = false;
    }
    if (formularioValido == true){
        alert ("Gracias " + nombredelnegocio + " por registrarte y ser parte de las empresas que conforman 'Share Before Waste'")  
        document.getElementById("nombredelnegocio").value = ""
        document.getElementById("numerodetelefono").value=""
        document.getElementById("correoelectronico").value=""
        document.getElementById("ciudad").value=""
    } else {
        alert ("Por favor complete todos los campos")
        console.log("Valido:", emailValido)
        if (emailValido == false) {
            alert ("Formato de email incorrecto")
        }
    }
}

function validarEmail(correoelectronico){
	
	// Define our regular expression.
	var expresionRegular =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    return expresionRegular.test(correoelectronico);
}
