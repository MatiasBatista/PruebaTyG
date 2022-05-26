//Frases Aleatorias
frase.innerHTML = '';
function fraseRandom(){
    var frases = new Array;
    frases[0] = "Hola, Me llamo Juan Cruz y esta es mi primer pagina web";
    frases[1] = "Hola, Soy Juan Cruz";
    frases[2] = "Hola, Mi nombre es Juan Cruz";

    var tam = frases.length;

    return (frases[Math.floor(Math.random() * tam)]);
}
frase.innerHTML += fraseRandom();

//Mostrar la seccion que se desea
$(document).ready(() =>{

    $('#Inicio').show();
    $('#Api1').hide();
    $('#Api2').hide();

    $('#botonInicio').click(function(){
        $('#Inicio').show();
        $('#Api1').hide();
        $('#Api2').hide();
    });

    $('#botonApi-1').click(function(){
        $('#Inicio').hide();
        $('#Api1').show();
        $('#Api2').hide();
    });

    $('#botonApi-2').click(function(){
        $('#Inicio').hide();
        $('#Api1').hide();
        $('#Api2').show();
    });
});

//API Covid-19

function getInfo(){

    $.ajax({
        url: "https://covid-api.mmediagroup.fr/v1/cases?country=Argentina",
        method: "GET",
        dataType: "json",
        success: function(response){
            covInfo(response.All);
            
        },
        error: function(req, status, err){
            showError();
        },
    });

};

function covInfo(info){
    
    var html = '<h1 id="Titulo-Api1">Casos de Covid-19 en Argentina:</h1>';
    html += '<ul id="InfoCov">'
    html += '<li class="covLi">' + 'Confirmados: ' + '<br>' + info.confirmed + '</li>' +
            '<li class="covLi">' + 'Recuperados: ' + '<br>' + info.recovered + '</li>' +
            '<li class="covLi">' + 'Muertes: ' + '<br>' + info.deaths + '</li>';
    html += '</ul>';
    html += '<br>';
    html += '<p id="Actualizacion">' +'Ultima Actualizacion: ' + info.updated + '</p>';
    $("#Api1").html(html);
    
};

// Api Paises Info

$("#bOK").click(function(){
    var nombrePais; 
    nombrePais = $("#Pais").val();
    //console.log(nombrePais);

    $.ajax({
        url: "https://restcountries.eu/rest/v2/all",
        method: "GET",
        dataType: "json",
        success: function(response){
            paisInfo(response, nombrePais);
            
        },
        error: function(req, status, err){
            showError();
        },
    });
    
});

function paisInfo(info, nombrePais){
    // Un for que recorre el array 
    for(i=0; i<=info.length; i++){
        
        // El if compara la traduccion del nombre del pais en la posicion i y la compara con el buscado
        if(info[i].translations.es == nombrePais){
            
            var html= '<ul id="Info">';
            html += '<li>' + info[i].name+ '</li>' +
                    '<li>' + 'Capital: ' + info[i].capital + '</li>' +
                    '<li>' + 'Region: ' + info[i].region + '</li>' +
                    '<li>' + 'Poblacion: ' + info[i].population + '</li>';
            html += '</ul>';
            $("#infoPaises").html(html);
            //console.log(info[i]);
            break;
            
            
        };
        if((info[i].translations.es !== nombrePais) && (i <= info.length)){
            var html = '<p id="Error">';
            html += 'Revise si escribio bien el nombre del pais (Incluir acentos y respetar mayusculas)';
            html += '</p>';
            $("#infoPaises").html(html);
        };    
        
        
        
    };
};
function showError(){
    var html = '<div style= "color: #F00">ERROR Al cargar la API</div>';
    $("#infoPaises").html(html)
};