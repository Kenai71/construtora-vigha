import React from 'react';
import logo from '../../logo.png';

const Footer = () => {
  return (
    <footer id="sobre" className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <img 
                src={logo} 
                alt="Construtora Vigha Logo" 
                style={{ height: '90px', objectFit: 'contain', backgroundColor: '#FFFFFF', padding: '12px', borderRadius: '12px', marginRight: '16px' }} 
              />
            </div>
            <p>
              Comprometimento e qualidade em cada tijolo. Realizamos sua obra do projeto ao acabamento.
            </p>
          </div>
          
          <div className="footer-links">
            <h4>Navegação</h4>
            <ul>
              <li><a href="#inicio">Início</a></li>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#sobre">Sobre Nós</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Contato</h4>
            <ul>
              <li><a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li><a href="mailto:contato@vigha.com.br">contato@vigha.com.br</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Construtora Vigha. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
