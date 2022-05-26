function textoAleatorio() {
  switch(Math.floor(Math.random() * 3) + 1){
    case 1:
      $("#textoAleatorio").append("<p class='fs-3' id='textoAleatorio1'>Évariste Galois</p>");
      break;
    case 2:
      $("#textoAleatorio").append("<p class='fs-3' id='textoAleatorio2'>Leonhard Paul Euler</p>");
      break;
    case 3:
      $("#textoAleatorio").append("<p class='fs-3' id='textoAleatorio3'>Pierre de Fermat</p>");
      break;
    default:
      $("#textoAleatorio").append("<p>Esto no deberia poder verse nunca</p>");
  }
}

//Usé dos metodos distintos para las dos API. El primero fue basado en un codigo que vi, el de la temperatura lo hice yo.

function apiPerros(){
  var breeds;
  ajax_get('https://api.thedogapi.com/v1/breeds', function(data) {
    breeds = data;
    console.log(data, breeds);
  });
  console.log('apiPerros');

  console.log(breeds, "breeds");

  var breedsIds = [];
  $.each(breeds, function(){
    breedsIds.push(this.id);
  });
  ajax_get('https://api.thedogapi.com/v1/images/search?include_breed=1&breed_id=' + breedsIds[Math.floor(Math.random() * breeds.length)] , function(data) {

    if (data.length == 0) {
      $('#breed_image').attr('src', "");
      $("#breed_data_table").append("<tr><td>Sorry, no Image for that breed yet</td></tr>");
    } else {
      $('#breed_image').attr('src', data[0].url);

      var breed_data = data[0].breeds[0]
      $.each(breed_data, function(key, value) {
        if (key == 'weight' || key == 'height') value = value.metric
      });
    }
  });

}


// make an Ajax request
function ajax_get(url, callback) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      console.log('responseText:' + xmlhttp.responseText);
      try {
        var data = JSON.parse(xmlhttp.responseText);
      } catch (err) {
        console.log(err.message + " in " + xmlhttp.responseText);
        return;
      }
      callback(data);
    }
  };

  xmlhttp.open("GET", url, false);
  xmlhttp.setRequestHeader("x-api-key", "f8afe5ba-1f8d-4981-bf44-b4a61f9d0e3a");
  xmlhttp.send();
}


function clima(){
  var temperatura = $.ajax('https://api.troposphere.io/forecast/-34.9214,-57.9544?token=3a369c5e6d5f5a0e89f5e09f178851caca0bdda6e7fc27778e',
{
    timeout: 4000,     // timeout milliseconds
    success: function (respuesta,status,xhr) {   // success callback function
        console.log(respuesta.data);
        var horaAPI = new Date(respuesta.data.current.time);
        var horaActual = new Date();
        $('#nombreCiudad').html(' ').append(respuesta.data.timezone.split('/')[2]);
        $('#temperatura').html(' ').append(respuesta.data.current.temperature + "°C");
        $('#ultimaConsulta').html(' ').append(horaActual.toString().split(' ')[4]);
        $('#ultimoRegistroAPI').html(' ').append(horaAPI.toString().split(' ')[4]);
    },
    error: function (jqXhr, textStatus, errorMessage) { // error callback
        $('#info_clima').append('Error: ' + errorMessage);
    }
});
  console.log(temperatura);
}
