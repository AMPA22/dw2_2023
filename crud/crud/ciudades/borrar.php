<?php
// include("../libs/conex.php");
// include("../libs/ciudades.lib.php");
if ($_GET and $_GET['id'])
    {
       // echo $_GET['id'];
        $rs=borrarCiudad($_GET['id'],$conexion);
        //echo "<pre>";
        //$dato=$rs->fetch_assoc();
       // echo "</pre>";
    }
  header('Location:index.php');   
    ?>