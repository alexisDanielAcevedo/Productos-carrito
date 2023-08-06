const contenedor = document.getElementById("contenedorDeAmuletos");
const unidadesElemento = document.getElementById("unidades");
const precioElemento = document.getElementById("precio");
const carritoVacioElemento = document.getElementById("carritoVacio");
const totalesElemento = document.getElementById("totales");
const reiniciarCarritoElemento = document.getElementById("reiniciarCarrito");





function crearAmuleto (){
    contenedor.innerHTML = "";
    const productos = JSON.parse(localStorage.getItem('amuleto'));
    console.log(productos);
    if (productos && productos.length > 0){
        productos.forEach((producto) => {
            const nuevoAmuleto = document.createElement("div");
            nuevoAmuleto.classList = "cartaAmuleto";
            nuevoAmuleto.innerHTML = `
            <h5>${producto.amuleto}</h5>
            <h3>${producto.nombre} </h3>
            <p>${producto.precio}$ </p>
            <div>
                <button>-</button>
                 <span class="cantidad">${producto.cantidad}</span>
                 <button>+</button>
            </div>
            `;
            contenedor.appendChild(nuevoAmuleto);
            nuevoAmuleto
            .getElementsByTagName('button')[1]
            .addEventListener('click',(e)=> {
                const cuentaElemento = e.target.parentElement.getElementsByTagName('span')[0];
                cuentaElemento.innerText = agregarAlCarrito(producto);
                actualizarTotales();
            });

            nuevoAmuleto
            .getElementsByTagName('button')[0]
            .addEventListener('click',(e)=> {
                restarAlCarrito(producto);
                crearAmuleto();
                actualizarTotales();
            });
      });
   }
}
crearAmuleto();
actualizarTotales();


function actualizarTotales(){
    const productos = JSON.parse(localStorage.getItem('amuleto'));
    let unidades = 0;
    let precio = 0;
    if (productos && productos.length > 0){
        productos.forEach(producto => {
            unidades += producto.cantidad;
            precio += producto.precio * producto.cantidad;
        })
        unidadesElemento.innerText = unidades;
        precioElemento.innerText = precio;
    }
    revisarMensajeVacio();
    
}

function revisarMensajeVacio(){
    const productos = JSON.parse(localStorage.getItem('amuleto'));
    console.log(productos, productos == true);
    carritoVacioElemento.classList.toggle('displayNone',productos && productos.length > 0);
    totalesElemento.classList.toggle('displayNone', !(productos && productos.length > 0));

}

revisarMensajeVacio();

reiniciarCarritoElemento.addEventListener('click',reiniciarCarrito);
function reiniciarCarrito(){
    localStorage.removeItem('amuleto');
    actualizarTotales();
    crearAmuleto();
}