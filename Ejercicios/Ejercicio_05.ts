let miNombre:string="EzequiEl";
let miApellido:string="Segota";

MostrarNombreApellido(miNombre,miApellido);

function MostrarNombreApellido(nombre:string,apellido:string) {
    nombre=nombre.toLowerCase();
    nombre=nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();

    apellido=apellido.toUpperCase();

    console.log(apellido+`,`+nombre);
}