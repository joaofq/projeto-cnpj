import React from 'react';
import './about.css';

export default function About() {
  return (
    <section className="about">
      <h2>Projeto Consulta - CNPJ</h2>
      <p className="about__text">
        Este aplicativo é o projeto de conclusão do curso de desenvolvedor web
        Practicum da Yandex.
      </p>
      <p className="about__text">
        O aplicativo consiste em consultar dados registrados na Receita Federal,
        através do CNPJ fornecido pelo usuário através da API
        (https://brasilapi.com.br/docs#tag/CNPJ).
      </p>
    </section>
  );
}
