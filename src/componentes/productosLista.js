import React, { Component } from 'react'
import axios from 'axios'


export default class productosLista extends Component {
    
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
           <div> 
             <div className="cold-md-7">
            <table className="table table-bordered table-hover">  
                <thead>
                    <tr>
                        <th> ID </th>
                        <th> Nombre Producto </th>
                        <th> Presentacion </th>
                        <th> Precio </th>
                        <th> Stock </th>
                        <th> Fecha creacion </th>
                    </tr>
                </thead>
                <tboody> 
                 
                     <tr>
                        <td> {
                          this.state.productos.map(producto => <li className="list-group-item list-group-item-action" key={producto._id}>
                             {producto.ID} 
                               </li>)
                      } 
                       </td>
                       <td> {
                          this.state.productos.map(producto => <li className="list-group-item list-group-item-action" key={producto._id}>
                             {producto.Nombre_producto} 
                               </li>)
                      } 
                       </td>
                       <td> {
                          this.state.productos.map(producto => <li className="list-group-item list-group-item-action" key={producto._id}>
                             {producto.Presentacion} 
                               </li>)
                      } 
                      <td> {
                          this.state.productos.map(producto => <li className="list-group-item list-group-item-action" key={producto._id}>
                             {producto.Precio} 
                               </li>)
                      } 
                       </td>
                       <td> {
                          this.state.productos.map(producto => <li className="list-group-item list-group-item-action" key={producto._id}>
                             {producto.Stock} 
                               </li>)
                      } 
                       </td>
                       <td> {
                          this.state.productos.map(producto => <li className="list-group-item list-group-item-action" key={producto._id}>
                             {producto.Fecha_registro} 
                               </li>)
                      } 
                       </td>

                       </td>



                     </tr>
                     
                   
                </tboody>
                
                   
                   
                    
                   
               
                </table>
        </div>
             


           </div>
        )
    }
}


