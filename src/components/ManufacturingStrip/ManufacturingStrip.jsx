import { useEffect, useRef, useState } from 'react';
import styles from './ManufacturingStrip.module.css';

const steps = [
  { title: 'Raw Material', desc: 'Premium-grade copper and PVC sourced from certified suppliers.', image: '/manufacturing-setup/raw-material.png' },
  { title: 'Manufacturing', desc: 'State-of-the-art machinery with rigorous quality control at every step.', image: '/manufacturing-setup/manufacturing.png' },
  { title: 'Finished Product', desc: 'ISI-certified cables ready for nationwide distribution.', image: '/manufacturing-setup/final-product.png' },
  { title: 'Packaging', desc: 'Carefully packaged and labelled for safe delivery across India.', image: '' },
];

export default function ManufacturingStrip() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const cardsRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const section = sectionRef.current;
        if (!section) { ticking = false; return; }

        const rect = section.getBoundingClientRect();
        const sectionTop = -rect.top;
        const sectionHeight = rect.height - window.innerHeight;

        // Calculate how far we've scrolled through this section (0 to 1)
        const progress = Math.max(0, Math.min(1, sectionTop / sectionHeight));
        setScrollProgress(progress);

        // Move cards horizontally based on scroll
        if (cardsRef.current) {
          const totalCardWidth = cardsRef.current.scrollWidth - cardsRef.current.parentElement.clientWidth;
          const translateX = -(progress * totalCardWidth);
          cardsRef.current.style.transform = `translateX(${translateX}px)`;
        }

        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className={styles.sectionWrapper}>
      <div className={styles.stickyContainer}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.heading}>Manufacturing Excellence</h2>
          <p className={styles.subtext}>
            From raw material to finished product — every step is precision-controlled.
          </p>
        </div>

        {/* Timeline Track */}
        <div className={styles.timelineWrapper}>
          <div ref={trackRef} className={styles.timelineTrack}>
            <div className={styles.timelineProgress} style={{ width: `${scrollProgress * 100}%` }}></div>
          </div>
          <div className={styles.timelineLabels}>
            {steps.map((step, i) => (
              <span
                key={i}
                className={`${styles.timelineLabel} ${scrollProgress >= (i / (steps.length - 1)) - 0.05 ? styles.timelineLabelActive : ''}`}
              >
                {step.title}
              </span>
            ))}
          </div>
        </div>

        {/* Cards Container */}
        <div className={styles.cardsViewport}>
          <div ref={cardsRef} className={styles.cardsTrack}>
            {steps.map((step, i) => (
              <div
                key={i}
                className={styles.card}
                style={step.image ? { backgroundImage: `url(${step.image})` } : {}}
              >
                <div className={styles.cardOverlay}>
                  <div className={styles.cardContent}>
                    <span className={styles.stepNum}>0{i + 1}</span>
                    <h3 className={styles.cardTitle}>{step.title}</h3>
                    <p className={styles.cardDesc}>{step.desc}</p>
                  </div>
                </div>
                {!step.image && (
                  <div className={styles.placeholderIcon}>
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
