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

alert("Elija que manga Comprar para salir ingrese 0")
let seleccionarProductos = Number(prompt( " Comprar Manga (1) Spy x Family $800 (2) Blue Lock $900 (3) Chainsaw-Man $850 (4) Jujutsu Kaisen $800  (Para salir ingrese 0)"))
let seleccionarCantidad;
let total = 0;


const cantidad2 = (cant, precio) => {
  return cant * precio
}


while (seleccionarProductos != 0) {
  switch (seleccionarProductos) {
    case 1:
      seleccionarCantidad= Number(prompt("Manga Spy x Family, indique la cantidad"))
            total += cantidad2(seleccionarCantidad, 800)
      break;
      case 2:
        seleccionarCantidad = Number(prompt("Manga Blue Lock, indique la cantidad"))
        total += cantidad2(seleccionarCantidad, 900)
      break;
    case 3:
      seleccionarCantidad = Number(prompt("Manga Chainsaw-Man, indique la cantidad"))
      total += cantidad2(seleccionarCantidad, 850)
    break;
    case 4:
      seleccionarCantidad = Number(prompt("Manga Jujutsu Kaisen, indique la cantidad"))
      total += cantidad2(seleccionarCantidad, 800)
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
    
    //Declaramos las variables
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