import React from 'react';
import Navigation from '../Navigation/Navigation';
import './header.css';
import detective from '../../images/detective-light-skin-tone-svgrepo-com.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img src={detective} className="header__image" />
        <h1 className="header__title">CONSULTA-CNPJ</h1>
      </Link>
      <Navigation />
    </header>
  );
}

export default Header;
