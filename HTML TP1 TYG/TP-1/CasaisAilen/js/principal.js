function fraserandom(){
	var aleatorio = Math.floor(Math.random()*(2+1));
	var datos = document.getElementById("datos");
	
	switch(aleatorio) {
		case 0:
			datos.innerHTML = `<h1>"A buen entendedor, pocas palabras."</h1>`;
			datos.style.textShadow = "2px 2px 3px #ff2a00";
		break;
		case 1:
			datos.innerHTML = `<h1>"En casa de herrero, cuchillo de palo."</h1>`;
			datos.style.textShadow = "2px 3px 1px #9673ff";
		break;
		case 2:
			datos.innerHTML = `<h1>"El que mucho abarca poco aprieta."</h1>`;
			datos.style.textShadow = "5px 2px 1px #d1e529";
		break;
}
}

fraserandom();
