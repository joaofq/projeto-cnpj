import React from 'react';
import cnpjMask from '../../utils/cnpjMask';
import './form.css';

function Form(props) {
  const [value, setValue] = React.useState('');

  function inputChange(e) {
    const digito = e.target;
    setValue(digito.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const cnpj = value.replace(/\D/g, '');
    props.onCnpjSubmit(cnpj);
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
        onChange={inputChange}
        value={cnpjMask(value)}
      ></input>
      <button className="form__button">Enviar</button>
    </form>
  );
}

export default Form;
