<?php
include("../libs/conex.php");
include("../libs/personas.lib.php");

if ($_POST) {
    $err = validarPersonas($_POST);
    
    if (!empty($err)) {
        if ($_POST['id'] == -1) {
            agregarPersona($_POST, $conn);
        } else {
            editarPersona($_POST, $conn);
        }
    } else {
        header('Location:index.php?mod=persona&accion=edit&errores=' . $err);
        exit();
    }
}

header('Location:index.php?mod=persona&accion=lst');
exit();
?>

<p>soy guardar</p>
