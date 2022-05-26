
function getapi(){
	$.ajax({
		url:'https://api.quotable.io/random',
		method: 'GET',
		success: function(response){
			console.log(response);
			document.getElementById("contenido").innerHTML = `
			<br><p style="color:blue;font-size:36px;">"${response.content}"</p><br>
			<p style="font-size:20px;">- ${response.author}</p>
			`;
		},
		error: function(req, status, err){
			console.log(req, status, err);
		}
	});
}


function getapi2(){
	$.ajax({
		url:'https://api.thecatapi.com/v1/images/search',
		method: 'GET',
		success: function(response){
			console.log(response);
			document.getElementById("contenido").innerHTML = `<img src='${response[0].url}' height=600px widht=600px/>`;
		},
		error: function(req, status, err){
			console.log(req, status, err);
		}
	});
}


function getapi3(){
	$.ajax({
		url:'https://foodish-api.herokuapp.com/api/',
		method: 'GET',
		success: function(response){
			console.log(response);
			document.getElementById("contenido").innerHTML = `<img src='${response.image}' height=600px widht=600px/>`;
		},
		error: function(req, status, err){
			console.log(req, status, err);
		}
	});
}