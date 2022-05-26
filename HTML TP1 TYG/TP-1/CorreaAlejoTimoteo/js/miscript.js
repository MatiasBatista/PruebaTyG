
window.onload = function miScript(){

var sombras= new Array();
sombras[0]="sombra1";
sombras[1]="sombra2";
sombras[2]="sombra3";
var aleatorioSombras = Math.floor(Math.random() * (sombras.length));
var sombras = sombras[aleatorioSombras];

var frases= new Array(); 
frases[0]="El cansancio es temporal, la satisfaccion es para siempre";
frases[1]="Cada logro comienza con la decision de intentarlo";
frases[2]="Lo unico imposible es aquello que no intentas";
var aleatorioFrase = Math.floor(Math.random() * (frases.length));
var enviar = frases[aleatorioFrase];

document.getElementById("fraseRandom").innerHTML= "<h1 style= 'font-size: 3rem' class= "+sombras+">"+enviar+"</h1>";
document.getElementById("quienSoy").onclick = function(){   
    titulo= "¿Quien soy?";
    parrafo= "Mi nombre es Alejo Timoteo Correa, naci en La Plata y tengo 22 años. Forme mis estudios en el colegio Santa Teresa de Jesus, y comence la carrera en el 2017. Hoy en dia, vivo con mis abuelos. Esta situacion, complica muchas cosas, pero agradezco tener las herramientas necesarias para poder afrontarla."
    document.getElementById("api1").innerHTML= "<h1 id='hijo1'>"+titulo+"</h1>"+"<br>"+"<p class='mb-4' id='hijo2' >"+parrafo+"</p>";   
    }

    document.getElementById("yaTeLei").onclick = function(){   
    var padre = document.getElementById("api1");
    var hijo1 = document.getElementById("hijo1");
    var hijo2 = document.getElementById("hijo2");
    padre.removeChild(hijo1);
    padre.removeChild(hijo2); 
    }


}