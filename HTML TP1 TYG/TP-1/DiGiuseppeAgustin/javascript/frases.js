$(document).ready(function(){
	var parrafo = document.getElementById("frases");
		
	text_array = new Array(
		"Bienvenidos",
		"Bienvenido a mi página",
		"Esta es mi página",
	);
	let exp = document.getElementById('exp');
	exp.innerHTML=`
	<p> Mis expectativas de la materia son tener los conocimientos necesarios para poder complementar y sumar más lenguajes de programación en la carrera</p>`	
	var numero = Math.round(Math.random()*(text_array.length -1));
		
	parrafo.innerHTML=(text_array[numero]);

	if (numero == 0) {
		parrafo.setAttribute("class","frase1");
	} else if (numero == 1){
		parrafo.setAttribute("class","frase2");
	}else{
		parrafo.setAttribute("class","frase3");
	}
});	
