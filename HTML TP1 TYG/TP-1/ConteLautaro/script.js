//FRASES RANDOM AL INICIO
frases.innerHTML = '';
function frasesAleatorias(){
    var aFrases=new Array();
    aFrases[0]="<p id='f1'> Las cosas no se hacen siguiendo caminos distintos para que no sean iguales, sino para que sean mejores.</p>";
    aFrases[1]="<p id='f2'>El fracaso es una opcion. Si las cosas no fallan es que no estas innovando lo suficiente.</p>";
    aFrases[2]="<p id='f3'>Esta bien tener tus huevos en una canasta siempre y cuando controles lo que le sucede a esa canasta.</p>";
    return(aFrases[Math.floor(Math.random() * aFrases.length)]);
    document.write(frasesAleatorias());
}
frases.innerHTML += frasesAleatorias()


//--------------------------------------------------------------//


//VER LA OPCION SELECCIONADA
$(document).ready(() =>{
    $('#home').show(); //muestro mediante id
    $('#api').hide();
    $('#api2').hide();

    $('#mostrarHome').click(function(){
        $('#home').show(1000); //muestro mediante id
        $('#api').hide();
        $('#api2').hide();
    });
    $('#mostrarApi').click(function(){
        $('#api').show(1000); //muestro mediante id
        $('#home').hide();
        $('#api2').hide();
    });
    $('#mostrarApi2').click(function(){
        $('#api2').show(1000); //muestro mediante id
        $('#home').hide();
        $('#api').hide();
    });
});


//-------------------------------------------------------------//

//API BITCOIN
$(document).ready(function(){
    $.ajax({
        url: "https://api.coindesk.com/v1/bpi/currentprice/ARS.json",
        method: "GET",
        dataType: "json",
        success: function(response){
            btcInfo(response.bpi);
        },
        error: function(req, status, err){
            //
        }
    });

});


function btcInfo(currencies){
    
    var html = '<ul><h1>Precio BTC (Bitcoin)</h1>';

    for (currency in currencies) {
    	html += '<li>' + currencies[currency].description + ': $' + currencies[currency].rate_float.toFixed(2) + '</li>';
    }
        
	html += '</ul>';

	$("#btc").html(html);
}



//-------------------------------------//

//API DOLAR

$(document).ready(function(){
    $.ajax({
        url: "https://api.bluelytics.com.ar/v2/latest",
        method: "GET",
        dataType: "json",
        success: function(response){
            dolarInfo(response);
        },
        error: function(req, status, err){
            //
        }
    });

});


function dolarInfo(dolar){
    
    var html = '<h1>Precio Dolar Blue</h1>'
        html += 'COMPRA: $' + dolar.blue.value_buy;
        html += '<br>'
        html += 'VENTA: $' + dolar.blue.value_sell;

        html += '<h1>Precio Dolar Oficial</h1>'
        html += 'COMPRA: $' + dolar.oficial.value_buy;
        html += '<br>'
        html += 'VENTA: $' + dolar.oficial.value_sell;


    $("#dolar").html(html);
}