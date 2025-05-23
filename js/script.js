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
nuevaTarea.style.fontFamily="calibri";
nuevaTarea.style.fontWeight="800";
nuevaTarea.style.color= "white";
nuevaTarea.style.listStyleType="none";

//Creo el boton de eliminar
let botonEliminar = document.createElement("button");
botonEliminar.textContent = "Eliminar"
botonEliminar.style.backgroundColor = "rgb(125, 20, 173)";
botonEliminar.style.borderRadius= "20px";
botonEliminar.style.padding="10px";
botonEliminar.style.fontFamily="calibri";
botonEliminar.style.fontWeight= "800";
botonEliminar.style.color= "white"
botonEliminar.onclick = function() {nuevaTarea.remove();}

//Concateno el elemento de la lista con el boton de eliminar
nuevaTarea.appendChild(botonEliminar);

//Agrego la tarea a la lista
document.getElementById("listaTareas").appendChild(nuevaTarea);

//Limpiar el canal de texto al agregar la tarea
document.getElementById("texto").value = "";

};

var addTarea = document.querySelector(".add");
addTarea.addEventListener("click",agregarTarea);

document.addEventListener("keydown", (event)=>{
    if(event.key === "Enter"){
    agregarTarea();
    }
});