import { Zap, Database, LayoutTemplate, Server, ShieldCheck } from 'lucide-react';

export function CrewControl() {
  return (
    <section id="crewcontrol" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <h2 className="section-title animate-fade-in-up">
          CrewControl: Optimización de Equipos en el Siglo XXI
        </h2>
        
        <div className="bento-grid">
          {/* Main feature box */}
          <div className="bento-card animate-fade-in-up delay-100" style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', gap: '1.5rem', overflow: 'hidden', position: 'relative' }}>
            {/* Background decorative glow */}
            <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', background: 'var(--accent-blue)', filter: 'blur(100px)', opacity: '0.1', pointerEvents: 'none' }}></div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', zIndex: 1 }}>
              <div>
                <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', fontWeight: 700, letterSpacing: '-0.02em' }}>Plataforma SaaS B2B Ultra-Optimizada</h3>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '650px', fontSize: '1.05rem', lineHeight: '1.6' }}>
                  ¿Buscas optimizar la gestión de turnos de tu empresa? CrewControl es una solución lista para ser implementada, con branding dinámico y un rendimiento fluido garantizado a 60 FPS.
                </p>
              </div>
              <a href="#contact" className="btn btn-primary animate-pulse-glow" style={{ whiteSpace: 'nowrap' }}>
                Adquirir CrewControl / Solicitar Demo
              </a>
            </div>
            
            {/* Real Dashboard Screenshot */}
            <div className="animate-float" style={{ 
              marginTop: '1.5rem', 
              borderRadius: '1rem', 
              overflow: 'hidden',
              border: '1px solid var(--glass-border-hover)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)',
              zIndex: 1,
              position: 'relative'
            }}>
              {/* Optional top glare effect */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '100%', background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 20%)', pointerEvents: 'none' }}></div>
              <img 
                src="/crewcontrol-dashboard.png" 
                alt="CrewControl Dashboard Screenshot" 
                style={{ width: '100%', height: 'auto', display: 'block', transform: 'scale(1.01)' }} 
              />
            </div>
          </div>

          {/* Stack & Architecture */}
          <div className="bento-card animate-fade-in-up delay-200" style={{ gridColumn: 'span 6', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Database size={36} className="gradient-text" style={{ marginBottom: '1.25rem' }} />
            <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem', fontWeight: 600 }}>Arquitectura Multi-tenant</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6' }}>
              Aislamiento de datos robusto con Supabase, permitiendo que múltiples empresas operen de manera segura e independiente en la misma infraestructura.
            </p>
          </div>

          <div className="bento-card animate-fade-in-up delay-200" style={{ gridColumn: 'span 6', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Zap size={36} className="gradient-text" style={{ marginBottom: '1.25rem' }} />
            <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem', fontWeight: 600 }}>Next.js + React</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6' }}>
              Renderizado híbrido optimizado, transiciones sin lag y estado global eficiente para una experiencia de usuario que se siente como una app nativa.
            </p>
          </div>
          
          {/* Minor feature cards */}
          <div className="bento-card animate-fade-in-up delay-300" style={{ gridColumn: 'span 4' }}>
            <LayoutTemplate size={28} style={{ color: 'var(--accent-blue)', marginBottom: '1rem' }} />
            <h4 style={{ fontWeight: 600, marginBottom: '0.5rem', fontSize: '1.1rem' }}>Branding Dinámico</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>Tematización personalizada por inquilino mediante variables CSS globales.</p>
          </div>

          <div className="bento-card animate-fade-in-up delay-300" style={{ gridColumn: 'span 4' }}>
            <ShieldCheck size={28} style={{ color: 'var(--accent-yellow)', marginBottom: '1rem' }} />
            <h4 style={{ fontWeight: 600, marginBottom: '0.5rem', fontSize: '1.1rem' }}>RBAC y Seguridad</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>Gestión de roles personalizada (SuperAdmin, Admin, Empleado).</p>
          </div>

          <div className="bento-card animate-fade-in-up delay-300" style={{ gridColumn: 'span 4' }}>
            <Server size={28} style={{ color: 'var(--text-primary)', marginBottom: '1rem' }} />
            <h4 style={{ fontWeight: 600, marginBottom: '0.5rem', fontSize: '1.1rem' }}>Edge Computing</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>Despliegue distribuido minimizando la latencia para los usuarios finales.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
