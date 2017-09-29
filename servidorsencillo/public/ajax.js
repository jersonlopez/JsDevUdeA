$(document).ready(function(){
 $("#cargar").click(function(){
    // Petición AJAX
    $.get("http://lineadecodigo.com/samples/datos.php", function(data){
  $("#mensaje").html(data);
});
 });

});
