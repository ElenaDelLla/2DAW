$(document).ready(() =>{
    $("#cambiaH2").click(() => {
        $("h2").text("Hola mundo");
    });
});

$(document).ready(() =>{
    $("#ocultaP").click(() => {
        $("p").hide();
    });
});

$(document).ready(() =>{
    $("#ocultaP2").click(() => {
        $("#segundoP").hide();
    });
});

$(document).ready(() =>{
    $("#cambiaP1").click(() => {
        $("p:first").css("color", "red");
        $("p:first").css("font-size", "20px");
    });
});