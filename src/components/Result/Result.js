import React from 'react';
import { Link } from 'react-router-dom';
import './result.css';
import loup from '../../images/loup.svg';

function Result(props) {
  const endereco = `${props.data.descricao_tipo_de_logradouro} ${props.data.logradouro} Nº ${props.data.numero}, ${props.data.complemento}, ${props.data.bairro}, ${props.data.municipio} - ${props.data.uf} - CEP ${props.data.cep}`;

  // const map = 'https://www.google.com.br/maps/place/' + endereco;

  return (
    <section className="result">
      {props.data && (
        <>
          <h1 className="result__titulo">
            {'CNPJ  ' +
              props.data.cnpj.replace(
                /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
                '$1.$2.$3/$4-$5',
              )}
          </h1>
          <ul className="result__list">
            <li className="resutado__list_item">
              <p className="result__subtitulo">RAZÃO SOCIAL:</p>
              <p className="result__dado">{props.data.razao_social}</p>
            </li>
            <li className="resutado__list_item">
              <p className="result__subtitulo">NOME FANTASIA:</p>
              <p className="result__dado">{props.data.nome_fantasia}</p>
            </li>
            <li className="resutado__list_item">
              <p className="result__subtitulo">SERVIÇOS PRESTADOS:</p>
              <p className="result__dado">{props.data.cnae_fiscal_descricao}</p>
            </li>
            <li className="resutado__list_item">
              <p className="result__subtitulo">SITUAÇÃO:</p>
              <p className="result__dado">
                {props.data.descricao_situacao_cadastral}
              </p>
            </li>
            <li className="resutado__list_item ">
              <p className="result__subtitulo">ENDREÇO:</p>
              <a
                href={'https://www.google.com.br/maps/place/' + endereco}
                target="_blank"
                className="result__link"
              >
                <p className="result__dado">
                  {`
             ${endereco}
            `}
                </p>
                <img src={loup} className="result__loup" />
              </a>
            </li>
            <li className="resutado__list_item">
              <p className="result__subtitulo">SÓCIO(S) ADMINISTRADOR(ES):</p>
              {props.data.qsa.map((socio, index) => (
                <a
                  href={'https://www.google.com/search?q=' + socio.nome_socio}
                  key={index}
                  target="_blank"
                  className="result__link"
                >
                  <p className="result__dado" key={index}>
                    {socio.nome_socio}
                  </p>
                  <img src={loup} className="result__loup" />
                </a>
              ))}
            </li>
          </ul>
        </>
      )}
    </section>
  );
}

export default Result;
