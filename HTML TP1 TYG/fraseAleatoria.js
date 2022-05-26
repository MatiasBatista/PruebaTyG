//let fraces = ['Pruebaramdom1 ','Prueba ramdon 2', 'Pruebaramdon 3']

function fraseRandom() {
    return Math.random() * (3 - 0) + 0;
  }

let ramdon= Math.trunc(fraseRandom())


if(ramdon===1){
    document.write("Frace 1")


} else if(ramdon===2){
    document.write("frase 2")

}else{
    document.write("frase 3")

}