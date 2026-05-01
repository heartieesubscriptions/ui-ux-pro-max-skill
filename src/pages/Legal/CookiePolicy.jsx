import LegalLayout from './LegalLayout';
import styles from './Legal.module.css';

export default function CookiePolicy() {
  return (
    <LegalLayout 
      title="Cookie Policy"
      intro="This Cookie Policy explains how cookies may be used on the Ramros Wire and Cable Industries website."
    >
      <div className={styles.legalSection}>
        <h2 className={styles.sectionHeading}>1. Introduction</h2>
        <p className={styles.sectionText}>
          Our website may use cookies to improve your browsing experience, understand website performance, and support basic website functionality.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2 className={styles.sectionHeading}>2. What Are Cookies</h2>
        <p className={styles.sectionText}>
          Cookies are small files stored on your device by a website. They help websites remember basic information and improve user experience.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2 className={styles.sectionHeading}>3. Cookies We Use</h2>
        <p className={styles.sectionText}>
          We may use essential cookies for website functionality, analytics cookies to understand visitor behavior, and performance cookies to improve website speed and usability.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2 className={styles.sectionHeading}>4. Analytics and Performance Cookies</h2>
        <p className={styles.sectionText}>
          Analytics tools may help us understand which pages users visit, how long they stay, and how the website can be improved.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2 className={styles.sectionHeading}>5. Managing Cookies</h2>
        <p className={styles.sectionText}>
          You can control or disable cookies through your browser settings. Some website features may not work properly if cookies are disabled.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2 className={styles.sectionHeading}>6. Changes to Cookie Policy</h2>
        <p className={styles.sectionText}>
          We may update this Cookie Policy from time to time. Updates will be posted on this page.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2 className={styles.sectionHeading}>7. Contact Information</h2>
        <p className={styles.sectionText}>
          For questions about this Cookie Policy, contact Ramros Wire and Cable Industries through the contact details provided on the website.
        </p>
      </div>
    </LegalLayout>
  );
}
