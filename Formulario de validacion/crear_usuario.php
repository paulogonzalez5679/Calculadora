<!DOCTYPE html>
<html>
<head>
 <meta charset="UTF-8">
 <title>Crear Nuevo Usuario</title>
 <style type="text/css" rel="stylesheet">
 .error{
 color: red;
 }
 </style>
</head>
<body>
 <?php
 //incluir conexión a la base de datos
 include 'conexionBD.php';
 $cedula = isset($_POST["cedula"]) ? trim($_POST["cedula"]) : null;
 $nombre = isset($_POST["nombre"]) ? mb_strtoupper(trim($_POST["nombre"]), 'UTF-8') : null;
 $apellido = isset($_POST["apellido"]) ? mb_strtoupper(trim($_POST["apellido"]), 'UTF-8') : null;
 $direccion = isset($_POST["direccion"]) ? mb_strtoupper(trim($_POST["direccion"]), 'UTF-8') : null;
 $phone = isset($_POST["phone"]) ? trim($_POST["phone"]): null;
 $fechaNac = isset($_POST["fechaNac"]) ? trim($_POST["fechaNac"]): null;
 $mail = isset($_POST["mail"]) ? trim($_POST["mail"]): null;

 $sql = "INSERT INTO usuario VALUES (0, '$cedula', '$nombre', '$apellido', '$direccion', '$phone', '$fechaNac','$mail')";
 if ($conn->query($sql) === TRUE) {
 echo "<p>HAZ PASADO TODOS LOS CAMPOS DE VALIDACION FELICIDADES!!!</p>";
 } else {
 if($conn->errno == 1062){
 echo "<p class='error'>La persona con la cedula $cedula ya esta registrada en el sistema </p>";

 }else{
 echo "<p class='error'>Error: " . mysqli_error($conn) . "</p>";
 }
 }

 //cerrar la base de datos
 $conn->close();

 ?>
</body>
</html>
g. Ve