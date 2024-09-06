import React from "react";
import Logo from '../images/header/Vector.svg';
import{Navigate, NavLink, useNavigate } from 'react-router-dom';
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
                <form name="profile" className="login__container" noValidate>
                    <h2 className="login__text" >Inicia sesión</h2>
                    <input type="text" 
                        id="correo_electronico"
                        name="correo_electronico"
                        placeholder="correo_electronico" 
                        minLength="2" maxLength="40" 
                        className="login__imput-text"
                        required
                        autoComplete="off"
                    />
                    <input type="text" 
                        id="contraseña"
                        name="contraseña"
                        placeholder="contraseña"
                        minLength="2" maxLength="200"
                        className="login__imput-text"
                        required
                        autoComplete="off"
                    />
                    <button className=" login__button-save">Inicia sesión</button>
                    <NavLink to='/signup' className="signup__link-register">¿Aún no eres miembro? Regístrate aquí</NavLink>
                </form>
            </div>
            <InfoTooltip/>
        </>
    )
}

export default Login;