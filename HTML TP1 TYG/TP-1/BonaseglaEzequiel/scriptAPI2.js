document.querySelector('#argentina').addEventListener('click', function(){
	obtenerDatos();
})

function obtenerDatos(){

	let url = 'https://restcountries.eu/rest/v2/name/argentina';

	const api = new XMLHttpRequest();
	api.open('GET', url, true);
	api.send();

	api.onreadystatechange = function(){

		if (this.status == 200 && this.readyState == 4 ) {

			let datos = JSON.parse(this.responseText);
			console.log(datos);
			let resultado = document.querySelector('#resultado');
			resultado.innerHTML = '';
			resultado.innerHTML += `<li> ◉ Nombre: ${datos[0].name}</li>.`;
			resultado.innerHTML += `<li> ◉ Dominio Web: ${datos[0].topLevelDomain}</li><br>`;
			resultado.innerHTML += `<li> ◉ Prefijo Telefonico: ${datos[0].callingCodes}</li><br>`;
			resultado.innerHTML += `<li> ◉ Capital: ${datos[0].capital}</li><br>`;
			resultado.innerHTML += `<li> ◉ Region: ${datos[0].region}</li><br>`;
			resultado.innerHTML += `<li> ◉ Poblacion: ${datos[0].population}</li><br>`;
			resultado.innerHTML += `<li> ◉ Gentilicio: ${datos[0].demonym}</li><br>`;
			resultado.innerHTML += `<li> ◉ Paises Limitrofes: ${datos[0].borders}</li><br>`;


		}
	}
}