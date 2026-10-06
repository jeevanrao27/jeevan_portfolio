import React from 'react';
import { 
  Code2, 
  Globe, 
  Palette, 
  Terminal, 
  Brain, 
  Sparkles 
} from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      id: 'languages',
      title: 'Programming Languages',
      icon: <Code2 size={22} />,
      description: 'Languages used for algorithmic problem solving, scripting, and application logic.',
      skills: ['Python', 'Java (Basic)', 'JavaScript']
    },
    {
      id: 'web',
      title: 'Web Technologies',
      icon: <Globe size={22} />,
      description: 'Foundations for responsive web development, dynamic DOM manipulation, and UI design.',
      skills: ['HTML', 'CSS', 'JavaScript']
    },
    {
      id: 'design',
      title: 'Design Tools',
      icon: <Palette size={22} />,
      description: 'Industry tools used for wireframing, high-fidelity UI mockups, and creative assets.',
      skills: ['Figma', 'Canva', 'Adobe Photoshop']
    },
    {
      id: 'tools',
      title: 'Tools & Platforms',
      icon: <Terminal size={22} />,
      description: 'Development environments, version control, and collaborative coding workflows.',
      skills: ['VS Code', 'Jupyter Notebook', 'Git', 'GitHub']
    },
    {
      id: 'concepts',
      title: 'Concepts',
      icon: <Brain size={22} />,
      description: 'Core computer science principles and artificial intelligence domains.',
      skills: ['Data Structures', 'Machine Learning', 'Natural Language Processing']
    }
  ];

  return (
    <section id="skills" style={{ background: 'rgba(15, 23, 42, 0.25)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Technical Skills</span>
          </div>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            A balanced toolkit combining robust frontend engineering, creative UI/UX prototyping, and core computational foundations.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat) => (
            <div key={cat.id} className="glass-card skill-category-card">
              <div className="skill-card-top">
                <div className="skill-cat-icon">
                  {cat.icon}
                </div>
                <div>
                  <h3 className="skill-cat-name">{cat.title}</h3>
                </div>
              </div>

              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: '1.5' }}>
                {cat.description}
              </p>

              <div className="skill-items-wrap">
                {cat.skills.map((skill) => (
                  <div key={skill} className="skill-chip">
                    <span className="skill-chip-dot" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
