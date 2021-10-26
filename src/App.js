import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



import Navigation from './componentes/Navegador'
import PaginaInicial from './componentes/PaginaInicial'
import MenuPrincipal from './componentes/MenuPrincipal'
import Productos from './componentes/Productos'
import Usuarios from './componentes/Usuarios'
import RegistrarUsuario from './componentes/RegistrarUsuario'
import Contactenos from './componentes/Contactenos'

function App() {
  return (
    <Router>
               
       <Route path= "/" exact component={PaginaInicial}/>
       <Navigation/>
       <Route path="/menu" exact component = {MenuPrincipal}/>
       <Route path="/menu/usuarios" exact component= {Usuarios}/>
       <Route path="/menu/productos"  exact component= {Productos}/>
       <Route path="/menu/registrarse"  component= {RegistrarUsuario}/>
       <Route path="/menu/contactenos" component={Contactenos}/>

       
           
    </Router>
      

    
  );
}

export default App;
