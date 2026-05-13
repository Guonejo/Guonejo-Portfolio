import { ArrowRight, Terminal, ChevronDown } from 'lucide-react';

const BASE = import.meta.env.BASE_URL;
import { useTranslation } from '../context/LanguageContext';

export function Hero() {
  const t = useTranslation();
  const { stats, titlePre, titleAccent, titlePost, description, descAccent, descEnd,
          btnPrimary, btnSecondary, available, roleBadge } = t.hero;

  return (
    <section className="hero-section section" style={{ paddingTop: '9rem', paddingBottom: '5rem' }}>
      <div className="container">
        <div className="hero-layout">

          {/* ── Left: text content ── */}
          <div className="hero-content">

            {/* Availability badge */}
            <div className="hero-badge">
              <span className="hero-badge__dot" />
              <span>{available}</span>
            </div>

            {/* Role badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <Terminal size={20} className="gradient-text" />
              <span className="badge">{roleBadge}</span>
            </div>

            {/* Heading */}
            <h1 className="hero-title">
              {titlePre}{' '}
              <span className="gradient-text">{titleAccent}</span>{' '}
              {titlePost}
            </h1>

            {/* Description */}
            <p className="hero-description">
              {description}{' '}
              <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{descAccent}</strong>{' '}
              {descEnd}
            </p>

            {/* CTA buttons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
              <a href="#crewcontrol" className="btn btn-primary">
                {btnPrimary} <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn btn-secondary">
                {btnSecondary}
              </a>
            </div>

            {/* Impact stats */}
            <div className="hero-stats">
              {stats.map((stat, i) => (
                <div key={i} className="hero-stat">
                  <span className="hero-stat__value gradient-text">{stat.value}</span>
                  <span className="hero-stat__label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: avatar ── */}
          <div className="hero-avatar-wrap">
            <div className="hero-avatar-ring">
              <img
                src={`${BASE}avatar.png`}
                alt="Matías Carvacho"
                className="hero-avatar-img"
                loading="eager"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#crewcontrol" className="scroll-indicator" aria-label="Scroll hacia abajo">
        <ChevronDown size={24} />
      </a>
    </section>
  );
}
