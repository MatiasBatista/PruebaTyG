$(document).ready(setFrase());

function setFrase(){

    var container = $("#fraseRandom")
    let random = Math.floor(Math.random() * 3);

    switch(random){
        case 0:
            container.html("«El destino es algo extraño, nunca se sabe cómo van a resultar las cosas: pero, <br> si mantienes tu mente y corazón abiertos, te prometo que encontrarás tu propio <br> destino algún día»");
            container.attr("class","frase1");
            break;
        case 1:
            container.html("«Es importante adquirir el conocimiento de diferentes pensamientos, opiniones<br>y puntos de vista. Si lo haces desde uno solo, te vuelves rígido y tedioso. <br>Si entiendes al resto, serás alguien completo»");
            container.attr("class","frase2");
            break;
        case 2:
            container.html("«Lo más importante es siempre creer en uno mismo, pero una pequeña ayuda de los demás es una gran bendición»");
            container.attr("class","frase3");
            break;
    }
}

function getJSON(url){

    $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        success: function(response){
            setImage(response.url);
            console.log(response);
            $("#json").html(response);
        },
        error: function(req, status, err){

        }
    });
}

function setImage(url){

   $("#imgMain").attr("src", url);

}



