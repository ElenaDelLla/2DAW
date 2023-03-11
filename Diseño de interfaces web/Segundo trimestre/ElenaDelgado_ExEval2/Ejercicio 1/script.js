$(document).ready(() => {
  $("img").css("opacity", 0.5); // Se pone opacidad 
  $("img").click(function () {
    $("img").css("opacity", 0.5);
    $("img").css("height", 200);
    $(this).animate(
      // Se anima cambio de opacidad y tamaño de la imagen
      {
        opacity: 1,
        height: 400, //Aumento el tamaño de la imagen al doble
      },
      2000 // tiempo de animacion
    );
  });
});