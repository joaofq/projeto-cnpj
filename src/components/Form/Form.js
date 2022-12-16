import React from 'react';
import './form.css';

function Form(props) {
  function handleSubmit(e) {
    e.preventDefault();
    props.onCnpjSubmit(document.getElementById('input-cnpj').value);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      CNPJ:
      <input
        className="form__input"
        autoFocus
        placeholder="12.345.678/0001-00"
        minLength={14}
        id="input-cnpj"
      ></input>
      <button className="form__button">Enviar</button>
    </form>
  );
}

export default Form;
