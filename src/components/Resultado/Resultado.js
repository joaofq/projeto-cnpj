import React from 'react';
import './resultado.css';

function Resultado(props) {
  return (
    <section className="resultado">
      <h1 className="resultado__titulo">
        CNPJ{' '}
        {props.data.cnpj.replace(
          /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
          '$1.$2.$3/$4-$5',
        )}
      </h1>
      <ul className="resultado__list">
        <li className="resutado__list_item">
          <p className="resultado__subtitulo">RAZÃO SOCIAL:</p>
          <p className="resultado__dado">{props.data.razao_social}</p>
        </li>
        <li className="resutado__list_item">
          <p className="resultado__subtitulo">NOME FANTASIA:</p>
          <p className="resultado__dado">{props.data.nome_fantasia}</p>
        </li>
        <li className="resutado__list_item">
          <p className="resultado__subtitulo">SERVIÇOS PRESTADOS:</p>
          <p className="resultado__dado">{props.data.cnae_fiscal_descricao}</p>
        </li>
        <li className="resutado__list_item">
          <p className="resultado__subtitulo">SITUAÇÃO:</p>
          <p className="resultado__dado">
            {props.data.descricao_situacao_cadastral}
          </p>
        </li>
        <li className="resutado__list_item">
          <p className="resultado__subtitulo">ENDREÇO:</p>
          <p className="resultado__dado">
            {`
             ${props.data.descricao_tipo_de_logradouro} ${props.data.logradouro} Nº ${props.data.numero}, ${props.data.complemento}, ${props.data.bairro}, ${props.data.municipio} - ${props.data.uf} - CEP ${props.data.cep}
            `}
          </p>
        </li>
        <li className="resutado__list_item">
          <p className="resultado__subtitulo">SÓCIO(S) ADMINISTRADOR(ES):</p>
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
