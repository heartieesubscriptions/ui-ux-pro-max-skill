import { useEffect, useRef, useState } from 'react';
import styles from './ManufacturingAbout.module.css';

const mfgSteps = [
  { title: 'Raw Material', desc: 'Premium-grade copper and PVC sourced from certified suppliers.', image: '/manufacturing-setup/raw-material.png' },
  { title: 'Manufacturing', desc: 'State-of-the-art machinery with rigorous quality control.', image: '/manufacturing-setup/manufacturing.png' },
  { title: 'Finished Product', desc: 'ISI-certified cables ready for nationwide distribution.', image: '/manufacturing-setup/final-product.png' },
  { title: 'Packaging', desc: 'Carefully packaged and labelled for safe delivery across India.', image: '' },
];

export default function ManufacturingAbout() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const cardsRef = useRef(null);
  const circleRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const section = sectionRef.current;
        if (!section) { ticking = false; return; }
        const rect = section.getBoundingClientRect();
        
        // Ensure we only calculate when section is in view
        if (rect.top > window.innerHeight || rect.bottom < 0) {
          ticking = false;
          return;
        }

        const sectionTop = -rect.top;
        const sectionHeight = rect.height - window.innerHeight;
        const progress = Math.max(0, Math.min(1, sectionTop / sectionHeight));

        if (cardsRef.current) {
          const totalCardWidth = cardsRef.current.scrollWidth - cardsRef.current.parentElement.clientWidth;
          // Ensure movement happens even on large screens by checking if totalCardWidth is positive
          const moveX = totalCardWidth > 0 ? totalCardWidth : 400; // Fallback movement
          cardsRef.current.style.transform = `translateX(${-(progress * moveX)}px)`;
        }
        if (circleRef.current && trackRef.current) {
          circleRef.current.style.transform = `translateX(${progress * trackRef.current.clientWidth}px)`;
        }
        if (progressRef.current) {
          progressRef.current.style.width = `${progress * 100}%`;
        }
        ticking = false;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className={styles.mfgWrapper}>
      <div className={styles.mfgSticky}>
        <div className={styles.mfgHeader}>
          <h2 className={styles.mfgHeading}>Our Strong Manufacturing Setup</h2>
          <p className={styles.mfgSubtext}>From raw material to finished product — every step is precision-controlled.</p>
        </div>
        <div className={styles.mfgTimelineWrapper}>
          <div ref={trackRef} className={styles.mfgTrack}>
            <div ref={progressRef} className={styles.mfgProgress}></div>
            <div ref={circleRef} className={styles.mfgCircle}></div>
          </div>
          <div className={styles.mfgLabels}>
            {mfgSteps.map((s, i) => <span key={i} className={styles.mfgLabel}>{s.title}</span>)}
          </div>
        </div>
        <div className={styles.mfgViewport}>
          <div ref={cardsRef} className={styles.mfgCardsTrack}>
            {mfgSteps.map((step, i) => (
              <div key={i} className={styles.mfgCard} style={step.image ? { backgroundImage: `url(${step.image})` } : {}}>
                <div className={styles.mfgCardOverlay}>
                  <div className={styles.mfgCardContent}>
                    <span className={styles.mfgStepNum}>0{i + 1}</span>
                    <h3 className={styles.mfgCardTitle}>{step.title}</h3>
                    <p className={styles.mfgCardDesc}>{step.desc}</p>
                  </div>
                </div>
                {!step.image && (
                  <div className={styles.mfgPlaceholder}>
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                      <line x1="12" y1="22.08" x2="12" y2="12"></line>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
