import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-name">Jeevan Rao R</span>
            <span className="footer-tagline">Frontend Developer & UI/UX Designer</span>
          </div>

          <div className="footer-socials">
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

        <div className="footer-bottom">
          <p>© 2026 Jeevan Rao R. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="scroll-top-btn"
            aria-label="Scroll to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
