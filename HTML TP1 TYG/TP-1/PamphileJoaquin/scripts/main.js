
// INSERTAR EN HTML FRASE ALEATORIA
frase.innerHTML = '';
function fraseAleatoria(){    
    let numeroRandom = Math.floor(Math.random() * 3)
    if (numeroRandom == 0) {
        aleatoria = 'Buenos días, fui invocado con js';
    }else if (numeroRandom == 1){
        aleatoria = 'Soy joaquin pamphile, estudiante de ingeniería en sistemas';
    }
    else{
        aleatoria = 'No se me ocurre nada más asi que esta es la tercer frase';
    }
    return aleatoria;
}
frase.innerHTML += fraseAleatoria()


// MOSTRAR SOLO LO QUE SELECCIONO
$(document).ready(() =>{
    $('#home').show();
    $('#api1').hide();
    $('#api2').hide();

    $('#mostrarHome').click(function(){
        $('#home').show();
        $('#api1').hide();
        $('#api2').hide();
    });
    $('#mostrarApi1').click(function(){
        $('#api1').show();
        $('#home').hide();
        $('#api2').hide();
    });
    $('#mostrarApi2').click(function(){
        $('#api2').show();
        $('#home').hide();
        $('#api1').hide();
    });
});


// API IMAGEN DEL DÍA NASA API2
$(document).ready(function(){
    api_key = "dkeZ0FcEtqVgWbu3er9uAkaAxyj2H3SjKvP59HRa";
    $.ajax({
        url: "https://api.nasa.gov/planetary/apod?api_key=" + api_key,
        method: "GET",
        dataType: "json",
        success: function(response){
            imagenDia(response);
        },
        error: function(req, status, err){
            showError();
        }
    });

});

function imagenDia(image){
    var html = '<img src="' + image.hdurl + '">';
    
    $('#img').html(html);
}
function showError(){
    var html = '<div style="color: #f00"> Ha ocurrido un error </div>';
    $('#img').html(html);
}

// API CRIPTOS



// API BITCOIN
$(document).ready(function(){ // DOM
    $.ajax({
        url: "https://rest.coinapi.io/v1/exchangerate/ADA?apikey=F828AD7F-2381-496F-90F4-786CF6F61C27",
        method: "GET",
        dataType: "json",
        success: function(response){
            adaInfo(response.rates);
        },
        error: function(req, status, err){
            showError();
        }
    });

});


function adaInfo(cotizaciones){
    
    var html = '<ul>';
    for (cotizacion in cotizaciones){
        if (cotizaciones[cotizacion].asset_id_quote == 'USDT'){
            html += '<li> 1 ADA: ' + cotizaciones[cotizacion].rate.toFixed(5) + " || " + cotizaciones[cotizacion].asset_id_quote  + '</li>';
        } else if (cotizaciones[cotizacion].asset_id_quote == 'BTC'){
            html += '<li> 1 ADA: ' + cotizaciones[cotizacion].rate.toFixed(5) + " || " + cotizaciones[cotizacion].asset_id_quote  + '</li>';
        } else if (cotizaciones[cotizacion].asset_id_quote == 'ETH'){
            html += '<li> 1 ADA: ' + cotizaciones[cotizacion].rate.toFixed(5) + " || " + cotizaciones[cotizacion].asset_id_quote  + '</li>';
        } else if (cotizaciones[cotizacion].asset_id_quote == 'BNB'){
            html += '<li> 1 ADA: ' + cotizaciones[cotizacion].rate.toFixed(5) + " || " + cotizaciones[cotizacion].asset_id_quote  + '</li>';
        } else if (cotizaciones[cotizacion].asset_id_quote == 'ONE'){
            html += '<li> 1 ADA: ' + cotizaciones[cotizacion].rate.toFixed(5) + " || " + cotizaciones[cotizacion].asset_id_quote  + '</li>';
        } else if (cotizaciones[cotizacion].asset_id_quote == 'DOGE'){
            html += '<li> 1 ADA: ' + cotizaciones[cotizacion].rate.toFixed(5) + " || " + cotizaciones[cotizacion].asset_id_quote  + '</li>';
        }  
    }
    html += '</ul>';

    $('#ada').html(html);
}
function showError(){
    var html = '<div style="color: #f00"> Ha ocurrido un error </div>';
    $('#ada').html(html);
}