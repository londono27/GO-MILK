<?php

// $ciudad = $_POST['ciudad'];
$ciudad = "Barranquilla";

$inc = include("conexion.php");

if ($inc) {
	$consulta = "SELECT * FROM ciudades";
	$resultado = mysqli_query($conex,$consulta);
	if ($resultado) {

        $UPDATE = "UPDATE ciudades SET cantidad = ? WHERE ciudad=?";

        while ($row = $resultado->fetch_array()) {
            $ciudadDB = $row['ciudad'];
            $cantidad = $row['cantidad'];

            
        if ($ciudadDB == $ciudad){
            $cantidad += 1;
            $cantidad2=$cantidad;
            $ciudad2 = $ciudadDB;
            $stmt = $conex->prepare($UPDATE);
			$stmt -> bind_param("is", $cantidad,$ciudadDB);
			$stmt -> execute();
			$stmt -> close();
       }
       ?>
        <div>
        	<h2><?php echo $cantidad2; ?></h2>
            <h2><?php echo $cantidad; ?></h2>
            <h2><?php echo $ciudadDB; ?></h2>
            <h2><?php echo $ciudad2; ?></h2>
        	<div>
        	</div>
        </div> 
	    <?php
	    }
    }
	
}else{
	die('connect error('.mysqli_connect_errno().')'.mysqli_connect_error());
}
?>
