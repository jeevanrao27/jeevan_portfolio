import React from 'react';
import { GraduationCap, Calendar, Building } from 'lucide-react';

export default function Education() {
  const educationList = [
    {
      degree: 'B.E. – Computer Science and Engineering',
      institution: 'Er. Perumal Manimekalai College of Engineering (PMC Tech)',
      board: 'Anna University',
      location: 'Hosur, Tamil Nadu',
      year: 'Expected 2027',
      scoreLabel: 'CGPA',
      score: '7.86',
      status: 'Currently Pursuing',
      details: 'Focused on core computing fundamentals including Data Structures & Algorithms, Web Technologies, Database Systems, Object-Oriented Programming, and Natural Language Processing.'
    },
    {
      degree: 'Higher Secondary Education (HSC / XII)',
      institution: 'Govt. Model Higher Secondary School',
      board: 'State Board (Tamil Nadu)',
      location: 'Kelamangalam, Tamil Nadu',
      year: '2023',
      scoreLabel: 'Percentage',
      score: '69%',
      status: 'Completed',
      details: 'Completed higher secondary coursework with a strong concentration in science and mathematics subjects.'
    },
    {
      degree: 'Secondary School Leaving Certificate (SSLC / X)',
      institution: 'Sree Shirdi Sai Vidyalaya Matriculation School',
      board: 'State Board (Tamil Nadu)',
      location: 'Edapalli, Tamil Nadu',
      year: '2021',
      scoreLabel: 'Result',
      score: 'All Pass',
      status: 'Completed',
      details: 'Solid foundational education with active engagement in academics and school sports activities.'
    }
  ];

  return (
    <section id="education">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">Education & Qualifications</h2>
          <p className="section-subtitle">
            A continuous trajectory of academic achievement and discipline in Computer Science and Engineering.
          </p>
        </div>

        <div className="timeline-container">
          <div className="timeline-line" />

          {educationList.map((item, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-node" />
              <div className="glass-card timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{item.degree}</h3>
                    <div className="timeline-org">
                      <Building size={14} style={{ display: 'inline', marginRight: '5px' }} />
                      {item.institution}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                      {item.board} • {item.location}
                    </div>
                  </div>

                  <div className="timeline-meta" style={{ flexDirection: 'column', alignItems: 'flex-end', gap: '0.35rem' }}>
                    <span className="timeline-year-badge">
                      <Calendar size={13} style={{ display: 'inline', marginRight: '4px' }} />
                      {item.year}
                    </span>
                    <span className="fact-badge">
                      {item.scoreLabel}: {item.score}
                    </span>
                  </div>
                </div>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  {item.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
