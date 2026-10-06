import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Web Development Intern',
      company: 'Make Vision',
      location: 'Krishnagiri, Tamil Nadu',
      period: '2025',
      duration: 'Dec 2025',
      points: [
        'Acquired practical web development experience by building and structuring web application pages.',
        'Exercised strong self-learning and technical execution to adopt new tools and workflows.',
        'Worked toward project goals efficiently, translating project requirements into clean code.',
        'Adapted to team coding guidelines and contributed to structured, maintainable frontend components.'
      ]
    },
    {
      role: 'Web Development Intern',
      company: 'BSS Computer Academy',
      subCompany: 'BSS Computer Education',
      location: 'Erode, Tamil Nadu',
      period: '2025',
      duration: 'June 2025',
      points: [
        'Supported the development team in constructing structured web pages using core HTML, CSS, and JavaScript.',
        'Adjusted UI layouts for improved usability, readability, and visual hierarchy.',
        'Worked on responsive UI components ensuring smooth adaptability across various screen sizes.',
        'Collaborated with senior developers to troubleshoot layout defects and enhance overall website user experience.'
      ]
    }
  ];

  return (
    <section id="experience" style={{ background: 'rgba(15, 23, 42, 0.25)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Internship Experience</span>
          </div>
          <h2 className="section-title">Practical Industry Experience</h2>
          <p className="section-subtitle">
            Hands-on technical contributions, collaborative web page structuring, and practical UI problem-solving in real-world environments.
          </p>
        </div>

        <div className="timeline-container">
          <div className="timeline-line" />

          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-node" />
              <div className="glass-card timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <div className="timeline-org">
                      {exp.company}
                      {exp.subCompany && <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}> ({exp.subCompany})</span>}
                    </div>
                  </div>

                  <div className="timeline-meta">
                    <span className="timeline-year-badge">
                      <Calendar size={13} style={{ display: 'inline', marginRight: '4px' }} />
                      {exp.period}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                      <MapPin size={13} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="timeline-details">
                  {exp.points.map((point, pIdx) => (
                    <div key={pIdx} className="timeline-bullet">
                      <span className="bullet-dot" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
