import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  ExternalLink, 
  MessageSquare 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('jeevanchitu@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        type: 'error',
        message: 'Please complete all required fields.'
      });
      return;
    }

    // Format mailto link transparently to trigger client's email application
    const mailtoSubject = encodeURIComponent(formData.subject || `Portfolio Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Hi Jeevan,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );
    const mailtoUrl = `mailto:jeevanchitu@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

    setFormStatus({
      type: 'success',
      message: 'Launching your email client with pre-filled message... You can also copy details below.'
    });

    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <MessageSquare size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">Let's Build Something Great Together</h2>
          <p className="section-subtitle">
            I'm open to opportunities where I can contribute, learn, and build meaningful digital experiences.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Details Card */}
          <div className="glass-card contact-info-card">
            <div>
              <h3 className="contact-headline">Reach Out Directly</h3>
              <p className="contact-subtext">
                Whether you have an internship opportunity, a project to collaborate on, or just want to say hi, my inbox is always open.
              </p>
            </div>

            <div className="contact-methods-list">
              {/* Email */}
              <div className="contact-method-item">
                <a 
                  href="mailto:jeevanchitu@gmail.com" 
                  className="method-left"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div className="method-icon"><Mail size={20} /></div>
                  <div>
                    <div className="method-label">Email Address</div>
                    <div className="method-value">jeevanchitu@gmail.com</div>
                  </div>
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="method-copy-btn"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phone */}
              <a href="tel:+919342645418" className="contact-method-item">
                <div className="method-left">
                  <div className="method-icon"><Phone size={20} /></div>
                  <div>
                    <div className="method-label">Phone / WhatsApp</div>
                    <div className="method-value">+91-9342645418</div>
                  </div>
                </div>
                <ExternalLink size={16} color="var(--text-muted)" />
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com/jeevan-27" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-method-item"
              >
                <div className="method-left">
                  <div className="method-icon"><GithubIcon size={20} /></div>
                  <div>
                    <div className="method-label">GitHub Repository</div>
                    <div className="method-value">github.com/jeevan27</div>
                  </div>
                </div>
                <ExternalLink size={16} color="var(--text-muted)" />
              </a>

              {/* LinkedIn */}
              <a 
                href="https://linkedin.com/in/jeevan-raor/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-method-item"
              >
                <div className="method-left">
                  <div className="method-icon"><LinkedinIcon size={20} /></div>
                  <div>
                    <div className="method-label">LinkedIn Profile</div>
                    <div className="method-value">linkedin.com/in/jeevan-raor/</div>
                  </div>
                </div>
                <ExternalLink size={16} color="var(--text-muted)" />
              </a>

              {/* Location */}
              <div className="contact-method-item" style={{ cursor: 'default' }}>
                <div className="method-left">
                  <div className="method-icon"><MapPin size={20} /></div>
                  <div>
                    <div className="method-label">Location</div>
                    <div className="method-value">Hosur, Tamil Nadu, India</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="glass-card contact-form-card">
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
              Send a Message
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Fill out this form to open a direct email draft with your preferred email client.
            </p>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">Your Name *</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Jane Doe"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">Your Email Address *</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="e.g. jane@company.com"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="e.g. Frontend Developer Internship Inquiry"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">Message *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Hi Jeevan, I came across your portfolio and would like to discuss..."
                  className="form-textarea"
                  rows={4}
                  required
                />
              </div>

              {formStatus && (
                <div className={`toast-msg ${formStatus.type === 'success' ? 'toast-success' : ''}`}>
                  {formStatus.type === 'success' ? <Check size={16} /> : null}
                  <span>{formStatus.message}</span>
                </div>
              )}

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                <Send size={16} />
                <span>Send Message</span>
              </button>

              <p className="form-notice">
                ℹ️ Direct connection: This prepares your message and launches your device's email client directly to <strong>jeevanchitu@gmail.com</strong>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
