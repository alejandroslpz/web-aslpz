<?php

$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$correo = $_POST['correo'];
$mensaje = $_POST['mensaje'];

$destinatario = "contacto@alejandroslpz.com";
$asunto = "Contacto desde alejandroslpz.com";

$correocontacto = "De: $nombre \n";
$correocontacto .= "Correo: $correo \n";
$correocontacto .= "Telefono: $telefono \n";
$correocontacto .= "Mensaje: $mensaje";

mail($destinatario, $asunto, $correocontacto);

header('Location:index.html')

?>
