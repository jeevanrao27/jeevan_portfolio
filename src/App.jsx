import React, { useState, useEffect } from 'react';
import './App.css';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import SoftSkillsAndInterests from './components/SoftSkillsAndInterests';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('jeevan-portfolio-theme');
      if (saved) return saved;
      return 'dark'; // Dark theme default as requested
    }
    return 'dark';
  });

  useEffect(() => {
    document.body.className = theme === 'light' ? 'theme-light' : 'theme-dark';
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem('jeevan-portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="portfolio-app">
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Sticky Navigation */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <SoftSkillsAndInterests />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
