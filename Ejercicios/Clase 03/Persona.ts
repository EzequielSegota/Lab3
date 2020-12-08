namespace Prueba{
    export class Persona
    {
        protected apellido:string;
        protected nombre:string;
/*
        public get Apellido() : string {
            return this.apellido;
        }

        
        public get Nombre() : string {
            return this.nombre;
        }
   */ 

        public constructor(apellidoAux:string,nombreAux:string)
        {
            this.apellido=apellidoAux;
            this.nombre=nombreAux;
        }

        public ToString():string{
            return "Apellido:"+this.apellido+" Nombre:"+this.nombre;
        }
    }
}