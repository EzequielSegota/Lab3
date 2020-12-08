"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Ejercicio_08_1 = require("./Ejercicio_08");
var Ejercicio_06_1 = require("./Ejercicio_06");
FactorialOCubo(5);
FactorialOCubo(-3);
function FactorialOCubo(num) {
    if (num >= 0)
        console.log("El Factorial:" + Ejercicio_08_1.factorial(num));
    else
        Ejercicio_06_1.TeMuestroElCubo(num);
}
//# sourceMappingURL=Ejercicio_09.js.map