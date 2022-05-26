function getDolar(){
	fetch('https://api.bluelytics.com.ar/v2/latest')
	.then(response => response.json())
	.then(data => {
		let dolar = document.getElementById('dolar')
		dolar.innerHTML=`
		<br><br><br>
		<table class="table table-striped table-hover" align="center" >
			<colgroup>
				<col style="width: 5%"/>
				<col style="width: 20%"/>
				<col style="width: 20%"/>
				<col style="width: 20%"/>
				<col style="width: 20%"/>
			</colgroup>
			<thead class="thead-green">
				<tr class="solid">
					<th rowspan="2"></th>
					<th colspan="2">Compra</th>
					<th colspan="2"> Venta </th>
				</tr>
				<tr class="solid">
					<th>Oficial</th>
					<th>Blue</th>
					<th>Oficial</th>
					<th>Blue</th>
				</tr>
			</thead>
			<tbody>
				<tr class="solid">
					<th>Dolar</th>
					<td>$${data.oficial.value_buy}</td>
					<td>$${data.blue.value_buy}</td>
					<td>$${data.oficial.value_sell}</td>
					<td>$${data.blue.value_sell}</td>
				</tr>
				<tr>
					<th>Euro</th>
					<td>$${data.oficial_euro.value_buy}</td>
					<td>$${data.blue_euro.value_buy}</td>
					<td>$${data.oficial_euro.value_sell}</td>
					<td>$${data.blue_euro.value_sell}</td>
				</tr>
			</tbody>
		</table>
			`
		console.log(data)
	})
	.catch(error=>console.log(error))
}
