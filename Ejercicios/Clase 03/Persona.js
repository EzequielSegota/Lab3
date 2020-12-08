"use strict";
var Prueba;
(function (Prueba) {
    var Persona = /** @class */ (function () {
        /*
                public get Apellido() : string {
                    return this.apellido;
                }
        
                
                public get Nombre() : string {
                    return this.nombre;
                }
           */
        function Persona(apellidoAux, nombreAux) {
            this.apellido = apellidoAux;
            this.nombre = nombreAux;
        }
        Persona.prototype.ToString = function () {
            return "Apellido:" + this.apellido + " Nombre:" + this.nombre;
        };
        return Persona;
    }());
    Prueba.Persona = Persona;
})(Prueba || (Prueba = {}));
//# sourceMappingURL=Persona.js.map