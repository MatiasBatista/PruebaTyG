document.querySelector('#batman').addEventListener('click', function(){
	obtenerDatos();
})

function obtenerDatos(){

	let url = 'https://www.superheroapi.com/api.php/3628011627305221/70';

	const api = new XMLHttpRequest();
	api.open('GET', url, true);
	api.send();

	api.onreadystatechange = function(){

		if (this.status == 200 && this.readyState == 4 ) {

			let datos = JSON.parse(this.responseText);
			console.log(datos);
			let resultado = document.querySelector('#resultado');
			resultado.innerHTML = '';
			resultado.innerHTML += `<li> ◉ Nombre: ${datos.name}</li>.`;
			resultado.innerHTML += `<li> ◉ Productora: ${datos.biography.publisher}</li><br>`;
			resultado.innerHTML += `<li> ◉ Alias: ${datos.biography.aliases}</li><br>`;
			resultado.innerHTML += `<li> ◉ Genero: ${datos.appearance.gender}</li><br>`;
			resultado.innerHTML += `<li> ◉ Peso: ${datos.appearance.weight}</li><br>`;
			resultado.innerHTML += `<li> ◉ Raza: ${datos.appearance.race}</li><br>`;
			resultado.innerHTML += `<li> ◉ Altura: ${datos.appearance.height}</li><br>`;
			resultado.innerHTML += `<li> ◉ Base de operaciones: ${datos.work.base}</li><br>`;
			resultado.innerHTML += `<li> ◉ Ocupacion: ${datos.work.occupation}</li><br>`;

		}
	}
}

