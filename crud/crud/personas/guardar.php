<?php
 include("../libs/conex.php");
 include("../libs/ciudades.lib.php");
 if ($_POST)
 {
    if ($_POST['nombre'])
        {
        if ($_POST['id']==-1){
        agregarCiudad($_POST,$conexion);  
        }  else {
        editarCiudad($_POST,$conexion);
        }
        }
 }
 header('Location:../index.php?mod=ciudades');
?>
<p>soy guardar</p>