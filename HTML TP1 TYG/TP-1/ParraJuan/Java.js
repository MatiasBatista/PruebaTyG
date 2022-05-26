frasesRan.innerHTML = '';
function frasesRandom(){
    var Frases=new Array();
    Frases[0]="<p id='frase1'>El Tiempo que se disfruta, es el verdadero tiempo vivido.";
    Frases[1]="<p id='frase2'>Si caiste ayer, ponte de pie hoy.";
    Frases[2]="<p id='frase3'>Si te da paz, ya te esta dando todo.";
    aleatorio= Math.random() * (Frases.length);
    aleatorio= Math.floor(aleatorio);
    return(Frases[aleatorio]);
    document.write(Frases[aleatorio]);
}
frasesRan.innerHTML += frasesRandom()

$(document).ready(function getApi1(){

    $.ajax({

        url : "https://www.breakingbadapi.com/api/characters/1",
        method: "GET",
        dataType: "json",
        success:function(response) {
            console.log(response);
            breakingBad(response);
        },

        error: function(req, status, err) {

           console.log(req, status, err)
        },

    });

});

function breakingBad(response){
    var breakingB ='<h1> Descripcion Walter White <h1>';
    breakingB  += "<p> Nombre:" + response[0].name + "</p>";
    breakingB  += "<p> Apodo:" + response[0].nickname + "</p>";
    breakingB  += "<p> Cumpleaños:" + response[0].birthday + "</p>";
    breakingB  += "<p> Ocupacion: " + response[0].occupation + "</p>";
    breakingB  += "<p> Actor" + response[0].portrayed + "</p>";
    breakingB  += "<p> Status:" + response[0].status + "</p>";      
$("#walter").html(breakingB);
}


$(document).ready(function(){
    $.ajax({

        url : "https://www.swapi.tech/api/planets/3/",
        method: "GET",
        dataType: "json",
        success:function(response) {
            planeta(response);
        },

        error: function(req, status, err) {

           console.log(req, status, err)
        },

    });

});

function planeta(response){
    var planet ='<h1> Descripcion planeta Yavin IV (StarWars)<h1>';
    planet += "<p> Nombre:" + response.result.properties.name + "</p>";
    planet += "<p> Descripcion:" + response.result.description + "</p>";
    planet += "<p> Poblacion:" + response.result.properties.population + "</p>";
    planet += "<p> Creacion:" + response.result.properties.created + "</p>";
    planet += "<p> Clima: " + response.result.properties.climate + "</p>";
    planet += "<p> Diametro: " + response.result.properties.diameter + "</p>";
    planet += "<p> Gravedad:" + response.result.properties.gravity + "</p>";   
    planet += "<p> Terreno:" + response.result.properties.terrain + "</p>";

    $("#planeta").html(planet);
}

$(document).ready(() =>{
    $('#init').show(); 
    $('#walter').hide();
    $('#planeta').hide();

    $('#inicio').click(function(){
        $('#init').show(2000); 
        $('#walter').hide(2000);
        $('#planeta').hide(2000);
    });
    $('#WalterW').click(function(){
        $('#walter').show(2000);
        $('#planeta').hide(2000);
        $('#init').hide(2000);
    });
    $('#StarWars').click(function(){
        $('#planeta').show(2000); 
        $('#init').hide(2000);
        $('#walter').hide(2000);
    });
});





