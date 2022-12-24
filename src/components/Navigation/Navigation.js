import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

export default function Navigation() {
  return (
    <nav className="nav">
      <ul className="navbar">
        <li className="navitem">
          <NavLink to="/" className="" end>
            Home
          </NavLink>
        </li>
        <li className="navitem">
          <NavLink to="main" className="">
            WebApp
          </NavLink>
        </li>
        <li className="navitem">
          <NavLink to="/contato" className="">
            Contato
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
