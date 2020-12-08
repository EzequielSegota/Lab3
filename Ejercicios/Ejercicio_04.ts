{
    let numUno : number=8;

    let numDos:number=9;

    AvisarPar(numUno);
    AvisarPar(numDos);
   
} 
function AvisarPar(num:number) :void{
    if(num%2==0)
        console.log("El numero:",num," es par.\n");
    else
        console.log("El numero:",num," es impar.\n");
}