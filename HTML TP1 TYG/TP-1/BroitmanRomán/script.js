var app = new Vue({
    el: '#app',
    data: {
      aviso: null,
      mostrar: 'Mostrar mas',
      refran:null,
      clase:null,
      frases: [ {frase: 'No hay mal que por bien no venga', estilo : 'estilo1' }, 
      {frase: 'El que no corre, vuela', estilo : 'estilo2' }, 
      {frase: 'A buen entendedor, pocas palabras', estilo : 'estilo3'} ],
      //Variables para los FOR
      todos: null,
      para: null,
      //Variable para boton      
      buttonRU: 'Random User',
      busqueda: null,
      //Variables de mostrar/ocultar
      showVerMas: false,
      showOMDb: false,
      showRU: false,
    },
    methods:{
      showHideRU(){
        this.showRU= !this.showRU;
        if (this.showOMDb == true){
          this.showOMDb = false
        }
      },
      showHideOMDb(){
        this.showOMDb = !this.showOMDb;
        if (this.showRU == true){
          this.showRU = false
        }
        },
      showHideVerMas(){
        this.showVerMas = !this.showVerMas;
        if (this.showVerMas == true){
          this.mostrar = 'Mostrar menos'
          
        }
        else{this.mostrar = 'Mostrar mas'}
      },
      getPhoto(todo){
        return todo.picture.large;
      },
      getGenero(todo){
        if (todo.gender == 'male'){
          return 'Masculino'
        }
        else if (todo.gender == 'female'){
          return 'Femenino'
        }
        else {
          return 'Otro'
        }
      },
      
      api1 () {
        this.buttonRU='Otro usuario'
        axios.get('https://randomuser.me/api/')
          .then(response => {
              this.todos = response.data.results,
              console.log(response)
          });
        this.show2 = false
      },
      getPoster(por){
        if (por.Poster == "N/A"){
          return "./images/no-dispo.png"
        }
        else{
        return por.Poster
        }
      },
      
      api2 () {
        this.button2='Otro'
        
        axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=9eea17e&s=' + this.busqueda)
          .then(response => {
            this.para = response.data.Search,
            console.log(response)              
          });       
         
      }    
  
      
      
    },  
    created(){
      var numAleatorio  
      numAleatorio = Math.floor(Math.random() * 3),
      this.refran = this.frases[numAleatorio].frase,
      this.clase= this.frases[numAleatorio].estilo
      
    }
  });