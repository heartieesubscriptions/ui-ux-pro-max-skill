import { useEffect, useRef } from 'react';
import styles from './Legal.module.css';

export default function LegalLayout({ title, intro, children }) {
  const revealRefs = useRef([]);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.revealVisible);
          }
        });
      },
      { threshold: 0.1 }
    );

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.legalPage}>
      <section className={styles.hero}>
        <span className={`${styles.heroLabel} ${styles.reveal}`} ref={addToRefs}>
          LEGAL
        </span>
        <h1 className={`${styles.heroTitle} ${styles.reveal}`} ref={addToRefs} style={{ transitionDelay: '0.1s' }}>
          {title}
        </h1>
        <div className={`${styles.accentLine} ${styles.reveal}`} ref={addToRefs} style={{ transitionDelay: '0.2s' }}></div>
        <p className={`${styles.heroIntro} ${styles.reveal}`} ref={addToRefs} style={{ transitionDelay: '0.3s' }}>
          {intro}
        </p>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.contentContainer}>
          {/* We pass addToRefs to children using React.Children.map if needed, 
              but simpler is to just render children and let them handle their own reveals 
              or we apply reveal to the whole container. */}
          <div className={`${styles.reveal}`} ref={addToRefs} style={{ transitionDelay: '0.2s' }}>
            {children}
          </div>
        </div>
      </section>
    </div>
  );
}
