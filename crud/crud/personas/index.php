<?php
$accion = isset($_GET["accion"]) ? $_GET["accion"] : ""; // Declaración de la variable accion
$mod = isset($_GET["mod"]) ? $_GET["mod"] : ""; // Declaración de la variable mod

include("../libs/conex.php");
include("../libs/ciudades.lib.php");
include("../libs/personas.lib.php");

//echo "<pre>";
// foreach($datos as $d)
// {
//  print_r($d);
// }
if (!$mod or !$accion) { 
    $mod = "persona";
    $accion = "lst";
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Personas</title>
</head>
<body>
<?php
if ($mod == "persona" && $accion == "lst")
{
    include("list.php");
} 
elseif ($mod == "persona" && ($accion == "nuevo" || $accion == "edit"))
{
    include("form.php");
} 
elseif ($mod == "persona" && $accion == "borrar")
{
    include("borrar.php");
} 
else 
{
    include("list.php");
}
?>
</body>
</html>
