import React, { Component } from "react";
import {Link} from 'react-router-dom'


export default class Navigation extends Component {
  render() {
    return (
      <div>
      <div>
       <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className='container'> 
          <Link className="navbar-brand" to="/"> STARSHIP </Link>
          <button
            className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"  >
           <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
               <Link className = "nav-link" to="menu/productos"> Productos </Link>
            </li>

            <li className="nav-item active">
            <Link className = "nav-link" to="/menu/usuarios"> Usuarios </Link>
             </li>

            <li className="nav-item active">
            <Link className = "nav-link" to="/menu/registrarse"> Registrarse </Link>
              
            </li>
            <li className="nav-item active">
            <Link className = "nav-link" to="/menu/contactenos"> Contactenos </Link>
              
            </li>
          </ul>
        </div>
          

        </div>
        
      </nav>
      </div>
      
      </div>

    );
  }
}
