import React, { Component } from 'react';
import axios from 'axios'

export default class Usuarios extends Component {

    state={
        usuarios:[]
    }
    
        async componentDidMount() {
        const res= await axios.get('http://localhost:4000/api/usuarios');
        this.setState({usuarios:res.data});
        console.log(this.state.usuarios)
    }
    


    render() {
        return (
            <div id="backgroundEspacio">
                <h1>crear usuario</h1>
            </div>
        )
    }
}
