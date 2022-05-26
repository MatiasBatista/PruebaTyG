var app = new Vue({
    el:"#bitcoin",
    data:{
        currencies: null,
    },
    methods: {
        getPrice(currency){
            return currency.rate_float.toFixed(2)
        }
    },
    mounted() {
        axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
            .then(response => (this.currencies = response.data.bpi))
    },
});
