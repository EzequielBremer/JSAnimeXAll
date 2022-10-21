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


/*

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
*/


//COMPRAR MEMBRESIA

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



//---------------------------
//TODO NUEVO//
//---------------------------

//LOGIN

const username = document.getElementById('username')
const password = document.getElementById('password')
const button = document.getElementById('button')

button.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        username: username.value,
        password: password.value
    }

    console.log(data);
})

//CARRITO

const contenedorProductos = document.getElementById('contenedor-productos')

//TERCER PASO

const contenedorCarrito = document.getElementById('carrito-contenedor')
//SEXTO PASO
const botonVaciar = document.getElementById('vaciar-carrito')
//SEXTIMO PASO, MODIFICAR LOS CONTADORES
const contadorCarrito = document.getElementById('contadorCarrito')

//OCTAVO PASO
const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')

let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})
//SEXTO PASO
botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})

//PRIMER PRIMER PASO, INYECTAR EL HTML
stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img src=${producto.img} alt= "">
    <h3>${producto.nombre}</h3>
    <p>${producto.desc}</p>
    <p>Talle: ${producto.talle}</p>
    <p class="precioProducto">Precio:$ ${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
    `
    contenedorProductos.appendChild(div)

    //2 - SEGUNDO PASO, LUEGO DE QUE INSERTEMOS EL HTML EN EL DOM:
    const boton = document.getElementById(`agregar${producto.id}`)
    //Por cada elemento de mi array, creo un div, lo cuelgo, le pongo un id particular, una vez colgado
    //le hago un get element by id (el de agregar) Obtengo el elemento y a dicho elemento le agregamos
    //el add event listener

    boton.addEventListener('click', () => {
        //esta funcion ejecuta el agregar el carrito con la id del producto
        agregarAlCarrito(producto.id)
        //
    })
})

// 1- PRIMER PASO

//AGREGAR AL CARRITO
const agregarAlCarrito = (prodId) => {

    //PARA AUMENTAR LA CANTIDAD Y QUE NO SE REPITA
    const existe = carrito.some (prod => prod.id === prodId) //comprobar si el elemento ya existe en el carro

    if (existe){ //SI YA ESTÁ EN EL CARRITO, ACTUALIZAMOS LA CANTIDAD
        const prod = carrito.map (prod => { //creamos un nuevo arreglo e iteramos sobre cada curso y cuando
            // map encuentre cual es el q igual al que está agregado, le suma la cantidad
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else { //EN CASO DE QUE NO ESTÉ, AGREGAMOS EL CURSO AL CARRITO
        const item = stockProductos.find((prod) => prod.id === prodId)//Trabajamos con las ID
        //Una vez obtenida la ID, lo que haremos es hacerle un push para agregarlo al carrito
        carrito.push(item)
    }
    //Va a buscar el item, agregarlo al carrito y llama a la funcion actualizarCarrito, que recorre
    //el carrito y se ve.
    actualizarCarrito() //LLAMAMOS A LA FUNCION QUE CREAMOS EN EL TERCER PASO. CADA VEZ Q SE 
    //MODIFICA EL CARRITO
}
//agregarAlCarrito(1) //Le pasamos el ID por parametro. Tenemos que asigarle como evento esta funcion al boton
//con el id de su producto correspondiente

// 5 - QUINTO PASO
const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)

    const indice = carrito.indexOf(item) //Busca el elemento q yo le pase y nos devuelve su indice.

    carrito.splice(indice, 1) //Le pasamos el indice de mi elemento ITEM y borramos 
    // un elemento 
    actualizarCarrito() //LLAMAMOS A LA FUNCION QUE CREAMOS EN EL TERCER PASO. CADA VEZ Q SE 
    //MODIFICA EL CARRITO
    console.log(carrito)
}

const actualizarCarrito = () => {
    //4- CUARTO PASO
    //LOS APPENDS SE VAN ACUMULANDO CON LO QE HABIA ANTES
    contenedorCarrito.innerHTML = "" //Cada vez que yo llame a actualizarCarrito, lo primero q hago
    //es borrar el nodo. Y despues recorro el array lo actualizo de nuevo y lo rellena con la info
    //actualizado
    //3 - TERCER PASO. AGREGAR AL MODAL. Recorremos sobre el array de carrito.

    //Por cada producto creamos un div con esta estructura y le hacemos un append al contenedorCarrito (el modal)
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `

        contenedorCarrito.appendChild(div)
        
        localStorage.setItem('carrito', JSON.stringify(carrito))

    })
    //SEPTIMO PASO
    contadorCarrito.innerText = carrito.length // actualizamos con la longitud del carrito.
    //OCTAVO PASO
    console.log(carrito)
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
    //Por cada producto q recorro en mi carrito, al acumulador le suma la propiedad precio, con el acumulador
    //empezando en 0.

}