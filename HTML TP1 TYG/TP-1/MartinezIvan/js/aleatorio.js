var NumeroR = Math.floor(Math.random()*(4-1))+1;

if (NumeroR == "1") {
	document.write('<p id="frase1" align = center>"Tu tiempo es limitado, así que no lo malgastes viviendo la vida de otra persona"</p>');
	document.write('<p id="frase1" align = left>Steve Jobs </p');
} else if (NumeroR == "2") {
	document.write('<p id="frase2" align = center>"El fracaso es aquí una opción. Si las cosas no fallan es que no estás innovando lo suficiente."</p>');
	document.write('<p id="frase2" align = left>Elon Musk </p');
} else{
	document.write('<p id="frase3" align = center>"La paciencia es un elemento clave del éxito."</p>');
	document.write('<p id="frase3" align = left>Bill Gates </p');
};