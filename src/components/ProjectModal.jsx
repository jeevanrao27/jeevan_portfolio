import React, { useState } from 'react';
import { 
  X, 
  ShieldAlert, 
  CheckCircle2, 
  Download, 
  Play, 
  Truck, 
  Layers 
} from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  // State for Scanner Simulation
  const [scanUrl, setScanUrl] = useState('https://example-portal.org');
  const [isScanning, setIsScanning] = useState(false);
  const [scanStep, setScanStep] = useState(0);
  const [scanComplete, setScanComplete] = useState(false);
  const [scanResults, setScanResults] = useState(null);

  // Static telemetry state for TrackWise Simulation
  const trackingId = 'TRK-9842-AI';
  const shipmentStatus = {
    origin: 'Bengaluru Logistics Hub, KA',
    destination: 'Hosur Tech Terminal, TN',
    eta: 'Today, 06:45 PM',
    status: 'In Transit',
    currentLocation: 'NH 44 Electronic City Corridor',
    temperature: '21.4 °C (Stable)',
    lastUpdate: '2 mins ago'
  };

  if (!project) return null;

  const handleRunScan = () => {
    setIsScanning(true);
    setScanStep(1);
    setScanComplete(false);

    setTimeout(() => {
      setScanStep(2);
    }, 600);

    setTimeout(() => {
      setScanStep(3);
    }, 1200);

    setTimeout(() => {
      setScanStep(4);
      setIsScanning(false);
      setScanComplete(true);
      setScanResults({
        targetUrl: scanUrl,
        scannedAt: new Date().toISOString(),
        summary: {
          critical: 1,
          medium: 2,
          passed: 3
        },
        findings: [
          {
            type: 'SQL Injection Vulnerability',
            severity: 'High',
            description: 'Unsanitized input parameter detected in query endpoint `?id=1\' OR \'1\'=\'1`. Potential parameter tampering.',
            recommendation: 'Implement parameterized SQL queries / PreparedStatements.'
          },
          {
            type: 'Cross-Site Scripting (XSS) Risk',
            severity: 'Medium',
            description: 'Reflected parameter `<script>alert(1)</script>` echoed into response body without contextual HTML sanitization.',
            recommendation: 'Sanitize user-provided HTML entities and encode output.'
          },
          {
            type: 'Missing Security Headers',
            severity: 'Medium',
            description: 'Missing `Content-Security-Policy` and `Strict-Transport-Security` headers in server response.',
            recommendation: 'Configure Helmet or custom Express middleware headers.'
          },
          {
            type: 'Insecure Direct Object Reference (IDOR)',
            severity: 'Passed',
            description: 'Authorization tokens verified on record access.',
            recommendation: 'None - passed.'
          },
          {
            type: 'Server Version Disclosure',
            severity: 'Passed',
            description: 'X-Powered-By header is stripped.',
            recommendation: 'None - secure.'
          }
        ]
      });
    }, 1900);
  };

  const handleDownloadReport = () => {
    if (!scanResults) return;
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(scanResults, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `security-audit-${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-project-title">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h3 id="modal-project-title" className="modal-title">{project.title}</h3>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              {project.category}
            </span>
          </div>
          <button 
            onClick={onClose} 
            className="modal-close-btn"
            aria-label="Close dialog"
          >
            <X size={18} />
          </button>
        </div>

        <div className="modal-body">
          {/* Detailed Overview */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
              Project Overview
            </h4>
            <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Key Architectural Highlights */}
          <div style={{ background: 'var(--bg-card)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
            <h4 style={{ fontSize: '0.925rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Layers size={16} color="var(--accent-primary)" />
              Core Architecture & Highlights
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {project.details.map((detail, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={15} color="var(--accent-emerald)" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Interactive Simulation Area */}
          {project.id === 'scanner' && (
            <div style={{ background: '#0a0f18', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <ShieldAlert size={16} color="#38bdf8" />
                  Interactive Vulnerability Scanner Demo
                </span>
                <span style={{ fontSize: '0.72rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
                  Node.js / Express Heuristics
                </span>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                <input
                  type="text"
                  value={scanUrl}
                  onChange={(e) => setScanUrl(e.target.value)}
                  placeholder="https://target-website.com"
                  className="form-input"
                  style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', padding: '0.55rem 0.85rem' }}
                />
                <button
                  onClick={handleRunScan}
                  disabled={isScanning}
                  className="btn btn-primary"
                  style={{ padding: '0.55rem 1.1rem', fontSize: '0.85rem' }}
                >
                  <Play size={14} />
                  <span>{isScanning ? 'Scanning...' : 'Scan URL'}</span>
                </button>
              </div>

              {/* Scan Steps Progress */}
              {isScanning && (
                <div style={{ background: '#111827', padding: '0.85rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255,255,255,0.08)', fontSize: '0.775rem', fontFamily: 'var(--font-mono)', color: '#38bdf8' }}>
                  {scanStep === 1 && '▶ Sending HTTP request & inspecting header security...'}
                  {scanStep === 2 && '▶ Testing query parameters for SQL injection vulnerability patterns...'}
                  {scanStep === 3 && '▶ Checking input reflections for Cross-Site Scripting (XSS)...'}
                  {scanStep === 4 && '✔ Scan completed. Compiling JSON vulnerability report...'}
                </div>
              )}

              {/* Scan Results Output */}
              {scanComplete && scanResults && (
                <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', background: 'rgba(239, 68, 68, 0.2)', color: '#f87171', borderRadius: '4px' }}>
                        1 High
                      </span>
                      <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', background: 'rgba(245, 158, 11, 0.2)', color: '#fbbf24', borderRadius: '4px' }}>
                        2 Medium
                      </span>
                      <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', background: 'rgba(16, 185, 129, 0.2)', color: '#34d399', borderRadius: '4px' }}>
                        3 Passed
                      </span>
                    </div>

                    <button
                      onClick={handleDownloadReport}
                      className="btn btn-secondary"
                      style={{ padding: '0.35rem 0.75rem', fontSize: '0.775rem' }}
                    >
                      <Download size={13} />
                      <span>Download JSON Report</span>
                    </button>
                  </div>

                  <div style={{ maxHeight: '200px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {scanResults.findings.map((f, i) => (
                      <div key={i} style={{ background: '#111827', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255,255,255,0.06)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                          <span style={{ fontSize: '0.825rem', fontWeight: 600, color: '#f8fafc' }}>{f.type}</span>
                          <span style={{ 
                            fontSize: '0.7rem', 
                            padding: '0.15rem 0.45rem', 
                            borderRadius: '3px',
                            background: f.severity === 'High' ? 'rgba(239, 68, 68, 0.2)' : f.severity === 'Medium' ? 'rgba(245, 158, 11, 0.2)' : 'rgba(16, 185, 129, 0.2)',
                            color: f.severity === 'High' ? '#f87171' : f.severity === 'Medium' ? '#fbbf24' : '#34d399'
                          }}>
                            {f.severity}
                          </span>
                        </div>
                        <p style={{ fontSize: '0.775rem', color: '#94a3b8', lineHeight: '1.4' }}>{f.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TrackWise Simulation Area */}
          {project.id === 'trackwise' && (
            <div style={{ background: '#0a0f18', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <Truck size={16} color="#38bdf8" />
                  Live Shipment Telemetry & Dashboard Simulation
                </span>
                <span style={{ fontSize: '0.72rem', color: '#34d399', fontFamily: 'var(--font-mono)' }}>
                  ● Firebase Realtime Sync
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ background: '#111827', padding: '0.75rem', borderRadius: 'var(--radius-sm)' }}>
                  <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Tracking ID</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#38bdf8', fontFamily: 'var(--font-mono)' }}>{trackingId}</div>
                </div>
                <div style={{ background: '#111827', padding: '0.75rem', borderRadius: 'var(--radius-sm)' }}>
                  <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Live Location</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#f8fafc' }}>{shipmentStatus.currentLocation}</div>
                </div>
                <div style={{ background: '#111827', padding: '0.75rem', borderRadius: 'var(--radius-sm)' }}>
                  <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Estimated Arrival</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#34d399' }}>{shipmentStatus.eta}</div>
                </div>
              </div>

              <div style={{ background: '#111827', padding: '0.75rem', borderRadius: 'var(--radius-sm)', fontSize: '0.775rem', color: '#94a3b8', display: 'flex', justifyContent: 'space-between' }}>
                <span>Route: {shipmentStatus.origin} ➔ {shipmentStatus.destination}</span>
                <span style={{ color: '#818cf8' }}>Cargo Temp: {shipmentStatus.temperature}</span>
              </div>
            </div>
          )}

          {/* Tech Stack Tags */}
          <div>
            <div style={{ fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>
              TECHNOLOGIES USED:
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.technologies.map((t) => (
                <span key={t} className="tech-badge">{t}</span>
              ))}
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
            <a
              href="https://github.com/jeevan27"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ fontSize: '0.85rem' }}
            >
              <GithubIcon size={15} />
              <span>GitHub Profile</span>
            </a>
            <button
              onClick={onClose}
              className="btn btn-primary"
              style={{ fontSize: '0.85rem' }}
            >
              Close Window
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
