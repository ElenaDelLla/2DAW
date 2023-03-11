/*$(document).ready(() => {
    $("#validar").click((event) => {
        event.preventDefault();
        const inputNombre = $("#nombre").val();
        const inputPass = $("#pass").val();
        if(inputPass.length < 5){
            $("#mostrar").text("La contraseña en débil");
        }else if(inputPass.length >= 5 && inputPass.length < 8){
            $("#mostrar").text("La contraseña es medianamente segura");
        }else{
            $("#mostrar").text("La contraseña es segura");
        }
    });
});*/

$(document).ready(() => {
    $("#validar").click((event) => {
        event.preventDefault();
        const inputNombre = $("#nombre").val();
        const inputPass = $("#pass").val();
        let mostrar;
        if(inputPass.length < 5){
            mostrar = "La contraseña en débil";
        }else if(inputPass.length >= 5 && inputPass.length < 8){
            mostrar = "La contraseña es medianamente segura";
        }else{
            mostrar = "La contraseña es segura";
        }
        const elementoDiv = $("<div></div>").text(mostrar);
        $("body").append(elementoDiv);
    });
    
});