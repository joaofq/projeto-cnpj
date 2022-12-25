import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

export default function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__bar">
        <li className="navigation__bar_item">
          <NavLink to="/" className="navigation__bar_link" end>
            SOBRE
          </NavLink>
        </li>
        <li className="navigation__bar_item">
          <NavLink to="main" className="navigation__bar_link">
            WEBAPP
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
