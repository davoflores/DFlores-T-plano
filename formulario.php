<!DOCTYPE html>
<html>
<head>
	<title>Tionvel - php plano</title>
	<script type="text/javascript" src="./formulario.js"></script>
</head>
<body>
	<div id="alerta">
		
	</div>
 
	<form method="post" action="./formulario_procesar.php" onsubmit="return validar()">
		<!-- cantidad de filas -->
		<input type="hidden" name="cantidad" id="cantidad">


		<button onclick="agregar()" type="button">Agregar fecha</button>
		<button onclick="quitar()" type="button">Quitar fecha</button>


		<div id="formularioTionvel"></div>

		<button type="submit">Procesar</button>

	</form>

</body>
</html>