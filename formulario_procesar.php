<?php
	require "./isHabil.php";
	$cantidad = $_POST['cantidad'];

	if($cantidad > 1){
		$valido = true;
		//validamos que las fechas sean mayores que la anterior
		$fechaAnterior = date_create($_POST['fecha_1']);
		for ($i=2; $i<=$cantidad; $i++) { 
			$fecha=date_create($_POST['fecha_'.$i]);

			if($fechaAnterior>=$fecha){
				print "cada fecha debe ser mayor a la anterior";
				$valido = false;
			}

			$fechaAnterior = $fecha;
		}

		if($valido) {
			for ($i=1; $i<=$cantidad; $i++) { 
				$numero = $_POST['numero_'.$i];
				$fecha=date_create($_POST['fecha_'.$i]);

				print "<span>Fecha ".$i.": ".date_format($fecha,"Y/m/d")."</span>";
				print "<span>N&uacute;mero ".$i.": ".$numero."</span>";
				
				while($numero > 0){
					date_add($fecha, date_interval_create_from_date_string("1 days"));

					if(isHabil(date_format($fecha, 'd-m-Y'))){
						$numero--;
					}
				}
				print "<span>Fecha calculada: ".date_format($fecha,"Y/m/d")."</span>";

				print "<br>";
			}
		}
	}
	else {
		$numero = $_POST['numero_1'];
		$fecha = date_create($_POST['fecha_1']);

		print "<span>Fecha 1: ".date_format($fecha,"Y/m/d")."</span>";
		print "<span>N&uacute;mero 1: ".$numero."</span>";
		
		while($numero > 0){
			date_add($fecha, date_interval_create_from_date_string("1 days"));

			if(isHabil(date_format($fecha, 'd-m-Y'))){
				$numero--;
			}
		}
		print "<span>Fecha calculada: ".date_format($fecha,"Y/m/d")."</span>";
	}
?>