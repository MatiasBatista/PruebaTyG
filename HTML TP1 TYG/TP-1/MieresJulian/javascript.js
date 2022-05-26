var quoteList = [
		"'Houston, we have a problem.' ― Apollo 13 (1995)",
		"'I'm gonna make him an offer he can't refuse.' ― The Godfather (1972)",
		"'Here's Johnny!.' ― The Shining (1980)"		
			]

function newQuote() {
	
	var randomNumber = Math.floor(Math.random() * (quoteList.length));
	var quote = document.getElementById("main-frases");
	
	if (randomNumber == 0) {
		
		quote.style.fontFamily = "Impact,Charcoal,sans-serif";
		quote.style.fontSize = "25px";
		quote.style.letterSpacing = "2px";
		quote.style.wordSpacing = "2px";
		quote.style.color = "#397799";
		quote.style.textShadow = "0 -1px 4px #00e6e6, 0 -2px 10px #01cccc, 0 -10px 20px #00bdbd, 0 -18px 40px #FFFFFF";
		
	
	} else if (randomNumber == 1) {				
		quote.style.fontFamily = "Lucida Sans Unicode,Lucida Grande,sans-serif";
		quote.style.fontSize = "22px";
		quote.style.fontWeight = "bold";
		quote.style.letterSpacing = "4px";
		quote.style.wordSpacing = "2px";
		quote.style.color = "#2a64aa";
		quote.style.textShadow = "0 1px #808d93, -1px 0 #cdd2d5, -1px 2px #808d93, -2px 1px #cdd2d5, -2px 3px #808d93, -3px 2px #cdd2d5, -3px 4px #808d93, -4px 3px #cdd2d5, -4px 5px #808d93, -5px 4px #cdd2d5" 
	} else {
		
		quote.style.fontFamily = "Arial Black,Gadget,sans-serif";
		quote.style.fontSize = "22px";
		quote.style.letterSpacing = "1px";
		quote.style.wordSpacing = "2px";
		quote.style.color = "#548596";
		quote.style.textShadow = "3px 3px 0px #00e6e6, 6px 6px 0px #01cccc, 9px 9px 0px #00bdbd";
		
	}

	quote.innerHTML = quoteList[randomNumber]
}

	let map;
	let marker;
	let watchID;
	let geoLoc;
	var myLatLong;
	

	function initMap() {

		getPosition();

		var mapa1 = document.getElementById("main-maps");

		mapa1.style.fontFamily = "";
		mapa1.style.fontSize = "";
		mapa1.style.letterSpacing = "";
		mapa1.style.wordSpacing = "";
		mapa1.style.color = "";
		mapa1.style.textShadow = "";

		map = new google.maps.Map(document.getElementById("main-maps"), {
			center: myLatLong,
			zoom: 16,

		});

		marker = new google.maps.Marker(
		{
			position: myLatLong,
			map:map,
			title: "Tu ubicación"   			
		});
	}





	function getPosition(){

		if (navigator.geolocation){
			geoLoc = navigator.geolocation;
			watchID = geoLoc.watchPosition(showLocationOnMap, errorHandler);
		}
		else{
			alert("No ha brindado permisos para acceder a su geolocalización.")
		}
	}

	function showLocationOnMap(position){
		var latitud = position.coords.latitude;
		var longitud = position.coords.longitude;
		console.log("Latitud: " + latitud + "Longitud: " + longitud)
		myLatLong = { lat: latitud, lng: longitud };
		marker.setPosition(myLatLong);
		map.setCenter(myLatLong);
	}	

	function errorHandler(err){
		if(err.code == 1){
			alert("No ha brindado permisos para acceder a su geolocalización.")
		} else if (err.code == 2){
			alert("Error.")
		}
	}

	


function goToHomePage()
  {
    window.location = '/2021/home.html';   
  }