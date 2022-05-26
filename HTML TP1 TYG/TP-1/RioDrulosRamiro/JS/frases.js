frasesJS.innerHTML = ''
var conjunto_Frases = [{
    frase: " <p id=frase1> “Carpe diem. Aprovechen el día. Hagan sus vidas extraordinarias” </p>",
    pelicula: "El club de los poetas muertos (1989)"
  }, {
    frase: " <p id=frase2> “Mamá siempre decía que la vida era como una caja de chocolates. Nunca sabes qué te va a tocar” </p>",
    pelicula: "Forrest Gump (1994)"
  }, {
    frase: " <p id=frase3> “Pensamos demasiado y sentimos muy poco” </p>",
    pelicula: "El gran dictador (1940)"
  }, ];
  
  function generarfrase() 
  {
    var randomNum = Math.floor((Math.random() * conjunto_Frases.length));
    for (var i = 0; i < conjunto_Frases.length; i++) 
    {
        if (i === randomNum) 
        {
            var fraseObj = conjunto_Frases[i]
            var resultado="<i> " + fraseObj["frase"] + " </i> <b> - " + fraseObj["pelicula"] + " </b>";
        }
    }
    return resultado;
  }

  frasesJS.innerHTML += generarfrase()