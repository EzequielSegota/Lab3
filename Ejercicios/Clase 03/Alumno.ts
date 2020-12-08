/// <reference path="./Persona.ts" />

namespace Prueba{
    export class Alumno extends Persona{
        protected legajo:number;
/*
        public get Legajo() : number {
            return this.legajo;
        }
*/
        public constructor(apellidoAux:string,nombreAux:string,legajoAux:number) {
            super(apellidoAux,nombreAux);
            this.legajo=legajoAux;
        }

        public ToString():string{
            return super.ToString() + " Legajo:"+this.legajo;
        }
    }
}