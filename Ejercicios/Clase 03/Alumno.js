"use strict";
/// <reference path="./Persona.ts" />
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
//# sourceMappingURL=Alumno.js.map