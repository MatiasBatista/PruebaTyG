
$(document).ready(() =>{
    $('#init').show();
    $('#api1').hide();
    $('#api2').hide();

    $('#verInicio').click(function(){
        $('#init').show();
        $('#api1').hide();
        $('#api2').hide();
    });
    $('#verFeriados').click(function(){
        $('#api1').show();
        $('#init').hide();
        $('#api2').hide();
    });
    $('#verCasos').click(function(){
        $('#api2').show();
        $('#init').hide();
        $('#api1').hide();
    });
});
$(document).ready(function(){
    $.ajax({
        url: "https://calendarific.com/api/v2/holidays?&api_key=43cbb3eedde0eb7db30b968dd0e57f901e7db6c7&country=AR&year=2021",
        method:"GET",
        dataType:"json",
        success: function(response){
            feriados(response);
        },
        error: function(req, status, err){
        }
    });
});

function feriados(feriado){
    function getNumero(min, max){
        return Math.floor(Math.random() * (max - min) + min);
    };
    a=getNumero(0,42);
    console.log(a);
    var html = '<h1>Dias Feriados</h1>'
        html += 'El nombre del dia es: ' + feriado.response.holidays[a].name + ".";
        html += '<br><br><br>'
        html += 'Se celebra el dia: ' + feriado.response.holidays[a].date.iso + ".";
        html += '<br><br><br>'
        html += 'Informacion sobre el feriado: ' + feriado.response.holidays[a].description + "."; 

    $("#feriado").html(html);
}
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

function casos(caso){
    
    var html = '<h1>Casos de COVID en Argentina</h1>'
        html += 'Casos confirmados: ' + caso.All.confirmed + ".";
        html += '<br><br><br>'
        html += 'Pacientes recuperados: ' + caso.All.recovered + ".";
        html += '<br><br><br>'
        html += 'Fallecidos: ' + caso.All.deaths + ".";
    $("#caso").html(html);
};
frases.innerHTML = '';
function frasesRandm(){
    var Randm=new Array();
    Randm[0]="<p id='r0'>Es sencillo hacer que las cosas sean complicadas, pero difícil hacer que sean sencillas.";
    Randm[1]="<p id='r1'>Cuando cambias el modo en que ves las cosas, las cosas que ves cambian también.";
    Randm[2]="<p id='r2'>Muchos de nuestros sueños parecen al principio imposibles, luego pueden parecer improbables, y luego, cuando nos comprometemos firmemente, se vuelven inevitables.";
    aleatorio= Math.random() * (Randm.length);
    aleatorio= Math.floor(aleatorio);
    return(Randm[aleatorio]);
    document.write(Randm[aleatorio]);
}
frases.innerHTML += frasesRandm()