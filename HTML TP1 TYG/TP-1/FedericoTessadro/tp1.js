function randomLoad() {
    random();
}

function random() {
    var texto = document.getElementById('randomText')

    var x = Math.floor((Math.random() * 3));

    switch (x) {
            case 0: 
                texto.innerHTML =  "La educacion es el pasaporte hacia el futuro, el maniana pertenece a aquellos que se preparan para el en el dia de hoy";
                break;
            case 1: 
                texto.innerHTML = "El valor de una idea radica en el uso de la misma";
                break;
            case 2:
                texto.innerHTML = "Establecer metas es el primer paso para convertir lo invisible en visible";
                break;
            default: 
                texto.innerHTML = 'no aparezcas pls';
    }
}

