/* Vamos a crear un formulario para agregar productos en una lista de productos*/

const productos = []; //empezamos a crear una lista de productos vacia

const listaDeProductosHTML = document.getElementById("listaDeProductos"); //aca va a quedar almacenado la lista de productos de la linea 3


function renderizarProductos(listaDeProductos) {/* esta funcion muestra un array de productos */
  listaDeProductosHTML.innerHTML = " ";

  listaDeProductos.forEach((producto) => {/* este for each itera sobre una listaDeProductosHTML */
    listaDeProductosHTML.innerHTML += `<div>${producto.name}</div>`;
  });
}


//paso e = evento mas complejo que pasamos por parametro que es una funcion
function obtenerDatos(respuestaFormulario /* info del formulario */) {
  const { nameProducto, precioProducto, categoria /* imputs del formulario HTML */ } =
    respuestaFormulario;

  return {
    name: nameProducto.value,/* value es una forma de obtener el valor de un input */
    precio: precioProducto.value,
    categoria: categoria.value,
  };
}


/* capturamos el formulario paso1 */
const formularioHTML = document.getElementById("formulario");


formularioHTML.addEventListener("submit", (e) => { //e es un objeto evento que se crea cada vez que ocurra un evento y nos da info de ese evento
  e.preventDefault(); //evita comportamiento por default

  productos.push(obtenerDatos(formularioHTML));

  renderizarProductos(productos); //invocamos la funcion renderizar productos, para que se actualize el cambio 
});


