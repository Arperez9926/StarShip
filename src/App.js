import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from './componentes/navegador'
import paginaInicial from './componentes/paginaInicial'
import crearProducto from './componentes/crearProducto'
import CreateUsuario from './componentes/CreateUsuario'
import productosLista from './componentes/productosLista'


function App() {
  return (
    <Router>
       <Navigation/>
       <Route path= "/" exact  component={paginaInicial}/>
       <Route path="/edit/:id"  component= {crearProducto}/>
       <Route path="/create"  component= {CreateUsuario}/>
       <Route path="/productos" component= {productosLista}/>

       
           
    </Router>
      

    
  );
}

export default App;
