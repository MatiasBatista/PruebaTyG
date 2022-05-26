
function covid(){
	fetch('https://api.covid19api.com/total/country/argentina')
	.then(response => response.json())
	.then(data => {
		let covid = document.getElementById('covid');
		let actual= data.length -1;
		covid.innerHTML=`
		<table class="cTable">
			<thead class="tabla-d">
				<tr>
					<th colspan="2">Últimos datos oficiales</th>
				</tr>
			</thead>

			<tbody>
				<tr>
					<td class="tabla-a">Confirmados</td>
					<td class="tabla-a">${data[actual].Confirmed}</td>
				</tr>

				<tr>
					<td class="tabla-a">Activos</td>
					<td class="tabla-a">${data[actual].Active}</td>
				</tr>

				<tr>
					<td class="tabla-a">Fallecidos</td>
					<td class="tabla-a">${data[actual].Deaths}</td>
				</tr>

				<tr>
					<td class="tabla-a">Recuperados</td>
					<td class="tabla-a">${data[actual].Recovered}</td>
				</tr>
			</tbody>
		</table>
			`
		console.log(data)
	})
	.catch(error=>console.log(error))
};