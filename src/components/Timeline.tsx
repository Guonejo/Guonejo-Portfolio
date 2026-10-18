import { Briefcase, Server, Wrench } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

const icons = [
  <Briefcase size={18} style={{ color: '#A78BFA' }} />,
  <Server size={18} style={{ color: '#818CF8' }} />,
  <Wrench size={18} style={{ color: '#C4B5FD' }} />,
];

export function Timeline() {
  const t = useTranslation();
  const tt = t.timeline;

  return (
    <section id="timeline" className="section reveal-section">
      <div className="container">
        <h2 className="section-title reveal-item">{tt.sectionTitle}</h2>

        <div className="timeline-list">
          {tt.experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item reveal-item">
              <div className="timeline-item__connector">
                <div className="timeline-item__dot">
                  {icons[idx]}
                </div>
                {idx !== tt.experiences.length - 1 && (
                  <div className="timeline-item__line" />
                )}
              </div>

              <div className={`timeline-item__body ${idx === tt.experiences.length - 1 ? 'timeline-item__body--last' : ''}`}>
                <div className="timeline-item__header">
                  <h3 className="timeline-item__role">{exp.role}</h3>
                  <span className="timeline-item__company">@ {exp.company}</span>
                  <span className="timeline-item__period">{exp.period}</span>
                </div>
                <p className="timeline-item__desc">{exp.description}</p>
                <div className="timeline-item__impact">
                  <span className="timeline-item__impact-label">{tt.impact}</span>
                  {exp.benefit}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

