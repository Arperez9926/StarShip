import "../styles/InicioStyle.css"



import React, { Component } from 'react'

export default class PaginaInicial extends Component {
    render() {
        return (
            <div id="backgroundEspacio">
                <div className="background"/>
        <div className="container" align="center">
        <div className="login-container">
        <div className="register">
            <h1 className="text-center">STARSHIP</h1> <h2 className="text-center">Iniciar sesión</h2>
            <form action="">
            <input type="text" placeholder="Nombre de usuario " className="nombre de usuario"/>
            <input type="password" placeholder="Contraseña" className="pass"/>
            <input type="submit" className="olvido" value="¿Has olvidado la contraseña?"/>
            <input type="submit" className="submit" value="Iniciar"/>
            <div className="imgchipBlue"></div>
            </form>
        </div>
        <div className="login">
            <h2 className="text-center"> Redes Sociales</h2>
            <div className="login-items">
            <button className="fb"><i className="fab fa-facebook-f"></i> Acceder con Facebook</button>
            <button className="tw"><i className="fab fa-twitter"></i> Acceder con Twitter</button>
            <button className="correo"><i className="fas fa-envelope"></i> Acceder con Correo</button>
            </div>
        </div>
        </div>
        </div>





            </div>
        )
    }
}
