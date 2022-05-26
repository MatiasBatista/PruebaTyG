function indexLoad() {
    // Funcion en el onload de la pagina principal

    Random();
}

function Random() {
    var texto = document.getElementById('textoAleatorio')

    var x = Math.floor((Math.random() * 3));

    switch (x) {
            case 0: 
                texto.innerHTML =  '<b>"Esta pagina se recargo“</b>';
                break;
            case 1: 
                texto.innerHTML = '<b>"Las tablets son malas"</b>';
                break;
            case 2:
                texto.innerHTML = '<b>"Iphone es mejor que Xiaomi"</b>';
                break;
            default: 
                texto.innerHTML = 'Imposible que esto aparezca en la pagina';
    }
}



