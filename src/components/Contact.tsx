import { useState } from 'react';
import { Mail, Calendar, MapPin, Copy, Check } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTranslation } from '../context/LanguageContext';

const EMAIL = 'matias.carvachos@gmail.com';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const t = useTranslation();
  const tc = t.contact;

  const contactLinks = [
    {
      href: `mailto:${EMAIL}`,
      icon: <Mail size={22} />,
      title: tc.cards.email,
      sub: EMAIL,
      iconBg: 'rgba(37, 99, 235, 0.1)',
      iconColor: 'var(--accent-blue)',
      copyable: true,
    },
    {
      href: 'https://linkedin.com/in/matias-carvacho',
      target: '_blank',
      icon: <FaLinkedin size={22} />,
      title: 'LinkedIn',
      sub: 'matias-carvacho',
      iconBg: 'rgba(251, 191, 36, 0.1)',
      iconColor: 'var(--accent-yellow)',
      copyable: false,
    },
    {
      href: 'https://github.com/Guonejo',
      target: '_blank',
      icon: <FaGithub size={22} />,
      title: 'GitHub',
      sub: 'Guonejo',
      iconBg: 'rgba(255, 255, 255, 0.06)',
      iconColor: 'var(--text-primary)',
      copyable: false,
    },
    {
      href: `mailto:${EMAIL}?subject=Agendar%20Reuni%C3%B3n`,
      icon: <Calendar size={22} />,
      title: tc.cards.schedule,
      sub: tc.cards.scheduleSub,
      iconBg: 'rgba(16, 185, 129, 0.1)',
      iconColor: '#10B981',
      copyable: false,
    },
  ];

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  };

  return (
    <section id="contact" className="section reveal-section">
      <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
        <h2 className="section-title reveal-item">
          {tc.sectionTitle}
        </h2>
        <p className="reveal-item" style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem' }}>
          {tc.description}
        </p>

        <div
          className="bento-grid contact-grid reveal-item"
          style={{ textAlign: 'left', gridTemplateColumns: 'repeat(2, 1fr)' }}
        >
          {contactLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              target={(link as any).target}
              rel={(link as any).target ? 'noreferrer' : undefined}
              className="bento-card contact-card"
              onClick={link.copyable ? handleCopy : undefined}
            >
              <div className="contact-card__icon" style={{ background: link.iconBg, color: link.iconColor }}>
                {link.icon}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3 className="contact-card__title">{link.title}</h3>
                <p className="contact-card__sub" style={{ wordBreak: 'break-word' }}>{link.sub}</p>
              </div>
              {link.copyable && (
                <div className="copy-btn" style={{ color: copied ? '#10B981' : 'var(--text-muted)', flexShrink: 0, transition: 'color 0.2s' }}>
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                </div>
              )}
            </a>
          ))}
        </div>

        <div className="contact-location reveal-item">
          <MapPin size={15} />
          <span>{tc.location}</span>
        </div>
      </div>

      {/* Copy toast */}
      <div className={`copy-toast ${copied ? 'copy-toast--visible' : ''}`}>
        <Check size={14} />
        {tc.toast}
      </div>
    </section>
  );
}
