import React from 'react';

const Producto = ({producto, carrito, addProducto, productos}) => {
    const { nombre, id, precio } = producto;
    
    const seleccionarProducto = id => {
        const producto = productos.filter( producto => producto.id === id )[0];
        addProducto([ ...carrito, producto])
    }

    const EliminarProducto = id => {
        const productos = carrito.filter( producto => producto.id !== id );
        //Colocamos el producto en el state
        addProducto(productos)
    }

    return ( 
        <div>
            <h2>{nombre}</h2>
            <p> ${precio}</p>
            { productos 
            ? ( <button type='button' onClick={ () => seleccionarProducto(id)} >Comprar</button> )
            : ( <button type='button' onClick={ () => EliminarProducto(id) } >Eliminar</button>)

            }
            
        </div>     
    )
}
 
export default Producto;
