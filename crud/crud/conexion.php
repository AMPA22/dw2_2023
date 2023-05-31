<?php
$servidor="localhost";
$db="dw2_user";
$username="dw2_user";
$password="dw2_user";

try {
    $conexion= new PDO("mysqli:host=$servidor;bdname=$db",$username,$password);
    echo "conexion exitosa";
} catch (Exception $e) {
    echo $e ->getMessage();
}
?>