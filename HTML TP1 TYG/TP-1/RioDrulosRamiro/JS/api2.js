document.addEventListener("DOMContentLoaded", function(event) {
    ApiIMDB();
});

function ApiIMDB()
  {
    const settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-random-movies&page=1",
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "ed4bddfa65msh1ff7b82808a6c42p13283ajsn3923511730c1",
        "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com"
      }
    };
    
    $.ajax(settings).done(function (response) {
      console.log(response);
      peliculaRandom(response);
    });
  };

  function peliculaRandom(response)
  {
    var pos = Math.floor((Math.random() * response.movie_results.length));
    if (pos >= 1 && pos <= response.movie_results.length) {
    var html ='<h1> Película aleatoria - Internet Movie Database 🎥 </h1>';
    html += "<p> <b>Título:</b> " + response.movie_results[pos].title + "</p>";
    html += "<p> <b>Año: </b>" + response.movie_results[pos].year + "</p>";
    html += "<p> <b>Géneros: </b> " + response.movie_results[pos].genres + "</p>";
    $("#imdb").html(html);
    }
  }