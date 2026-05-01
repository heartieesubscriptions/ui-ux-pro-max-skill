import { useEffect, useRef } from 'react';
import styles from './WhyRamros.module.css';
import logoComponent from '../../assets/logos/logo-component.svg';

export default function WhyRamros() {
  const revealRefs = useRef([]);
  revealRefs.current = [];

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    revealRefs.current.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const trustItems = [
    {
      word: "QUALITY",
      desc: "Wires and cables made with consistent quality and long-lasting performance."
    },
    {
      word: "SAFETY",
      desc: "Products built for safe everyday electrical use in homes, shops, and industries."
    },
    {
      word: "RANGE",
      desc: "House wires, power cables, submersible cables, CCTV cables, and conduits."
    },
    {
      word: "SUPPLY",
      desc: "A growing dealer network for better reach, faster availability, and local support."
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div ref={addToRefs} className={`${styles.header} ${styles.reveal}`}>
          <h2 className={styles.heading}>Why Choose Ramros?</h2>
        </div>

        <div className={styles.grid}>
          {trustItems.map((item, index) => (
            <div
              key={index}
              ref={addToRefs}
              className={`${styles.item} ${styles.reveal}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className={styles.wordWrapper}>
                <img src={logoComponent} alt="" className={styles.bgSvg} />
                <h3 className={styles.word}>{item.word}</h3>
              </div>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
