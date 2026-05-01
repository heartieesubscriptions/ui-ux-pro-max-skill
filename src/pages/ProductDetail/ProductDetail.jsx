import { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './ProductDetail.module.css';
import CTA from '../../components/CTA/CTA';
import { productsData } from '../../data/products';

export default function ProductDetail() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const revealRefs = useRef([]);

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo(0, 0);
    // Find the product based on slug
    const foundProduct = productsData.find(p => p.slug === slug);
    setProduct(foundProduct || null);
  }, [slug]);

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

    return () => observer.disconnect();
  }, [product]);

  if (!product) {
    return (
      <div className={styles.notFound}>
        <h2>Product Not Found</h2>
        <Link to="/products" className={styles.backBtn}>Back to Products</Link>
      </div>
    );
  }

  // Find related products
  const relatedProductsList = product.relatedProducts
    ? productsData.filter(p => product.relatedProducts.includes(p.slug))
    : [];

  return (
    <div className={styles.productDetailPage}>

      {/* 1. Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroLayout}>
            <div className={`${styles.heroVisual} ${styles.reveal}`} ref={addToRefs} style={{ transitionDelay: '0.2s' }}>
              <div className={styles.productImageWrapper}>
                <div className={styles.imageContainer}>
                  {/* Inside Product Image (Underneath) */}
                  <img
                    src="/products/Product-inside/fynlynfr/1.png"
                    alt="Inside Product"
                    className={styles.insideImage}
                  />
                  {/* Outer Packaging Image (On Top) */}
                  <img
                    src="/products/product-packaging/fynlynfr.png"
                    alt={product.title}
                    className={styles.packagingImage}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <div className={styles.imageFallback} style={{ display: 'none' }}>
                  <span>{product.title.charAt(0)}</span>
                </div>
              </div>
            </div>
            <div className={styles.heroContent}>
              <span className={`${styles.heroLabel} ${styles.reveal}`} ref={addToRefs}>PRODUCT DETAILS</span>
              <span className={`${styles.categoryLabel} ${styles.reveal}`} ref={addToRefs}>
                {product.categoryName}
              </span>
              <h1 className={`${styles.mainTitle} ${styles.reveal}`} ref={addToRefs} style={{ transitionDelay: '0.1s' }}>
                {product.title}
              </h1>
              <p className={`${styles.heroDesc} ${styles.reveal}`} ref={addToRefs} style={{ transitionDelay: '0.2s' }}>
                {product.desc}
              </p>

              <div className={`${styles.colorOptions} ${styles.reveal}`} ref={addToRefs} style={{ transitionDelay: '0.3s' }}>
                <span className={styles.colorLabel}>Available Colors:</span>
                <div className={styles.colorSwatches}>
                  <div className={`${styles.swatch} ${styles.swatchRed}`} title="Red"></div>
                  <div className={`${styles.swatch} ${styles.swatchYellow}`} title="Yellow"></div>
                  <div className={`${styles.swatch} ${styles.swatchBlue}`} title="Blue"></div>
                </div>
              </div>

              <div className={`${styles.heroButtons} ${styles.reveal}`} ref={addToRefs} style={{ transitionDelay: '0.4s' }}>
                <Link to="/contact" className={styles.primaryBtn}>Request a Quote</Link>
                <Link to="/contact" className={styles.secondaryBtn}>Contact Us</Link>
              </div>
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
        </div>
      </section>

      {/* 6. Specifications */}
      {product.specs && (
        <section className={`${styles.section} ${styles.specsSection}`}>
          <div className={styles.container}>
            <h2 className={`${styles.sectionHeading} ${styles.reveal}`} ref={addToRefs}>Technical Specifications</h2>
            <div className={`${styles.specsGrid} ${styles.reveal}`} ref={addToRefs} style={{ transitionDelay: '0.1s' }}>
              <div className={styles.specBox}>
                <span className={styles.specLabel}>Material</span>
                <span className={styles.specValue}>{product.snapshot.material}</span>
              </div>
              <div className={styles.specBox}>
                <span className={styles.specLabel}>Size / Core Range</span>
                <span className={styles.specValue}>{product.snapshot.sizes}</span>
              </div>
              <div className={styles.specBox}>
                <span className={styles.specLabel}>Product Type</span>
                <span className={styles.specValue}>{product.specs.type}</span>
              </div>
              <div className={styles.specBox}>
                <span className={styles.specLabel}>Packaging</span>
                <span className={styles.specValue}>{product.specs.packaging || 'Standard Packaging'}</span>
              </div>
              {product.specs.certification && (
                <div className={styles.specBox}>
                  <span className={styles.specLabel}>Certification</span>
                  <span className={styles.specValue}>{product.specs.certification}</span>
                </div>
              )}
              <div className={styles.specBox}>
                <span className={styles.specLabel}>Main Application</span>
                <span className={styles.specValue}>{product.snapshot.application}</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 5. Applications */}
      {product.applications && product.applications.length > 0 && (
        <section className={`${styles.section} ${styles.applicationsSection}`}>
          <div className={styles.container}>
            <h2 className={`${styles.sectionHeading} ${styles.reveal}`} ref={addToRefs}>Where It Can Be Used</h2>
            <div className={`${styles.appsTypographyList} ${styles.reveal}`} ref={addToRefs} style={{ transitionDelay: '0.1s' }}>
              {product.applications.map((app, idx) => {
                // Determine icon based on application text
                const appLower = app.toLowerCase();
                let icon;

                if (appLower.includes('home') || appLower.includes('residential')) {
                  icon = (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                  );
                } else if (appLower.includes('shop') || appLower.includes('commercial')) {
                  icon = (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
                      <path d="m3 9 2.45-4.91A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.79 1.09L21 9"></path>
                      <path d="M12 3v6"></path>
                    </svg>
                  );
                } else if (appLower.includes('office')) {
                  icon = (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                      <line x1="9" y1="22" x2="9" y2="22"></line>
                      <line x1="15" y1="22" x2="15" y2="22"></line>
                      <line x1="12" y1="18" x2="12" y2="18"></line>
                      <line x1="8" y1="6" x2="8" y2="6"></line>
                      <line x1="16" y1="6" x2="16" y2="6"></line>
                      <line x1="8" y1="10" x2="8" y2="10"></line>
                      <line x1="16" y1="10" x2="16" y2="10"></line>
                      <line x1="8" y1="14" x2="8" y2="14"></line>
                      <line x1="16" y1="14" x2="16" y2="14"></line>
                    </svg>
                  );
                } else if (appLower.includes('industrial') || appLower.includes('factory')) {
                  icon = (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 20V9l4-2v4l4-2v4l4-2v4l4-2v11H2z"></path>
                      <path d="M20 20v-4l4-2v6h-4z"></path>
                    </svg>
                  );
                } else if (appLower.includes('wiring') || appLower.includes('electricity') || appLower.includes('phase') || appLower.includes('power')) {
                  icon = (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                    </svg>
                  );
                } else if (appLower.includes('pump') || appLower.includes('agricultural') || appLower.includes('agriculture')) {
                  icon = (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path>
                    </svg>
                  );
                } else if (appLower.includes('security') || appLower.includes('surveillance') || appLower.includes('cctv')) {
                  icon = (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                      <circle cx="12" cy="13" r="4"></circle>
                    </svg>
                  );
                } else if (appLower.includes('communication') || appLower.includes('telephone') || appLower.includes('intercom')) {
                  icon = (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  );
                } else if (appLower.includes('tv') || appLower.includes('dth') || appLower.includes('broadband') || appLower.includes('signal')) {
                  icon = (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
                      <polyline points="17 2 12 7 7 2"></polyline>
                    </svg>
                  );
                } else {
                  // Default Icon
                  icon = (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  );
                }

                return (
                  <div key={idx} className={styles.appItem}>
                    <div className={styles.appIcon}>
                      {icon}
                    </div>
                    <span className={styles.appText}>{app}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 7. Quality & Certification Proof */}
      <section className={`${styles.section} ${styles.certSection}`}>
        <div className={styles.container}>
          <div className={styles.certLayout}>
            <div className={`${styles.certText} ${styles.reveal}`} ref={addToRefs}>
              <h2 className={styles.sectionHeading}>Certified for Safety & Excellence</h2>
              <p className={styles.certSubtext}>Our products are rigorously tested and certified by leading global and national authorities to guarantee the highest standards of safety and performance.</p>
            </div>

            <div className={styles.marqueeContainer}>
              <div className={styles.marqueeTrack}>
                {[1, 2].map((group) => (
                  <div key={group} className={styles.marqueeGroup}>
                    <div className={styles.certItem}>
                      <img src="/src/assets/certifications/1.png" alt="ISI Certified" />
                      <span>ISI Certified</span>
                    </div>
                    <div className={styles.certItem}>
                      <img src="/src/assets/certifications/2.png" alt="CE Certified" />
                      <span>CE Certified</span>
                    </div>
                    <div className={styles.certItem}>
                      <img src="/src/assets/certifications/3.png" alt="RoHS Compliance" />
                      <span>RoHS Compliance</span>
                    </div>
                    <div className={styles.certItem}>
                      <img src="/src/assets/certifications/4.png" alt="ASHCO Certified" />
                      <span>ASHCO Certified</span>
                    </div>
                    <div className={styles.certItem}>
                      <img src="/src/assets/certifications/5.png" alt="ERDA Certified" />
                      <span>ERDA Certified</span>
                    </div>
                    <div className={styles.certItem}>
                      <img src="/src/assets/certifications/6.png" alt="FIA TAC Approved" />
                      <span>FIA TAC Approved</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Why Choose this Product */}
      {product.whyChoose && product.whyChoose.length > 0 && (
        <section className={`${styles.section} ${styles.whyChooseSection}`}>
          <div className={styles.container}>
            <h2 className={`${styles.sectionHeading} ${styles.reveal}`} ref={addToRefs}>
              Why Choose Ramros {product.title}?
            </h2>
            <div className={styles.whyGrid}>
              {product.whyChoose.map((item, idx) => (
                <div
                  key={idx}
                  className={`${styles.whyItem} ${styles.reveal}`}
                  ref={addToRefs}
                  style={{ transitionDelay: `${idx * 0.1}s` }}
                >
                  <span className={styles.whyNum}>0{idx + 1}</span>
                  <h3 className={styles.whyTitle}>{item.title}</h3>
                  <p className={styles.whyDesc}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 9. Related Products */}
      {relatedProductsList.length > 0 && (
        <section className={`${styles.section} ${styles.relatedSection}`}>
          <div className={styles.container}>
            <h2 className={`${styles.sectionHeading} ${styles.reveal}`} ref={addToRefs}>Related Products</h2>
            <div className={styles.relatedGrid}>
              {relatedProductsList.map((relProd, idx) => (
                <Link
                  to={`/product/${relProd.slug}`}
                  key={idx}
                  className={`${styles.relatedCard} ${styles.reveal}`}
                  ref={addToRefs}
                  style={{ transitionDelay: `${idx * 0.1}s` }}
                >
                  <span className={styles.relatedLabel}>{relProd.categoryName}</span>
                  <h3 className={styles.relatedTitle}>{relProd.title}</h3>
                  <span className={styles.relatedCta}>View Details &rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 10. Final Product CTA */}
      <CTA
        title="Need Product Details or Pricing?"
        subtext="Contact Ramros for product specifications, availability, dealership enquiries, or bulk wire and cable requirements."
        primaryText="Request a Quote"
        primaryLink="/contact"
        secondaryText="Call Now"
        secondaryLink="tel:+919876543210"
      />

    </div>
  );
}
