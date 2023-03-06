let promesa=new Promise((resolve,reject)=>{
setTimeout(()=>{ //ponemos un código largo, tarda 2 sg
    demo.innerHTML+="Ejecutando setTimeout()<br/>";
//resolve("Terminado") bien
reject("Terminado") //mal
},2000)
})
.then((respuestaok)=>{
    demo.innerHTML+="La promesa ha terminado bien: "+respuestaok+"<br/>";
})
.catch((respuestaNok)=>{
    demo.innerHTML+="La promesa ha terminado mal: "+respuestaNok+"<br/>";
})
.finally(function (){
    demo.innerHTML+="Enhorabuena, la promesa ha acabado";
});

