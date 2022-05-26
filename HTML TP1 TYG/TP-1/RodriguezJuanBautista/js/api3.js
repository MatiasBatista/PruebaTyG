function mapaGoogle(){
    
    var coord = {lat:-34.9118413 ,lng: -57.9389719};
    
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 17,
      center: coord
    });

    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
} 


