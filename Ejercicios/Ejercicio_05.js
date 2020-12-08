"use strict";
var miNombre = "EzequiEl";
var miApellido = "Segota";
MostrarNombreApellido(miNombre, miApellido);
function MostrarNombreApellido(nombre, apellido) {
    nombre = nombre.toLowerCase();
    nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
    apellido = apellido.toUpperCase();
    console.log(apellido + "," + nombre);
}
//# sourceMappingURL=Ejercicio_05.js.map