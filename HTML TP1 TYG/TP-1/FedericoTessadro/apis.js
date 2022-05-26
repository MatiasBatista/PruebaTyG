function getApiPi() {
    var x

    const url = 'https://api.math.tools/numbers/pi'
    var setHtml = document.getElementById('api')
    fetch(url)
        .then(res => res.json())
        .then(data => {

            console.log(data.cotents.result)
            setHtml.innerHTML = data.cotents.result
        })
        .catch(err => console.log(err))
}

function getApiCc() {
    const url = 'https://api.coinpaprika.com/v1/coins'
    var setHtml = document.getElementById('api')
    fetch(url)
        .then(res => res.json())
        .then(data => {
            let myList = "";
            for (let i = 0; i < 6; i++) {
                myList += "<li>" + data[i].name + "</li>";
            }
            setHtml.innerHTML = "<ul>" + myList + "</ul>";
        });
    //console.log(data))


}