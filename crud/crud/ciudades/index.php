<?php
// include("libs/conex.php");
// include("libs/ciudades.lib.php");
$datos=traerCiudades($conn);
//echo "<pre>";
// foreach($datos as $d)
// {
//  print_r($d);
// }
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ciudades</title>
</head>
<body>
    <h1>Ciudades</h1>
    <a class="btn btn-success" href="ciudades/nuevo.php">Nuevo</a>
    <table border=1>
        <thead>
            <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Editar</th>
                <th>Borrar</th>
            </tr>
        </thead>
        <tbody>
           
                <?php
                foreach($datos as $d) {
                ?>
             <tr>    
                <td><?php echo $d['id'];  ?> </td>
                <td><?php echo $d['nombre'];  ?></td>
                <td><a class="btn btn-secondary" href="index.php?mod=edtciudad&&id=<?php  echo $d['id'];  ?>">Editar</a> </td>
                <td><a class="btn btn-danger" href="index.php?mod=delciudad&&id=<?php  echo $d['id'];  ?>">Borrar</a> </td>
            </tr>
            //cambie el id ahora pq en la bd que había creado anteriormente estaba en mayúscula y no la cambié antes pq sigo sin notebook
               <?php 
               }
               ?> 
        </tbody>    
    </table>
</body>
</html>

