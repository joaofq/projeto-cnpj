import React from 'react';
import { cnpjMask, cnpjUnmask } from '../../utils/cnpjMask';
import Resultado from '../Resultado/Resultado';
import './main.css';

function Main(props) {
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
    <main className="main">
      <form className="main__form" onSubmit={handleSubmit}>
        <input
          className="main__form_input"
          autoFocus
          placeholder="12.345.678/0001-00"
          minLength={14}
          id="input-cnpj"
          onChange={inputChange}
          value={cnpjMask(value)}
          required
        ></input>
        <button className="main__form_button">Consultar</button>
      </form>
      <Resultado data={props.data} />
    </main>
  );
}

export default Main;
