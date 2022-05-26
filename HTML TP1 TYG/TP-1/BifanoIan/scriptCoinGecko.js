var html;

$('#coinGecko').on("click",showTable);

function showTable(){
    getDataCoin("bitcoin");
    getDataCoin("ethereum");
}

//Toma los datos para la tabla del inicio
function getDataCoin( coin ) {

    url = "https://api.coingecko.com/api/v3/coins/";

    request = url + coin;

    html= "<h1 class='ttle'> CoinGecko </h1>"
    + "<hr>"
    + "<p> CoinGecko was founded in 2014 by TM Lee (CEO) and Bobby Ong (COO) with the mission to democratize the access of crypto data and empower users with actionable insights. We also deep dive into the crypto space to deliver valuable insights to our users through our cryptocurrency reports, as well as our publications, newsletter and more. </p>"
    +"<hr>"

    +"<table>"
        + "<thead>"
            + "<th> Name </th>"
            + "<th> Symbol </th>" 
            + "<th> Current Price (USD) </th>"
            + "<th> Current Prince (ARS) </th>"
            + "<th> Market Capital Rank </th>"
            + "<th> </th>"
        + "</thead>";

    $.ajax({
        url: request,
        method: 'GET',
        success: function( response ){

            html+= "<tr>"
                + "<td> " + response.name + " </td>"
                + "<td> " + response.symbol + "</td>"
                + "<td> " + response.market_data.current_price.usd + "</td>"
                + "<td> " + response.market_data.current_price.ars + "</td>"
                + "<td> " + response.market_data.market_cap_rank + "</td>";
                
                if( coin == "bitcoin" ){
                    html+= "<td> " 
                    + "<button onclick='vermasbitcoin()' class='btn'> ver mas </button>" 
                    + "</td>";
                    $('#vermasbitcoin').on("click",function(){verMas(coin);});
                }else{
                    html+= "<td>"
                    + "<button onclick='vermasethereum()' class='btn'> ver mas </button>"
                    + "</td>";
                    $('#vermasethereum').on("click",function(){verMas(coin);});
                }
            html+= "</tr>";

            if (coin == "bitcoin"){
            }else{
                html+= "</table>"
                + "<button onclick='getInicio()' class='btn'> volver </button> ";
            };

            $('#section').html(html);

        },
        error: function(){

        }
    });
} 

//ver mas ethereum
function vermasethereum(){
    verMas("ethereum");
}

//ver mas bitcoin
function vermasbitcoin(){
    verMas("bitcoin");
}

//Funcion de los botones "ver mas"
function verMas(coin){
    
    url = "https://api.coingecko.com/api/v3/coins/";

    request = url + coin;


    $.ajax({
        url: request,
        method: 'GET',
        success: function( response ){

            html= "<h1> " + coin + " </h1>"
            + "<hr>"
            + "<p> " + response.description.es + "</p>"
            + "<hr>"
            + "<p> Price Change Percentage (USD) </p>" 
            +"<table>"
                + "<thead>"
                    + "<th> Time </th>"
                    + "<th> 1 hour </th>" 
                    + "<th> 1 day </th>"
                    + "<th> 1 week </th>"
                    + "<th> 30 dayas </th>"
                    + "<th> 1 year </th>"
                    + "<th> </th>"
                + "</thead>";
                html+= "<tr>"
                    + "<td> % </td>"
                    + "<td> " + response.market_data.price_change_percentage_1h_in_currency.usd + " </td>"
                    + "<td> " + response.market_data.price_change_percentage_24h_in_currency.usd + "</td>"
                    + "<td> " + response.market_data.price_change_percentage_7d_in_currency.usd + "</td>"
                    + "<td> " + response.market_data.price_change_percentage_30d_in_currency.usd + "</td>"
                    + "<td> " + response.market_data.price_change_percentage_1y_in_currency.usd + "</td>"
                + "</tr>";

                html+= "</table>"
                + "<button onclick='showTable()' class='btn'> volver </button> ";

            $('#section').html(html);

        },
        error: function(){

        }
    });
}