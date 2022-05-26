
$(document).ready(function(){
    $.ajax({
        url: 'https://api.ipify.org?format=json',
        method: "GET",
        dataType: "json",
        success: function(response){
            ipInfo(response);

        },
        error: function (req, status, err) {
            
        },
    });
});

function ipInfo (ippub) {
    var html = '<li>' + ippub.ip ;
    

    $("#ipub").html(html);


};

var variable; 


$(document).ready(function(){
    $.ajax({
        url: "https://opentdb.com/api.php?amount=1&category=9&difficulty=medium&type=boolean",
        method: "GET",
        dataType: "json",
        success: function(response){
            preguntas(response.results);
            console.log(response);
         
        },
        error: function (req, status, err) {
            
        },
    });
});


function preguntas(p){
    let obj    = Object.values(p);   
    var html = '<li>' + obj[0].question ;
    $("#pregunta").html(html);
}


$(document).ready(function(){
    $.ajax({
        url: "https://palabras-aleatorias-public-api.herokuapp.com/random",
        method: "GET",
        dataType: "json",
        success: function(response){
            palabra(response);
            console.log(response)

        },
        error: function (req, status, err) {
            
        },
    });
});

 function palabra(objeto){
    var html = '<li>' + objeto.body.Word + '<ul>' + 'Autor:'+ objeto.api_owner.author;
    $("#palab").html(html);

 };