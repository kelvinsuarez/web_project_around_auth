import React, { useState } from "react";
import Logo from '../images/header/Vector.svg';
import{ NavLink, useNavigate } from 'react-router-dom';
import InfoTooltip from './InfoTooltip.js';
import * as auth from '../utils/auth.js'

function Login ({handleLogin}) {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.target;
        if(name === 'email') {
            setEmail(value);
        }else if (name === 'password') {
            setPassword(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            return;
        }
        auth.authorize(email, password)
        .then((data) => {
            if (data.jwt) {
                setEmail('');
                setPassword('');
                handleLogin()
                navigate('/profile')
            }
        })
        .catch((err) => console.log (err))
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
                        className="login__imput-text"
                        name="email"
                        placeholder="correo_electronico" 
                        value={email}
                        onChange={handleChange}
                        
                    />
                    <input type="text"
                        className="login__imput-text" 
                        name="password"
                        placeholder="contraseña"
                        value={password}
                        onChange={handleChange}
                    />
                    <button onClick={handleSubmit} className=" login__button-save">Inicia sesión</button>
                    <NavLink to='/signup' className="signup__link-register">¿Aún no eres miembro? Regístrate aquí</NavLink>
                </form>
            </div>
            <InfoTooltip/>
        </>
    )
}

export default Login;