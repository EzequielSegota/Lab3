var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
/// <reference path="./Persona.ts" />
var Prueba;
(function (Prueba) {
    var Alumno = /** @class */ (function (_super) {
        __extends(Alumno, _super);
        /*
                public get Legajo() : number {
                    return this.legajo;
                }
        */
        function Alumno(apellidoAux, nombreAux, legajoAux) {
            var _this = _super.call(this, apellidoAux, nombreAux) || this;
            _this.legajo = legajoAux;
            return _this;
        }
        Alumno.prototype.ToString = function () {
            return _super.prototype.ToString.call(this) + " Legajo:" + this.legajo;
        };
        return Alumno;
    }(Prueba.Persona));
    Prueba.Alumno = Alumno;
})(Prueba || (Prueba = {}));
/// <reference path="./Alumno.ts" />
var Prueba;
(function (Prueba) {
    var alumno = new Prueba.Alumno("Perez", "Juan", 123);
    console.log(alumno.ToString());
})(Prueba || (Prueba = {}));
