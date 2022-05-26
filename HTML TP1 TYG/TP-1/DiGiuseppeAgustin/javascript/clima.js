
window.onload=function() {
      
    const api2 = {
  key: "8d029fa2f062f32874d38fd939e658ea",
  base: "https://api.openweathermap.org/data/2.5/"}



const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);


function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchbox.value);
  }
}


function getResults (query) {
  fetch(`${api2.base}weather?q=${query}&units=metric&APPID=${api2.key}&lang=sp`)
    .then(weather => {
      return weather.json();
    }).then(displayResults);

}

function displayResults (weather) {
  let city = document.querySelector('.location .city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let now = new Date();
  let date = document.querySelector('.location .date');
  date.innerText = dateBuilder(now);

  let temp = document.querySelector('.current .temp');
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

  let main = document.querySelector('.current .humidity');
  main.innerHTML =  `Humedad: ${Math.round(weather.main.humidity)}<span>%</span>`;


  let weather_el = document.querySelector('.current .weather');
  weather_el.innerText = weather.weather[0].main;
  weather_el.innerText = weather.weather[0].description;
  var icon_url="http://openweathermap.org/img/w/"+weather.weather[0].icon+".png";
  $("#icon").attr("src",icon_url);

  let hilow = document.querySelector('.hi-low');
  hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;

  console.log(weather);
}

function dateBuilder (d) {
  let months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  let days = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}
}