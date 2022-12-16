import React from 'react';
import './resultado.css';

function Resultado(props) {
  return (
    <section className="resultado">
      <ul className="resultado__list">
        <li className="resutado__list_item">
          <p className="resultado__titulo">RAZÃO SOCIAL:</p>
          <p className="resultado__dado">{props.data.razao_social}</p>
        </li>
        <li className="resutado__list_item">
          <p className="resultado__titulo">SERVIÇOS PRESTADOS:</p>
          <p className="resultado__dado">{props.data.cnae_fiscal_descricao}</p>
        </li>
        <li className="resutado__list_item">
          <p className="resultado__titulo">SITUAÇÃO:</p>
          <p className="resultado__dado">
            {props.data.descricao_situacao_cadastral}
          </p>
        </li>
        <li className="resutado__list_item">
          <p className="resultado__titulo">SÓCIO(S) ADMINISTRADOR(ES):</p>
          {props.data &&
            props.data.qsa.map((socio, index) => (
              <p className="resultado__dado" key={index}>
                {socio.nome_socio}
              </p>
            ))}
        </li>
      </ul>
    </section>
  );
}

export default Resultado;
