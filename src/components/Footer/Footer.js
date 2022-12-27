import React from 'react';
import './footer.css';
import linkedin from '../../images/linkedin.svg';
import github from '../../images/github.svg';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">João Fernando Quattrucci</p>
      <p className="footer__text">2022</p>
      <a
        href="https://www.linkedin.com/in/jo%C3%A3o-fernando-quattrucci-15334566"
        target="_blank"
      >
        <img src={linkedin} className="footer__icons" />
      </a>
      <a href="https://github.com/joaofq" target="_blank">
        <img src={github} className="footer__icons" />
      </a>
    </footer>
  );
}

export default Footer;
