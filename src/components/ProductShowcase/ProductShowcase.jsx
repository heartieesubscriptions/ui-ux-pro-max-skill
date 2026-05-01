import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductShowcase.module.css';

const products = [
  { id: 1, title: 'House Wiring Cables', desc: 'Safe, flexible, and durable wiring for every home.', image: '/products/product-packaging/fynlynfr.png', category: 'House Wires' },
  { id: 2, title: 'Industrial Power Cables', desc: 'Heavy-duty cables for commercial and industrial infrastructure.', image: '/products/product-packaging/fynlynfr.png', category: 'Power Cables' },
  { id: 3, title: 'Submersible Cables', desc: 'Waterproof cables engineered for pumps and underground use.', image: '/products/product-packaging/fynlynfr.png', category: 'Submersible' },
];

export default function ProductShowcase() {
  const revealRefs = useRef([]);
  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add(styles.visible);
      }),
      { threshold: 0.15 }
    );
    revealRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 ref={addToRefs} className={`${styles.heading} ${styles.reveal}`}>Our Products</h2>
        <p ref={addToRefs} className={`${styles.subtext} ${styles.reveal}`}>
          Precision-engineered solutions for every electrical need.
        </p>

        <div className={styles.grid}>
          {products.map((prod, i) => (
            <div
              key={prod.id}
              ref={addToRefs}
              className={`${styles.card} ${styles.reveal}`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className={styles.imageWrap}>
                <img src={prod.image} alt={prod.title} className={styles.productImage} />
                <span className={styles.categoryBadge}>{prod.category}</span>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{prod.title}</h3>
                <p className={styles.cardDesc}>{prod.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div ref={addToRefs} className={`${styles.ctaWrap} ${styles.reveal}`}>
          <Link to="/products" className={styles.exploreBtn}>
            Explore All Products
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
