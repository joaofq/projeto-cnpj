import React from 'react';
import './invalid.css';
import closeIcon from '../../images/closeIcon.svg';

export default function Invalid(props) {
  return (
    <div className="invalid__mask">
      <div className="invalid__popup">
        <img
          src={closeIcon}
          className="invalid__close-icon"
          onClick={props.onClose}
          alt="Exit icon"
        />
        <h2 className="invalid__title">CNPJ INVÁLIDO</h2>
        <p className="invalid__text">
          Verifique o CNPJ informado e tente novamente.
        </p>
      </div>
    </div>
  );
}
