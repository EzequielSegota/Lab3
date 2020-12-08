"use strict";
var numUno = 3;
Mostrar(numUno, "Soy una cadena que se repite 3 veces\n");
Mostrar(-1);
function Mostrar(num, cadena) {
    if (cadena === void 0) { cadena = ''; }
    if (cadena != '' && num > 0) {
        for (var index = 0; index < num; index++) {
            console.log(cadena);
        }
    }
    else if (cadena == '') {
        console.log((num - (num * 2)));
    }
}
//# sourceMappingURL=Ejercicio_03.js.map