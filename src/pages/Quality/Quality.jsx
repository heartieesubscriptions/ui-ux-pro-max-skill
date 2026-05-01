import { useEffect, useRef, useState } from 'react';
import styles from './Quality.module.css';
import CTA from '../../components/CTA/CTA';

import cert1 from '../../assets/certifications/1.png';
import cert2 from '../../assets/certifications/2.png';
import cert3 from '../../assets/certifications/3.png';
import cert4 from '../../assets/certifications/4.png';
import cert5 from '../../assets/certifications/5.png';
import cert6 from '../../assets/certifications/6.png';

export default function Quality() {
  const certifications = [
    {
      src: cert1,
      title: 'BIS (ISI – IS 694)',
      whatItIs: 'A national safety standard for PVC insulated cables, ensuring they meet strict electrical and mechanical performance requirements set by the Bureau of Indian Standards.',
      whatItMeans: 'It guarantees that our wires are fire-resistant, highly conductive, and built for long-term safety in residential and commercial electrical systems.'
    },
    {
      src: cert2,
      title: 'CE Certification',
      whatItIs: 'A declaration that our products meet European Union standards for health, safety, and environmental protection, often recognized globally as a mark of quality.',
      whatItMeans: 'It ensures that the products you use are safe, high-quality, and manufactured following internationally recognized safety guidelines.'
    },
    {
      src: cert3,
      title: 'RoHS Compliance',
      whatItIs: 'Restriction of Hazardous Substances (RoHS) ensures that electrical products are free from dangerous materials like lead, mercury, and cadmium.',
      whatItMeans: 'It promotes a healthier environment and safer handling for electricians and users by eliminating toxic substances from the manufacturing process.'
    },
    {
      src: cert4,
      title: 'ASHCO Certification',
      whatItIs: 'A specialized certification confirming that our electrical conduits and cables meet specific industrial quality and endurance standards.',
      whatItMeans: 'It provides confidence in the product\'s ability to withstand harsh conditions and maintain integrity over years of continuous use.'
    },
    {
      src: cert5,
      title: 'ERDA Certification',
      whatItIs: 'Certification from the Electrical Research and Development Association after rigorous testing of product performance and material durability.',
      whatItMeans: 'You receive products that have been scientifically validated for electrical efficiency, strength, and reliable operation under load.'
    },
    {
      src: cert6,
      title: 'FIA TAC Approval',
      whatItIs: 'Approval from the Fire Insurance Association\'s Technical Advisory Committee for products used in fire-sensitive applications.',
      whatItMeans: 'It confirms that our cables are specially designed to minimize fire hazards and contribute to overall building safety in case of emergencies.'
    }
  ];

  const processes = [
    {
      num: '01',
      title: 'Material Selection',
      desc: 'We use quality raw materials to support better strength, safety, and performance.',
      image: '/manufacturing-setup/raw-material.png'
    },
    {
      num: '02',
      title: 'Controlled Manufacturing',
      desc: 'Our manufacturing setup helps maintain consistency across every wire and cable.',
      image: '/manufacturing-setup/manufacturing.png'
    },
    {
      num: '03',
      title: 'Testing & Checking',
      desc: 'Products are checked for insulation, finish, strength, and safe electrical use.',
      image: '/manufacturing-setup/manufacturing.png'
    },
    {
      num: '04',
      title: 'Ready for Supply',
      desc: 'Only products that meet our quality standards move ahead for packing and delivery.',
      image: '/manufacturing-setup/final-product.png'
    }
  ];

  const checklist = [
    {
      title: 'Conductivity Check',
      desc: 'Ensuring maximum electrical flow with minimal resistance.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12h3L9 3l6 18 4-9h3" />
        </svg>
      )
    },
    {
      title: 'Insulation Check',
      desc: 'High-voltage testing to prevent leakage and short circuits.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      )
    },
    {
      title: 'Strength & Flexibility',
      desc: 'Verifying the cable can bend without breaking or cracking.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22a9 9 0 0 1-9-9V4" />
          <path d="M12 22a9 9 0 0 0 9-9V4" />
          <circle cx="3" cy="4" r="1.5" fill="currentColor" />
          <circle cx="21" cy="4" r="1.5" fill="currentColor" />
        </svg>
      )
    },
    {
      title: 'Finish Consistency',
      desc: 'Smooth outer surface for easier installation and protection.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12h20" />
          <circle cx="12" cy="12" r="4" />
          <path d="M15 15l4 4" />
          <path d="M2 16h20M2 8h20" strokeOpacity="0.2" />
        </svg>
      )
    },
    {
      title: 'Size Accuracy',
      desc: 'Precise diameter measurement to meet exact project specs.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 2v20M17 2v20" />
          <path d="M7 6h10M7 18h10" />
          <circle cx="12" cy="12" r="3" fill="currentColor" />
          <path d="M2 12h5M17 12h5" />
        </svg>
      )
    },
    {
      title: 'Packing & Label Review',
      desc: 'Final verification of length, batch, and safety markings.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M9 12l2 2 4-4" />
          <path d="M4 8h16" />
        </svg>
      )
    }
  ];

  const categories = [
    {
      title: 'House Wires',
      desc: 'Quality that supports safe and smooth home wiring.',
      benefits: [
        'Helps reduce wiring worries in daily use',
        'Supports safer connections for homes and shops',
        'Made for long-lasting everyday performance'
      ],
      ctaText: 'Explore House Wires',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M3 9.5L12 3L21 9.5V19C21 19.5523 20.5523 20 20 20H4C3.44772 20 3 19.5523 3 19V9.5Z" />
          <path d="M9 20V12H15V20" />
        </svg>
      )
    },
    {
      title: 'Power Cables',
      desc: 'Quality that supports stable power flow and stronger load needs.',
      benefits: [
        'Helps handle demanding electrical use',
        'Supports reliable power distribution',
        'Made for long-term performance in tough conditions'
      ],
      ctaText: 'Explore Power Cables',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
        </svg>
      )
    },
    {
      title: 'Submersible Cables',
      desc: 'Quality that supports pump wiring where durability matters.',
      benefits: [
        'Helps maintain reliable pump connections',
        'Supports use in demanding water-related applications',
        'Made for strength, safety, and longer service life'
      ],
      ctaText: 'Explore Submersible Cables',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M12 2V22M2 12H22M4.93 4.93L19.07 19.07M4.93 19.07L19.07 4.93" />
          <circle cx="12" cy="12" r="4" fill="white" />
          <circle cx="12" cy="12" r="8" strokeDasharray="4 4" />
        </svg>
      )
    },
    {
      title: 'CCTV, TV & Communication Cables',
      desc: 'Quality that supports clear signal and dependable connectivity.',
      benefits: [
        'Helps support stable CCTV and communication wiring',
        'Made for cleaner signal transfer',
        'Suitable for TV, DTH, telephone, and intercom use'
      ],
      ctaText: 'Explore Communication Cables',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M23 7L16 12L23 17V7Z" />
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
          <circle cx="8.5" cy="12" r="2.5" />
        </svg>
      )
    },
    {
      title: 'Conduits & Accessories',
      desc: 'Quality that helps protect wiring and keep installation clean.',
      benefits: [
        'Helps protect wires from damage',
        'Supports neat and organized electrical installation',
        'Available in useful sizes for different wiring needs'
      ],
      ctaText: 'Explore Conduits',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <path d="M12 2V22M2 12H22" />
        </svg>
      )
    }
  ];

  const [activeAccordion, setActiveAccordion] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const revealRefs = useRef([]);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

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

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    // Auto-loop logic for categories
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        setActiveAccordion((prev) => (prev + 1) % categories.length);
      }, 4000); // 4 seconds per slide
    }

    return () => {
      observer.disconnect();
      if (interval) clearInterval(interval);
    };
  }, [activeAccordion, isPaused, categories.length]);

  return (
    <div className={styles.qualityPage}>

      {/* 1. Hero Section */}
      <section className={styles.hero}>
        <div className={styles.wavyWires}>
          <svg viewBox="0 0 2880 400" preserveAspectRatio="none">
            <path className={styles.wirePath1} d="M0,200 Q360,100 720,200 T1440,200 T2160,200 T2880,200" />
            <path className={styles.wirePath2} d="M0,150 Q360,250 720,150 T1440,150 T2160,150 T2880,150" />
          </svg>
        </div>
        <div className={styles.heroContent}>
          <span className={`${styles.heroLabel} ${styles.reveal}`} ref={addToRefs}>QUALITY AT RAMROS</span>
          {[
            "Quality built into",
            "every single wire",
            "and cable."
          ].map((line, index) => (
            <div
              key={index}
              className={`${styles.heroLine} ${styles.reveal}`}
              ref={addToRefs}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              {line}
            </div>
          ))}
          <div
            className={styles.reveal}
            ref={addToRefs}
            style={{ transitionDelay: '0.45s' }}
          >
            <div className={styles.scrollIndicator}>
              <div className={styles.mouse}>
                <div className={styles.wheel}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Certifications Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={`${styles.heading} ${styles.reveal}`} ref={addToRefs}>Certified for Safety. Trusted for Performance.</h2>
            <p className={`${styles.subtext} ${styles.reveal}`} ref={addToRefs} style={{ transitionDelay: '0.1s' }}>
              Ramros products are backed by important certifications and approvals that reflect our focus on safety, compliance, quality, and dependable performance.
            </p>
          </div>

          <div className={styles.certGrid}>
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`${styles.certCard} ${styles.reveal}`}
                ref={addToRefs}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <img src={cert.src} alt={cert.title} className={styles.certIcon} />
                <h3 className={styles.certTitle}>{cert.title}</h3>

                <div className={styles.certDetails}>
                  <div className={styles.detailItem}>
                    <h4 className={styles.detailHeading}>What it is?</h4>
                    <p className={styles.detailText}>{cert.whatItIs}</p>
                  </div>
                  <div className={styles.detailItem}>
                    <h4 className={styles.detailHeading}>What it means for you?</h4>
                    <p className={styles.detailText}>{cert.whatItMeans}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* 5. Testing & Checks */}
      <section className={`${styles.section} ${styles.testingSection}`}>
        <div className={styles.container}>
          <div className={styles.testingLayout}>
            <div className={styles.testingLeft}>
              <h2 className={`${styles.heading} ${styles.reveal}`} ref={addToRefs}>Checked for Safe and Reliable Use</h2>
            </div>
            <div className={styles.testingRight}>
              <div className={styles.checklistGrid}>
                {checklist.map((item, index) => (
                  <div
                    key={index}
                    className={`${styles.checklistItem} ${styles.reveal}`}
                    ref={addToRefs}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <div className={styles.itemIcon}>
                      {item.icon}
                    </div>
                    <div className={styles.itemContent}>
                      <h3 className={styles.itemTitle}>{item.title}</h3>
                      <p className={styles.itemDesc}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* 7. Quality Across Product Categories */}
      <section className={`${styles.section} ${styles.categoriesSection}`}>
        <div className={styles.container}>
          <h2 className={`${styles.heading} ${styles.reveal}`} ref={addToRefs}>Quality Across Every Product Range</h2>

          <div className={styles.rangeLayout}>
            <div className={styles.rangeList}>
              {categories.map((cat, index) => (
                <div
                  key={index}
                  className={`${styles.rangeItem} ${styles.reveal} ${activeAccordion === index ? styles.activeRange : ''} ${isPaused ? styles.pausedAnimation : ''}`}
                  ref={addToRefs}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                  onClick={() => setActiveAccordion(index)}
                >
                  <span className={styles.rangeNum}>0{index + 1}</span>
                  <h3 className={styles.rangeTitle}>{cat.title}</h3>
                  <div className={styles.rangeIndicator}></div>
                </div>
              ))}
            </div>

            <div
              className={`${styles.rangeDisplay} ${styles.reveal}`}
              ref={addToRefs}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div key={activeAccordion} className={styles.displayContent}>
                <div className={styles.displayMain}>
                  <div className={styles.displayText}>
                    <span className={styles.displayLabel}>Quality Benefit</span>
                    <h3 className={styles.displayTitle}>
                      {activeAccordion !== null ? categories[activeAccordion].title : 'Select a Category'}
                    </h3>
                    <p className={styles.displayDesc}>
                      {activeAccordion !== null ? categories[activeAccordion].desc : 'Discover how we maintain high standards across our different wire and cable categories.'}
                    </p>

                    {activeAccordion !== null && (
                      <div className={styles.extraContent}>
                        <ul className={styles.benefitList}>
                          {categories[activeAccordion].benefits.map((benefit, idx) => (
                            <li
                              key={idx}
                              className={styles.benefitItem}
                              style={{ animationDelay: `${0.1 + idx * 0.1}s` }}
                            >
                              <span className={styles.benefitDot}></span>
                              {benefit}
                            </li>
                          ))}
                        </ul>

                        <div className={styles.displayActions}>
                          <button className={styles.textLinkAction}>
                            {categories[activeAccordion].ctaText} <span>→</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className={styles.displayVisual}>
                    {activeAccordion !== null && categories[activeAccordion].icon}
                  </div>
                </div>
                <div className={styles.displayDecorative}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <CTA
        title="Looking for Quality Wires and Cables?"
        subtext="Connect with Ramros for product details, availability, and business enquiries."
        primaryText="View Products"
        primaryLink="/products"
        secondaryText="Contact Us"
        secondaryLink="/contact"
      />
    </div>
  );
}
