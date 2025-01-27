import React, {Fragment, useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer' ;
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {

  const [ productos, guardarProductos ] = useState([
    { id: 1, nombre: 'Camisa ReactJS', precio: 50 },
    { id: 2, nombre: 'Camisa vueJS', precio: 40 },
    { id: 3, nombre: 'Camisa node.js', precio: 30 },
    { id: 4, nombre: 'Camisa Angular', precio: 20 }
  ]);
  
  const fecha = new Date().getFullYear();

  const [ carrito, addProducto] = useState([]);

  return (
    <Fragment>
      <Header  titulo='Tienda virtual' />    
        <h1>Lista de productos</h1>
        { productos.map(producto => (
          <Producto producto={producto} productos={productos} key={producto.id} 
                     carrito={carrito} addProducto={addProducto}  />
        ))}

        <Carrito  carrito={carrito} addProducto={addProducto} />
      <Footer  fecha={ fecha }/>
    </Fragment>
  );
}

export default App;
