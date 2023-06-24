// elementos DOM
const enviar = document.querySelector("#enviar");
const mensajeConsulta = document.querySelector("#mensaje-consulta");
const formulario = document.querySelector(".formulario");
// creo un evento
enviar.addEventListener("click", mostrarMensaje);
// y creo la funcion de mostrar mensaje
function mostrarMensaje() {
    formulario.querySelectorAll("input, textarea").forEach(element => {
        element.disabled = true;
    });
    enviar.disabled = true;
    mensajeConsulta.style.display = "block";
    // oculto el formulario
    formulario.style.display = "none";
}





