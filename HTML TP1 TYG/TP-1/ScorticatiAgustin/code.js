// Funcion para generar la frase aleatoria
$(document).ready(function randomtext() {
  var random = (Math.random() * (3 - 1) + 1).toFixed(); // Genera un numero aleatorio del 1 al 3
  if (random == 1) {
    document.getElementById("random-text").innerHTML =
      '"A LA GLORIA NO SE LLEGA POR UN CAMINO DE ROSAS", Osvaldo Zubeldía';
    document.querySelector("#random-text").style.textShadow = "1px 1px green"; //Cambia el sombreado a verde
  } else if (random == 2) {
    document.getElementById("random-text").innerHTML =
      '"SEÑORITA, YO TENGO 50 AÑOS DE CANCHA. ESTO NO TIENE BEBIDA ALCOHÓLICA, TIENE GATOREI", Dr. Carlos Salvador Bilardo';
    document.querySelector("#random-text").style.textShadow = "1px 1px red"; //Cambia el sombreado a rojo
  } else if (random == 3) {
    document.getElementById("random-text").innerHTML =
      '"YO ME EQUIVOQUE Y PAGUÉ, PERO LA PELOTA, LA PELOTA NO SE MANCHA", Diego Armando Maradona';
    document.querySelector("#random-text").style.textShadow = "1px 1px blue"; // cambia sombreado a azul
  }
});

// ----------------------------------------------------------------------------
// GET primera API (Clima en Quilmes)
function api1() {
  $.ajax({
    url:
      "http://api.weatherapi.com/v1/current.json?key=587f39b1d3554309ad7230927213004&q=Quilmes&aqi=no",
    method: "GET",
    dataType: "json",
    success: function (response) {
      climaQuilmes(response.current); // Llamada a funcion que muestra el clima en quilmes
    },
    error: function (req, status, err) {
      $("#contenido-api").html("Ha surgido un error"); // Si ocurre un error muestra este mensaje
    },
  });
}

// Declaracion de funcion que muesrta el clima en quilmes
function climaQuilmes(clima) {
  const temp = clima.temp_c + " °C"; // guardo temperatura en variable temp
  const viento = clima.wind_kph + " km/h"; // guardo viento en variable
  const humedad = clima.humidity + "%"; // guardo humedad en variable
  const foto = "http:" + clima.condition.icon; // guardo foto de condicion de clima en foto

  // HTML para mostrar el clima en Quilmes con el viento y humedad
  var html =
    "<h3 style='text-align: center; text-decoration:underline'>Clima en Quilmes</h3> \
    <div class='clima'> \
      <p class='temp'>" +
    temp +
    "</p> \
      <img src='" +
    foto +
    "' weight='50px' height='50px' style='align-items: center'/></br> \
      <span>| <strong>Viento:</strong>" +
    viento +
    "</span> \
      <span> | | </span> \
      <span> <strong>Humedad:</strong>" +
    humedad +
    " |</span> \
    </div>";

  $("#contenido-api").html(html).hide().show(1500); // Muestra el contenido en pantalla con una animacion de show
}

// ----------------------------------------------------------------------------
// GET segunda API (Foto aleatoria de perros)
function api2() {
  $.ajax({
    url: "https://api.thedogapi.com/v1/images/search",
    method: "GET",
    dataType: "json",
    success: function (response) {
      perro(response); // Llamada a funcion que muestra una foto de un perro
    },
    error: function (req, status, err) {
      $("#contenido-api").html("Ha surgido un error"); // Si ocurre un error muestra este mensaje
    },
  });
}

// Declaracion de la funcion que muestra una foto de un perro
function perro(response) {
  var hasAtribute = response[0].breeds.length; // Verifica que el JSON tenga el atributo nombre
  if (hasAtribute == 0) {
    // Si no lo tiene, Pone raza indefinida
    var html =
      "<h3 style='text-align: center; text-decoration:underline'>Raza: Indefinida</h3>";
  } else {
    // Si lo tiene, muestra la raza del perro
    var html =
      "<h3 style='text-align: center ; text-decoration:underline'>Raza: " +
      response[0].breeds[0].name +
      "</h3>";
    html += "<br>";
  }
  html +=
    "<img src='" +
    response[0].url +
    "' weight='300px' height='300px' class='imgAPI'/>"; // img del perro

  $("#contenido-api").html(html).hide().fadeIn(1500); // Muestra el contenido en pantalla con una animacion de show
}
