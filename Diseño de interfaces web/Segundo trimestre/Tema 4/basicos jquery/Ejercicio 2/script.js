$(document).ready(() => {
    $("#aniadir").click(() => {
        const valorInput = $("#texto").val();
        const nuevoElemento = $("<li></li>").text(valorInput);
        nuevoElemento.css("color","red");
        nuevoElemento.css("font-size","20px");
        $("ul").append(nuevoElemento);
    });
});