import React from 'react';
import { cnpjMask, cnpjUnmask } from '../../utils/cnpjMask';
import './form.css';

function Form(props) {
  const [value, setValue] = React.useState('');

  function inputChange(e) {
    const digito = e.target;
    setValue(digito.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onCnpjSubmit(cnpjUnmask(value));
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="form__input"
        autoFocus
        placeholder="12.345.678/0001-00"
        minLength={14}
        id="input-cnpj"
        onChange={inputChange}
        value={cnpjMask(value)}
      ></input>
      <button className="form__button">Consultar</button>
    </form>
  );
}

export default Form;
