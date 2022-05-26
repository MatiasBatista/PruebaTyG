
function returnRandomText(){
    var randomNumber= Math.floor(Math.random()*(4-1))+1
    if (randomNumber == 1){
        document.getElementById("randomText").innerHTML= 'La frase más random de la página';
    } else if (randomNumber == 2){
        document.getElementById("randomText").innerHTML= 'No leas la siguiente frase';
    } else{
        document.getElementById("randomText").innerHTML= 'Si estas durmiendo es porque no estas despierto';
    }
};
$(document).ready(returnRandomText())


function mostrarHome(){
    $("#home").show();
    $("#home2").show();
    $("#info").hide();
    $("#randomText").show();
    $("#mostrar").hide();
    returnRandomText();
}


function mostrarApiPerros(){
    $.ajax({
        url: "https://dog.ceo/api/breeds/image/random",
        method: "GET",
        dataType: "Json",
        success: function(response) {
            perroImg(response.message);
        },
        error: function(req, status, err) {
            showError();
        }
    })
    $("#home").hide();
    $("#home2").hide();
    $("#info").show();
    $("#randomText").hide();
    $("#mostrar").show();
}


function mostrarApiGatos() {
    $.ajax({
        url: "https://thatcopy.pw/catapi/rest/",
        method: "GET",
        dataType: "Json",
        success: function(response) {
            gatoImg(response.url);
        },
        error: function(req, status, err) {
            showError();
        }

    })
    $("#home").hide();
    $("#home2").hide();
    $("#info").show();
    $("#randomText").hide();
    $("#mostrar").show();
    $(document).getElementById("info").innerHTML= 'Foto de gato:';
}


function perroImg(image) {
    var html= document.getElementById("mostrar");
    
    html.innerHTML=`<p>Foto de perro:</p><hr><img src= ${image} height= 500px width= 500px>`;
}
function gatoImg(image) {
    var html= document.getElementById("mostrar");
   
    html.innerHTML=`<p>Foto de gato:</p><hr><img src= ${image} height= 500px width= 500px>`;
}

function showError() {
    var html= '<div style="color: #f00">Ha ocurrido un error.</div>';

    $("#mostrar").html(html);
}