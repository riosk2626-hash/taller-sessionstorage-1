function mostrarNombre() {
    const nombre = localStorage.getItem("nombre");
    const ciudad = localStorage.getItem("ciudad");

    if (!nombre) {
        document.getElementById("saludo").textContent = "No hay ningún nombre :(";
    } else if (ciudad) {
        document.getElementById("saludo").textContent = `Hola, ${nombre}, de ${ciudad}`;
    } else {
        document.getElementById("saludo").textContent = `Hola, ${nombre}`;
    }
}

function borrar() {
    localStorage.removeItem("nombre");
    localStorage.removeItem("ciudad");
    mostrarNombre();
}

function limpiarTodo(){
    localStorage.clear();
    mostrarNombre();
}

document.addEventListener("DOMContentLoaded", mostrarNombre);
document.getElementById("btn-borrar").addEventListener("click", borrar);
document.getElementById("btm-borrar-todo").addEventListener("click", limpiarTodo)