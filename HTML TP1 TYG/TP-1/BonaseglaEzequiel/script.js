frases.innerHTML = '';
function frasesAleatorias(){
    var fa=new Array();
    fa[0]="<p id='f0'>La ocasión hay que crearla, no esperar a que llegue.";
	fa[1]="<p id='f1'>Educación es lo que queda después de olvidar lo que se ha aprendido en la escuela.";
    fa[2]="<p id='f2'>La envidia es una declaración de inferioridad.";
    aleatorio= Math.random() * (fa.length);
    aleatorio= Math.floor(aleatorio);
    return(fa[aleatorio]);
    document.write(fa[aleatorio]);
}
frases.innerHTML += frasesAleatorias()

