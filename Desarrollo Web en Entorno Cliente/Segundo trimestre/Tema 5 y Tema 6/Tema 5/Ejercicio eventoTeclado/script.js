let documento = document.getElementById("documento");

documento.addEventListener("keydown", cambiaColor);

function cambiaColor(event){
    if(event.key === "y"){
        if(event.ctrlKey){
            documento.style.backgroundColor = "lightyellow";
        }else if(event.altKey){
            documento.style.backgroundColor = "#9B870C";
        }else {
           documento.style.backgroundColor = "yellow"; 
        }
    }
}