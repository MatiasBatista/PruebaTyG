document.addEventListener("DOMContentLoaded", function(event) {
    ApiAudioDB();
});

function ApiAudioDB()
  {
    const settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://theaudiodb.p.rapidapi.com/mostloved.php?format=track",
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "ed4bddfa65msh1ff7b82808a6c42p13283ajsn3923511730c1",
        "x-rapidapi-host": "theaudiodb.p.rapidapi.com"
      }
    };
    
    $.ajax(settings).done(function (response) {
      console.log(response);
      cancionRandom(response);
    });
  };

  function cancionRandom(response)
  {
    var pos = Math.floor((Math.random() * response.loved.length));
    if (pos >= 1 && pos <= response.loved.length) {
    var html ='<h1> Canción aleatoria - The Audio database 🎶</h1>';
    html += "<p> <b>Canción: </b>" + response.loved[pos].strTrack + "</p>";
    html += "<p> <b>Artista:</b> " + response.loved[pos].strArtist + "</p>";
    $("#audiodb").html(html);
    }
  }