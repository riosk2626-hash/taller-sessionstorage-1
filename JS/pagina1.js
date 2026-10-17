function guardar() {
    const nombre = document.getElementById("nombreN").value;
    const ciudad = document.getElementById("ciudad").value;
    const mensajeError = document.getElementById("mensaje-error")

    if (nombre === ""){
        mensajeError.textContent = "Por favor ingrese un valor antes de continuar.";
        return;
    }

    localStorage.setItem("nombre", nombre);
    localStorage.setItem("ciudad", ciudad);

    window.location.href = "index2.html";
}

document.getElementById("btn-guardar").addEventListener("click", guardar);