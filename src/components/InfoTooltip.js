import React from "react";
import Union from '../images/Icons/Union.png'
import UnionX from '../images/Icons/UnionX.png'

function InfoTooltip (props) {
    const textAprov = "¡Correcto! Ya estás registrado.";
    const textfail = "Uy, algo salió mal. Por favor, inténtalo de nuevo.";
   
    return (
        <div className="popup-InfoTooltip popup-confirmation-opened">
            <div className='popup-InfoTooltip__group'>
            <h2 className='popup-InfoTooltip__icon-close popup-InfoTooltip__icon-close:hover' onClick={props.onClose}>+</h2>
                <div className='popup-InfoTooltip__container'>
                    <img src={Union} className="popup-InfoTooltip__icon"/>
                    <h2 className='popup-InfoTooltip__text'>{textAprov}</h2>
                </div>
            </div>
        </div>
    );
};

export default InfoTooltip