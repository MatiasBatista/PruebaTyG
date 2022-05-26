var	tam = 3,
	numAleatorio=Math.round(Math.random()*(tam-1)),
	frase0 = '',
	frase1 = '',
	frase2 = '';

switch(numAleatorio){
	case 0:
		frase0 = document.getElementById('jstext0');
		frase0.style.display = 'block';
		break;
	case 1:
		frase1 = document.getElementById('jstext1');
		frase1.style.display = 'block';			
		break;
	case 2:
		frase2 = document.getElementById('jstext2');
		frase2.style.display = 'block';
		break;
}

function obtenerDatos(){
	var url = 'https://v6.exchangerate-api.com/v6/cf9d1debf3fa39dc25debbee/latest/USD',
	api = new XMLHttpRequest();
	api.open('GET', url, true);

	api.onreadystatechange = function(){
		if (this.status == 200 && this.readyState == 4){
			var datos = JSON.parse(this.responseText),
				valor = datos.conversion_rates,
				lastUpdate = datos.time_last_update_utc,
				conversion = document.getElementById('conversion');
			conversion.style.display = 'block';
			conversion.innerHTML = '<h4>' + 'Conversion Dolar a Peso Argentino' + '</h4>' + '<br>';
			conversion.innerHTML += 'U$D ' + valor.USD + ' = ' + '$ ' + valor.ARS;
			conversion.innerHTML += '<br>' + '<br>' + 'Última Actualización: ' + lastUpdate.substr(5,12);
		}
	}
	api.send();
}

function obtenerClima(){
	var	url = 'http://api.weatherstack.com/current?access_key=0e9ba57f7b1f8a98593dfce77742aaf0&query=Buenos Aires';
	api = new XMLHttpRequest();
	api.open('GET', url, true);

	api.onreadystatechange = function(){
		if (this.status == 200 && this.readyState ==4) {
			var datos = JSON.parse(this.responseText),
				temp = datos.current.temperature,
				descripcion = datos.current.weather_descriptions,
				hora = datos.location.localtime,
				ubicacion = datos.location.name,
				humedad = datos.current.humidity,
				precipitacion = datos.current.precip,
				clima = document.getElementById('clima');

			clima.style.display = 'block';
			clima.innerHTML = '<h4>' + 'Clima' + '</h4>' + '<br>';
			clima.innerHTML +=  ubicacion + '<br>'  + '<br>';
			clima.innerHTML += hora + '<br>' + '<br>'; 
			clima.innerHTML += descripcion +' ';
			clima.innerHTML += temp + '°C' + '<br>' + '<br>';
			clima.innerHTML += 'Humedad: ' + humedad + '%' + '<br>' + '<br>'; 
			clima.innerHTML += 'Prob. de Precipitaciones: ' + precipitacion + '%';
		}
	}
	api.send();
}