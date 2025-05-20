function agregarTarea(){

// Busco el valor del texto

    let tarea = document.getElementById("texto").value;


// Verifico si la tarea no es vacia
    if(tarea === ""){
        alert("Debe ingresar una tarea");
        return;
    }

//Creo el elemento en la lista
let nuevaTarea = document.createElement("li");
nuevaTarea.textContent = tarea + " ";

//Creo el boton de eliminar
let botonEliminar = document.createElement("button");
botonEliminar.textContent = "Eliminar"
botonEliminar.onclick = function() {nuevaTarea.remove();}

//Concateno el elemento de la lista con el boton de eliminar
nuevaTarea.appendChild(botonEliminar);

//Agrego la tarea a la lista
document.getElementById("listaTareas").appendChild(nuevaTarea);

//Limpiar el canal de texto al agregar la tarea
document.getElementById("texto").value = "";

}