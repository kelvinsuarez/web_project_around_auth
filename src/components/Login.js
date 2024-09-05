import React from "react";
import Logo from '../images/header/Vector.svg';
import{Navigate} from 'react-router-dom';
import InfoTooltip from './InfoTooltip.js';

function Login ({isLoggedIn}) {
    if (isLoggedIn) {
        return <Navigate to="/ProtectedRoute"/>;
    }
    return(
        <>
            <header className="header">
                <img className="header__logo" src={Logo} alt="logo around the U.S"/>
                <nav className="header__nav">Regístrate</nav>
                <hr className="header__line"/>
            </header>
            <div className="login">
                <form name="profile" className="login__container" novalidate>
                    <h2 className="login__text" >Inicia sesión</h2>
                    <input type="text" 
                        id="correo_electronico"
                        name="correo_electronico"
                        placeholder="correo_electronico" 
                        minlength="2" maxlength="40" 
                        className="login__imput-text"
                        required
                        autocomplete="off"
                    />
                    <input type="text" 
                        id="contraseña"
                        name="contraseña"
                        placeholder="contraseña"
                        minlength="2" maxlength="200"
                        className="login__imput-text"
                        required
                        autocomplete="off"
                    />
                    <button className=" login__button-save">Inicia sesión</button>
                    <p className="login__link-register">¿Aún no eres miembro? Regístrate aquí</p>
                </form>
            </div>
            <InfoTooltip/>
        </>
    )
}

export default Login;