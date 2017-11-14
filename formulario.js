//arreglo de objetos que contienen un número y una fecha
var elementos = [];


window.onload = function(){inicio();};

function inicio(){
	var numero_1 = document.createElement("input");
	numero_1.setAttribute("type", "number");
	numero_1.setAttribute("name", "numero_1");
	numero_1.setAttribute("required", "required");
	numero_1.setAttribute("min", "0");
	numero_1.setAttribute("placeholder", "Ingese un n\u00FAmero");

	var fecha_1 = document.createElement("input");
	fecha_1.setAttribute("type", "date");
	fecha_1.setAttribute("name", "fecha_1");
	fecha_1.setAttribute("required", "required");
	fecha_1.setAttribute("placeholder", "Ingrese una fecha");

	var div_1 = document.createElement("div");

	div_1.appendChild(fecha_1);
	div_1.appendChild(numero_1);

	//cada vez que se muestran los elementos deben aparecer por lo menos los primeros
	document.getElementById('formularioTionvel').appendChild(div_1);

	elementos[0] =  {fecha:fecha_1, numero:numero_1};
}



//agrega una fila dentro del formulario de id formularioTionvel
function agregar(){
	var formulario = document.getElementById('formularioTionvel');

	//agregamos una nueva fila
	var numero_i = document.createElement("input");
	numero_i.setAttribute("type", "number");
	numero_i.setAttribute("name", "numero_"+(elementos.length+1));
	numero_i.setAttribute("required", "required");
	numero_i.setAttribute("min", "0");
	numero_i.setAttribute("placeholder", "Ingese un n\u00FAmero");

	var fecha_i = document.createElement("input");
	fecha_i.setAttribute("type", "date");
	fecha_i.setAttribute("name", "fecha_"+(elementos.length+1));
	fecha_i.setAttribute("required", "required");
	fecha_i.setAttribute("placeholder", "Ingrese una fecha");

	var div_i = document.createElement("div");
	div_i.appendChild(fecha_i);
	div_i.appendChild(numero_i);

	formulario.appendChild(div_i);
	
	elementos[elementos.length] =  {fecha:fecha_i, numero:numero_i};
}


function quitar(){
	if(elementos.length>1){
		var formulario = document.getElementById('formularioTionvel');

	 	formulario.removeChild(formulario.lastChild);
		elementos.pop();
	}
}

function validar(){
	//cantidad de elementos
	var largo = elementos.length;
	
	//si hay un elemento
	if(largo == 1){
		document.getElementById('cantidad').value = 1;
		return true;
	}
	else{
		var fechaAnterior = elementos[0]['fecha'].value;

		for(var i=1; i<elementos.length; i++){
			var fechai = elementos[i]['fecha'].value;
			if(fechai<=fechaAnterior){
				document.getElementById('alerta').innerHTML = 'cada fecha debe ser mayor a la anterior';
				return false;	
			} 
			fechaAnterior = fechai;
		}

	}

	document.getElementById('cantidad').value = elementos.length;
	return true;
}