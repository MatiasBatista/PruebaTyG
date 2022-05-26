ph1.innerHTML = "";

function ramdomPhrases() {
  var Phrases = new Array();

  Phrases[0] =
    "<p id='f1'> En medio de la dificultad reside la oportunidad. Einstein </p>";
  Phrases[1] =
    "<p id='f2'> Sin música la vida sería un error. Nietz </p>";
  Phrases[2] =
    "<p id='f3'> La ciencia no es solo conocimiento, es una forma de pensar. Carl Sagan </p>";
  return Phrases[Math.floor(Math.random() * Phrases.length)];
  document.write(ramdomPhrases());

}

ph1.innerHTML += ramdomPhrases();


function covid() {
   
    $.ajax({
        url: "https://covid-api.mmediagroup.fr/v1/cases?country=Argentina",
        method: "GET",
        dataType: "json",
        success: function (response) {
        console.log(response);
        document.getElementById("respAPI").innerHTML = `
          
        <p>Confirmados: ${response. All.confirmed} </p>
        <p>Recuperados: ${response.All.recovered} </p>
        <p>Muertos: ${response.All.deaths} </p>
        <p>Actualización: ${response.All.updated} </p>
        <img src="">`;
      },
      error: function (req, status, err) {
        console.log(req, status, err);
      },
    });
  }

  function spacex() {
    $.ajax({
      url: "https://api.spacexdata.com/v4/launches/latest",
      method: "GET",
      dataType: "json",
      success: function (response) {
        console.log(response);
        document.getElementById("respAPI").innerHTML = `
        <img src="${response.links.patch.large}" style="display:block;width:auto;height:100%;border-radius:15px">`
      },
      error: function (req, status, err) {
        console.log(req, status, err);
      },
    });
  }
  