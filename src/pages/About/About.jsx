import { useEffect, useRef, useState } from 'react';
import styles from './About.module.css';
import CTA from '../../components/CTA/CTA';
import ManufacturingAbout from './ManufacturingAbout';
import logoComponent from '../../assets/logos/logo-component.svg';

const AnimatedCounter = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const isComplex = value.includes('/');

  useEffect(() => {
    if (isComplex) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTimestamp = null;
          const target = parseInt(value.replace(/[^0-9]/g, ''));

          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [value, duration, hasAnimated, isComplex]);

  if (isComplex) {
    return <span ref={countRef}>{value}</span>;
  }

  const suffix = value.replace(/[0-9]/g, '');

  return (
    <span ref={countRef}>
      {count}{suffix}
    </span>
  );
};

export default function About() {
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
            entry.target.classList.add(styles.revealVisible);
          }
        });
      },
      { threshold: 0.1 }
    );

    revealRefs.current.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);



  return (
    <div className={styles.aboutPage}>
      {/* 1. Hero Section */}
      <section className={styles.hero}>
        <div className={styles.wavyWires}>
          <svg viewBox="0 0 2880 400" preserveAspectRatio="none">
            <path className={styles.wirePath1} d="M0,200 Q360,100 720,200 T1440,200 T2160,200 T2880,200" />
            <path className={styles.wirePath2} d="M0,150 Q360,250 720,150 T1440,150 T2160,150 T2880,150" />
          </svg>
        </div>
        <div className={styles.heroContent}>
          <span className={`${styles.heroLabel} ${styles.reveal}`} ref={addToRefs}>ABOUT RAMROS</span>
          {[
            "Based in Bathinda, Punjab,",
            "Ramros builds quality wires & cables",
            "made for safety, strength,",
            "and long-lasting performance."
          ].map((line, index) => (
            <div
              key={index}
              ref={addToRefs}
              className={`${styles.heroLine} ${styles.reveal}`}
              style={{ transitionDelay: `${index * 0.25}s` }}
            >
              {line}
            </div>
          ))}
          <div
            className={styles.reveal}
            ref={addToRefs}
            style={{ transitionDelay: '1s' }}
          >
            <div className={styles.scrollIndicator}>
              <div className={styles.mouse}>
                <div className={styles.wheel}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Why Trust Ramros Section — Typography-Led */}
      <section className={styles.trustSection}>
        <div className={styles.trustContainer}>
          <div ref={addToRefs} className={`${styles.trustHeader} ${styles.reveal}`}>
            <h2 className={styles.trustMainHeading}>Why Trust Ramros?</h2>
          </div>

          <div className={styles.trustGrid}>
            {[
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
            ].map((item, index) => (
              <div
                key={index}
                ref={addToRefs}
                className={`${styles.trustItem} ${styles.reveal}`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className={styles.trustWordWrapper}>
                  <img src={logoComponent} alt="" className={styles.trustBgSvg} />
                  <h3 className={styles.trustWord}>{item.word}</h3>
                </div>
                <p className={styles.trustDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Manufacturing Section — Scroll-Driven */}
      <ManufacturingAbout />

      {/* 4. Dealer Network Section */}
      <section className={styles.section}>
        <div ref={addToRefs} className={styles.reveal}>
          <h2 className={styles.summaryHeading}>A Wide Dealer Network to Serve You Better</h2>
          <p className={styles.summaryBody}>
            Our growing dealer network helps customers get Ramros wires and cables with better reach, faster availability, and trusted local support.
          </p>
        </div>

        <div className={styles.dealerStats}>
          {[
            { number: "100+", label: "Dealers" },
            { number: "12+", label: "Categories" },
            { number: "24/7", label: "Availability" },
            { number: "50+", label: "Cities" }
          ].map((stat, index) => (
            <div
              key={index}
              ref={addToRefs}
              className={`${styles.statItem} ${styles.reveal}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <span className={styles.statNumber}>
                <AnimatedCounter value={stat.number} />
              </span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Management Section */}
      <section className={`${styles.section} ${styles.summary}`}>
        <div ref={addToRefs} className={styles.reveal}>
          <h2 className={styles.summaryHeading}>Our Management</h2>
          <p className={styles.summaryBody}>
            Led with experience, responsibility, and a clear focus on quality, Ramros continues to grow as a trusted name in wires and cables.
          </p>
        </div>

        <div className={styles.managementGrid}>
          {[
            {
              role: "Founder / Director",
              desc: "Guiding the company with a focus on quality and long-term trust."
            },
            {
              role: "Operations Head",
              desc: "Ensuring smooth production, consistency, and reliable supply."
            },
            {
              role: "Sales & Network Head",
              desc: "Building strong dealer relationships and market reach."
            }
          ].map((profile, index) => (
            <div
              key={index}
              ref={addToRefs}
              className={`${styles.profileCard} ${styles.reveal}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className={styles.profileImage}>
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ddd" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </div>
              <h3 className={styles.profileRole}>{profile.role}</h3>
              <p className={styles.profileDesc}>{profile.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Final CTA Section */}
      <CTA title="Want to Know More About Ramros?" />
    </div>
  );
}
