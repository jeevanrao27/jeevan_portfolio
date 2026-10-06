import React from 'react';
import { 
  Zap, 
  Lightbulb, 
  MessageSquare, 
  Layout, 
  Code2, 
  Compass, 
  HeartHandshake 
} from 'lucide-react';

export default function SoftSkillsAndInterests() {
  const softSkills = [
    {
      name: 'Adaptability',
      icon: <Zap size={22} />,
      desc: 'Quickly acclimates to new technologies, changing codebases, evolving design requirements, and collaborative workflows.'
    },
    {
      name: 'Quick Learner',
      icon: <Lightbulb size={22} />,
      desc: 'Rapidly grasps complex technical concepts, frameworks, and design tools, transforming curiosity into functioning code.'
    },
    {
      name: 'Communication Skills',
      icon: <MessageSquare size={22} />,
      desc: 'Articulates technical decisions clearly, collaborates effectively with peers and mentors, and communicates design rationale.'
    }
  ];

  const areasOfInterest = [
    {
      title: 'UI/UX Designing',
      icon: <Layout size={24} color="var(--accent-secondary)" />,
      desc: 'Passionate about crafting intuitive user journeys, wireframing modern interactions in Figma, establishing cohesive design systems, and ensuring empathetic digital usability.',
      tags: ['Design Systems', 'Wireframing', 'User Flows', 'Visual Ergonomics', 'Prototyping']
    },
    {
      title: 'Frontend Web Development',
      icon: <Code2 size={24} color="var(--accent-primary)" />,
      desc: 'Dedicated to implementing pixel-perfect, accessible, and high-performance web interfaces with semantic HTML, modern responsive CSS, and dynamic JavaScript architectures.',
      tags: ['Component Architecture', 'Responsive Layouts', 'REST Integration', 'Modern JavaScript', 'CSS Motion']
    }
  ];

  return (
    <section id="interests-softskills" style={{ background: 'rgba(15, 23, 42, 0.25)' }}>
      <div className="container">
        <div className="skills-interests-grid">
          {/* Left Column: Soft Skills */}
          <div>
            <div className="sub-section-title">
              <HeartHandshake size={20} color="var(--accent-primary)" />
              <span>Core Strengths & Soft Skills</span>
            </div>
            <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              Key interpersonal capabilities that drive consistent execution and productive team collaboration.
            </p>

            <div className="soft-cards-list">
              {softSkills.map((skill) => (
                <div key={skill.name} className="glass-card soft-card">
                  <div className="soft-icon-box">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="soft-name">{skill.name}</h3>
                    <p className="soft-desc">{skill.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Areas of Interest */}
          <div>
            <div className="sub-section-title">
              <Compass size={20} color="var(--accent-secondary)" />
              <span>Areas of Interest</span>
            </div>
            <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              Specialized domains where I invest dedicated energy, technical practice, and creative design exploration.
            </p>

            <div className="interest-cards-list">
              {areasOfInterest.map((interest) => (
                <div key={interest.title} className="glass-card interest-card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    {interest.icon}
                    <h3 className="interest-card-title" style={{ margin: 0 }}>{interest.title}</h3>
                  </div>

                  <p className="interest-card-desc">{interest.desc}</p>

                  <div className="interest-tags">
                    {interest.tags.map((tag) => (
                      <span key={tag} className="tech-badge">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
