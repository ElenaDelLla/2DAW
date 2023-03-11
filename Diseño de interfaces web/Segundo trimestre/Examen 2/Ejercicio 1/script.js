const menu = $("#menu");
const opcion1 = $(".opcion1");
const opcion2 = $(".opcion2");
const opcion3 = $(".opcion3");
const opcion4 = $(".opcion4");
let pulsado = false;
const nav = $("#nav");

$(document).ready(() => {
  menu.click(() => {
    //nav.toggle muestra y oculta
    //nav.slideDown solo muestra
    nav.toggle("600", () => {
      opcion1.html("Opcion 1");
      opcion2.html("Opcion 3");
      opcion3.html("Opcion 2");
      opcion4.html("Opcion 4");
      pulsado = true;
    });
    
  });
});

opcion1.ready(() => {
  opcion1.hover(() => {
    opcion1.css("background-color", "#343434");
  }, () => {
    opcion1.css("background-color", "black");
  });
});
opcion2.ready(() => {
  opcion2.hover(() => {
    opcion2.css("background-color", "#343434");
  }, () => {
    opcion2.css("background-color", "black");
  });
});
opcion3.ready(() => {
  opcion3.hover(() => {
    opcion3.css("background-color", "#343434");
  }, () => {
    opcion3.css("background-color", "black");
  });
});
opcion4.ready(() => {
  opcion4.hover(() => {
    opcion4.css("background-color", "#343434");
  }, () => {
    opcion4.css("background-color", "black");
  });
});

