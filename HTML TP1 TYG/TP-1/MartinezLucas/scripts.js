var Frases=new Array()
Frases[0] = "Si en los inicios no puedes alimentar a tu equipo con 2 pizzas, es que es demasiado grande – Jeff Bezos de Amazon.";
Frases[1] = "El valor de una idea radica en el uso de la misma – Thomas Edison.";
Frases[2] = "El trabajo va a ocupar gran parte de tu vida. La única forma de estar realmente satisfecho es hacer aquello que crees que es un buen trabajo, y la única forma de hacer un gran trabajo es amar aquello que haces – Steve Jobs de Apple.";
var numAleatorio=Math.floor(Math.random()*(Frases.length));
var Sombra=new Array()
Sombra[0] = "sombra1";
Sombra[1] = "sombra2";
Sombra[2] = "sombra3";
var datos= document.getElementById ("hola");
var sombras= numAleatorio;
//datos.innerHTML=Frases[numAleatorio];
//datos.innerHTML= "<div class="+sombras+"> " + Frases[numAleatorio] ;
datos.innerHTML= "<div style= 'font-size: 2rem' class= " + Sombra[numAleatorio] + "><i>" + Frases[numAleatorio]; + "</i></div>";

/*$(document).ready(function(){
    $.ajax({
        url: "https://dog.ceo/api/breeds/image/random",
        method: "GET",
        dataType: "json",
        success: function (response) {
            console.log(response);
        },
        error: function(req, status,err){
            //
        }
    });
});
*/

