function add(){
//añadimos el texto que el usuario ingresa en el textarea:
var comments = document.getElementById('txtarea').value;
//se limpia el text area después de que se postea el mensaje:
document.getElementById('txtarea').value = '';
//se llama al contenedor vacío que 'guardará' los posts:
var post = document.getElementById('cont');
//se crea un div que contenga los comentarios:
var newComments = document.createElement('caja2');
//no ingresar texto vacío:
if(comments.length == 0 || comments == null){
	alert('Ingresa un mensaje');
	return false;
	}
	
//se crea un elemento 'p':
var paragraph = document.createElement('p'); 
//establecemos la variable del posteo como nodo de texto:
var pText = document.createTextNode(comments); 
//establecemos que 'pText' es padre de este nodo de texto:
paragraph.appendChild(pText); 
//se mete el párrafo en la variable contenedora ('post'):
post.appendChild(paragraph);
//se guarda el texto ingresado ('post') en el div contenedor:
cont.appendChild(post);
}	

//contador caracteres

//function counterchrt(counter){
//var numbers = document.getElementById("txtarea");
//var characters = element.value.length;
//}
