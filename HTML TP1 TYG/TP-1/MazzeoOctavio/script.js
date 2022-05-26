const fraseAleatoria = (num) => {
  let frase = `<p class="parrafo-opinion">Mi expectativa de la catedra es aprender cosas relacionadas al desarrollo web y realizar buenas practicas</p>`;
  switch (num) {
    case 1:
      frase += `
      <div class=" frase1">
      Esta es la primer frase
      </div>
      `;
      break;
    case 2:
      frase += `<div class=" frase2">Esta es la segunda frase</div>`;
      break;
    case 3:
      frase += `<div class=" frase3">Esta es la tercera frase</div>`;
      break;
    default:
      frase = "";
  }
  return frase;
};
const mostrarAPI = (api) => {
  if (api === "api1") {
    fetch("https://thatcopy.pw/catapi/rest/")
      .then((response) => response.json())
      .then(
        (data) =>
          (document.getElementById("content").innerHTML = `
  <div class="content-api">
  <h1 class="content-h1" >ID: ${data.id}</h1>
  <img src=${data.url} alt=${data.id} width="200px" height="200px" />
  </div>
  `)
      );
  } else if (api === "api2") {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then(
        (data) =>
          (document.getElementById("content").innerHTML = `
        <div class="content-api">
        <h1 class="content-h1" >Estado: ${data.status}</h1>
        <img src=${data.message} alt=${data.message} width="200px" height="200px" />
        </div>
        `)
      );
  } else {
    document.getElementById("content").innerHTML = `
        ${fraseAleatoria(Math.floor(Math.random() * (4 - 1) + 1))}
        `;
  }
};
