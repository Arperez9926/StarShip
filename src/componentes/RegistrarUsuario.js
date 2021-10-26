import React, { Component } from 'react'
import axios from 'axios'


export default class RegistrarUsuario extends Component {
    
    state={
        productos:[]
    }
    
  
    async componentDidMount() {
        const res= await axios.get('http://localhost:4000/api/productos');
        this.setState({productos:res.data});
        console.log(this.state.productos)
   }

    render() {
        return (
           <div id="backgroundEspacio"> 
             <hi>Registrar los usuarios</hi>
             


           </div>
        )
    }
}


