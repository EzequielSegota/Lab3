<?php
    $json = json_decode($_POST["producto"]);
    
    //var_dump($json);
    
    $producto = new Producto($json->codigoBarra, $json->nombre, $json->precio);

    $producto->ToString();

    class Producto
    {
        public $codigoBarra;
        public $nombre;
        public $precio;


        public function __construct($codigoBarra, $nombre, $precio)
        {
            $this->codigoBarra = $codigoBarra;
            $this->nombre = $nombre;
            $this->precio = $precio;
        }

        public function ToString()
        {
            echo "Codigo de Barra:".$this->codigoBarra." Nombre:".$this->nombre." Precio:".$this->precio;
        }
    }


?>