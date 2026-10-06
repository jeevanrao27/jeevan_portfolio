import React, { useEffect } from 'react';

export default function ScrollProgress() {
  useEffect(() => {
    // Modern web guidance fallback for browsers lacking CSS animation-timeline: scroll()
    if (typeof window !== 'undefined' && !window.CSS?.supports('animation-timeline', 'scroll()')) {
      const progressBar = document.getElementById('scroll-progress');
      if (!progressBar) return;

      const handleScroll = () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (totalHeight > 0) {
          const progress = window.scrollY / totalHeight;
          progressBar.style.transform = `scaleX(${progress})`;
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return <div id="scroll-progress" aria-hidden="true" />;
}
