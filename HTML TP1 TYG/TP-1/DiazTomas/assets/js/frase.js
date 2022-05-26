function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

//https://covid-api.mmediagroup.fr/v1/cases?country=Argentina

function showCovid(data){
    console.log(data)
    const contenedor = document.getElementById("ContenedorApi")
    const tituloApi = document.getElementById("tituloApi")
    if (tituloApi){
        tituloApi.InnerHTML = `casos de covid en argentina a la fecha ${data.All.updated} son ${data.All.confirmed}`
    } else{
        const titulo = $("<h1></h1>");
        titulo[0].id = "tituloApi"
        titulo.text(`Casos de covid en argentina a la fecha ${data.All.updated} son: ${data.All.confirmed}`)
        contenedor.append(titulo[0])
    }

}

//https://fakerapi.it/api/v1/addresses?_quantity=1

function showFaker(data){
    console.log(ContenedorApi)
    const contenedor = document.getElementById("ContenedorApi")
    const tituloApi = document.getElementById("titul")
    if (tituloApi){
        tituloApi.InnerHTML = `La ciudad ${data.data[0].city} del pais ${data.data[0].country} tiene una longitud de  ${data.data[0].longitude} y una latitud de ${data.data[0].latitude}`
    } else{
        const titulo = $("<h1></h1>");
        titulo[0].id = "titul"
        titulo.text(`La ciudad ${data.data[0].city} del pais ${data.data[0].country} tiene una longitud de  ${data.data[0].longitude} y una latitud de ${data.data[0].latitude}`)
        contenedor.append(titulo[0])
    }
}

function getApiCovid(){
    showDataFromApi("https://covid-api.mmediagroup.fr/v1/cases?country=Argentina", showCovid)
}

function getApiFaker(){
    showDataFromApi("https://fakerapi.it/api/v1/addresses?_quantity=1", showFaker)
}

function showDataFromApi(url, func){
    fetch(url)
        .then(response => response.json())
        .then(data => func(data));
}

$(document).ready(function(){
    const app = document.getElementById("app")

    //Creacion de frase random
    const ContenedorFrase = $("<h1></h1>");
    frases=["Lo malo no es vivir en las nubes, sino bajar","Gracias a Dios que soy ateo","Odio que hablen cuando interrumpo"]
    ContenedorFrase.text(frases[random(0,2)])

    //creacion del contenedor para mostrar la api
    const ContenedorApi = $("<div></div>")[0];
    ContenedorApi.id = "ContenedorApi"

    //append de los contenedores
    app.append(ContenedorFrase[0])
    app.append(ContenedorApi)

    //agregar los listeners a la ul
    const covid = document.getElementById("apicovid")
    covid.addEventListener("click", getApiCovid)
    const faker = document.getElementById("apifaker")
    faker.addEventListener("click", getApiFaker)

    
});