import { useEffect, useRef, useState } from 'react';
import styles from './Careers.module.css';
import CTA from '../../components/CTA/CTA';

export default function Careers() {
  const revealRefs = useRef([]);
  revealRefs.current = [];

  const [selectedRole, setSelectedRole] = useState('');

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

  const scrollToForm = (role = '') => {
    if (role) setSelectedRole(role);
    const formSection = document.getElementById('application-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const openPositions = [
    {
      title: 'Production Staff',
      location: 'Bathinda, Punjab',
      department: 'Manufacturing',
      type: 'Full-time'
    },
    {
      title: 'Machine Operator',
      location: 'Bathinda, Punjab',
      department: 'Production',
      type: 'Full-time'
    },
    {
      title: 'Quality Checker',
      location: 'Bathinda, Punjab',
      department: 'Quality',
      type: 'Full-time'
    },
    {
      title: 'Sales Executive',
      location: 'Bathinda, Punjab / Field',
      department: 'Sales',
      type: 'Full-time'
    },
    {
      title: 'Office / Admin Support',
      location: 'Bathinda, Punjab',
      department: 'Administration',
      type: 'Full-time'
    }
  ];

  return (
    <div className={styles.careersPage}>

      {/* 1. HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.wavyWires}>
          <svg viewBox="0 0 2880 400" preserveAspectRatio="none">
            <path className={styles.wirePath1} d="M0,200 Q360,100 720,200 T1440,200 T2160,200 T2880,200" />
            <path className={styles.wirePath2} d="M0,150 Q360,250 720,150 T1440,150 T2160,150 T2880,150" />
          </svg>
        </div>
        <div className={styles.heroContent}>
          <span className={`${styles.heroLabel} ${styles.reveal}`} ref={addToRefs}>CAREERS AT RAMROS</span>
          {[
            "Build",
            "Your Career",
            "With",
            "Ramros"
          ].map((line, index) => (
            <div
              key={index}
              className={`${styles.heroLine} ${styles.reveal}`}
              ref={addToRefs}
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

      {/* 2. WHY WORK WITH RAMROS + CULTURE */}
      <section className={styles.cultureSection}>
        <div className={styles.container}>
          <div className={styles.cultureSplit}>

            <div className={styles.cultureLeft}>
              <h2 className={`${styles.heading} ${styles.reveal}`} ref={addToRefs}>Why Work With Ramros</h2>
              <p className={`${styles.subtext} ${styles.reveal}`} ref={addToRefs} style={{ transitionDelay: '0.1s' }}>
                At Ramros Wire and Cable Industries, we are building a team focused on quality, responsibility, discipline, and long-term growth. Every role contributes to safe products, smooth operations, and customer trust.
              </p>
            </div>

            <div className={styles.cultureRight}>
              <div className={styles.cultureGrid}>
                {[
                  {
                    title: "Growth",
                    desc: "Learn, improve, and build your career in a growing manufacturing company.",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20V10" />
                        <path d="M18 20V4" />
                        <path d="M6 20v-4" />
                      </svg>
                    )
                  },
                  {
                    title: "Responsibility",
                    desc: "Work with a team that values discipline, consistency, and ownership.",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    )
                  },
                  {
                    title: "Quality",
                    desc: "Be part of a company focused on making safe and dependable wires and cables.",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="6"></circle>
                        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
                      </svg>
                    )
                  },
                  {
                    title: "Teamwork",
                    desc: "Grow in a work environment built on coordination, support, and clear communication.",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    )
                  }
                ].map((pillar, idx) => (
                  <div key={idx} className={`${styles.culturePillar} ${styles.reveal}`} ref={addToRefs} style={{ transitionDelay: `${0.1 * idx}s` }}>
                    <div className={styles.pillarIcon}>
                      {pillar.icon}
                    </div>
                    <h3 className={styles.pillarTitle}>
                      {pillar.title}
                    </h3>
                    <p className={styles.pillarDesc}>{pillar.desc}</p>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. OPEN POSITIONS */}
      <section className={styles.positionsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={`${styles.heading} ${styles.reveal}`} ref={addToRefs}>Open Positions</h2>
            <p className={`${styles.subtext} ${styles.reveal}`} ref={addToRefs} style={{ transitionDelay: '0.1s' }}>
              Explore current career opportunities at Ramros. If a role matches your skills, send us your details and our team will connect with you.
            </p>
          </div>

          <div className={styles.jobsList}>
            {openPositions.map((job, idx) => (
              <div key={idx} className={`${styles.jobRow} ${styles.reveal}`} ref={addToRefs} style={{ transitionDelay: `${0.1 * idx}s` }}>
                <div className={styles.jobInfo}>
                  <h3 className={styles.jobTitle}>{job.title}</h3>
                  <div className={styles.jobDetails}>
                    <span>{job.location}</span>
                    <span className={styles.detailSeparator}>•</span>
                    <span>{job.department}</span>
                    <span className={styles.detailSeparator}>•</span>
                    <span>{job.type}</span>
                  </div>
                </div>
                <div className={styles.jobAction}>
                  <button className={styles.applyBtn} onClick={() => scrollToForm(job.title)}>Apply Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. APPLICATION FORM */}
      <section id="application-form" className={styles.formSection}>
        <div className={styles.container}>
          <div className={styles.formSplit}>

            <div className={styles.formLeft}>
              <h2 className={`${styles.heading} ${styles.reveal}`} ref={addToRefs}>Apply for a Role</h2>
              <p className={`${styles.subtext} ${styles.reveal}`} ref={addToRefs} style={{ transitionDelay: '0.1s' }}>
                Share your details with us. Our team will review your application and contact you if there is a suitable opportunity.
              </p>
              <div className={`${styles.hiringNote} ${styles.reveal}`} ref={addToRefs} style={{ transitionDelay: '0.2s' }}>
                <strong>Note:</strong> You can also contact us directly for career enquiries at Ramros Wire and Cable Industries, Bathinda, Punjab.
              </div>
            </div>

            <div className={`${styles.formRight} ${styles.reveal}`} ref={addToRefs} style={{ transitionDelay: '0.2s' }}>
              <form className={styles.applicationForm} onSubmit={(e) => e.preventDefault()}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Full Name *</label>
                    <input type="text" placeholder="John Doe" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Phone Number *</label>
                    <input type="tel" placeholder="+91 98765 43210" required />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Email Address</label>
                    <input type="email" placeholder="john@example.com" />
                  </div>
                  <div className={styles.formGroup}>
                    <label>City / Location *</label>
                    <input type="text" placeholder="Bathinda" required />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Position Interested In *</label>
                    <select required value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)} className={styles.customSelect}>
                      <option value="" disabled>Select a role...</option>
                      {openPositions.map((job, idx) => (
                        <option key={idx} value={job.title}>{job.title}</option>
                      ))}
                      <option value="Other">Other / General Application</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label>Total Experience (Years)</label>
                    <input type="number" min="0" step="0.5" placeholder="e.g. 2.5" />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>Upload Resume / CV (Optional)</label>
                  <div className={styles.fileUpload}>
                    <input type="file" id="resume" className={styles.fileInput} />
                    <label htmlFor="resume" className={styles.fileLabel}>Choose File</label>
                    <span className={styles.fileText}>No file chosen (PDF, DOCX)</span>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>Message / Additional Details</label>
                  <textarea placeholder="Tell us briefly about your experience and why you want to join Ramros..." rows="4"></textarea>
                </div>

                <button type="submit" className={styles.submitBtn}>Submit Application</button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* 5. HIRING PROCESS */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <h2 className={`${styles.heading} ${styles.textCenter} ${styles.reveal}`} ref={addToRefs}>Our Hiring Process</h2>

          <div className={styles.processList}>
            {[
              { num: "01", title: "Apply", desc: "Send your details through the form." },
              { num: "02", title: "Review", desc: "Our team reviews your profile and experience." },
              { num: "03", title: "Discussion", desc: "Shortlisted candidates are contacted for further discussion." },
              { num: "04", title: "Join Ramros", desc: "Selected candidates join the team and begin their role." }
            ].map((step, idx) => (
              <div key={idx} className={`${styles.processStep} ${styles.reveal}`} ref={addToRefs} style={{ transitionDelay: `${0.1 * idx}s` }}>
                <span className={styles.stepNum}>{step.num}</span>
                <div className={styles.stepDivider}></div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA SECTION */}
      <CTA
        title="Ready to Build Your Career with Ramros?"
        primaryText="Apply Now"
        primaryLink="#application-form"
        secondaryText="Contact Us"
        secondaryLink="/contact"
        subtext="Apply today and become part of a growing wires and cables manufacturing company in Bathinda, Punjab."
      />
    </div>
  );
}
