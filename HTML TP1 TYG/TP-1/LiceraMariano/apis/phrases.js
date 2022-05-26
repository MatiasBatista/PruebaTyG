var app = new Vue ({
    el:"#phrs",
    data:{
        phrases:["No hay caminos para la paz; la paz es el camino",
        "El mundo no está en peligro por las malas personas sino por aquellas que permiten la maldad",
        "Si es bueno vivir, todavía es mejor soñar, y lo mejor de todo, despertar",
        "La mayor declaración de amor es la que no se hace; el hombre que siente mucho, habla poco",
        "Si das pescado a un hombre hambriento lo nutres durante una jornada. Si le enseñas a pescar, le nutrirás toda su vida",
        "No estoy tan enamorado de mis propias opiniones que ignore lo que los demás puedan pensar acerca de ellas",
        "El sabio no dice nunca todo lo que piensa, pero siempre piensa todo lo que dice",
        "La pereza viaja tan despacio que la pobreza no tarda en alcanzarla",
        "Pienso, luego existo",
        "Sólo puede ser feliz siempre el que sepa ser feliz con todo"],
        shadow:[
            "5px -5px #558ABB", 
            "2px 1px #5C1B1B", 
            "10px -2px #3E874A", 
            "5px -8px #CD45A4", 
            "5px -8px #CD45A4",
            "10px -5 px #5B587D",
            "8px 8px #D0EECA",
            "12px 1px #A324A8",
            "2px -5px #158E2F",
            "1px -5px #E7157D"
        ],
    },
    methods: {
        large:function(){
            return this.phrases.length;
        },
        getRandom(){
            return Math.round(Math.random()*(this.large()-1))
        },
        showPhrases(){
            return this.phrases[this.getRandom()]
        },
    },
}) 
/*No encontré la manera de hacer esta función en VueJS, ya que no encontré el equivalente a "getElementById("phrs").style.textShadow"*/
const randomSh = async() => {
    shadow=[
            "5px -5px #558ABB", 
            "2px 1px #5C1B1B", 
            "10px -2px #3E874A", 
            "5px -8px #CD45A4", 
            "5px -8px #CD45A4",
            "10px -5 px #5B587D",
            "8px 8px #D0EECA",
            "12px 1px #A324A8",
            "2px -5px #158E2F",
            "1px -5px #E7157D"
    ];
    var randomNum = Math.floor(Math.random()*shadow.length);
    var randomShadow=shadow[randomNum]
    document.getElementById("phrs").style.textShadow = randomShadow;
    }
    randomSh()