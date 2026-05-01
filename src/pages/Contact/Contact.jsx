import { useEffect, useRef, useState } from 'react';
import styles from './Contact.module.css';
import CTA from '../../components/CTA/CTA';

export default function Contact() {
  const revealRefs = useRef([]);
  revealRefs.current = [];

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  const [enquiryType, setEnquiryType] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

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
    
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      observer.disconnect();
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const enquiryOptions = [
    { value: 'product', label: 'Product Enquiry' },
    { value: 'dealership', label: 'Dealership Enquiry' },
    { value: 'bulk', label: 'Bulk Requirement' },
    { value: 'support', label: 'General Support' }
  ];

  return (
    <div className={styles.contactPage}>
      {/* 1. HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.wavyWires}>
          <svg viewBox="0 0 2880 400" preserveAspectRatio="none">
            <path className={styles.wirePath1} d="M0,200 Q360,100 720,200 T1440,200 T2160,200 T2880,200" />
            <path className={styles.wirePath2} d="M0,150 Q360,250 720,150 T1440,150 T2160,150 T2880,150" />
          </svg>
        </div>
        <div className={styles.heroContent}>
          <span className={`${styles.heroLabel} ${styles.reveal}`} ref={addToRefs}>CONTACT RAMROS</span>
          <div className={styles.heroTitle}>
            {[
              "Let's connect for",
              "wires, cables,",
              "and business support."
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
              style={{ transitionDelay: '0.45s' }}
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

      {/* 2. CONTACT CONTENT SECTION */}
      <section className={styles.contactContent}>
        <div className={styles.container}>
          <div className={styles.contentLayout}>
            {/* Left: Contact Info */}
            <div className={styles.infoColumn}>
              <div ref={addToRefs} className={`${styles.sectionHeader} ${styles.reveal}`}>
                <h2 className={styles.heading}>Get in Touch with Ramros</h2>
                <p className={styles.subtext}>
                  For product details, dealership enquiries, bulk requirements, or business support, contact Ramros Wire and Cable Industries.
                </p>
              </div>

              <div className={styles.contactDetails}>
                <div ref={addToRefs} className={`${styles.contactBlock} ${styles.reveal}`} style={{ transitionDelay: '0.1s' }}>
                  <span className={styles.blockLabel}>Call Us</span>
                  <a href="tel:+919876543210" className={styles.blockText}>+91 98765 43210</a>
                  <span className={styles.blockNote}>For product and business enquiries</span>
                </div>
                
                <div ref={addToRefs} className={`${styles.contactBlock} ${styles.reveal}`} style={{ transitionDelay: '0.2s' }}>
                  <span className={styles.blockLabel}>Email Us</span>
                  <a href="mailto:info@ramros.com" className={styles.blockText}>info@ramros.com</a>
                  <span className={styles.blockNote}>For quotations, support, and dealership enquiries</span>
                </div>

                <div ref={addToRefs} className={`${styles.contactBlock} ${styles.reveal}`} style={{ transitionDelay: '0.3s' }}>
                  <span className={styles.blockLabel}>Visit Us</span>
                  <span className={styles.blockText} style={{ color: '#423E3C' }}>Bathinda, Punjab</span>
                  <span className={styles.blockNote}>Ramros Wire and Cable Industries</span>
                </div>
              </div>
            </div>

            {/* Right: Enquiry Form */}
            <div className={styles.formColumn}>
              <div ref={addToRefs} className={`${styles.formHeader} ${styles.reveal}`}>
                <h2 className={styles.heading}>Send an Enquiry</h2>
                <p className={styles.subtext}>
                  Tell us what you need, and our team will get back to you with the right product details.
                </p>
              </div>

              <div ref={addToRefs} className={`${styles.formContainer} ${styles.reveal}`} style={{ transitionDelay: '0.2s' }}>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Full Name</label>
                      <input type="text" className={styles.formInput} placeholder="Your Name" required />
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Phone Number</label>
                      <input type="tel" className={styles.formInput} placeholder="Your Contact Number" required />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Email Address</label>
                      <input type="email" className={styles.formInput} placeholder="Your Email" />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>City / Location</label>
                      <input type="text" className={styles.formInput} placeholder="Your City" required />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Enquiry Type</label>
                    <div className={styles.customDropdown} ref={dropdownRef}>
                      <div 
                        className={`${styles.dropdownHeader} ${isDropdownOpen ? styles.headerActive : ''}`}
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      >
                        <span>{enquiryType ? enquiryOptions.find(opt => opt.value === enquiryType).label : 'Select Enquiry Type'}</span>
                        <div className={styles.dropdownArrow}></div>
                      </div>
                      
                      <div className={`${styles.dropdownList} ${isDropdownOpen ? styles.listVisible : ''}`}>
                        {enquiryOptions.map((option) => (
                          <div 
                            key={option.value}
                            className={`${styles.dropdownOption} ${enquiryType === option.value ? styles.optionSelected : ''}`}
                            onClick={() => {
                              setEnquiryType(option.value);
                              setIsDropdownOpen(false);
                            }}
                          >
                            {option.label}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Message / Requirement</label>
                    <textarea className={styles.formTextarea} placeholder="How can we help you?" required></textarea>
                  </div>

                  <button type="submit" className={styles.submitBtn}>Submit Enquiry</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LOCATION SECTION */}
      <section className={styles.locationSection}>
        <div className={styles.container}>
          <div ref={addToRefs} className={`${styles.sectionHeader} ${styles.reveal}`} style={{ textAlign: 'center' }}>
            <h2 className={styles.heading}>Our Location</h2>
            <p className={styles.subtext} style={{ margin: '0 auto' }}>
              Ramros Wire and Cable Industries is based in Bathinda, Punjab, serving dealers, contractors, electricians, and customers across the region.
            </p>
          </div>

          <div ref={addToRefs} className={`${styles.mapContainer} ${styles.reveal}`} style={{ transitionDelay: '0.2s' }}>
            {/* Map Placeholder */}
            <div className={styles.mapPlaceholder}>Google Maps Embed Area</div>
            
            <div className={styles.addressBox}>
              <div className={styles.addressTitle}>RAMROS INDUSTRIES</div>
              <div className={styles.addressText}>Bathinda, Punjab, India</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA SECTION */}
      <CTA 
        title="Need Reliable Wires and Cables?" 
        primaryText="Call Now"
        primaryLink="tel:+919876543210"
        secondaryText="View Products"
        subtext="Connect with Ramros for product details, availability, and business enquiries."
      />
    </div>
  );
}
