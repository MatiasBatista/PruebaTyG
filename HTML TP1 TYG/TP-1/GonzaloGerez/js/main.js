'use strict'
$(document).ready(function(){
    window.addEventListener('load', ()=>{
        //CONTENIDO PRINCIPAL

        var divFrase = document.querySelector('#frase'); //refencio el div frase
        var frases = new Array();//creo arreglo de frases
        frases[0] = "Cáete siete veces y levántate ocho.";
        frases[1] = "Si dominamos nuestra mente, vendrá la felicidad.";
        frases[2] = "Asegúrate que tu peor enemigo no viva entre tus dos oídos,";
        var aleatorio = Math.floor(Math.random()*(frases.length));//selecciono un numero aleatorio de entre 3
        var frase = frases[aleatorio];//cargo en frase la resultante del arreglo
    

        /*
        var texto = document.createElement("h4");
        texto.append(frase);
        divFrase.append(texto);
        */
        
        var sombras = new Array();//creo nuevo arreglo para las sombras
        sombras[0] = "2px 2px 0 #AAA";
        sombras[1] = "6px 6px 2px #777";
        sombras[2] = "12px 12px 8px #444";
        var aleatorio2 = Math.floor(Math.random()*(sombras.length));//selecciono numero aleatorio para las sombras
        var sombra = sombras[aleatorio2]; //selecciono un numero aleatorio entre 3
        divFrase.innerHTML = "<h4 style = 'text-shadow : "+sombra+"'> "+frase+"</h4>"; //cargo en el div la frase aleatoria con la sombra aleatoria
        

        //LISTADO APIS

        // API 1 POKEAPI.CO con fetch
        const api1 = 'https://pokeapi.co/api/v2/pokemon/4'
        var poke = document.querySelector("#api1");
        var resp = document.querySelector("#apiResp")
        poke.addEventListener('click', function(){
            fetch(api1)
            .then(response => response.json())
            .then(data => {
                    resp.innerHTML=
                    `<ul> 
                        <li> <p> nombre: ${data.name} </p></li>
                        <li> <p> experiencia base: ${data.base_experience} </p> </li>
                        <li> <p> altura: ${data.height} </p> </li>
                        <img src = '${data.sprites.front_shiny}'/>  
                    </ul>
                    <hr>`

            })
            .catch(err=>console.log(err));
        });

        // API 2 REQRES.IN CON AJAX

        var api2 = document.querySelector('#api2');
        api2.addEventListener('click', function(){

            $.get("https://reqres.in/api/users?page=2", function(response){
                response.data.forEach((element, index) => {
                    $("#apiResp2").append("<p>Los usuarios recuperados son: <br>"+element.first_name+" "+element.last_name +"</p> <hr>")
                });
            })

        })


    });
});