import React from 'react';
import { User, GraduationCap, Award, Cpu, Sparkles, BookOpen, Layers, CheckCircle2 } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Layers size={20} className="highlight-icon" />,
      title: 'User-Friendly Interfaces',
      desc: 'Obsessed with visual clarity, intuitive component hierarchy, and seamless responsive design.'
    },
    {
      icon: <Sparkles size={20} className="highlight-icon" />,
      title: 'Frontend & UI/UX',
      desc: 'Translating design concepts from Figma and Canva into clean, semantic HTML, CSS, and JavaScript.'
    },
    {
      icon: <Cpu size={20} className="highlight-icon" />,
      title: 'AI/ML & NLP Interest',
      desc: 'Active interest in modern Artificial Intelligence, Natural Language Processing, and intelligent tooling.'
    },
    {
      icon: <CheckCircle2 size={20} className="highlight-icon" />,
      title: 'Rapid Learner',
      desc: 'Proven track record of adopting modern tools quickly and delivering results across real internships.'
    }
  ];

  return (
    <section id="about">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <User size={14} />
            <span>About Me</span>
          </div>
          <h2 className="section-title">Bridging Clean Code & Thoughtful Design</h2>
          <p className="section-subtitle">
            A developer mindset with a designer's eye for detail, dedicated to building responsive, accessible, and delightful digital experiences.
          </p>
        </div>

        <div className="about-grid">
          {/* Main Narrative Card */}
          <div className="glass-card about-card">
            <p className="about-text">
              I am an undergraduate student pursuing <strong>B.E. in Computer Science and Engineering</strong> at Er. Perumal Manimekalai College of Engineering, Hosur. My primary focus lies at the intersection of <strong>Frontend Web Development</strong> and <strong>UI/UX Design</strong>.
            </p>
            <p className="about-text">
              Through hands-on web development internships at <strong>Make Vision</strong> and <strong>BSS Computer Education</strong>, along with independent technical projects like <strong>TrackWiseAI</strong> and a comprehensive <strong>Web Vulnerability Scanner</strong>, I have cultivated strong fundamentals in modern web standards, API integration, and user interface ergonomics.
            </p>
            <p className="about-text" style={{ marginBottom: 0 }}>
              I pride myself on my adaptability, eagerness to learn, and structured problem-solving approach. Whether crafting responsive interfaces or exploring how AI and NLP can enhance web applications, I bring disciplined execution and user empathy to every project.
            </p>

            <div className="about-highlights-grid">
              {highlights.map((item, idx) => (
                <div key={idx} className="about-highlight-item">
                  {item.icon}
                  <div className="highlight-title">{item.title}</div>
                  <div className="highlight-desc">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar: Quick Facts & Certifications */}
          <div className="about-sidebar">
            {/* Quick Facts Card */}
            <div className="glass-card facts-card">
              <div className="facts-card-header">
                <GraduationCap size={22} color="var(--accent-primary)" />
                <h3 className="facts-card-title">Quick Facts</h3>
              </div>

              <div className="facts-list">
                <div className="fact-item">
                  <span className="fact-label">Education</span>
                  <span className="fact-value">B.E. – Computer Science & Engineering</span>
                </div>

                <div className="fact-item">
                  <span className="fact-label">College</span>
                  <span className="fact-value">Er. Perumal Manimekalai College of Engineering, Hosur</span>
                </div>

                <div className="fact-item">
                  <span className="fact-label">Expected Graduation</span>
                  <span className="fact-value">2027</span>
                </div>

                <div className="fact-item">
                  <span className="fact-label">Academic Performance</span>
                  <div className="fact-badge">CGPA: 7.86</div>
                </div>
              </div>
            </div>

            {/* Certifications & Recognition */}
            <div className="glass-card cert-card">
              <div className="facts-card-header">
                <Award size={22} color="var(--accent-primary)" />
                <h3 className="facts-card-title">Certifications & Honors</h3>
              </div>

              <div className="cert-item">
                <div className="cert-icon-wrapper">
                  <Award size={18} />
                </div>
                <div>
                  <div className="cert-name">AWS Academy Graduate</div>
                  <div className="cert-org">Cloud Architecting – Training Badge</div>
                </div>
              </div>

              <div className="cert-item">
                <div className="cert-icon-wrapper">
                  <BookOpen size={18} />
                </div>
                <div>
                  <div className="cert-name">Natural Language Processing (NLP)</div>
                  <div className="cert-org">Infosys Springboard (2025)</div>
                </div>
              </div>

              <div className="cert-item">
                <div className="cert-icon-wrapper">
                  <Sparkles size={18} />
                </div>
                <div>
                  <div className="cert-name">TN-IMPACT Industrial Hackathon</div>
                  <div className="cert-org">Hackathon Participant (2026)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
