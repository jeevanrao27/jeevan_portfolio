import { ArrowDown, Mail, Code2, Sparkles, Layout } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      {/* Background ambient lighting */}
      <div className="bg-glow-orb bg-glow-primary" style={{ top: '-10%', left: '-10%' }} />
      <div className="bg-glow-orb bg-glow-cyan" style={{ bottom: '5%', right: '-15%' }} />

      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Hero Content */}
          <div className="hero-content">
            <div className="hero-status-pill">
              <span className="pulse-dot" />
              <span>Available for Internships & Entry-Level Roles</span>
            </div>

            <h1 className="hero-name">
              Jeevan <span className="gradient-text">Rao R</span>
            </h1>

            <h2 className="hero-headline">
              Frontend Developer & <span>UI/UX Designer</span>
            </h2>

            <p className="hero-description">
              Computer Science and Engineering student passionate about creating clean, responsive, and user-friendly digital experiences.
            </p>

            <div className="hero-cta-group">
              <button
                onClick={() => scrollTo('projects')}
                className="btn btn-primary"
                aria-label="View My Work"
              >
                <span>View My Work</span>
                <ArrowDown size={17} />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="btn btn-secondary"
                aria-label="Contact Me"
              >
                <Mail size={17} />
                <span>Contact Me</span>
              </button>
            </div>

            <div className="hero-socials">
              <a
                href="https://github.com/jeevan27"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={16} />
                <span>GitHub</span>
              </a>

              <a
                href="https://linkedin.com/in/jeevan-raor/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
              </a>

              <a
                href="mailto:jeevanchitu@gmail.com"
                className="social-pill"
                aria-label="Email Jeevan"
              >
                <Mail size={16} />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Code & Visual Card */}
          <div className="hero-visual-card">
            {/* Floating Top Badge */}
            <div className="hero-floating-badge badge-top-right">
              <Layout size={18} color="#38bdf8" />
              <div>
                <div style={{ fontSize: '0.825rem', fontWeight: 700 }}>UI/UX & Design</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Figma • Responsive Web</div>
              </div>
            </div>

            {/* Code Window */}
            <div className="code-window">
              <div className="code-header">
                <div className="code-dots">
                  <div className="code-dot red" />
                  <div className="code-dot yellow" />
                  <div className="code-dot green" />
                </div>
                <div className="code-file-name">jeevan_profile.ts</div>
                <Code2 size={15} color="#94a3b8" />
              </div>
              <div className="code-body">
                <pre>
<code><span className="code-keyword">const</span> <span className="code-variable">developer</span> = &#123;
  <span className="code-property">name</span>: <span className="code-string">"Jeevan Rao R"</span>,
  <span className="code-property">role</span>: <span className="code-string">"Frontend Developer & UI/UX"</span>,
  <span className="code-property">education</span>: <span className="code-string">"B.E. Computer Science"</span>,
  <span className="code-property">graduatingYear</span>: <span className="code-number" style={{ color: '#fb923c' }}>2027</span>,
  <span className="code-property">cgpa</span>: <span className="code-number" style={{ color: '#fb923c' }}>7.86</span>,
  <span className="code-property">coreFocus</span>: [
    <span className="code-string">"Responsive UI"</span>,
    <span className="code-string">"Clean Architecture"</span>,
    <span className="code-string">"Modern JavaScript"</span>
  ],
  <span className="code-property">readyToContribute</span>: <span className="code-boolean">true</span>
&#125;;</code>
                </pre>
              </div>
            </div>

            {/* Floating Bottom Badge */}
            <div className="hero-floating-badge badge-bottom-left">
              <Sparkles size={18} color="#818cf8" />
              <div>
                <div style={{ fontSize: '0.825rem', fontWeight: 700 }}>Interactive Web</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Node.js • REST APIs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
