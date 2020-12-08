"use strict";
/*
Crear una función que realice el cálculo factorial del número que recibe como parámetro.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.factorial = void 0;
//console.log(factorial(8));
function factorial(n) {
    var answer = 0;
    if (n < 0)
        console.log("No sé puede eso.\n");
    if (n == 1 || n == 0)
        return 1;
    else {
        for (var index = 0; index < n; index++) {
            answer = n * factorial(n - 1);
        }
    }
    return answer;
}
exports.factorial = factorial;
//# sourceMappingURL=Ejercicio_08.js.map