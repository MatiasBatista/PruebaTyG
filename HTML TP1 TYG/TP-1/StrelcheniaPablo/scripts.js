frases.innerHTML = "";

function ramdomPhrases() {
  var Phrases = new Array();
  Phrases[0] =
    "<p id='f1'> Hablar continuamente no significa comunicar. Carrey </p>";
  Phrases[1] =
    "<p id='f2'> Dos cosas son infinitas: la estupidez humana y el universo; y no estoy seguro de lo segundo. Einstein </p>";
  Phrases[2] =
    "<p id='f3'> El éxito consiste en ir de fracaso en fracaso sin perder el entusiasmo. Churchill </p>";
  return Phrases[Math.floor(Math.random() * Phrases.length)];
  document.write(ramdomPhrases());
}
frases.innerHTML += ramdomPhrases();

function simpsonsQuotes() {
  $("#rtaAPI").empty();
  $.ajax({
    url: "https://simpsons-quotes-api.herokuapp.com/quotes",
    method: "GET",
    success: function (response) {
      console.log(response);
      document.getElementById("rtaAPI1").innerHTML = `<br>
      <p style="color:orange;font-size:20px;font-weight: bold";>" ${response[0].quote} "</p>  
      <br><p> ${response[0].character} </p>
      <img src="${response[0].image}">`;
    },
    error: function (req, status, err) {
      console.log(req, status, err);
    },
  });
}

function lebron() {
  $.ajax({
    url: "https://www.balldontlie.io/api/v1/players/237",
    method: "GET",
    dataType: "json",
    success: function (response) {
      console.log(response);
      document.getElementById("rtaAPI1").innerHTML = `
      <p style="color:blue;background-color:white;border-radius:20px;">INFORMACION DE JUGADOR | NBA </p> 
      <p>Equipo: ${response.team.full_name}</p>
      <p>Ciudad: ${response.team.city}</p>
      <p>Conferencia: ${response.team.conference}</p>
      <p style="font-weight: bold;color:yellow;">Apellido: ${response.first_name} </p> 
      <p style="font-weight: bold;color:violet">Nombre: ${response.last_name} </p>
      <p>Altura: ${response.height_feet * 0.3048 - 0.0088000000000002}</p>
      <p>posicion: ${response.position} </p>
      <p>Sigla: ${response.team.abbreviation} </p>
      <img style="width:auto;height:20%;" src="./img/bsk.png ">`;
    },
    error: function (req, status, err) {
      console.log(req, status, err);
    },
  });
}


function fox() {
  $.ajax({
    url: "https://randomfox.ca/floof/",
    method: "GET",
    dataType: "json",
    success: function (response) {
      console.log(response);
      document.getElementById("rtaAPI1").innerHTML = `
      <img src="${response.image}" style="display:block;width:auto;height:100%;border-radius:15px">`
    },
    error: function (req, status, err) {
      console.log(req, status, err);
    },
  });
}
