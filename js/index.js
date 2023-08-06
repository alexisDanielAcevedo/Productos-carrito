const contenedor = document.getElementById("contenedorDeAmuletos")

function crearAmuleto (producto){
    producto.forEach(producto => {
        const nuevoAmuleto = document.createElement("div");
        nuevoAmuleto.classList = "cartaAmuleto";
        nuevoAmuleto.innerHTML = `
        <h5> ${producto.amuleto}</h5>
        <h3>${producto.nombre} </h3>
        <p>${producto.precio}$ </p>
        <button> Agregar Carrito  </button>
        `
        contenedor.appendChild(nuevoAmuleto);
        nuevoAmuleto.getElementsByTagName('button')[0].addEventListener('click',()=> agregarAlCarrito(producto));
    });
}

crearAmuleto(amuleto);