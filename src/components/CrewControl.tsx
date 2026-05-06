import { useState, useRef } from 'react';
import { Zap, Database, LayoutTemplate, Server, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

const BASE = import.meta.env.BASE_URL;

function ImageCarousel() {
  const t = useTranslation();
  const tc = t.crewcontrol;
  const screenshots = tc.imgAlts.map((alt, i) => ({
    src: i === 0 ? `${BASE}crewcontrol-dashboard.webp`
       : i === 1 ? `${BASE}SCR-20260506-cwrt.webp`
       : i === 2 ? `${BASE}SCR-20260506-cwue.webp`
       : i === 3 ? `${BASE}SCR-20260506-cwzh.webp`
       : `${BASE}SCR-20260506-cxbg.webp`,
    alt,
  }));

  const [current, setCurrent]   = useState(0);
  const [loaded, setLoaded]     = useState(false);
  const touchStartX             = useRef(0);

  const prev = () => { setLoaded(false); setCurrent((c) => (c - 1 + screenshots.length) % screenshots.length); };
  const next = () => { setLoaded(false); setCurrent((c) => (c + 1) % screenshots.length); };

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd   = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 45) diff > 0 ? next() : prev();
  };

  return (
    <div style={{ position: 'relative', marginTop: '1.5rem', zIndex: 1 }}>
      {/* Frame */}
      <div
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        style={{
          borderRadius: '1rem',
          overflow: 'hidden',
          border: '1px solid var(--glass-border-hover)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)',
          position: 'relative',
          backgroundColor: '#0a0a0a',
          cursor: 'grab',
          minHeight: '180px',
        }}
      >
        {/* Skeleton */}
        {!loaded && (
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(90deg, #111 25%, #1a1a1a 50%, #111 75%)',
            backgroundSize: '200% 100%',
            animation: 'skeleton-shimmer 1.4s infinite',
            zIndex: 1,
          }} />
        )}

        {/* Glare */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 18%)', pointerEvents: 'none', zIndex: 2 }} />

        <img
          key={current}
          src={screenshots[current].src}
          alt={screenshots[current].alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          style={{
            width: '100%', height: 'auto', display: 'block',
            transform: 'scale(1.01)',
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.35s ease',
          }}
        />

        {/* Nav arrows */}
        {(['prev', 'next'] as const).map((dir) => (
          <button
            key={dir}
            onClick={dir === 'prev' ? prev : next}
            aria-label={dir === 'prev' ? tc.arrowPrev : tc.arrowNext}
            style={{
              position: 'absolute',
              [dir === 'prev' ? 'left' : 'right']: '0.75rem',
              top: '50%', transform: 'translateY(-50%)',
              background: 'rgba(0,0,0,0.6)', border: '1px solid var(--glass-border)',
              color: '#fff', borderRadius: '50%',
              width: '36px', height: '36px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', zIndex: 3, transition: 'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(37,99,235,0.75)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.6)')}
          >
            {dir === 'prev' ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
          </button>
        ))}
      </div>

      {/* Dot indicators */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '0.9rem' }}>
        {screenshots.map((_, i) => (
          <button
            key={i}
            onClick={() => { setLoaded(false); setCurrent(i); }}
            aria-label={tc.dotLabel(i)}
            style={{
              width: i === current ? '20px' : '7px', height: '7px',
              borderRadius: '9999px', border: 'none', cursor: 'pointer',
              transition: 'width 0.3s ease, background 0.2s',
              background: i === current
                ? 'linear-gradient(90deg, var(--accent-blue), var(--accent-yellow))'
                : 'var(--glass-border-hover)',
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* Swipe hint — mobile only */}
      <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.4rem' }} className="swipe-hint">
        {tc.swipeHint}
      </p>
    </div>
  );
}

export function CrewControl() {
  const t = useTranslation();
  const tc = t.crewcontrol;

  return (
    <section id="crewcontrol" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <h2 className="section-title animate-fade-in-up">
          {tc.sectionTitle}
        </h2>

        <div className="bento-grid">
          {/* Main feature box */}
          <div className="bento-card animate-fade-in-up delay-100" style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', gap: '1.5rem', overflow: 'hidden', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', background: 'var(--accent-blue)', filter: 'blur(100px)', opacity: '0.1', pointerEvents: 'none' }} />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', zIndex: 1 }}>
              <div>
                <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', fontWeight: 700, letterSpacing: '-0.02em' }}>{tc.subtitle}</h3>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '650px', fontSize: '1.05rem', lineHeight: '1.6' }}>
                  {tc.description}
                </p>
              </div>
              <a href="#contact" className="btn btn-primary animate-pulse-glow" style={{ whiteSpace: 'nowrap' }}>
                {tc.cta}
              </a>
            </div>

            <ImageCarousel />
          </div>

          {/* Stack & Architecture */}
          <div className="bento-card animate-fade-in-up delay-200" style={{ gridColumn: 'span 6', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Database size={36} className="gradient-text" style={{ marginBottom: '1.25rem' }} />
            <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem', fontWeight: 600 }}>{tc.multiTenantTitle}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6' }}>
              {tc.multiTenantBody}
            </p>
          </div>

          <div className="bento-card animate-fade-in-up delay-200" style={{ gridColumn: 'span 6', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Zap size={36} className="gradient-text" style={{ marginBottom: '1.25rem' }} />
            <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem', fontWeight: 600 }}>{tc.nextjsTitle}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6' }}>
              {tc.nextjsBody}
            </p>
          </div>

          {/* Minor cards */}
          <div className="bento-card animate-fade-in-up delay-300" style={{ gridColumn: 'span 4' }}>
            <LayoutTemplate size={28} style={{ color: 'var(--accent-blue)', marginBottom: '1rem' }} />
            <h4 style={{ fontWeight: 600, marginBottom: '0.5rem', fontSize: '1.1rem' }}>{tc.brandingTitle}</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>{tc.brandingBody}</p>
          </div>

          <div className="bento-card animate-fade-in-up delay-300" style={{ gridColumn: 'span 4' }}>
            <ShieldCheck size={28} style={{ color: 'var(--accent-yellow)', marginBottom: '1rem' }} />
            <h4 style={{ fontWeight: 600, marginBottom: '0.5rem', fontSize: '1.1rem' }}>{tc.rbacTitle}</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>{tc.rbacBody}</p>
          </div>

          <div className="bento-card animate-fade-in-up delay-300" style={{ gridColumn: 'span 4' }}>
            <Server size={28} style={{ color: 'var(--text-primary)', marginBottom: '1rem' }} />
            <h4 style={{ fontWeight: 600, marginBottom: '0.5rem', fontSize: '1.1rem' }}>{tc.edgeTitle}</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>{tc.edgeBody}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
