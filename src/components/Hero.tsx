import { ArrowRight, Terminal, ChevronDown } from 'lucide-react';
import { SiNextdotjs, SiPostgresql, SiLinux } from 'react-icons/si';

const BASE = import.meta.env.BASE_URL;
import { useTranslation, useLanguage } from '../context/LanguageContext';

export function Hero() {
  const t = useTranslation();
  const { lang } = useLanguage();
  const { stats, titlePre, titleAccent, description, descAccent, descEnd,
          btnPrimary, btnSecondary, available, roleBadge } = t.hero;

  return (
    <section className="hero-section section" style={{ paddingTop: '6.5rem', paddingBottom: '4rem' }}>
      <div className="container">
        <div className="hero-layout">

          {/* ── Left: text content ── */}
          <div className="hero-content">

            {/* Unified Eyebrow Badges */}
            <div className="hero-eyebrow-container" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
              <div className="hero-badge" style={{ marginBottom: 0 }}>
                <span className="hero-badge__dot" aria-hidden="true" />
                <span>{available}</span>
              </div>
              <span className="hero-role-pill">
                <Terminal size={13} style={{ color: 'var(--accent-secondary)' }} aria-hidden="true" />
                <span>{roleBadge}</span>
              </span>
            </div>

            {/* Heading */}
            <p className="hero-name-label">Matías Carvacho</p>
            <h1 className="hero-title">
              {titlePre}{' '}
              <span className="gradient-text">{titleAccent}</span>
            </h1>

            {/* Description */}
            <p className="hero-description" style={{ marginBottom: '1.75rem' }}>
              {description}{' '}
              <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{descAccent}</strong>{' '}
              {descEnd}
            </p>

            {/* CTA buttons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <a href="#crewcontrol" className="btn btn-primary">
                {btnPrimary} <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a href="#contact" className="btn btn-secondary">
                {btnSecondary}
              </a>
            </div>

            {/* Impact stats - Above the fold */}
            <div className="hero-stats">
              {stats.map((stat, i) => (
                <div key={i} className="hero-stat">
                  <span className="hero-stat__value">{stat.value}</span>
                  <span className="hero-stat__label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: avatar with floating tech chips ── */}
          <div className="hero-avatar-wrap">
            <div className="hero-avatar-container">
              {/* Floating Chips */}
              <div className="avatar-chip avatar-chip--top">
                <SiNextdotjs size={14} style={{ color: '#F8FAFC' }} aria-hidden="true" />
                <span>Next.js 15 · React</span>
              </div>
              <div className="avatar-chip avatar-chip--left">
                <SiPostgresql size={14} style={{ color: '#818CF8' }} aria-hidden="true" />
                <span>Supabase · PostgreSQL RLS</span>
              </div>
              <div className="avatar-chip avatar-chip--bottom">
                <SiLinux size={14} style={{ color: '#C4B5FD' }} aria-hidden="true" />
                <span>{lang === 'es' ? 'Linux & Redes (10+ años)' : 'Linux & Networks (10+ yrs)'}</span>
              </div>

              {/* Avatar Ring */}
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
      </div>

      {/* Scroll indicator */}
      <a href="#crewcontrol" className="scroll-indicator" aria-label="Scroll to featured case study">
        <ChevronDown size={22} aria-hidden="true" />
      </a>
    </section>
  );
}
