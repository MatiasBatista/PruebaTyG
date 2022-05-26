//pensamientos aleatorios
pensRandom.innerHTML = '';
function randomThoughs(){
    var arrThoughs=new Array();
    arrThoughs[0]="<p id='rd1'>La imaginación frecuentemente nos llevará a mundos que jamás fueron. Pero sin ella, no iremos a ningún lado.</p>";
    arrThoughs[1]="<p id='rd2'>Si no quieres obtener siempre los mismos resultados, no hagas siempre lo mismo.</p>";
    arrThoughs[2]="<p id='rd3'>Lo más importante es la actitud frente a los desafíos.</p>";
    return(arrThoughs[Math.round((Math.random() * 10) / 4)]);
    document.write(randomThoughs());
}
pensRandom.innerHTML += randomThoughs()


//frame que aparece al seleccionar opción con cada botón

$(document).ready(() =>{
    
    $('#usdolar').hide();
    $('#covid').hide();
    $('#inicio').show(1000);

    $('#mostrarInicio').click(function(){
        $('#inicio').show(1000);
        $('#usdolar').hide();
        $('#covid').hide();
    });
    $('#mostrarDolar').click(function(){
        $('#usdolar').show(1000);
        $('#inicio').hide();
        $('#covid').hide();
    });
    $('#mostrarCovid').click(function(){
        $('#covid').show(1000);
        $('#inicio').hide();
        $('#usdolar').hide();
    });
});


// traigo la api con valores del dolar
$(document).ready(function(){
    $.ajax({
        url: "https://api.bluelytics.com.ar/v2/latest",
        method: "GET",
        dataType: "json",
        success: function(response){
            dolarBlue(response);
        },
        error: function(req, status, err){
            //
        }
    });

});

//ahora la función que me va a dar la info del dolar blue
function dolarBlue(dolar){
    
    var html = '<h1>Cotización Dolar Blue</h1>'
        html += 'Comprador: $' + dolar.blue.value_buy;
        html += '<br>'
        html += 'Vendedor: $' + dolar.blue.value_sell;
        html += '<br>'
        html += 'Promedio: $' + dolar.blue.value_avg;

    $("#dolar").html(html);
}


// traigo la api con los casos de covid
$(document).ready(function(){
    $.ajax({
        url: "https://covid-api.mmediagroup.fr/v1/cases?country=Argentina",
        method:"GET",
        dataType:"json",
        success: function(response){
            casos(response);
        },
        error: function(req, status, err){
        }
    });
});

//ahora la función que me va a dar la info de los casos de covid
function casos(caso){
    
    var html = '<h1>COVID en Argentina</h1>'
        html += 'Confirmados: ' + caso.All.confirmed ;
        html += '<br>'
        html += 'Recuperados: ' + caso.All.recovered ;
        html += '<br>'
        html += 'Fallecidos: ' + caso.All.deaths ;
    $("#caso").html(html);
};