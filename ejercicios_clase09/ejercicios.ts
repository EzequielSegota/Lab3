
/// <reference path="MOCK_DATA.ts" />

let users = datos.MOCK_DATA;

//#1.-Mostrar todos los datos de los usuarios por consola
//console.log(users);

//#2.-Retornar todos los trabajos de los usuarios
let trabajos = users.map(function(users, index, array) {
    return users.trabajo;
});
//console.log(trabajos);

//#3.-Retornar todos los paises de los usuarios
let paises = users.map(function(users, index, array) {
    return users.pais;
});
//console.log(paises);

//#4.-Retornar un array de objetos de aquellos usuarios cuyo pais sea China
let chinas = users.filter(function(user,index,array){
    return user.pais==="China";
});
//console.log(chinas);

//#5.-Retornar una array de objetos de todos los usuarios menores a 21 años
let jovenes = users.filter(function(user,index,array){
    return user.edad<21;
});
//console.log(jovenes);

//#6.-Retornar la cantidad de usuarios con sexo masculino (Male)
let cantidadMasculinos = users.filter(function(user,index,array){
    return user.sexo==="Male";
});
//console.log(cantidadMasculinos.length);

//#7.-Retornar una array de strings (el nombre de los usarios de sexo femenino (Female))
let nombresFemeninos = users.filter(function(user,index,array){
    return user.sexo==="Female";
}).map(function(user,index,array){
    return user.nombre;
});
//console.log(nombresFemeninos);

//#8.-Retornar una array de strings (el email de los usarios de sexo masculino (Male))
let mailsMasculinos = users.filter(function(user,index,array){
    return user.sexo==="Male";
}).map(function(user,index,array){
    return user.email;
});
//console.log(mailsMasculinos);

//#9.-Retornar un array de objetos que solo contengan los nombres, apellidos y ciudades de todos los usuarios
let datosUsers = users.map(function(user,index,array){
    let usersAux : any = {};
    usersAux.nombre=user.nombre;
    usersAux.apellido=user.apellido;
    usersAux.ciudad=user.ciudad;
    return usersAux;
});
//console.log(datosUsers);

//#10.-Retornar un array de objetos que solo contengan los nombres, apellidos y ciudades de todos los usuarios
// masculinos mayores de 35 años
let datosUsersMayoresMasculinos = users.filter(function(user,index,array){
    return user.sexo==="Male" && user.edad>35;
}).map(function(user,index,array){
    let usersAux : any = {};
    usersAux.nombre=user.nombre;
    usersAux.apellido=user.apellido;
    usersAux.ciudad=user.ciudad;
    return usersAux;
});
//console.log(datosUsersMayoresMasculinos);

//#11.-Retornar el promedio de edad de los usuarios
let promedioEdad = users.reduce(function(anterior,actual){
    return anterior+actual.edad;
},0);
//console.log(promedioEdad/1000);  

//#12.-Retornar el promedio de edad de los usuarios masculinos
let promedioEdadMasculinos = users.filter(function(user,index,array){
    return user.sexo==="Male";
}).reduce(function(anterior,actual){
    return anterior+actual.edad;
},0);
//console.log(promedioEdadMasculinos/cantidadMasculinos.length);  

//#13.-Retornar el promedio de edad de los usuarios egipcios (Egypt)
let Egipcios=users.filter(function(user,index,array){
    return user.pais==="Egypt";
});
let cantEgipcios:number=Egipcios.length;
let totalEdadEgipcios=Egipcios.reduce(function(anterior,actual){
    return anterior+actual.edad;
},0);

let promedioEdadEgipcios = totalEdadEgipcios/cantEgipcios;
console.log(promedioEdadEgipcios);  
