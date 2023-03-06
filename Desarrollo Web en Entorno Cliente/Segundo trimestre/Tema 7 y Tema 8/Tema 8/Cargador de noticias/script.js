const divNoticias = document.getElementById("noticias");
const selectFuenteRSS = document.getElementById("fuenteRSS");
const inputIdNoticia = document.getElementById("idNoticia");
const botonCargar = document.getElementById("cargar");
const botonListar = document.getElementById("listar");
const botonVer = document.getElementById("ver");
const botonBorrar = document.getElementById("borrar");

const arrayRss = [
  {
    idCanal: "espanya",
    nombreCanal: "ElPais edicion de España",
    urlCanal:
      "https://feeds.elpais.com/mrss-s/pages/ep/site/elpais.com/portada",
  },
  {
    idCanal: "tecnologia",
    nombreCanal: "Noticias sobre tecnología de ElPais",
    urlCanal:
      "https://feeds.elpais.com/mrss-s/pages/ep/site/elpais.com/section/tecnologia/portada",
  },
  {
    idCanal: "ciencia",
    nombreCanal: "Noticias sobre ciencia de ElPais",
    urlCanal:
      "https://feeds.elpais.com/mrss-s/pages/ep/site/elpais.com/section/ciencia/portada",
  },
  {
    idCanal: "deportes",
    nombreCanal: "Noticias sobre deportes de ElPais",
    urlCanal:
      "https://feeds.elpais.com/mrss-s/pages/ep/site/elpais.com/section/deportes/portada",
  },
];

let bd;
let nombreBD = "rssdb";

function getVersion() {
  let version = localStorage.getItem("versionIDB");
  if (version == null) {
    version = "1";
    localStorage.setItem("versionIDB", version);
  }
  return parseInt(version);
}

function guardarNoticias(objXML, rss) {
  let transaccion = bd.transaction(rss.idCanal, "readwrite");

  let almacenNoticias = transaccion.objectStore(rss.idCanal);

  const arrayNoticias = Array.from(objXML.getElementsByTagName("item"));

  arrayNoticias.forEach((noticia) => {
    const titulo = noticia.getElementsByTagName("title")[0].textContent;
    const descripcion =
      noticia.getElementsByTagName("description")[0].textContent;
    const fecha = noticia.getElementsByTagName("pubDate")[0].textContent;
    const contenido =
      noticia.getElementsByTagName("content:encoded")[0].textContent;
    almacenNoticias.add({
      titulo,
      descripcion,
      fecha,
      contenido,
    });
  });
}

function obtenerNoticias(rss) {
  fetch(rss.urlCanal)
    .then((response) => response.text())
    .then((stringXML) => {
      const parser = new DOMParser();
      const objXML = parser.parseFromString(stringXML, "text/xml");
      return objXML;
    })
    .then((objXML) => {
      guardarNoticias(objXML, rss);
    });
}

botonCargar.addEventListener("click", () => {
  let peticion = indexedDB.open(nombreBD, getVersion());

  peticion.addEventListener("upgradeneeded", function (event) {
    bd = event.target.result;
    estado.innerHTML = "Cargando noticias";
    arrayRss.forEach((rss) => {
      bd.createObjectStore(rss.idCanal, { autoIncrement: true });
      obtenerNoticias(rss);
    });
    estado.innerHTML = "Noticias cargadas";
  });
});

arrayRss.forEach((rss) => {
  const option = document.createElement("option");
  const optionTexto = document.createTextNode(rss.nombreCanal);
  option.appendChild(optionTexto);
  option.value = rss.idCanal;
  selectFuenteRSS.appendChild(option);
});

botonListar.addEventListener("click", () => {
  divNoticias.innerHTML = "";
  let peticion = indexedDB.open(nombreBD, getVersion());

  peticion.addEventListener("upgradeneeded", function (event) {
    bd = event.target.result;
  });

  peticion.addEventListener("success", function (event) {
    bd = event.target.result;
    let transac = bd.transaction(selectFuenteRSS.value, "readonly");

    let almacenNoticias = transac.objectStore(selectFuenteRSS.value);

    let petCursor = almacenNoticias.openCursor();

    const table = document.createElement("table");
    const th1 = document.createElement("th");
    const th2 = document.createElement("th");
    const th1Texto = document.createTextNode("Titulo");
    const th2Texto = document.createTextNode("Key");
    th1.appendChild(th1Texto);
    th2.appendChild(th2Texto);
    table.appendChild(th1);
    table.appendChild(th2);
    petCursor.addEventListener("success", (event) => {
      let cursor = event.target.result;
      if (cursor) {
        const noticia = cursor.value;
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td1Texto = document.createTextNode(noticia.titulo);
        const td2Texto = document.createTextNode(cursor.key);
        td1.appendChild(td1Texto);
        td2.appendChild(td2Texto);
        tr.appendChild(td1);
        tr.appendChild(td2);
        table.appendChild(tr);
        cursor.continue();
      }
    });
    divNoticias.appendChild(table);
  });
});

botonBorrar.addEventListener("click", () => {
  estado.innerHTML = "";
  let peticion = indexedDB.open(nombreBD, getVersion());

  peticion.addEventListener("upgradeneeded", function (event) {
    bd = event.target.result;
  });

  peticion.addEventListener("success", function (event) {
    bd = event.target.result;

    let transac = bd.transaction(selectFuenteRSS.value, "readwrite");

    let almacenNoticias = transac.objectStore(selectFuenteRSS.value);

    almacenNoticias.delete(parseInt(inputIdNoticia.value)); //borramos el dato con id el introducido por el usuario pero en número
  });
});

botonVer.addEventListener("click", () => {
  estado.innerHTML = "";
  let peticion = indexedDB.open(nombreBD, getVersion());

  peticion.addEventListener("upgradeneeded", function (event) {
    bd = event.target.result;
  });

  peticion.addEventListener("success", function (event) {
    bd = event.target.result;

    let transac = bd.transaction(selectFuenteRSS.value, "readwrite");

    let almacenNoticias = transac.objectStore(selectFuenteRSS.value);

    let ordenLect = almacenNoticias.get(parseInt(inputIdNoticia.value)); //pedimos el dato con clave numérica, si ponemos un número que no existe, el datoLeido dará null
    divNoticias.innerHTML = "";

    ordenLect.addEventListener("success", (event) => {
      let datoLeido = event.target.result;
      if (datoLeido) {
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
        const p4 = document.createElement("p");
        p1.innerHTML = `Titulo: ${datoLeido.titulo}`;
        p2.innerHTML = `Descripcion: ${datoLeido.descripcion}`;
        p3.innerHTML = `Fecha: ${datoLeido.fecha}`;
        p4.innerHTML = `Contenido: ${datoLeido.contenido}`;

        divNoticias.appendChild(p1);
        divNoticias.appendChild(p2);
        divNoticias.appendChild(p3);
        divNoticias.appendChild(p4);
      } else {
        estado.innerHTML += "No existe ningún dato con esa clave<br>";
      }
    });
  });
});
