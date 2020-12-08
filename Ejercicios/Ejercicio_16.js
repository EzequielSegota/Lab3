"use strict";
/*
16- Confeccionar un formulario que permita ingresar el nombre de una persona, su mail, su
DNI (documento nacional de identidad) y finalmente su currículum vitae (este último dato
hacerlo utilizando un <TEXTAREA>). Al pulsar el botón btnAceptar, por medio de una
función en TypeScript, mostrar todos sus datos por consola.
*/
function MostrarDatos() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var dni = +document.getElementById("dni").value;
    var curriculumVitae = document.getElementById("cv").value;
    console.log(nombre + "\n");
    console.log(email + "\n");
    console.log(dni + "\n");
    console.log(curriculumVitae + "\n");
}
//# sourceMappingURL=Ejercicio_16.js.map