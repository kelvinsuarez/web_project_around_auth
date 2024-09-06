import React, {useState} from "react";
import * as auth from '../utils/auth';
import Logo from '../images/header/Vector.svg';
import { NavLink, useNavigate } from "react-router-dom";

function Register () {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
            auth.register(values)
            .then(() => {navigate('/signin')})
            .catch((err) => console.log(err));
        
    };

    const handleChange = (event) => {
        const {name, value} = event.target;
        setValues({...values, [name]: value});
    }
    return(
        <>
           <header className="header">
                <img className="header__logo" src={Logo} alt="logo around the U.S"/>
                <nav className="header__nav">Inicia sesión</nav>
                <hr className="header__line"/>
            </header>
            <div className="signup">
                <form name="profile" className="signup__container">
                    <h2 className="signup__text" >Regístrate</h2>
                    <input type="text" 
                        className="signup__imput-text"
                        name="email"
                        placeholder="correo_electronico"
                        value={values.email}
                        onChange={handleChange}
                    />
                    <input type="text" 
                        name="password"
                        placeholder="contraseña"
                        className="signup__imput-text"
                        value={values.password}
                        onChange={handleChange}
                        autoComplete="off"
                    />
                    <button onClick={handleSubmit} className=" signup__button-save">Regístrate</button>
                    
                    <NavLink to='/signin' className="signup__link-register">¿Ya eres miembro? Inicia sesión aquí</NavLink>
                   
                </form>
            </div>
        </>
    )
}

export default Register;