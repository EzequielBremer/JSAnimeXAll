//BUSCADOR de mangas

const mostrarMangas = (arr) => {
  contenedor.innerHTML = "";
  let html;
  for (const item of arr) {
    const { precio, img, Genero, nombre } = item;
    html = `
    <div class="containerCompraMangas">
         <div class="">
           <img class="img" src="../img/${img}">
         <div class="imgFondo">
           <p class="precio">Nombre: ${nombre}<p>
           <p class="precio">Genero: ${Genero}<p>
           <span class="card-title precio">Precio: ${precio}</span>
          </div>
        </div>
        <div class="mangaProducto">
        <a href="./compras.html" target="_blank"><button id="btnBuscar" class="compraManga">Click Aqui para Comprar</button></a>
      </div>
    </div>
   `;

    contenedor.innerHTML += html;
  }
};

const boton = document.getElementById("btnBuscar");
boton.addEventListener("click", buscarManga);

function buscarManga() {
  const input = document.getElementById("input").value;
  if (input == 1) {
    verMangaDeporte();
  } else if (input == 2) {
    verMangaAccion();
  } else if (input == 3) {
    verMangaSobreNatural();
  } else if (input == 4) {
    verMangaRomance();
  } else if (input == 5) {
    verMangaIsekai();
  } else if (input == 6) {
    verMangaComedia();
  } else if (input == "") {
    contenedor.innerHTML =
      '<p class="noResultado">No se encontro ningun resultado.</p>';
  } else if ((input !== 1, 2, 3, 4, 5, 6)) {
    contenedor.innerHTML =
      '<p class="noResultado">No se encontro ningun resultado.</p>';
  }
}

async function verMangaDeporte() {
  const response = await fetch("../misjson/mangaDeporte.json");
  const datos = await response.json();
  mostrarMangas(datos);
}

async function verMangaAccion() {
  const response = await fetch("../misjson/mangaAccion.json");
  const datos = await response.json();
  mostrarMangas(datos);
}

async function verMangaSobreNatural() {
  const response = await fetch("../misjson/mangaRomance.json");
  const datos = await response.json();
  mostrarMangas(datos);
}

async function verMangaRomance() {
  const response = await fetch("../misjson/mangaIsekai.json");
  const datos = await response.json();
  mostrarMangas(datos);
}

async function verMangaIsekai() {
  const response = await fetch("../misjson/mangaSobreNatural.json");
  const datos = await response.json();
  mostrarMangas(datos);
}

async function verMangaComedia() {
  const response = await fetch("../misjson/mangaComedia.json");
  const datos = await response.json();
  mostrarMangas(datos);
}

//Para el FORM

const contenedor = document.querySelector(".contenedor"),
  btnBuscar = document.querySelector("#btnBuscar"),
  inputBuscar = document.querySelector("#input");

function caracteristicasManga( precio, caracteristicas, img) {
  this.precio = precio;
  this.caracteristicas = caracteristicas;
  this.img = img;
}

function buscar() {
  swal("Buscando...", {
    buttons: false,
    timer: 1000,
  });
}


