import { useEffect, useRef, useState } from 'react';
import styles from './Products.module.css';
import CTA from '../../components/CTA/CTA';

import { Link } from 'react-router-dom';
import { productsData } from '../../data/products';

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'house-wires', name: 'House Wires' },
  { id: 'power-cables', name: 'Power Cables' },
  { id: 'submersible-cables', name: 'Submersible Cables' },
  { id: 'communication-cables', name: 'CCTV & Communication' },
  { id: 'conduits', name: 'Conduits & Accessories' }
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all');
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
  }, [activeCategory]); // Re-observe when items change

  const filteredProducts = activeCategory === 'all' 
    ? productsData 
    : productsData.filter(p => p.category === activeCategory);

  return (
    <div className={styles.productsPage}>
      {/* 1. HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.wavyWires}>
          <svg viewBox="0 0 2880 400" preserveAspectRatio="none">
            <path className={styles.wirePath1} d="M0,200 Q360,100 720,200 T1440,200 T2160,200 T2880,200" />
            <path className={styles.wirePath2} d="M0,150 Q360,250 720,150 T1440,150 T2160,150 T2880,150" />
          </svg>
        </div>
        <div className={styles.heroContent}>
          <span className={`${styles.heroLabel} ${styles.reveal}`} ref={addToRefs}>PRODUCTS AT RAMROS</span>
          <div className={styles.heroTitle}>
            {[
              "Wide range of wires",
              "and cables made for",
              "every industrial and",
              "electrical need."
            ].map((line, index) => (
              <div
                key={index}
                ref={addToRefs}
                className={`${styles.heroLine} ${styles.reveal}`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                {line}
              </div>
            ))}
            <div 
              className={styles.reveal} 
              ref={addToRefs} 
              style={{ transitionDelay: '0.6s' }}
            >
              <div className={styles.scrollIndicator}>
                <div className={styles.mouse}>
                  <div className={styles.wheel}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 3. MAIN CONTENT SPLIT LAYOUT */}
      <div className={styles.mainLayout}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.sidebarSticky}>
            <span className={styles.sidebarLabel}>Categories</span>
            <div className={styles.categoryList}>
              {categories.map((cat, index) => (
                <button
                  key={cat.id}
                  className={`${styles.sidebarTab} ${activeCategory === cat.id ? styles.activeSidebarTab : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.name}
                  {activeCategory === cat.id && <span className={styles.activeDot}></span>}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <main className={styles.productArea}>
          <div key={activeCategory} className={styles.gridContainer}>
            {filteredProducts.map((prod, index) => (
              <Link 
                to={`/product/${prod.slug}`}
                key={prod.id} 
                ref={addToRefs} 
                className={`${styles.productCard} ${styles.reveal}`}
                style={{ transitionDelay: `${(index % 3) * 0.1}s` }}
              >
                <div className={styles.cardVisual}>
                  <div className={styles.visualContainer}>
                    {/* Wire Layer (Underneath) */}
                    <img 
                      src={`/products/Product-inside/fynlynfr/1.png`} 
                      alt="" 
                      className={styles.wireImg} 
                    />
                    
                    {/* Packaging Layer (Splits) */}
                    <div className={styles.packagingSplit}>
                      <div 
                        className={styles.packagingLeft} 
                        style={{ backgroundImage: `url(/products/product-packaging/fynlynfr.png)` }}
                      ></div>
                      <div 
                        className={styles.packagingRight} 
                        style={{ backgroundImage: `url(/products/product-packaging/fynlynfr.png)` }}
                      ></div>
                    </div>
                  </div>
                </div>
                <h3 className={styles.cardTitle}>{prod.title}</h3>
                <p className={styles.cardDesc}>{prod.desc}</p>
                {prod.sizes && (
                  <div className={styles.sizeTags}>
                    {prod.sizes.map(size => (
                      <span key={size} className={styles.sizeTag}>{size}</span>
                    ))}
                  </div>
                )}
                <span className={styles.cardBtn}>Get Details</span>
              </Link>
            ))}
          </div>
        </main>
      </div>

      {/* Quick Enquiry CTA */}
      <CTA 
        title="Need Help Choosing the Right Product?" 
        primaryText="Contact Us"
        primaryLink="/contact"
        secondaryText="Request a Quote"
        secondaryLink="/contact"
      />
    </div>
  );
}
