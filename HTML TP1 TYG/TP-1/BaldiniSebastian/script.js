// muestra solo el boton seleccionado.
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

// funcion de frase aleatoria.
frase.innerHTML = '';
function fraseAleatoria(){
    let numeroRandom = Math.floor(Math.random() * 3)
    if (numeroRandom == 0) {
        aleatoria = 'Frase Aleatoria de Bill Gates = "Si tu negocio no está en internet, tu negocio no existe"';
    }else if (numeroRandom == 1){
        aleatoria = 'Frase Aleatoria de Bill Gates = "Trata bien a los nerds. Probablemente acabes trabajando para uno de ellos."';
    }
    else{
        aleatoria = 'Frase Aleatoria de Bill Gates = "Si no puedes con el enemigo... ¡Compralo!"';
    }
    return aleatoria;
}
frase.innerHTML += fraseAleatoria()

//api para bitcoin;

const url = 'https://blockchain.info/ticker';
$.ajax({
  url: url,
  type: 'GET',
  dataType: 'json',
  success: (data) => {
    // console.log(data);
    $('#bit').text(data.USD.last + ' US$ ');
  },
  error: () => {
    alert('Error vuelva a intentarlo mas tarde.');
  }
});

//api para Ethereum;

$.ajax({
  url: 'https://api.blockchain.com/v3/exchange/tickers/ETH-USD',
  type: 'GET',
  dataType: 'json',
  success: (data) => {
    // console.log(data);
    $('#ethe').text(data.price_24h + ' US$');
  },
  error: () => {
    alert('Error vuelva a intentarlo mas tarde.');
  }
});
