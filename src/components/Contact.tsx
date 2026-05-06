import { Mail, Calendar, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const contactLinks = [
  {
    href: 'mailto:matias.carvachos@gmail.com',
    icon: <Mail size={22} />,
    title: 'Correo Electrónico',
    sub: 'matias.carvachos@gmail.com',
    iconBg: 'rgba(37, 99, 235, 0.1)',
    iconColor: 'var(--accent-blue)',
  },
  {
    href: 'https://linkedin.com/in/matias-carvacho',
    target: '_blank',
    icon: <FaLinkedin size={22} />,
    title: 'LinkedIn',
    sub: 'matias-carvacho',
    iconBg: 'rgba(251, 191, 36, 0.1)',
    iconColor: 'var(--accent-yellow)',
  },
  {
    href: 'https://github.com/Guonejo',
    target: '_blank',
    icon: <FaGithub size={22} />,
    title: 'GitHub',
    sub: 'Guonejo',
    iconBg: 'rgba(255, 255, 255, 0.06)',
    iconColor: 'var(--text-primary)',
  },
  {
    href: 'mailto:matias.carvachos@gmail.com?subject=Agendar%20Reuni%C3%B3n',
    icon: <Calendar size={22} />,
    title: 'Agendar Reunión',
    sub: 'Solicitar espacio (vía correo)',
    iconBg: 'rgba(16, 185, 129, 0.1)',
    iconColor: '#10B981',
  },
];

export function Contact() {
  return (
    <section id="contact" className="section reveal-section">
      <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
        <h2 className="section-title reveal-item">
          ¿Hablamos de tu próximo proyecto?
        </h2>
        <p className="reveal-item" style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem' }}>
          Disponible para nuevas oportunidades, consultorías o simplemente para hablar
          sobre tecnología y optimización.
        </p>

        <div className="bento-grid contact-grid reveal-item" style={{ textAlign: 'left', gridTemplateColumns: 'repeat(2, 1fr)' }}>
          {contactLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              target={(link as any).target}
              rel={(link as any).target ? 'noreferrer' : undefined}
              className="bento-card contact-card"
            >
              <div className="contact-card__icon" style={{ background: link.iconBg, color: link.iconColor }}>
                {link.icon}
              </div>
              <div>
                <h3 className="contact-card__title">{link.title}</h3>
                <p className="contact-card__sub">{link.sub}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="contact-location reveal-item">
          <MapPin size={15} />
          <span>Santiago / Quilpué, Chile</span>
        </div>
      </div>
    </section>
  );
}
