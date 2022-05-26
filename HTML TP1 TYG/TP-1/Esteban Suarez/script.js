var todas_frases = [
	"Tevez se fue de boca, muy triste.",
	"El otro dia me pedi una pizza de 4 quesos con panceta, muy buena tienen que probarla.",
	"Una vez el actor de malfoy de la pelicula de harry potter subio un video con una remera de boca puesta."
];

function frases(){
	var numero_frase = Math.floor(Math.random() * 3);
	$(frase_aleatoria).text(todas_frases[numero_frase]);
	$(frase_aleatoria).addClass("frase"+numero_frase);
};

$(document).ready(function(){
frases();
});

function apicorona(){
	$.ajax({
		type: 'GET',
		url: 'https://api.covid19api.com/summary',
		success: function(data){
			$('.main').empty()
            .append("<u>Cantidad de personas contagiadas a nivel mundial:</u> " + data.Global.TotalConfirmed + "<br><br>")
            .append("<u>Cantidad de personas fallecidas a nivel mundial:</u> " + data.Global.TotalDeaths + "<br><br>")
            .append("<u>Cantidad de personas recuperadas a nivel mundial:</u> " + data.Global.TotalRecovered + "<br><br>")
            .append("<u>Personas contagiadas en Argentina:</u> " + data.Countries[6].TotalConfirmed + "<br><br>")
            .append("<u>Fallecidos en Argentina:</u> " + data.Countries[6].TotalDeaths + "<br><br>")
            .append("<u>Casos recuperados en Argentina:</u> " + data.Countries[6].TotalRecovered + "<br><br>")
		},
		error: function(error){
			console.log(error)
        }
	});
};

function apigatos(){
	$.ajax({
		type: 'GET',
		url: 'https://cat-fact.herokuapp.com/facts/random',
		success: function(data){

			$('.main').empty()
				.append("<b>El esperado dato de gatos es:</b> " + data.text)
		},
		error: function(error){
			console.log(error)
		}
	});
};

