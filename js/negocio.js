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
        alert ("Gracias por registrar tu negocio") 
        
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
