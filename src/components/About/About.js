import React from 'react';
import './about.css';

export default function About() {
  return (
    <section className="about">
      <h2 className="about__title">Projeto Consulta - CNPJ</h2>
      <p className="about__text">
        Este aplicativo é o projeto de conclusão do curso de desenvolvedor web
        Practicum da Yandex.
      </p>
      <p className="about__text">
        O aplicativo consiste em consultar dados registrados na Receita Federal,
        através do CNPJ fornecido pelo usuário mediante requisição de API -
        https://brasilapi.com.br/docs#tag/CNPJ.
      </p>
      <p className="about__text">
        Todos os dados gerados pela API são públicos, nos termos art. 4º do
        Decreto nº 8.777, de 11 de maio de 2016, que institui Institui a
        Política de Dados Abertos do Poder Executivo federal.
      </p>
    </section>
  );
}
