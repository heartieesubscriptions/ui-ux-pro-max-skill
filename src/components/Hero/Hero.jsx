import { useState, useEffect, useRef } from 'react';
import { useScrollFrames } from '../../hooks/useScrollFrames';
import styles from './Hero.module.css';

import cert1 from '../../assets/certifications/1.png';
import cert2 from '../../assets/certifications/2.png';
import cert3 from '../../assets/certifications/3.png';
import cert4 from '../../assets/certifications/4.png';
import cert5 from '../../assets/certifications/5.png';
import cert6 from '../../assets/certifications/6.png';

const certData = [
  { src: cert1, title: 'ISI Certified' },
  { src: cert2, title: 'CE Certified' },
  { src: cert3, title: 'RoHS Compliance' },
  { src: cert4, title: 'ASHCO Certified' },
  { src: cert5, title: 'ERDA Certified' },
  { src: cert6, title: 'FIA TAC Approved' }
];

export default function Hero({ containerRef }) {
  const { imagesRef, currentFrameRef, isLoaded, FRAME_COUNT } = useScrollFrames(containerRef);

  const canvasRef = useRef(null);
  const textContentRef = useRef(null);
  const annotationRef = useRef(null);
  const linesRef = useRef(null);

  const ANNOTATION_START_FRAME = 70;
  const TRANSITION_DURATION = 100;

  const getHeroOpacity = () => 1;
  const getAnnotationOpacity = () => 1;

  const getHeroTranslateY = () => {
    const frame = currentFrameRef.current;
    if (frame < ANNOTATION_START_FRAME) return 0;
    if (frame >= ANNOTATION_START_FRAME + TRANSITION_DURATION) return -2000;
    return -((frame - ANNOTATION_START_FRAME) / TRANSITION_DURATION) * 2000;
  };

  const getAnnotationTranslateY = () => {
    const frame = currentFrameRef.current;
    if (frame < ANNOTATION_START_FRAME) return 2000;
    if (frame >= ANNOTATION_START_FRAME + TRANSITION_DURATION) return 0;
    return 2000 - ((frame - ANNOTATION_START_FRAME) / TRANSITION_DURATION) * 2000;
  };

  useEffect(() => {
    const updateCanvas = () => {
      const canvas = canvasRef.current;
      const images = imagesRef.current;
      const ctx = canvas?.getContext('2d', { alpha: false });

      if (!canvas || !ctx || !isLoaded) return;

      const frameIndex = currentFrameRef.current;
      const frameImage = images[frameIndex];

      if (frameImage && frameImage.complete) {
        ctx.drawImage(frameImage, 0, 0, canvas.width, canvas.height);
      }

      canvas.style.opacity = 1;

      const heroOp = getHeroOpacity();
      const heroY = getHeroTranslateY();
      const annotOp = getAnnotationOpacity();
      const annotY = getAnnotationTranslateY();

      if (textContentRef.current) {
        textContentRef.current.style.opacity = heroOp;
        textContentRef.current.style.transform = `translateY(${heroY}px)`;
        textContentRef.current.style.visibility = heroOp === 0 ? 'hidden' : 'visible';
      }

      if (annotationRef.current) {
        annotationRef.current.style.opacity = annotOp;
        annotationRef.current.style.transform = `translateY(${annotY}px)`;
        annotationRef.current.style.visibility = annotOp === 0 ? 'hidden' : 'visible';
      }
      if (linesRef.current) {
        linesRef.current.style.opacity = annotOp;
      }
    };

    const animationId = requestAnimationFrame(function animate() {
      updateCanvas();
      requestAnimationFrame(animate);
    });

    return () => cancelAnimationFrame(animationId);
  }, [isLoaded]);



  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.width = 1920;
      canvasRef.current.height = 1080;
    }
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.videoContainer}>
        <canvas
          ref={canvasRef}
          className={styles.videoCanvas}
          width={1920}
          height={1080}
        />
      </div>

      <div className={styles.overlay}>
        <div ref={textContentRef} className={styles.heroGrid}>
          {/* Left — Brand Content */}
          <div className={styles.heroLeft}>
            <img src="/logo1.png" alt="Ramros Logo" className={styles.heroLogo} />

            <div className={styles.heroContentCard}>
              <h1 className={styles.heroMainHeading}>
                Strong Wires.<br />Safe Power.
              </h1>
              <p className={styles.heroSubtext}>
                We make wires and cables for homes, shops, and industries.
              </p>
              <div className={styles.heroButtons}>
                <button className={styles.heroCta} onClick={() => window.location.href = '/products'}>
                  View Products
                </button>
                <button className={styles.heroCtaSecondary}>
                  Get a Quote
                </button>
              </div>
            </div>
          </div>

          {/* Right — Certifications */}
          <div className={styles.heroRight}>
            <div className={styles.certCard}>
              <div className={styles.verticalMarqueeContainer}>
                <div className={styles.verticalMarqueeContent}>
                  {[...Array(2)].map((_, i) => (
                    <div key={i} className={styles.verticalMarqueeGroup}>
                      {certData.map((cert, index) => (
                        <div key={index} className={styles.certImgWrapper}>
                          <img src={cert.src} alt={cert.title} className={styles.certImg} />
                          <span className={styles.certLabelText}>{cert.title}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Phase 2 — Annotations */}
        <div
          ref={annotationRef}
          className={styles.annotation}
          style={{ opacity: 0 }}
        >
          <svg className={styles.svgLayer} viewBox="0 0 1920 1080" fill="none">
            <path d="M 572 540 L 850 540 L 925 400" stroke="#ff0000" strokeWidth="3" className={styles.pointingLine} />
            <circle cx="925" cy="400" r="10" fill="#ff0000" />
            <path d="M 1348 600 L 1050 600 L 980 720" stroke="#ff0000" strokeWidth="3" className={styles.pointingLine} />
            <circle cx="980" cy="720" r="10" fill="#ff0000" />
          </svg>
          <div className={styles.annotationLeft}>
            <span className={styles.annotationLabel}>CORE 01</span>
            <h2 className={styles.annotationTitle}>Pure Copper Conductor</h2>
            <p className={styles.annotationDesc}>99.9% pure copper for maximum conductivity and energy efficiency.</p>
          </div>
          <div className={styles.annotationRight}>
            <span className={styles.annotationLabel}>CORE 02</span>
            <h2 className={styles.annotationTitle}>High Quality Insulation</h2>
            <p className={styles.annotationDesc}>PVC + PP + PET layers for ultimate fire resistance and safety.</p>
          </div>
        </div>
      </div>


    </section>
  );
}