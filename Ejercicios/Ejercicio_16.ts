/*
16- Confeccionar un formulario que permita ingresar el nombre de una persona, su mail, su
DNI (documento nacional de identidad) y finalmente su currículum vitae (este último dato
hacerlo utilizando un <TEXTAREA>). Al pulsar el botón btnAceptar, por medio de una
función en TypeScript, mostrar todos sus datos por consola.
*/

function MostrarDatos():void
{
    let nombre:string=(<HTMLInputElement> document.getElementById("nombre")).value;
    let email:string=(<HTMLInputElement> document.getElementById("email")).value;
    let dni:number=+(<HTMLInputElement> document.getElementById("dni")).value;
    let curriculumVitae=(<HTMLInputElement> document.getElementById("cv")).value;

    console.log(nombre+"\n");
    console.log(email+"\n");
    console.log(dni+"\n");
    console.log(curriculumVitae+"\n");
}