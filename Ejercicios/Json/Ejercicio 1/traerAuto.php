<?php
$a = fopen("auto.json","r");

$cadena = fgets($a);

echo $cadena;

fclose($a);