import React from 'react';
import { ArrowRight } from 'lucide-react';
import consultorio from '../../consultorio.png';
import escritorio from '../../escritorio.png';
import consultorio2 from '../../consultorio2.png';
import escritorio2 from '../../escritorio2.png';
import construcao1 from '../../construcao1.png';
import construcao2 from '../../construcao2.png';
import construcao3 from '../../construcao3.png';
import construcao4 from '../../construcao4.png';

const Services = () => {
  const constructionServices = [
    {
      id: 1,
      title: 'Instalações Prediais',
      description: 'Sistemas elétricos, hidráulicos e sanitários executados com precisão e rigoroso controle de qualidade.',
      image: construcao1,
    },
    {
      id: 2,
      title: 'Alvenaria e Vedação',
      description: 'Construção de paredes e fechamentos com excelência técnica e materiais de alta qualidade.',
      image: construcao2,
    },
    {
      id: 3,
      title: 'Fundações e Estruturas',
      description: 'Execução de bases sólidas e seguras, garantindo a estabilidade e durabilidade da sua obra desde o início.',
      image: construcao3,
    },
    {
      id: 4,
      title: 'Execução de Obras',
      description: 'Condução completa do canteiro de obras com equipe especializada, garantindo segurança e cumprimento rigoroso dos prazos.',
      image: construcao4,
    }
  ];

  const readyServices = [
    {
      id: 5,
      title: 'Construção Civil',
      description: 'Execução de obras residenciais e comerciais do alicerce ao acabamento, seguindo rigorosos padrões.',
      image: escritorio,
    },
    {
      id: 6,
      title: 'Reformas e Ampliações',
      description: 'Renovação de ambientes e modernização de espaços para garantir mais conforto e estética.',
      image: consultorio,
    },
    {
      id: 7,
      title: 'Projetos Corporativos',
      description: 'Soluções arquitetônicas e execução de obras para escritórios, focando em funcionalidade.',
      image: escritorio2,
    },
    {
      id: 8,
      title: 'Espaços Clínicos',
      description: 'Adequação e construção de consultórios conforme as normas e exigências da vigilância sanitária.',
      image: consultorio2,
    }
  ];

  return (
    <section id="servicos" className="section services">
      <div className="container">
        <div className="section-header">
          <h2>Nossos Serviços</h2>
          <p className="text-muted">Soluções completas para transformar o seu projeto em realidade.</p>
        </div>
        
        <h3 className="services-subtitle">Construção</h3>
        <div className="services-grid mb-5">
          {constructionServices.map((service) => (
            <div key={service.id} className="service-card">
              <img src={service.image} alt={service.title} className="service-image" />
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="https://wa.me/5500000000000" className="service-btn">
                  Solicitar orçamento <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <h3 className="services-subtitle">Serviços Prontos</h3>
        <div className="services-grid">
          {readyServices.map((service) => (
            <div key={service.id} className="service-card">
              <img src={service.image} alt={service.title} className="service-image" />
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="https://wa.me/5500000000000" className="service-btn">
                  Solicitar orçamento <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
