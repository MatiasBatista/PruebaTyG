    var aleatorio = (Math.random() * (3 - 1) + 1).toFixed();

    $(document).ready(function frasesAleatorias() {
        
        if (aleatorio==1){
            document.getElementById("frases-aleatorias").innerHTML =
            'Vivir solo cuesta vida.';
            document.querySelector("#frases-aleatorias").style.textShadow = "-2px 2px green";
        } 
        
        if (aleatorio==2){
            document.getElementById("frases-aleatorias").innerHTML =
            'Fijate de que lado de la mecha te encontrás.';
            document.querySelector("#frases-aleatorias").style.textShadow = "-2px 2px grey";
        } 
        
        if (aleatorio==3){
            document.getElementById("frases-aleatorias").innerHTML =
            'Cuando la noche es más oscura, se viene el día en tu corazón.';
            document.querySelector("#frases-aleatorias").style.textShadow = "-2px 2px red";
        }
        
    });


function API1(){

    $.ajax({

        url : "https://api.nasa.gov/planetary/apod?api_key=iswPjoCdlgPGbmH7EWU9fgYMMuxK6lel7ax3b3qf",
        method: "GET",
        dataType: "json",
        success:function(response) {

            imagenNasa(response);
        },

        error: function(req, status, err) {

           console.log(req, status, err)
        },

    });

}

function imagenNasa(response){

    var html = "<h1>" + response.title + "</h1>";
    html += "<br>";
    html += "<img src='" + response.hdurl + "' width='1000px' height='700px'/>";
    html += "<p>" + response.explanation + "</p>"
    html += "<p> Imagen del día: " + response.date + "</p>"
    html += "<hr>";
    $("#API").html(html);
}

function API2(){

    var num = Math.floor(Math.random()*1000);

    $.ajax({

        url : "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol="+num+"&api_key=iswPjoCdlgPGbmH7EWU9fgYMMuxK6lel7ax3b3qf",
        method: "GET",
        dataType: "json",
        success:function(response) {

            imagenCuriosity(response);

        },

        error: function(req, status, err) {

           console.log(req, status, err)
        },

    });

}

function imagenCuriosity(response){

    var html = "<h1> Rover: " + response.photos[0].rover.name + "</h1>";
    html += "<br>";
    html += "<img src='" + response.photos[0].img_src + "' width='1000px' height='700px'/>";
    html += "<h2> Imagen del día: " + response.photos[0].earth_date + "</h2>";
    html += "<hr>";

    $("#API").html(html);
}