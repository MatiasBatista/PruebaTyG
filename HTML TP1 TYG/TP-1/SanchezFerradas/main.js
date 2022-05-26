
$(document).ready(() =>{
    $('#Inicio').show();
    $('#aapi1').hide();
    $('#aapi2').hide();

    $('#Home').click(function(){
        $('#Inicio').show();
        $('#aapi1').hide();
        $('#aapi2').hide();
    });
    $('#Api1').click(function(){
        $('#aapi1').show();
        $('#Inicio').hide();
        $('#aapi2').hide();
    });
    $('#Api2').click(function(){
        $('#aapi2').show();
        $('#Inicio').hide();
        $('#aapi1').hide();
    });
});

//Api2!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
$(document).ready(function(){
    $.ajax({
        url: "https://covid-api.mmediagroup.fr/v1/cases?continent=South America&status=deaths",
        method:"GET",
        dataType:"json",
        success: function(response){
        data(response);
        //console.log(response);
        },
        error: function(req, status, err){
        }
    });
});
function data(dato){
  total=0;
  totalr=0;
  totalm=0;
  for(i in dato){
    total = total + dato[i].All.confirmed;
    totalr = totalr + dato[i].All.recovered;
    totalm = totalm + dato[i].All.deaths;
  }
  var html = 'Total de casos activos en Sudamerica es = ' + total + ".";
      html += '<br><br><br>'
      html += 'Total de rcuperados en Sudamerica = ' + totalr + ".";
      html += '<br><br><br>'
      html += 'Total de muertos en Sudamerica = ' + totalm + "."
  $('#api2').html(html);
}
//Api1!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
$(document).ready(function(){
  $.ajax({
    url: "https://www.boredapi.com/api/activity",
    method:"GET",
    dataType:"json",
    success: function(response){
      console.log(response);
      actividad(response);
    },
    error: function(req, status, err){}
  });
});
function actividad(dato){
  var html = "Actividad a realizar = " + dato.activity + ".";
      html += '<br><br><br>'
      html += '<br><br><br>'
      html += "Cantidad de participantes = " + dato.participants + ".";
  $('#api1').html(html);
}

frase.innerHTML = '';
function fraseAleatoria(){
    let numeroRandom = Math.floor(Math.random() * 3)
    if (numeroRandom == 0) {
        aleatoria = 'Al mejor cazador se le escapa la liebre..';
    }else if (numeroRandom == 1){
        aleatoria = 'ME EXTRAÑA ARAÑA QUE SIENDO MOSCA NO ME CONOZCAS...QUE SIENDO HORMIGA NO SEA MI AMIGA ';
    }
    else{
        aleatoria = 'Una muerte bella Honra toda la vida';
    }
    return aleatoria;
}
frase.innerHTML += fraseAleatoria()
