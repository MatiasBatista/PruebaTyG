var app = new Vue({
    el:"#dailymotion",
    data:{
        vids: [],
    },
    mounted() {
        axios.get("https://api.dailymotion.com/videos?channel=news&limit=10")
            .then(response => (this.vids = response.data.list))
    },
});