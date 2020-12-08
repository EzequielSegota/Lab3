"use strict";
/*
Se necesita mostrar por consola los primeros 20 números primos. Para ello realizar una
función.
Nota: Utilizar console.log()
*/
MostrarPrimos();
function MostrarPrimos(numeros) {
    if (numeros === void 0) { numeros = 100; }
    for (var i = 2; i <= numeros; i++) {
        var isPrime = true;
        for (var j = 2; j < i; j++) {
            if (i % j === 0 && i !== j) {
                isPrime = false;
            }
        }
        if (isPrime === true) {
            console.log(i);
        }
    }
}
//# sourceMappingURL=Ejercicio_07.js.map