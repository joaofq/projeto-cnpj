import React from 'react';
import './result.css';
import loup from '../../images/loup.svg';

function Result(props) {
  const endereco = `${props.data.descricao_tipo_de_logradouro} ${props.data.logradouro} Nº ${props.data.numero}, ${props.data.complemento}, ${props.data.bairro}, ${props.data.municipio} - ${props.data.uf} - CEP ${props.data.cep}`;

  return (
    <section className="result">
      {props.data && (
        <>
          <ul className="result__list">
            <li className="result__titulo">
              {'CNPJ  ' +
                props.data.cnpj.replace(
                  /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
                  '$1.$2.$3/$4-$5',
                )}
            </li>
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
              <p className="result__subtitulo">TIPO DE EMPRESA</p>
              <p className="result__dado">{props.data.natureza_juridica}</p>
            </li>
            <li className="resutado__list_item">
              <p className="result__subtitulo">SITUAÇÃO:</p>
              <p className="result__dado">
                {props.data.descricao_situacao_cadastral}
              </p>
              <p className="result__dado">
                INÍCIO DAS ATIVIDADES: {props.data.data_inicio_atividade}
              </p>
              <p className="result__dado">
                CAPITAL SOCIAL: R$ {props.data.capital_social},00
              </p>
            </li>
            <li className="resutado__list_item ">
              <p className="result__subtitulo">ENDEREÇO:</p>
              <a
                href={'https://www.google.com.br/maps/place/' + endereco}
                target="_blank"
                className="result__link"
              >
                <p className="result__dado">{endereco}</p>
                <img src={loup} className="result__loup" alt="Imagem de lupa" />
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
                  <p className="result__dado" key={index}>
                    - CPF/CNPJ: {socio.cnpj_cpf_do_socio}
                  </p>
                  <img
                    src={loup}
                    className="result__loup"
                    alt="imagem de lupa"
                  />
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
