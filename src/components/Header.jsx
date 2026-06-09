import React from 'react';
import { Phone } from 'lucide-react';
import logo from '../../logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <a href="/" className="logo-container">
          <img src={logo} alt="Construtora Vigha Logo" />
        </a>
        
        <div className="header-actions">
          <nav className="nav-links">
            <a href="#inicio">Início</a>
            <a href="#servicos">Serviços</a>
            <a href="#sobre">Sobre</a>
          </nav>
          <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" className="contact-btn">
            <Phone size={20} />
            Contato
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
