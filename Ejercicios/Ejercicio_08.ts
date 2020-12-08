/*
Crear una función que realice el cálculo factorial del número que recibe como parámetro.
*/

//console.log(factorial(8));

export function factorial(n:number):number{
    let answer = 0;
    if (n < 0)
        console.log("No sé puede eso.\n");

    if(n==1||n==0)
        return 1;
    else
    {
        for (let index = 0; index < n; index++) {
            answer=n*factorial(n-1);
        }
    }

    return answer;
}