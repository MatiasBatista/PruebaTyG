document.getElementById("teoria").onclick = function () {
    titulo= "Teoria";
    parrafo= "<br>1) Utilizaria HTML5, CSS3 y JavaScript para la creacion de la pagina. HTML5 me proporciona las etiquetas y toda la estructura"+
    " necesaria para que el navegador interprete mi sitio. CSS3 me proporciona todos los estilos con los cuales voy a poder crear una interface mas amigable que mejore la experiencia del usuario"+
    "Potenciaria esta herramienta con el uso de un framework como boostrap 4. Utilizaria JavaScript para manipular elementos del DOM (Tecnologias y funcionalidades del lado del cliente),"+
    "para comunicaciones con el servidor (a traves de Ajax). Para agregar un boton y poder actualizar el grafico sin necesidad de refrezcar la pagina utilizaria "+
    "Jquery, ya que puede cambiar el contenido de la pagina sin necesidad de recargarla, mediente la manipulacion del DOM y peticiones AJAX. Cabe destacar que "+
    "JQuery es un unico archivo JavaScript con funcionalidades comunes, como manejar el DOM, eventos, efectos y AJAX."+
    "Para actualizar el grafico con nuevos datos utilizaria una API (de un tercero) para extrar los datos relacionados con los contagios. <br>"+
    "<br>2) Utilizaria la herramienta de google, click derecho sobre la pagina y seleccionando inspeccionar, donde de varias maneras puedo ver los styles. Una opcion es seleccionar la etiqueta "+
    "y ver que stylos es aplicando o sino otra opcion es ir a la seccion sources y seleccionar el archivo fuente completo. <br>"+
    "<br>3) Por cada maquina virtual que quiera tener, voy a tener que levantar un SO con sus respectivas librerias, en cambio con contenedores puedo compartirlos. Un beneficio enorme de esto es que los contenedores son mas eficientes, mas rapidos, menos costosos, mas faciles de migrar y reiniciar.";

    document.getElementById("Resultado-Boton1").innerHTML= "<h1 class='text-center display-4'>"+titulo+"</h1>"+"<br>"+"<p class='mb-4'>"+parrafo+"</p>";   
}

document.getElementById("practica").onclick = function (){
    titulo="Practica";
    document.getElementById("Resultado-boton2").innerHTML = 
    
    "<h1 class='text-center display-4'>"+titulo+"</h1>"+ "<form name='formu'>"+ 
    "<label for='nombre' class='form-label mt-2'>Nombre</label>"+
    "<input type='nombre' class='form-control' name='nombre' id='nombre'"+
    "placeholder='Ingrese un nombre'>"+
    "<label for='apellido' class='form-label mt-2'>Apellido</label>"+
    "<input type='apellido' class='form-control' name='nombre' id='apellido'"+
    "placeholder='Ingrese un apellido'>"+
    "<select id='opciones' class='custom-select mt-3'>"+
    "<option selected=''>Nacionalidad</option>"+
    "<option value='1'>Brasil</option>"+
    "<option value='2'>Boliviano</option>"+
    "<option value='3'>Argentino</option>"+
  "</select>"+
    "<button  type='button' class='btn btn-outline-primary border rounded mt-3 px-5' id='punto'>Agregar</button>"+
    "</form>";
    document.getElementById("punto").onclick = function (){
     nombre = document.getElementById("nombre").value;
     apellido = document.getElementById("apellido").value;
     lista= document.getElementById("opciones");
     seleccionado= lista.options[lista.selectedIndex].value;
       agregar(nombre,apellido,seleccionado); 
    }    
}

function agregar(nombre, apellido, seleccionado){
    if(nombre==""){  
        alert("ERROR, FALTA INGRESAR UN CAMPO");
        return false
    }
        else if(apellido == ""){
            alert ("ERROR, FALTA INGRESAR UN CAMPO");
            return false
        } 
            var divTabla = document.querySelector("#Resultado")
            var texto = document.createElement("li");
            texto.append(nombre+" "+apellido+" "+seleccionado);
            divTabla.append(texto);    
}

 