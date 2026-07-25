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
      {/* Mac/Browser chrome bar */}
      <div className="carousel-chrome">
        <div className="carousel-chrome__dots">
          <span style={{ background: '#FF5F57' }} />
          <span style={{ background: '#FEBC2E' }} />
          <span style={{ background: '#28C840' }} />
        </div>
        <div className="carousel-chrome__url">
          <span className="carousel-chrome__url-text">crewcontrol.app</span>
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
