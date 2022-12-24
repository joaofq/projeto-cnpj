import React from 'react';
import { Link } from 'react-router-dom';
import './resultado.css';

function Resultado(props) {
  const endereco = `${props.data.descricao_tipo_de_logradouro} ${props.data.logradouro} Nº ${props.data.numero}, ${props.data.complemento}, ${props.data.bairro}, ${props.data.municipio} - ${props.data.uf} - CEP ${props.data.cep}`;

  // const map = 'https://www.google.com.br/maps/place/' + endereco;

  return (
    <section className="resultado">
      {props.data && (
        <>
          <h1 className="resultado__titulo">
            {'CNPJ  ' +
              props.data.cnpj.replace(
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
              <p className="resultado__dado">
                {props.data.cnae_fiscal_descricao}
              </p>
            </li>
            <li className="resutado__list_item">
              <p className="resultado__subtitulo">SITUAÇÃO:</p>
              <p className="resultado__dado">
                {props.data.descricao_situacao_cadastral}
              </p>
            </li>
            <li className="resutado__list_item ">
              <p className="resultado__subtitulo">ENDREÇO:</p>
              <a
                href={'https://www.google.com.br/maps/place/' + endereco}
                target="_blank"
                className="resultado__pesquisa"
              >
                <p className="resultado__dado">
                  {`
             ${endereco}
            `}
                </p>
                <div className="lupa"></div>
              </a>
            </li>
            <li className="resutado__list_item">
              <p className="resultado__subtitulo">
                SÓCIO(S) ADMINISTRADOR(ES):
              </p>
              {props.data.qsa.map((socio, index) => (
                <a
                  href={'https://www.google.com/search?q=' + socio.nome_socio}
                  key={index}
                  target="_blank"
                  className="resultado__pesquisa"
                >
                  <p className="resultado__dado" key={index}>
                    {socio.nome_socio}
                  </p>
                  <div className="lupa"></div>
                </a>
              ))}
            </li>
          </ul>
        </>
      )}
    </section>
  );
}

export default Resultado;
