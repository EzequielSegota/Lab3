let num:number=3;

//TeMuestroElCubo(num);

function AlCubo(unNum:number):number {
    return Math.pow(unNum,3);
}

export function TeMuestroElCubo(unCubo:number) {
    console.log("Numero:"+unCubo+" Resultado:",AlCubo(unCubo));
}

