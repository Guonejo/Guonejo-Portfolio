import { Zap, Database, LayoutTemplate, Server, ShieldCheck } from 'lucide-react';

export function CrewControl() {
  return (
    <section id="crewcontrol" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <h2 className="section-title">
          CrewControl: Optimización de Equipos en el Siglo XXI
        </h2>
        
        <div className="bento-grid">
          {/* Main feature box */}
          <div className="bento-card" style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: 600 }}>Plataforma SaaS B2B Ultra-Optimizada</h3>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '600px' }}>
                  ¿Buscas optimizar la gestión de turnos de tu empresa? CrewControl es una solución lista para ser implementada, con branding dinámico y un rendimiento fluido garantizado a 60 FPS.
                </p>
              </div>
              <a href="#contact" className="btn btn-primary" style={{ whiteSpace: 'nowrap' }}>
                Adquirir CrewControl / Solicitar Demo
              </a>
            </div>
            
            {/* Minimalist Dashboard Mock / Technical Preview */}
            <div style={{ 
              marginTop: '1rem', 
              background: 'var(--bg-dark)', 
              borderRadius: '0.75rem', 
              padding: '1.5rem',
              border: '1px solid var(--glass-border)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#EF4444' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#F59E0B' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10B981' }}></div>
                <span style={{ marginLeft: '1rem', color: 'var(--text-muted)', fontSize: '0.85rem', fontFamily: 'monospace' }}>dashboard.crewcontrol.app</span>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '0.5rem' }}>
                {[1, 2, 3].map((i) => (
                  <div key={i} style={{ background: 'var(--glass-bg)', height: '80px', borderRadius: '0.5rem', border: '1px dashed var(--glass-border-hover)' }}></div>
                ))}
              </div>
            </div>
          </div>

          {/* Stack & Architecture */}
          <div className="bento-card" style={{ gridColumn: 'span 6', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Database size={32} className="gradient-text" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Arquitectura Multi-tenant</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Aislamiento de datos robusto con Supabase, permitiendo que múltiples empresas operen de manera segura e independiente en la misma infraestructura.
            </p>
          </div>

          <div className="bento-card" style={{ gridColumn: 'span 6', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Zap size={32} className="gradient-text" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Next.js + React</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Renderizado híbrido optimizado, transiciones sin lag y estado global eficiente para una experiencia de usuario que se siente como una app nativa.
            </p>
          </div>
          
          {/* Minor feature cards */}
          <div className="bento-card" style={{ gridColumn: 'span 4' }}>
            <LayoutTemplate size={24} style={{ color: 'var(--accent-cyan)', marginBottom: '1rem' }} />
            <h4 style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Branding Dinámico</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Tematización personalizada por inquilino mediante variables CSS globales.</p>
          </div>

          <div className="bento-card" style={{ gridColumn: 'span 4' }}>
            <ShieldCheck size={24} style={{ color: 'var(--accent-violet)', marginBottom: '1rem' }} />
            <h4 style={{ fontWeight: 600, marginBottom: '0.25rem' }}>RBAC y Seguridad</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Gestión de roles personalizada (SuperAdmin, Admin, Empleado).</p>
          </div>

          <div className="bento-card" style={{ gridColumn: 'span 4' }}>
            <Server size={24} style={{ color: 'var(--text-primary)', marginBottom: '1rem' }} />
            <h4 style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Edge Computing</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Despliegue distribuido minimizando la latencia para los usuarios finales.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
