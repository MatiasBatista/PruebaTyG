//FRASES

frases.innerHTML = '';
function frasesRandom(){
    var ffrases=new Array();
    ffrases[0]="<p id='f1'>El ayer es historia, el mañana es un misterio, pero el hoy es un obsequio. Por eso se llama presente.</p>";
    ffrases[1]="<p id='f2'>Si el rey no se mueve, sus súbditos no lo seguirán.</p>";
    ffrases[2]="<p id='f3'>Wubba lubba dub dub.</p>";
    return(ffrases[Math.floor(Math.random() * ffrases.length)]);
    document.write(frasesRandom());
}
frases.innerHTML += frasesRandom()

//Ver APIS o INICIO

$(document).ready(() =>{
    $('#inicio').show();
    $('#api1').hide();
    $('#api2').hide();

    $('#mostrarInicio').click(function(){
		$('#inicio').show(1000);
        $('#api1').hide();
        $('#api2').hide();
    });
    $('#mostrarApi1').click(function(){
        $('#api1').show(1000);
        $('#inicio').hide();
        $('#api2').hide();
    });
	$('#mostrarApi2').click(function(){
		$('#api2').show(1000);
		$('#inicio').hide();
		$('#api1').hide();
		});
});

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

    var html = '<h1>Info Dolar Argentina</h1>'
        html += '<h3>Dolar Oficial</h3>'
        html += 'COMPRA: $' + dolar.oficial.value_buy;
        html += '<br>'
        html += 'VENTA: $' + dolar.oficial.value_sell;
		html += '<h3>Dolar Blue</h3>'
		html += 'COMPRA: $' + dolar.blue.value_buy;
        html += '<br>'
        html += 'VENTA: $' + dolar.blue.value_sell;


    $("#dolar").html(html);
}

//API COVID 19

$(document).ready(function(){
    $.ajax({
        url: "https://covid-api.mmediagroup.fr/v1/cases",
        method: "GET",
        dataType: "json",
        success: function(response){
            covid(response);
        },
        error: function(req, status, err){
            //
        }
    });

});


function covid(info){

    var html = '<h1>Datos Covid 19</h1>'
        html += '<h3>Argentina</h3>'
		html += 'CASOS CONFIRMADOS: ' + info.Argentina.All.confirmed;
        html += '<br>'
        html += 'RECUPERADOS: ' + info.Argentina.All.recovered;
        html += '<br>'
        html += 'MUERTES: ' + info.Argentina.All.deaths;
		html += '<br>'
		html += '<h3>Global</h3>'
		html += 'CASOS CONFIRMADOS: ' + info.Global.All.confirmed;
		html += '<br>'
        html += 'RECUPERADOS: ' + info.Global.All.recovered;
		html += '<br>'
        html += 'MUERTES: ' + info.Global.All.deaths;

    $("#info").html(html);
}