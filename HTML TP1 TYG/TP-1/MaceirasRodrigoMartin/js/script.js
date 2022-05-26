/*TEXTOS ALEATORIOS*/

function texto_aleatorio(){
    var textos = new Array() /*inicializo el arreglo*/
    textos[0] = "<p id='f1'>el récord mundial en PacMan al día de hoy lo tiene Billy Mitchel, con una puntuación total de 3.333.360 puntos. Esta cifra fue obtenida sin haber perdido ni una sola vida, y alcanzando el nivel número 255.</p>"
    textos[1] = "<p id='f2'>el primer videojuego de la historia en el que se podía disparar fue creado en tan solo 200 horas durante 1961. Este se llamaba Spacewar.</p>"
    textos[2] = "<p id='f3'>el videojuego que mayor valor ha alcanzado en el mercado a la hora de ser vendido a coleccionistas ha sido el Nintendo World Championships de 1990. Esto se debe a que en la actualidad sólo existen 116 unidades.</p>"
    
    aleatorio = Math.random() * (textos.length) /*metodo random genera un numero aleatorio (entre 0-1)*, se multiplica por el numero de casilla*/
    aleatorio = Math.floor(aleatorio) /*como la linea anterior nos daba un numero no entero, aplico floor y redondeo para abajo al max proximo*/
 
 document.write(textos[aleatorio]) /*escribo en el documento el contenido de una posicion del vector*/
}


/*API 1 - Listado de Juegos de Pc */
function getJuegos(){

	const settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc",
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "0b4ce26daemshc14b15b716913fep13084djsn3e0e0460cdfb",
			"x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
		}
	};

	$.ajax(settings).done(function (response) {

		var listadoJuegos = response.map(function(bar){
			return 'Título:' +bar.title+ '<br>'+'Género:'+bar.genre+'<br>'+'Año de salida:'+bar.release_date+'<br>'+`<img src='${bar.thumbnail}' height=150px widht=150px/>`+'<br>'+'<br>'
			
			
		  })
		  document.getElementById("listadoJuegos").innerHTML = listadoJuegos;

		
		
	});

}


/*API 2 - Precio del dolar */
function getDolar(){
	const settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://currency-exchange.p.rapidapi.com/exchange?to=ARS&from=USD&q=1.0",
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "0b4ce26daemshc14b15b716913fep13084djsn3e0e0460cdfb",
			"x-rapidapi-host": "currency-exchange.p.rapidapi.com"
		}
	};
	
	$.ajax(settings).done(function (response) {
	
		$('#precioDolar').text(' $ ' + response + ' ARS ')
		
	});

}

/* to/ from :["SGD","MYR","EUR","USD","AUD","JPY","CNH","HKD","CAD","INR","DKK","GBP","RUB","NZD","MXN","IDR","TWD","THB","VND"]*/
/* q: equivale al total a convertir */

/*MENU DESPLEGABLE*/
 
 
function cambiadisplaydos(id){  
	  
	if (document.getElementById('dos').style.display=='block') {  
	document.getElementById('dos').style.display='none';  
	}else{  
	document.getElementById('uno').style.display='block';  
	document.getElementById('dos').style.display='block';  
	document.getElementById('tres').style.display='none';  
	}  
	  
	  
}  
function cambiadisplaytres(id){  
	  
		if (document.getElementById('tres').style.display=='block') {  
		document.getElementById('tres').style.display='none';  
		}else{  
		document.getElementById('uno').style.display='block';  
		document.getElementById('dos').style.display='none';  
		document.getElementById('tres').style.display='block';  
		}  
		  
		  
}  