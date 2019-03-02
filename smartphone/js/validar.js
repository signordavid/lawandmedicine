// JavaScript Document//Funcion que verifica campos del formulario vacios
function Validar(f) {
if(f.name.value=="") {
    alert("Por favor escriba su Nombre completo");
    f.name.focus();
    return false;
    }
if(f.email.value=="") {
    alert("Por favor escriba su direcci\xF3n de correo electr\xF3nico");
    f.email.focus();
    return false;
    }
if(f.subject.value=="") {
    alert("Por favor escriba el asunto de su Mensaje");
    f.subject.focus();
    return false;
    }
if(f.message.value=="") {
    alert("Por favor escriba su Mensaje.");
    f.message.focus();
    return false;
    }
}