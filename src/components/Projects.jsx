import React, { useState } from 'react';
import { 
  FolderGit2, 
  CheckCircle2, 
  Sparkles, 
  ShieldAlert, 
  Truck, 
  Radio, 
  Eye 
} from 'lucide-react';
import { GithubIcon } from './Icons';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 'trackwise',
      title: 'TrackWiseAI – AI-Based Shipment Tracking System',
      category: 'AI Logistics & Dashboard Engineering',
      isFeatured: true,
      description: 'Designed responsive dashboard screens for real-time shipment tracking with user-friendly navigation.',
      longDescription: 'TrackWiseAI is a smart logistics dashboard solution engineered to provide real-time visibility into multi-modal shipment networks. The platform connects responsive web interfaces with backend streaming APIs to render instantaneous transit updates and telemetry.',
      details: [
        'Integrated frontend interfaces with Node.js and Express REST APIs.',
        'Delivered live shipment updates and dynamic transit telemetry.',
        'Focused on responsive and user-friendly dashboard design and navigation.'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Firebase'],
      githubUrl: 'https://github.com/jeevan-27'
    },
    {
      id: 'scanner',
      title: 'Web Vulnerability Scanner',
      category: 'Cybersecurity & Web Application Tools',
      isFeatured: false,
      description: 'Developed a web application that scans website URLs for security vulnerabilities.',
      longDescription: 'A focused web application engineered to audit website targets for prevalent web security risks and configuration weaknesses. Built with an intuitive frontend and modular scanning engine to help developers remediate vulnerabilities before production.',
      details: [
        'SQL injection detection heuristics on URL parameters.',
        'Cross-Site Scripting (XSS) risk evaluation and reflection auditing.',
        'Missing HTTP security headers analysis (CSP, HSTS, X-Frame-Options).',
        'Backend scanning logic in Node.js & Express.',
        'Server misconfiguration detection.',
        'Downloadable JSON audit reports generated directly in-browser.'
      ],
      technologies: ['Node.js', 'Express.js', 'JavaScript', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/jeevan-27'
    }
  ];

  return (
    <section id="projects">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} />
            <span>Featured Work</span>
          </div>
          <h2 className="section-title">Projects & Architecture</h2>
          <p className="section-subtitle">
            Authentic, practical web applications built with a focus on intuitive user experience, robust API communication, and clean architecture.
          </p>
        </div>

        <div className="projects-container">
          {/* Project 1: TrackWiseAI */}
          <div className="glass-card project-card">
            <div className="project-featured-badge">
              <Sparkles size={13} />
              <span>Featured Project</span>
            </div>

            <div className="project-grid">
              {/* Left Column: Details */}
              <div className="project-info">
                <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-secondary)' }}>
                  01 / REAL-TIME LOGISTICS
                </span>
                <h3 className="project-title">{projectsData[0].title}</h3>
                <p className="project-desc">{projectsData[0].description}</p>

                <div className="project-features-list">
                  {projectsData[0].details.map((detail, idx) => (
                    <div key={idx} className="project-feature-item">
                      <CheckCircle2 size={16} className="feature-check-icon" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="project-tags-wrap">
                  {projectsData[0].technologies.map((t) => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <button
                    onClick={() => setSelectedProject(projectsData[0])}
                    className="btn btn-primary"
                    aria-label="View Project Details for TrackWiseAI"
                  >
                    <Eye size={16} />
                    <span>View Project Details</span>
                  </button>

                  <a
                    href={projectsData[0].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    aria-label="View Source Code on GitHub"
                  >
                    <GithubIcon size={16} />
                    <span>View Source Code</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Mockup */}
              <div className="project-mockup-wrapper">
                <div className="mockup-header-bar">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Truck size={14} color="#38bdf8" />
                    <span>trackwise-ai.dashboard</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#10b981', fontSize: '0.7rem' }}>
                    <Radio size={12} />
                    <span>LIVE STREAM</span>
                  </div>
                </div>

                <div className="mockup-body trackwise-mockup">
                  <div className="mockup-stat-row">
                    <div className="mockup-stat-box">
                      <span className="mockup-stat-label">Active Consignments</span>
                      <span className="mockup-stat-val">1,248</span>
                    </div>
                    <div className="mockup-stat-box">
                      <span className="mockup-stat-label">Transit Accuracy</span>
                      <span className="mockup-stat-val" style={{ color: '#34d399' }}>99.2%</span>
                    </div>
                    <div className="mockup-stat-box">
                      <span className="mockup-stat-label">Rest API Status</span>
                      <span className="mockup-stat-val" style={{ color: '#38bdf8' }}>Node/Express</span>
                    </div>
                  </div>

                  <div className="mockup-map-area">
                    <div className="mockup-route-line" />
                    <div className="mockup-map-pin" style={{ left: '20%' }}>
                      <span>Origin: BLR</span>
                    </div>
                    <div className="mockup-map-pin" style={{ right: '15%', borderColor: '#10b981', color: '#34d399' }}>
                      <span>Dest: Hosur Hub</span>
                    </div>
                  </div>

                  <div className="mockup-live-indicator">
                    <span>Current Package: #TRK-9842 (Express Priority)</span>
                    <span style={{ fontWeight: 600 }}>ETA: Today, 6:45 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2: Web Vulnerability Scanner */}
          <div className="glass-card project-card">
            <div className="project-grid">
              {/* Left Column: Details */}
              <div className="project-info">
                <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)' }}>
                  02 / APPLICATION SECURITY
                </span>
                <h3 className="project-title">{projectsData[1].title}</h3>
                <p className="project-desc">{projectsData[1].description}</p>

                <div className="project-features-list">
                  {projectsData[1].details.map((detail, idx) => (
                    <div key={idx} className="project-feature-item">
                      <CheckCircle2 size={16} className="feature-check-icon" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="project-tags-wrap">
                  {projectsData[1].technologies.map((t) => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <button
                    onClick={() => setSelectedProject(projectsData[1])}
                    className="btn btn-primary"
                    aria-label="View Project and Run Scanner Demo"
                  >
                    <ShieldAlert size={16} />
                    <span>Run Scanner Demo</span>
                  </button>

                  <a
                    href={projectsData[1].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    aria-label="View Source Code on GitHub"
                  >
                    <GithubIcon size={16} />
                    <span>View Source Code</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Mockup */}
              <div className="project-mockup-wrapper">
                <div className="mockup-header-bar">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <ShieldAlert size={14} color="#f43f5e" />
                    <span>vuln-scanner-engine.js</span>
                  </div>
                  <span style={{ color: '#fbbf24', fontSize: '0.7rem' }}>SECURE AUDIT</span>
                </div>

                <div className="mockup-body scanner-mockup">
                  <div className="scanner-input-bar">
                    <span>Target: https://sample-portal.com</span>
                    <span className="scanner-pill-audit">Audit Ready</span>
                  </div>

                  <div className="scanner-console">
                    <div className="scan-log-line">
                      <span>[INFO] Initializing HTTP Header Analyzer...</span>
                      <span className="scan-pass">PASS</span>
                    </div>
                    <div className="scan-log-line">
                      <span>[TEST] SQL Injection Input Vectors</span>
                      <span className="scan-warn">1 WEAKNESS</span>
                    </div>
                    <div className="scan-log-line">
                      <span>[TEST] Cross-Site Scripting (XSS) Sanitization</span>
                      <span className="scan-pass">PROTECTED</span>
                    </div>
                    <div className="scan-log-line">
                      <span>[INFO] Security Headers: CSP, HSTS, X-Frame</span>
                      <span className="scan-fail">MISSING HSTS</span>
                    </div>
                    <div className="scan-log-line">
                      <span>[REPORT] Vulnerability JSON Schema Generated</span>
                      <span className="scan-pass">EXPORT READY</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
