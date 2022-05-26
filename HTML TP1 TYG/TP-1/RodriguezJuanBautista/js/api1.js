fetch('https://api.openweathermap.org/data/2.5/weather?q=La Plata,ar&appid=17872a9de208ab57ffbd51c548430428&lang=es')
.then(response => response.json())
.then(data => {
	
	let ciudadResultado = document.querySelector('#ciudadResultado');
	let temperaturaResultado = document.querySelector('#temperaturaResultado');
	let descripcionResultado = document.querySelector('#descripcionResultado');
	let humedadResultado = document.querySelector('#humedadResultado');
	let iconoResultado = document.querySelector('#iconoResultado');
	let temperaturaMinResultado = document.querySelector('#temperaturaMinResultado');
	let temperaturaMaxResultado = document.querySelector('#temperaturaMaxResultado');
	let vientoResultado = document.querySelector('#vientoResultado');

	var nameValue = data['name'];
	var tempValue = data['main']['temp'];
	var tempMinValue = data['main']['temp_min'];
	var tempMaxValue = data['main']['temp_max'];
	var descValue = data['weather'][0]['description'];
	var humValue = data['main']['humidity'];
	var icoValue = data['weather'][0]['icon'];
	var vientoValue = data['wind']['speed'];

	ciudadResultado.innerHTML = `<h2> ${nameValue} </h2>`;
	iconoResultado.innerHTML = `<img src='http://openweathermap.org/img/wn/${icoValue}.png' width="100" height="100">`;
	temperaturaResultado.innerHTML = "Temperatura actual: " + Math.trunc(tempValue - 273.15) + "°C";
	temperaturaMinResultado.innerHTML = "Temperatura mínima: " + Math.trunc(tempMinValue - 273.15) + "°C";
	temperaturaMaxResultado.innerHTML = "Temperatura máxima: " + Math.trunc(tempMaxValue - 273.15) + "°C";
	descripcionResultado.innerHTML = "Condición: " + descValue;
	humedadResultado.innerHTML = "Humedad: " + humValue + "%";
	vientoResultado.innerHTML = "Viento: " + vientoValue + " m/s";

	console.log(data)
})
.catch(err=>console.log(err))
