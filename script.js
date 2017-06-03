//ventana para probar jquery
window.onload = function() {
    if (window.jQuery) {
        // jQuery is loaded
        alert("Yeah!");
    } else {
        // jQuery is not loaded
        alert("Doesn't Work");
    }
}
//Opacar y desOpacar boton
$(document).ready(function() {
   $('div').mouseenter(function() {
     $(this).fadeTo('fast', 1);
   });
   $('div').mouseleave(function() {
     $('div').fadeTo('fast', 0.5);
   });
 });
