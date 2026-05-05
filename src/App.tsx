import { Hero } from './components/Hero';
import { CrewControl } from './components/CrewControl';
import { Timeline } from './components/Timeline';
import { Contact } from './components/Contact';

function App() {
  return (
    <>
      {/* Background glow effects */}
      <div className="bg-glow"></div>
      
      <main>
        <Hero />
        <CrewControl />
        <Timeline />
        <Contact />
      </main>
      
      <footer style={{ padding: '2rem 0', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container">
          © {new Date().getFullYear()} Matías Carvacho. Todos los derechos reservados.
        </div>
      </footer>
    </>
  );
}

export default App;
