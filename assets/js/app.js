//llamamos al botón por el ID y lo metemos en una variable:
var boton = document.getElementById("btn");
//aplicamos evento click al botón:
btn.addEventListener("click", function(){
	//añadimos el texto que el usuario ingresa en el textarea:
	var comments = document.getElementById('txtarea').value;
	//se limpia el text area después de que se postea el mensaje:
	document.getElementById('txtarea').value = '';
	//variable con contenedor vacío que 'guardará' los posts:
	var post = document.getElementById('cont');
	//se crea un div que contenga los comentarios:
	var newComments = document.createElement('posteos');

	//nodo de texto:
	var pText = document.createTextNode(comments);
	//se crea un elemento 'p':
	var paragraph = document.createElement('p');
	//unimos 'p' y el nodo de texto:
	paragraph.appendChild(pText);
	//se mete el párrafo en la variable:
	newComments.appendChild(paragraph);
	//se guarda el texto ingresado ('post') en el div contenedor:
	post.appendChild(newComments);



	//AGREGAR LA HORA EN QUE SE PUBLICÓ EL TWEET

	var hora = new Date();
	var hr = hora.hour();
	var min = minutes();
	// agregamos un 0 a los minutos cuando es entre 00 y 09 mins
	function minutes(){
		min = hora.cero();
		if(min < 10) {
			return '0' + min;
		} else {
			return min;
		}
	}
	//crear nodo con formato de hora (xx:xx):
	var formatoHora = document.createTextNode(hr + ":" + min);
	//variable que contenga la hora en un 'p':
	var horap = document.createElement("p");
	//agregamos "hora: " a la hora:
	horap.innerText = "hora: ";
	//vinculamos 'p' con la hora:
	horap.appendChild(formatoHora);
	//se agrega la hora al nuevo div contenedor:
	newComments.appendChild(horap);
	//el contador vuelve a "140":
	document.getElementById("chrtsnumber").innerHTML = "140";
},false);



//CONTAR LOS CARACTERES DE FORMA REGRESIVA

txtarea.onkeydown = function(){
	var contador = document.getElementById("chrtsnumber");
	//texto del texarea:
	var comment = document.getElementById("txtarea");
	//longitud del valor del textarea:
	var longitud = txtarea.value.length;
	contador.innerText = "" + (140 - longitud);

	if(longitud >= 141){
	btn.disabled = true;
	} else{
	btn.disabled = false;
	};



	//CAMBIOS DE COLOR EN EL CONTADOR

	//si pasa los 120 caracteres:
	if(longitud >= 120 && longitud < 130){
	contador.classList.remove('danger');
	contador.classList.add('warning');
	//si pasa los 130 caracteres:
	} else if(longitud >= 130){
	contador.classList.remove('warning');
	contador.classList.add('danger');
	}
	else{

	};
};
