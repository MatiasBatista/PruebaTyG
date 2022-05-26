let jokeurl = "https://v2.jokeapi.dev/joke/Any?safe-mode"
var randomJoke = JSON.parse
var fin = randomJoke.delivery
var textohome = home
if(randomJoke.type == "single"){
    var broma = randomJoke.joke
}else{
    var broma = randomJoke.setup
}
var imag = document.getElementById('foto')

function Gohome(){
    broma=document.getElementById("joke")
    broma.style.display = "none"
    fin=document.getElementById("delivery")
    fin.style.display = "none"
    imag.innerHTML= ''
    textohome.innerHTML = 
    `<p>
    Mi expectativa con la materia, es aprender mas del mundo sobre el desarrollo WEB, ya que es algo que siempre me llamo la atencion desde que lo descubri. 
    <br><br>
    Con este trabajo, pude descubrir un poco de este mundo, lo que me entusiasmo.
    `
    
}

function Imagenrandom(){
    textohome.innerHTML = ''
    broma=document.getElementById("joke")
    broma.style.display = "none"
    fin=document.getElementById("delivery")
    fin.style.display = "none"
    let imag = document.getElementById('foto')
    imag.innerHTML = `<p class="foto">Su foto seleccionada aleatoriamente es: <br></p><img src= ${"https://picsum.photos/400/400?random=1"}>`
}

function Getjoke(){
    
    $.ajax({
        url:jokeurl,
        method: 'GET',
        Headers: {
            'Content-Type': 'application/json'
        },
        success: function(reponse){
            console.log(reponse);
        },
        error: function(req, status, err){
            console.log(req, status, err);
        }
    });
    broma=document.getElementById("joke")
    broma.style.display = "block"
    fin=document.getElementById("delivery")
    fin.style.display = "block"
    textohome.innerHTML = ''
    imag.innerHTML=''
    fetch(jokeurl)
    .then(function(reponse) {
      return reponse.json();
    })
    .then(randomJoke => {
        if(randomJoke.type == "single")
        {
            // If type == "single", the joke only has the "joke" property
            let broma = randomJoke.joke;
            broma = document.getElementById('joke')
            broma.innerHTML = `<p>Broma Elegida: </p><h1> ${randomJoke.joke} </h1>`

            fin.innerHTML = ''
        }
        else
        {
            let broma = randomJoke.setup  
            broma = document.getElementById('joke') 	
            broma.innerHTML = `<p>Broma Elegida: </p><h1> ${randomJoke.setup} </h1>`

            fin = document.getElementById('delivery')
            fin.innerHTML = `<h2> ${randomJoke.delivery} </h2>`
        }
        console.log(randomJoke)
    });
}

