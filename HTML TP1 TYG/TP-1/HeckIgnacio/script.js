const ethtoken = '6738363E-A320-41A7-96A2-788CA780C99B'
const nytoken = 'IApF8mnMVZGVK4nITLsVckWgCiGtBT6Q'
const ethurl = 'https://rest.coinapi.io/v1/assets?filter_asset_id=ETH'
const nyturl = 'https://api.nytimes.com/svc/mostpopular/v2/shared/1/facebook.json?api-key='
const newyorktimes = 'https://www.nytimes.com'
let frasealeatoria = ''

function returnRandomPhrase(){
    let randomNum = Math.floor(Math.random() * 3)
    switch (randomNum) {
        case 0:
            frasealeatoria = 'Me llamo Igna'
            break;
        case 1:
            frasealeatoria = 'Me llamo Juan'
            break;
        case 2:
            frasealeatoria = 'Mi apellido es Heck'
        default:
            break;
    }
    return frasealeatoria
}

returnRandomPhrase()

Vue.component('cont-home', {
    template: `
    <div class=homepagecont>
        Homepage
        <br>
        <p>
        Mis expectativas de la catedra de Tecnologia y Gestion Web son aprender sobre el desarrollo de tecnologias web asi tambien como
        buenas practicas a la hora de programar.
        </p>
        <div>
            <p class=homeparagraph> {{ frasealeatoria }} </p>
        </div>
    </div>
    `,
})

Vue.component('cont-eth', {
    template: `
    <div class=maindiveth>
        <div v-if="app.loadeth == false">Cargando...</div>
        <div class=ethcontentgrid v-if="app.loadeth == true">
            <div>{{ app.ethinfo.name }}</div>
            <div>{{ app.ethinfo.asset_id }}</div>
            <div>{{ app.ethinfo.price_usd }} USD</div>
        </div>
       </div>`
})

Vue.component('cont-nyt', {
    template: `
    <div class=maindivnyt>
        <div v-if="app.loadnyt == false">Cargando...</div>
        <div class=nytcontentgrid v-if="app.loadnyt == true" :set="url = []">
            <p>Articulos mas populares en el NYT </p>
            <div class="articlecontainer" v-for="(article, index) in app.nytinfo" :key="index" :set="url[article] = app.nytinfo[index].url">
                <div class="articlenumber">{{ index+1 }}</div>
                <div>
                    Titulo: {{ app.nytinfo[index].title }} <br>
                    Resumen: {{ app.nytinfo[index].abstract }} <br>
                    Link: <a target="_blank" href="${newyorktimes}"> {{ url[article] }} </a><br>
                    Publicado en {{ app.nytinfo[index].published_date }}.
                </div>
            </div>
        </div>
    </div>`
})

let app = new Vue({
    el: '#main-container',
    data: {
        currentContent: 'Home',
        contents: ['Home', 'ETH', 'NYT'],
        seen: true,
        nytinfo: null,
        ethinfo: null,
        loadeth: false,
        loadnyt: false,
        frasealeatoria: '',
    },
    methods: {
        fraseAleat: function() {
            frasealeatoria = returnRandomPhrase()
        }
    },
    computed: {
        currentTabComponent: function () {
            return 'cont-' + this.currentContent.toLowerCase()
        }
    },
    mounted() {
        axios.get(ethurl, {
            headers: {
                'X-CoinAPI-Key': `${ethtoken}`
            }
        })
        .then(res => {
            this.ethinfo = res.data[0];
            this.loadeth = true;
        })
        .catch(err =>{
            console.error(err);
        })
        axios.get(nyturl+nytoken, {
        })
        .then(res => {
            this.nytinfo = res.data.results;
            this.loadnyt = true;
        })
        .catch(err =>{
            console.error(err);
        })
    }
})
