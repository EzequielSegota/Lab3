"use strict";
//let producto = {"codigoBarra" : "0001","nombre":"Manaos","precio":50};
//alert(producto["codigoBarra"]+"-"+producto["nombre"]+"-"+producto["precio"]);
//console.log(producto["codigoBarra"]+"-"+producto["nombre"]+"-"+producto["precio"]);
//let cadena:string="producto="+JSON.stringify(producto);
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var $aux = JSON.parse(xmlhttp.responseText);
        alert($aux.Marca);
        console.log($aux.Marca);
    }
};
xmlhttp.open("POST", "traerAuto.php", true);
xmlhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
xmlhttp.send();
//# sourceMappingURL=ejercicio.js.map