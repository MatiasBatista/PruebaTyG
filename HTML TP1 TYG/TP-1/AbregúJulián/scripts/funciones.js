const frases = [
	{ frase: "Nunca confíes en una computadora que no puedas lanzar por la ventana.", autor: "Steve Wozniak", clase: "frase1" },
	{ frase: "Ley de Alzheimer de la programación: si lees un código que escribiste hace más de dos semanas es como si lo vieras por primera vez.", autor: "Dan Hurvitz", clase: "frase2" },
	{ frase: "Si piensas que la tecnología puede solucionar tus problemas de seguridad, está claro que ni entiendes los problemas ni entiendes la tecnología.", autor: "Bruce Schneier", clase: "frase3" },
	{ frase: "WTF?!", autor: "Anónimo", clase: "frase4" }
];

function seleccionarFrase() {
	numero_aleatorio = Math.floor(Math.random() * 3);

	return frases[numero_aleatorio];
}

function crearCita(frase) {
	var frase = seleccionarFrase();
	var cita = "<q><span class=\"" + frase['clase'] + "\">" + frase['frase'] + "</span></q><br>";
	cita += "<p><span class=\"autor\">" + frase['autor'] + "</span></p></blockquote><br>";
	cita += "<blockquote><p><span class=\"expectativa\">" + "Mi expectativa en esta asignatura consiste en la adquisición de conocimientos teóricos, por un lado, y el desarrollo de habilidades prácticas, por el otro, en relación a la tecnología que conforma la Web moderna, los servicios que mediante ella se ofrecen y los desafíos que presenta a los programadores, diseñadores y usuarios en general." + "</span></p><blockquote>";

	return cita;
};

function crearArticulo(datos) {
	var articulo = "<article><header class=\"header_articulo\"><h3>" + datos['title'] + "</h3><p>" + datos['publishedAt'] + "</p></header>";
	articulo += "<p>" + datos['summary'] + "</p>";
	articulo += "<footer class=\"footer_articulo\"><a href=\"" + datos['url'] + "\">" + datos['url'] + "</a></footer></article><hr>";

	return articulo;
};

function crearGeneradorQR() {
	var generadorQR = "<h4>http://goqr.me/api/</h4>"
	generadorQR += "<table class=\"tabla_qr\"><tr>"
	generadorQR += "<td><input type=\"text\" id=\"texto_qr\" placeholder=\"Por favor, ingrese su texto...\" ></td>";
	generadorQR += "<td><button id=\"boton_qr\" >Generar código QR</button></td></tr>";
	generadorQR += "<tr><td colspan=\"2\"><img id=\"codigo_qr\" src=\"\" ></td></tr></table>";

	return generadorQR;
}

function obtenerCodigoQR(datos) {
	var req = new XMLHttpRequest();
	req.open("GET", "https://api.qrserver.com/v1/create-qr-code/?size=250x250&color=404040&bgcolor=fae6b1&data=" + datos, true);
	req.responseType = "arraybuffer";

	req.onload = function (oEvent) {
		var arrayBuffer = req.response;
		var datosBinario = '';

		if (arrayBuffer) {
			var byteArray = new Uint8Array(arrayBuffer);

			for (var i = 0; i < byteArray.byteLength; i++) {
				datosBinario += String.fromCharCode(byteArray[i]);
            }

			var base64 = window.btoa(datosBinario);

			document.querySelector("#codigo_qr").src = "data:image/png;base64," + base64;
		}
	};

	req.send(null);
};


$(document).ready(function(){
	$('#principal_contenido').html(crearCita());

	$('#link1').click(function(){
		$.ajax({
			type: 'GET',
			dataType: 'json',
			url: 'https://api.spaceflightnewsapi.net/v3/blogs',
			success: function(respuesta){
				$('#principal_contenido').html('<h4>https://api.spaceflightnewsapi.net/v3/blogs</h4>');
				$.each(respuesta, function(indice, datos){
					$('#principal_contenido').append(crearArticulo(datos));
				})
			},
			error: function(xhr){
				alert(xhr.responseText);
			}
		});
	});

	$('#link2').click(function(){
		$('#principal_contenido').html(crearGeneradorQR());
	});

	$(document).on('click', '#boton_qr', function(){
		obtenerCodigoQR($('#texto_qr').val());
	});

	$('#inicio').click(function(){
		$('#principal_contenido').html(crearCita());
	});
});
