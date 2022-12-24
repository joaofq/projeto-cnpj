import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

export default function Navigation() {
  return (
    <nav className="nav">
      <ul className="navbar">
        <li className="navitem">
          <NavLink to="/" className="navlink" end>
            Sobre
          </NavLink>
        </li>
        <li className="navitem">
          <NavLink to="main" className="navlink">
            WebApp
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
