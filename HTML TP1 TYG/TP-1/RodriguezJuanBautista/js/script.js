var randomN = Math.floor(Math.random()*(4-1))+1;

if (randomN == "1") {
	document.write('<p id="frase1" align = center>"A la gloria no se llega por un camino de rosas"</p>');
	document.write('<p id="frase1" align = right>- Osvaldo Juan Zubeldía</p');
} else if (randomN == "2") {
	document.write('<p id="frase2" align = center>"Al equipo le pido concentración. Un médico tiene que estar 12 horas concentrado para que no se le muera el paciente; yo pido 90 minutos nada más"</p>');
	document.write('<p id="frase2" align = right>- Carlos Salvador Bilardo</p');
} else{
	document.write('<p id="frase3" align = center>"Más nosotros y menos yo, más grupos y menos individuos; más dar y menos recibir"</p>');
	document.write('<p id="frase3" align = right>- Alejandro Sabella</p');
}