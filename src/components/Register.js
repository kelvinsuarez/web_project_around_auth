import React, {useState} from "react";
import * as auth from '../utils/auth';
import Logo from '../images/header/Vector.svg';
import { NavLink, useNavigate } from "react-router-dom";

function Register () {
    const history = useNavigate();
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if(values.password === values.confirmPassword){
            auth.register(values)
            .them((res) => {history.push('/signin')})
            .catch((err) => console.log(err));
        }
    };

    const handleChange = (event) => {
        const {name, value} = event.target;
        setValues({...values, [name]: value})
    }
    return(
        <>
           <header className="header">
                <img className="header__logo" src={Logo} alt="logo around the U.S"/>
                <nav className="header__nav">Inicia sesión</nav>
                <hr className="header__line"/>
            </header>
            <div className="signup">
                <form name="profile" className="signup__container" novalidate>
                    <h2 className="signup__text" >Regístrate</h2>
                    <input type="text" 
                        id="correo_electronico"
                        name="correo_electronico"
                        placeholder="correo_electronico" 
                        minlength="2" maxlength="40" 
                        className="signup__imput-text"
                        required
                        autocomplete="off"
                    />
                    <input type="text" 
                        id="contraseña"
                        name="contraseña"
                        placeholder="contraseña"
                        minlength="2" maxlength="200"
                        className="signup__imput-text"
                        required
                        autocomplete="off"
                    />
                    <button className=" signup__button-save">Regístrate</button>
                    <p className="signup__link-register">¿Ya eres miembro? Inicia sesión aquí</p>
                </form>
            </div>
        </>
    )
}

export default Register;