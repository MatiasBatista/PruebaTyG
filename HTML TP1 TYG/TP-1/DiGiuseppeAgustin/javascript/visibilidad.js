
jQuery(document).ready(function(){ 
  $(".oculto").hide();
  $("#inicio").show();              
    $(".inf").click(function(){
          var nodo = $(this).attr("href");  
          if ($(nodo).is(":visible") ){
            return false; 
          }
          else{
        	$(".oculto").hide("slow");  
        	$("#inicio").hide("slow");                          
        	$(nodo).fadeToggle("fast");
        	return false;
          }
    });
}); 



