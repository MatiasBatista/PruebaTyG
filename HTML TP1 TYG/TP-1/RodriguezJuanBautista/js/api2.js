fetch('https://allsportsapi.com/api/football/?&met=Topscorers&leagueId=258&APIkey=989f566341c68272c421b6fd07b6acd11b6d2eb7b4a6c29a6aac4a9676989717')
.then(response => response.json())
.then(data => {

	let jugadorResultado1 = document.querySelector('#jugadorResultado1');
	let jugadorResultado2 = document.querySelector('#jugadorResultado2');
	let jugadorResultado3 = document.querySelector('#jugadorResultado3');
	let jugadorResultado4 = document.querySelector('#jugadorResultado4');
	let jugadorResultado5 = document.querySelector('#jugadorResultado5');
	let jugadorResultado6 = document.querySelector('#jugadorResultado6');
	let jugadorResultado7 = document.querySelector('#jugadorResultado7');
	let jugadorResultado8 = document.querySelector('#jugadorResultado8');
	let jugadorResultado9 = document.querySelector('#jugadorResultado9');
	let jugadorResultado10 = document.querySelector('#jugadorResultado10');

	jugadorResultado1.innerHTML = "Puesto 1 ➝ " + data.result[0].player_name + " (" + data.result[0].goals + " goles) // Equipo: " + data.result[0].team_name;
	jugadorResultado2.innerHTML = "Puesto 2 ➝ " + data.result[1].player_name + " (" + data.result[1].goals + " goles) // Equipo: " + data.result[1].team_name;
	jugadorResultado3.innerHTML = "Puesto 3 ➝ " + data.result[2].player_name + " (" + data.result[2].goals + " goles) // Equipo: " + data.result[2].team_name;
	jugadorResultado4.innerHTML = "Puesto 4 ➝ " + data.result[3].player_name + " (" + data.result[3].goals + " goles) // Equipo: " + data.result[3].team_name;
	jugadorResultado5.innerHTML = "Puesto 5 ➝ " + data.result[4].player_name + " (" + data.result[4].goals + " goles) // Equipo: " + data.result[4].team_name;
	jugadorResultado6.innerHTML = "Puesto 6 ➝ " + data.result[5].player_name + " (" + data.result[5].goals + " goles) // Equipo: " + data.result[5].team_name;
	jugadorResultado7.innerHTML = "Puesto 7 ➝ " + data.result[6].player_name + " (" + data.result[6].goals + " goles) // Equipo: " + data.result[6].team_name;
	jugadorResultado8.innerHTML = "Puesto 8 ➝ " + data.result[7].player_name + " (" + data.result[7].goals + " goles) // Equipo: " + data.result[7].team_name;
	jugadorResultado9.innerHTML = "Puesto 9 ➝ " + data.result[8].player_name + " (" + data.result[8].goals + " goles) // Equipo: " + data.result[8].team_name;
	jugadorResultado10.innerHTML = "Puesto 10 ➝ " + data.result[9].player_name + " (" + data.result[9].goals + " goles) // Equipo: " + data.result[9].team_name;

})
.catch(err=>console.log(err))

