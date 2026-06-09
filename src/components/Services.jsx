import React from 'react';
import { ArrowRight } from 'lucide-react';
import consultorio from '../../consultorio.png';
import escritorio from '../../escritorio.png';
import consultorio2 from '../../consultorio2.png';
import escritorio2 from '../../escritorio2.png';

const Services = () => {
  const servicesList = [
    {
      id: 1,
      title: 'Construção Civil',
      description: 'Execução de obras residenciais e comerciais do alicerce ao acabamento, seguindo os mais rigorosos padrões de qualidade.',
      image: escritorio,
    },
    {
      id: 2,
      title: 'Reformas e Ampliações',
      description: 'Renovação de ambientes e modernização de espaços para garantir mais conforto, segurança e estética para o seu imóvel.',
      image: consultorio,
    },
    {
      id: 3,
      title: 'Projetos Corporativos',
      description: 'Soluções arquitetônicas e execução de obras para escritórios, focando em funcionalidade e estética profissional.',
      image: escritorio2,
    },
    {
      id: 4,
      title: 'Espaços Clínicos',
      description: 'Adequação e construção de consultórios médicos e odontológicos conforme as normas e exigências da vigilância sanitária.',
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
        
        <div className="services-grid">
          {servicesList.map((service) => (
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
