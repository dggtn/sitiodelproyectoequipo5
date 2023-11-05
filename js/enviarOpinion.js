let nombre;
let apellido;
let email;
let comentarios;
//validar formularios
function enviarOpinion(){
    let formularioValido = true;
    let nombre= document.getElementById("nombre").value;
    if (nombre == ""){
        formularioValido = false;
    }
    let apellido= document.getElementById("apellido").value;
    if (apellido == ""){
        formularioValido = false;
    }
    let email= document.getElementById("email").value;
    if (email == ""){
        formularioValido = false;
    }
    let comentarios= document.getElementById("comentarios").value;
    if (comentarios == ""){
        formularioValido = false;
    }
    if (formularioValido == true){
        alert ("Tomaremos en cuenta tu opinión") 

    } else {
        alert ("Por favor complete todos los campos")
    }
}