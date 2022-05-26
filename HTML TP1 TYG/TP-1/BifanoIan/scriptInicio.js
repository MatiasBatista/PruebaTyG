$(document).ready(function(){

    $("a").on("click",function(event){event.preventDefault();});

    phrases = [ "<p id='phrase1' > Bienvenido a mi blog </p>" , "<p id='phrase2' > Aprendiendo JavaScript </p>" , "<p id='phrase3' > Consumiendo APIs publicas </p>" ];

    phrase = phrases[Math.floor(Math.random()*phrases.length)];

    html= phrase
    + "<hr>"
    + "<p id='text'> De la cursada espero <strong> conocer,comprender y aplicar </strong>  las tecnologias disponibles para el desarrollo y tareas relacionadas a la web </p>";

    $('#section').html(html);

});

function getInicio(){

    phrases = [ "<p id='phrase1' > Bienvenido a mi blog </p>" , "<p id='phrase2' > Aprendiendo JavaScript </p>" , "<p id='phrase3' > Consumiendo APIs publicas </p>" ];

    phrase = phrases[Math.floor(Math.random()*phrases.length)];

    html= phrase
    + "<hr>"
    + "<p id='text'> De la cursada espero <strong> conocer,comprender y aplicar </strong>  las tecnologias disponibles para el desarrollo y tareas relacionadas a la web </p>";

    $('#section').html(html);
}