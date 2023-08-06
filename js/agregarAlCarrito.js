function agregarAlCarrito(producto){
    const memoria = JSON.parse(localStorage.getItem('amuleto'));
    console.log(memoria);
    let cuenta = 0;
    if (!memoria) {
        const nuevoProducto = getNuevoProductoParaMemoria(producto);
        localStorage.setItem('amuleto',JSON.stringify([nuevoProducto]));
        cuenta = 1;
    } else{
        const indiceProducto = memoria.findIndex(helados => helados.id === producto.id);
        console.log(indiceProducto)
        const nuevaMemoria = memoria;
      if (indiceProducto === -1){
            nuevaMemoria.push(getNuevoProductoParaMemoria(producto));
            cuenta = 1;
      } else {
            nuevaMemoria[indiceProducto].cantidad ++;
            cuenta = nuevaMemoria[indiceProducto].cantidad;
      }
        localStorage.setItem('amuleto',JSON.stringify((nuevaMemoria)));
    }
    actualizarCarrito();
    return cuenta;
}

function restarAlCarrito(producto){
    const memoria = JSON.parse(localStorage.getItem('amuleto'));
    const indiceProducto = memoria.findIndex(helados => helados.id === producto.id);
    if(memoria[indiceProducto].cantidad === 1){
        memoria.splice(indiceProducto,1);
    }else{
        memoria[indiceProducto].cantidad--;
    }
    localStorage.setItem('amuleto',JSON.stringify(memoria));
    actualizarCarrito();
}


function getNuevoProductoParaMemoria(producto){
    const nuevoProducto = producto;
    nuevoProducto.cantidad = 1;
    return nuevoProducto;
}

const contadorCarrito = document.getElementById('contadorCarrito')
function actualizarCarrito(){
    const memoria = JSON.parse(localStorage.getItem('amuleto'));
    if(memoria && memoria.length > 0){
    const incremento = memoria.reduce((acum, current) => acum+current.cantidad,0);
    contadorCarrito.innerText = incremento ;
    console.log(incremento)
    }else{
    contadorCarrito.innerText = 0;
    }
}   
actualizarCarrito();