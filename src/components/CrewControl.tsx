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
            
            {/* Minimalist Dashboard Mock / Technical Preview */}
            <div className="animate-float" style={{ 
              marginTop: '1.5rem', 
              background: 'rgba(5, 5, 5, 0.8)', 
              borderRadius: '1rem', 
              padding: '1.5rem',
              border: '1px solid var(--glass-border-hover)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              zIndex: 1
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#EF4444' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FACC15' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10B981' }}></div>
                <span style={{ marginLeft: '1rem', color: 'var(--text-muted)', fontSize: '0.85rem', fontFamily: 'monospace', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ShieldCheck size={14} style={{ color: 'var(--accent-blue)' }} /> dashboard.crewcontrol.app
                </span>
              </div>
              
              {/* Fake UI Elements */}
              <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                {/* Sidebar */}
                <div style={{ width: '60px', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} style={{ height: '32px', borderRadius: '0.5rem', background: i === 1 ? 'rgba(59, 130, 246, 0.2)' : 'var(--glass-bg)', border: i === 1 ? '1px solid rgba(59, 130, 246, 0.5)' : 'none' }}></div>
                  ))}
                </div>
                {/* Main Content Area */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {/* Header Row */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                    {[1, 2, 3].map((i) => (
                      <div key={i} style={{ background: 'var(--glass-bg)', height: '80px', borderRadius: '0.75rem', border: '1px solid var(--glass-border)', position: 'relative', overflow: 'hidden' }}>
                        {i === 2 && <div style={{ position: 'absolute', bottom: 0, left: 0, height: '4px', width: '70%', background: 'var(--accent-yellow)', borderRadius: '4px' }}></div>}
                        {i === 1 && <div style={{ position: 'absolute', bottom: 0, left: 0, height: '4px', width: '40%', background: 'var(--accent-blue)', borderRadius: '4px' }}></div>}
                      </div>
                    ))}
                  </div>
                  {/* Large Content Area */}
                  <div style={{ background: 'var(--glass-bg)', height: '120px', borderRadius: '0.75rem', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                     <div style={{ width: '80%', height: '2px', background: 'linear-gradient(90deg, transparent, var(--accent-blue), transparent)', opacity: 0.5 }}></div>
                  </div>
                </div>
              </div>
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
