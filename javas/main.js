/*let entrada = prompt("Ingresar tu Usuario (Para salir ingresa 0)");

while(entrada != "0" ){
   switch (entrada) {
       case "Nagi":
            alert("Hola de nuevo Nagi");
            break;
        case "Isagi":
            alert("Hola de nuevo Messi");
            break;
       default:
           alert("Bienvenido/a nuevo/a usuario " + entrada)
           break;
   }
   entrada = prompt("Ingresar tu Usuario (Para salir ingresa 0)");
}


let nombre = prompt ("Desea comprar  (1)Oro  (2)Plata                      (3)Bronce   (4)Gratuita")
let cantidad = "1"
let precioProducto
let producto 

if (nombre == "1"){
    precioProducto = 6000
    producto = "Quitar Publicidad"
}

else if(nombre == "2"){
    precioProducto = 5000
    producto = "Rango de animes vistos"
}

else if(nombre == "3"){
    precioProducto = 1500
    producto = "Ver anime en 4k"
}

else if(nombre == "4"){
    precioProducto = 0
    producto = "Nada"
}

else if(nombre == ""){
    precioProducto = 0
    producto = "Nada"
}

let precioTotal = cantidad * precioProducto
let mensaje = alert ("Tiene que pagar " + precioTotal + " Pesos por la compra de la Membresia Nivel " + producto)*/











//ENTREGABLE

let login = prompt("Ingresar tu Usuario (Para salir ingresa 0)");

while (login != "0") {
    if (login == "Eze") {
        alert("Hola de nuevo Eze");
        break;
    }
    else if (login == "Cami") {
        alert("Hola de nuevo Cami")
        break;
    }
    else if (login != "Nagi") {
        alert("Bienvenido/a nuevo/a usuario " + login)
        break;
    }
}


const listado = [
    {
        id: 1,
        nombre: "(1) Spy X Family",
        precio: "$850",
        descripcion: "Anime que se basa en el desarrollo de como el Espia Twightlight tiene que cumplir una mision para librarse de la guerra y para eso necesita crear una familia falsa para acercarse a su objetivo."
    },
    {
        id: 2,
        nombre: "(2) Blue Lock",
        precio: "900",
        descripcion: "Blue Lock es el Anime/Manga de deporte que esta siendo tendencia en estos ultimos meses"
    },
    {
        id: 3,
        nombre: "(3) Jujustu Kaisen",
        precio: "850",
        descripcion: "Es un Manga que tiene su version Anime Y se basa en como los Hechiceros de la escuela de Jujutsu se enfrentan a las Maldiciones"
    },
    {
        id: 4,
        nombre: "(4) Chainsaw-Man",
        precio: "900",
        descripcion: "El Anime Tendencia que acaba de sacar su version animada y esta explotando en todas las Redes Sociales"
    }
]

function nuevoServicio(id, nombre, precio, descripcion) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.descripcion = descripcion;
}


function filtroServicio(lista, filtrado) {
    const filtro = lista.filter((listaMangas) => {
        return listaMangas.nombre.includes(filtrado);
    })

    return filtro;
}

let buscar = prompt("Elija su Operacion \n(1) Ver lista de Mangas Disponibles (Por Console) \n(2) Categorias de Mangas"); {
    if (buscar == 1){
        console.log(listado);
    }
    if (buscar == 2) {
        let mangas = prompt("Elija su Categoria \n (1) Tendencia \n (2) Deporte \n (3) Accion \n (4) Sobrenatural")
        if (mangas == 1) {
            alert("Tenemos Spy x Family con toda su coleccion Disponible: \n Con el precio de $850 c/u, Tambien podes solicitar un Envio (Solo dentro de Buenos Aires) ");
        }
        else if (mangas == 2) {
            alert("Tenemos Blue Lock con toda su coleccion Disponible: \n Con el precio de $900 c/u, Tambien podes solicitar un Envio (Solo dentro de Buenos Aires) ");
        }
        else if (mangas == 3) {
            alert("Tenemos Jujutsu Kaisen con toda su coleccion Disponible: \n Con el precio de $850 c/u, Tambien podes solicitar un Envio (Solo dentro de Buenos Aires) ");
        }
        else if (mangas == 4) {
            alert("Tenemos Chainsaw-Man con toda su coleccion Disponible: \n Con el precio de $850 c/u, Tambien podes solicitar un Envio (Solo dentro de Buenos Aires) ");
        }
        }
        else if (buscar == "") {
           
        }
}


alert("Elija que manga Comprar \n(Para salir ingrese 0)")
let seleccionarProductos = Number(prompt( " Comprar Manga \n(1) Spy x Family $850 \n(2) Blue Lock $900 \n(3) Jujutsu Kaisen $850 \n(4) Chainsaw-Man $850  \n(Para salir ingrese 0)"))
let seleccionarCantidad;
let total = 0;


const cantidad2 = (cant, precio) => {
  return cant * precio
}


while (seleccionarProductos != 0) {
  switch (seleccionarProductos) {
    case 1:
      seleccionarCantidad= Number(prompt("Manga Spy x Family, indique cuantos Tomos"))
            total += cantidad2(seleccionarCantidad, 850)
      break;
      case 2:
        seleccionarCantidad = Number(prompt("Manga Blue Lock, indique cuantos Tomos"))
        total += cantidad2(seleccionarCantidad, 900)
      break;
    case 3:
      seleccionarCantidad = Number(prompt("Manga Jujutsu Kaisen, indique cuantos Tomos"))
      total += cantidad2(seleccionarCantidad, 850)
    break;
    case 4:
      seleccionarCantidad = Number(prompt("Manga Chainsaw-Man, indique cuantos Tomos"))
      total += cantidad2(seleccionarCantidad, 850)
    break;

    default:
      break;
  }
  seleccionarProductos = Number(prompt( "(1) Spy x Family $800 (2) Blue Lock $900 (3) Chainsaw-Man $850  (4) Jujutsu Kaisen $800 (Para salir ingrese 0)"))
}

alert("el total de la compra es de: " + total + " Disfrute su Manga")




const Oro = "Oro";
const Plata = "Plata"; 
const Bronce = "Bronce"; 
const Gratuita = "Gratuita"; 

const generaCuota = (opcionMembresia, opcion) => {
    
    opcionMembresia = document.getElementById('opcionMembresia').value;
    opcion = document.getElementById('opcion').value;
    let msj = '';
    let membresia = 0;

    if(opcion === ''){
        msj = 'Use una Opcion Valida';
    }

    else if(opcion > 4){
        msj = 'Use una Opcion Valida';
    }
    
    else if((opcion === "1") && (opcionMembresia === 'Oro')){
        msj ='Gracias por su compra de Membresia ';
        membresia = Oro;

    }else if((opcion === "2") && (opcionMembresia === 'Plata')){
        msj ='Gracias por su compra de Membresia ';
        membresia = Plata ;

    } else if((opcion === "3") && (opcionMembresia === 'Bronce')){
        msj ='Gracias por su compra de Membresia ';
        membresia = Bronce;

    } else if((opcion ==="4") && (opcionMembresia === 'Gratuita')){
        msj ='Disfrute su Membresia ';
        membresia = Gratuita;
    }
 
    else {
        msj = 'Use una Opcion Valida';
    }
  
    const cuota = document.getElementById('cuota');

    if(membresia !== 0){
        cuota.innerHTML = `
        <div>
            <span>${msj}</span>
            <span>${membresia}</span>
        </div>
        `;
    } 
    
    else {
        cuota.innerHTML = `
        Use una Opcion Valida</span>
        </div>
        `;
    }
}




