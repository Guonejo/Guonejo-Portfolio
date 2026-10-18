import { useState, useRef } from 'react';
import { Zap, Database, LayoutTemplate, Server, ShieldCheck, ChevronLeft, ChevronRight, Lock } from 'lucide-react';
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
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const touchStartX             = useRef(0);

  const goTo = (idx: number, dir: 'left' | 'right') => {
    setDirection(dir);
    setLoaded(false);
    setCurrent(idx);
  };
  const prev = () => goTo((current - 1 + screenshots.length) % screenshots.length, 'left');
  const next = () => goTo((current + 1) % screenshots.length, 'right');

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd   = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 45) diff > 0 ? next() : prev();
  };

  return (
    <div className="carousel-wrapper">
      {/* SaaS App Header Bar */}
      <div className="carousel-chrome">
        <div className="carousel-chrome__meta">
          <span className="carousel-chrome__badge">{tc.chromeBadge}</span>
        </div>
        <div className="carousel-chrome__url">
          <Lock size={12} style={{ color: 'var(--accent-secondary)' }} aria-hidden="true" />
          <span className="carousel-chrome__url-text">app.crewcontrol.io/shifts/overview</span>
        </div>
        <div className="carousel-chrome__status">
          <span className="carousel-chrome__status-dot" aria-hidden="true" />
          <span>{tc.statusLive}</span>
        </div>
      </div>

      {/* Main image frame */}
      <div
        className="carousel-frame"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Skeleton */}
        {!loaded && (
          <div className="carousel-skeleton" />
        )}

        {/* Top glare */}
        <div className="carousel-glare" />

        <img
          key={current}
          src={screenshots[current].src}
          alt={screenshots[current].alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`carousel-img carousel-img--${direction}`}
          style={{ opacity: loaded ? 1 : 0 }}
        />

        {/* Nav arrows */}
        <button
          onClick={prev}
          aria-label={tc.arrowPrev}
          className="carousel-arrow carousel-arrow--prev"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          aria-label={tc.arrowNext}
          className="carousel-arrow carousel-arrow--next"
        >
          <ChevronRight size={20} />
        </button>

        {/* Current slide caption badge */}
        <div className="carousel-caption-badge">
          <span className="carousel-caption-dot" aria-hidden="true" />
          <span>{screenshots[current].alt}</span>
        </div>

        {/* Slide counter */}
        <div className="carousel-counter">
          {current + 1} / {screenshots.length}
        </div>
      </div>

      {/* Thumbnail strip */}
      <div className="carousel-thumbnails">
        {screenshots.map((shot, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > current ? 'right' : 'left')}
            aria-label={tc.dotLabel(i)}
            className={`carousel-thumb ${i === current ? 'active' : ''}`}
          >
            <span className="carousel-thumb-num">0{i + 1}</span>
            <img src={shot.src} alt={shot.alt} loading="lazy" />
          </button>
        ))}
      </div>

      {/* Swipe hint — mobile only */}
      <p className="swipe-hint">{tc.swipeHint}</p>
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
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.25rem', zIndex: 1 }}>
              <div>
                <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', fontWeight: 700, letterSpacing: '-0.025em' }}>{tc.subtitle}</h3>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '680px', fontSize: '1.05rem', lineHeight: '1.65' }}>
                  {tc.description}
                </p>
              </div>
              <a href="#contact" className="btn btn-primary" style={{ whiteSpace: 'nowrap' }}>
                {tc.cta}
              </a>
            </div>

            <ImageCarousel />
          </div>

          {/* Stack & Architecture */}
          <div className="bento-card animate-fade-in-up delay-200" style={{ gridColumn: 'span 6', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Database size={32} style={{ color: '#A78BFA', marginBottom: '1.25rem' }} />
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', fontWeight: 600 }}>{tc.multiTenantTitle}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.65' }}>
              {tc.multiTenantBody}
            </p>
          </div>

          <div className="bento-card animate-fade-in-up delay-200" style={{ gridColumn: 'span 6', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Zap size={32} style={{ color: '#818CF8', marginBottom: '1.25rem' }} />
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', fontWeight: 600 }}>{tc.nextjsTitle}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.65' }}>
              {tc.nextjsBody}
            </p>
          </div>

          {/* Minor cards */}
          <div className="bento-card animate-fade-in-up delay-300" style={{ gridColumn: 'span 4' }}>
            <LayoutTemplate size={26} style={{ color: '#A78BFA', marginBottom: '1rem' }} />
            <h4 style={{ fontWeight: 600, marginBottom: '0.5rem', fontSize: '1.05rem' }}>{tc.brandingTitle}</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.55' }}>{tc.brandingBody}</p>
          </div>

          <div className="bento-card animate-fade-in-up delay-300" style={{ gridColumn: 'span 4' }}>
            <ShieldCheck size={26} style={{ color: '#818CF8', marginBottom: '1rem' }} />
            <h4 style={{ fontWeight: 600, marginBottom: '0.5rem', fontSize: '1.05rem' }}>{tc.rbacTitle}</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.55' }}>{tc.rbacBody}</p>
          </div>

          <div className="bento-card animate-fade-in-up delay-300" style={{ gridColumn: 'span 4' }}>
            <Server size={26} style={{ color: '#C4B5FD', marginBottom: '1rem' }} />
            <h4 style={{ fontWeight: 600, marginBottom: '0.5rem', fontSize: '1.05rem' }}>{tc.edgeTitle}</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.55' }}>{tc.edgeBody}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
