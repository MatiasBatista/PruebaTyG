
$(document).ready(
	$("#fotospace").click(function (e) {
		$("#rtaAPI").empty();
		


		var randnum= Math.floor(Math.random()*500);
		$.ajax({
			url:"https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol="+randnum+"&api_key=RVtPIavXGcfHf3a1YPWjffegPvpQXyRaHWQcSK7M",
			method: "GET",
			dataType: "json",
			success: function(response){
				var foto = response.photos[0];
				var desc = response.explanation;
	        	$('#rtaAPI').prepend($('<img>',{id:'theImg',src:foto.img_src}))
	        	$('#rtaAPI').append($('<p>'+foto.rover.name+' rover</p>'))

			},
			error: function(req, status, err){
				//showError();
			}
	});
}));

$(document).ready(
	$("#weather").click(function (e) {
		$("#rtaAPI").empty();
		
		
		$.ajax({
			
			url:"http://api.weatherapi.com/v1/current.json?key=587f39b1d3554309ad7230927213004&q=32920&aqi=no",
			method: "GET",
			dataType: "json",
			success: function(response){
				var location = response.location.name
				var clima = response.current.temp_c
				var viento = response.current.wind_kph
				var condicion = response.current.condition.text
				$('#rtaAPI').append($('<p> <b><u>Clima en '+location+':</u></b> <br><br> '+condicion+'<br>'+clima+' grados celsius con vientos de: '+ viento+' km/h </p>'))
				console.log(condicion)
			},
			error: function(req, status, err){
				console.log(req, status, err)
			
	}
})}))


const randomText = async() => {
	frases=["Un pequeño paso para el hombre, un gran salto para la humanidad", 
	"El señor Galileo tenía razón", "Houston, tenemos un problema"]
	sombracolores=["2px 2px #f66fa6","2px 2px #934eb8","2px 2px #9ddcee"];
	var randnum= Math.floor(Math.random()*frases.length); /*Al aplicar la funcion random fuera de la eleccion 
	nos aseguramos que cada frase va con su respectivo estilo.*/
	var frase = frases[randnum];
	var sombra = sombracolores[randnum];

	//console.log(sombra)
	
	document.getElementById("titulo").innerHTML = frase
	document.getElementById("titulo").style.textShadow = sombra;

}

randomText()


$(document).ready(
    function(){
        $("#fotospace").click(function (e) {
            e.preventDefault();
            if ($("#rtaAPI").is(".actMars")){
            	$("#rtaAPI").hide("slow")
				$("#rtaAPI").removeClass();
            }
            else{
            	$("#rtaAPI").show("slow");
            	$("#rtaAPI").removeClass();
            	$("#rtaAPI").addClass("actMars");

            }
         	

        });

    });

$(document).ready(
    function(){
        $("#weather").click(function (e) {
            e.preventDefault();
            if ($("#rtaAPI").is(".actClima")){
            	$("#rtaAPI").hide("slow")
				$("#rtaAPI").removeClass();
            }
            else{
            	$("#rtaAPI").show("slow");
            	$("#rtaAPI").removeClass();
            	$("#rtaAPI").addClass("actClima");

            }

        });

    });

