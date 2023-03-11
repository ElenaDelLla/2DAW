"use strict";

$(document).ready(function () {
  // Comienzo carousel
  $("#contenidoCentro").append("<div class='row g-0 justify-content-center' id='rowCarousel'></div>");
  $("#rowCarousel").append("<h1 class='col-12 col-lg-8'>Novedades y Promociones</h1>");
  $("#rowCarousel").append("<div class='col-12 col-lg-8 carousel slide' id='colCarousel'></div>");
  $("#colCarousel").append("<div class='carousel-inner' id='carousel'></div>");

  for (var i = 1; i <= 4; i++) {
    $("#carousel").append("<div class='carousel-item ".concat(i == 1 ? "active" : "", "'><img class=\"d-block w-100\" src='./imgs/imagen").concat(i, ".jfif' alt='Imagen ").concat(i, "'></div>"));
  }

  function siguiente() {
    var current = $(".carousel-item.active");
    var next = current.next();

    if (next.length == 0) {
      next = $(".carousel-item").first();
    }

    current.removeClass("active");
    next.addClass("active");
  }

  setInterval(siguiente, 3000); // Fin Carousel
  // Inicio animacion scroll

  var images = $(".articleContainer img");
  $(window).scroll(function () {
    images.each(function () {
      var imageTop = $(this).offset().top;
      var scrollTop = $(window).scrollTop();

      if (imageTop < scrollTop + $(window).height()) {
        $(this).animate({
          zoom: "1.2"
        }, 1000);
      }
    });
  }); // Fin animacion scroll
  // Inicio animacion hover imagenes

  images.hover(function () {
    $(this).parent().parent().parent().addClass("fondoImagen");
  }, function () {
    $(this).parent().parent().parent().removeClass("fondoImagen");
  }); // Fin animacion hover imagenes
  // Inicio animacion enlaces pie

  $(".linksFooter a").hover(function () {
    $(this).addClass("colorHover");
  }, function () {
    $(this).removeClass("colorHover");
  }); // fin animacion enlaces pie
  // Inicio menu fixed

  var menu = $(".contenedorNavYBotones");
  $(window).scroll(function () {
    if ($(this).scrollTop() > 80) {
      menu.addClass("fixed-top");
    } else {
      menu.removeClass("fixed-top");
    }
  }); // Fin menu fixed
  // Inicio animacion botones nav

  var botonesNav = $(".contenedorNavYBotones nav a");
  botonesNav.hover(function () {
    $(this).animate({
      zoom: "1.2"
    }, 400);
    $(this).next().animate({
      width: "85%"
    }, 400);
  }, function () {
    $(this).animate({
      zoom: "1.0"
    }, 400);
    $(this).next().animate({
      width: "0%"
    }, 400);
  }); // Fin animacion botones nav
  // Inicio animacion botones menu

  var botonesMenu = $("menu a");
  botonesMenu.hover(function () {
    $(this).addClass("overA");
  }, function () {
    $(this).removeClass("overA");
  }); // Fin animacion botones menu
});