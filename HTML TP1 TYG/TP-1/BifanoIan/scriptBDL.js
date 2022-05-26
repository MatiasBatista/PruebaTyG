
$('#ballDontLie').on("click", function(){showTablePlayers(1)});

var html;

var page_actual= 1;

function showTablePlayers(page_actual){

    if (page_actual == 5 ){
        limite= 24;
    }else{
        limite = page_actual * 5;
    }

    inicio = limite - 5;
    i= inicio;

    url = "https://www.balldontlie.io/api/v1/";

    request = url + "players";

    $.ajax({
        url: request,
        method: 'GET',
        success: function(response){
            html= "<h1> Basket Players </h1>"
            + "<hr>"
            + "<p> Welcome to the balldontlie API."
            + "You can use our free API to access NBA related data. <br> No email required. <br> No API key required. <br>" 
            + "This is an open source project. Feel free to open issues and pull requests.<br>"
            + "Here's an example of something you can build with this API: example <br>" 
            + "Email us at hello@balldontlie.io with any comments or questions. <br> We hope to build on top of this first iteration with community input. Please reach out if you want to help."
            + "Also, please feel free to donate to help keep the lights on. </p>"
            + "<hr>"
            + "<table>"
                + "<thead>"
                    + "<th> First Name </th>"
                    + "<th> Last Name </th>"
                    + "<th> Position </th>"
                    + "<th> Team </th>"
                + "</thead>";

                while (i<limite){
                    i++;
                    html+= "<tr>"
                        + "<td> " + response.data[i].first_name + "</td>"
                        + "<td> " + response.data[i].last_name + "</td>"
                        + "<td> " + response.data[i].position + "</td>"
                        + "<td> " + response.data[i].team.name + "</td>"
                    + "</tr>";
                }

                if (page_actual == 1 ){
                    html+= "<tr>"
                    +"<td> </td>"
                    +"<td> </td>"
                    +"<td> </td>"
                    +"<td> <button onclick='siguiente()' class='btn'> siguiente </button> </td>"
                    + "</tr>";
                }
                else if (page_actual == 5 ){
                    html+= "<tr>"
                        + "<td> <button onclick='anterior()' class='btn'> anterior </button> </td>"
                        + "<td></td> <td></td> "
                        + "<td> </td>"
                    + "</tr>";
                }
                else{
                    html+= "<tr>"
                        + "<td> <button onclick='anterior()' class='btn'> anterior </button> </td>"
                        + "<td> </td> " 
                        + "<td> </td> "
                        + "<td> <button onclick='siguiente()' class='btn'> siguiente </button> </td>"
                    + "</tr>";
                }
                
            html+= "</table>"
            + "<button onclick='getInicio()' class='btn'> volver </button> ";
            
            $('#section').html(html);

        }
    });
}

function anterior(){
    page_actual-=1;
    showTablePlayers(page_actual);
}

function siguiente(){
    page_actual +=1;
    showTablePlayers(page_actual);
}