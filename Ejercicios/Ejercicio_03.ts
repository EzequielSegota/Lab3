let numUno : number=3;

Mostrar(numUno,"Soy una cadena que se repite 3 veces\n");

Mostrar(-1);

function Mostrar(num:number,cadena:string='') {
    if(cadena!='' && num>0)
    {
        for (let index = 0; index < num; index++) {
            console.log(cadena);
        }
    }
    else if(cadena=='')
    {
        console.log((num-(num*2)));
    }
}