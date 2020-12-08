import {factorial} from "./Ejercicio_08";
import {TeMuestroElCubo} from "./Ejercicio_06";

FactorialOCubo(5);

FactorialOCubo(-3)

function FactorialOCubo(num:number) {
    if(num>=0)
        console.log("El Factorial:"+factorial(num));
    else
        TeMuestroElCubo(num);
}