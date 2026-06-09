import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="container">
        <h1 className="animate-fade-in">Excelência em Construção e Reformas</h1>
        <p className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Transformamos o seu espaço com qualidade, segurança e design de ponta. 
          A Construtora Vigha oferece soluções completas para sua obra.
        </p>
        <div className="hero-actions animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <a href="#servicos" className="contact-btn">
            Nossos Serviços <ArrowRight size={20} />
          </a>
          <a href="https://wa.me/5500000000000" className="contact-btn" style={{ backgroundColor: 'var(--bg-surface)', color: 'var(--text-main)', border: '1px solid var(--border)' }}>
            Fale Conosco
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
