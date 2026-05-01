import LegalLayout from './LegalLayout';
import styles from './Legal.module.css';

export default function Disclaimer() {
  return (
    <LegalLayout 
      title="Disclaimer"
      intro="This Disclaimer explains the limitations of information shown on the Ramros Wire and Cable Industries website."
    >
      <div className={styles.legalSection}>
        <h2 className={styles.sectionHeading}>1. General Information</h2>
        <p className={styles.sectionText}>
          The information on this website is provided for general product and company understanding. We aim to keep information accurate and updated, but we do not guarantee that all details are always complete or current.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2 className={styles.sectionHeading}>2. Product Images and Specifications</h2>
        <p className={styles.sectionText}>
          Product images, packaging visuals, sizes, technical details, and specifications shown on the website are for reference only. Actual products may vary.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2 className={styles.sectionHeading}>3. Availability and Pricing</h2>
        <p className={styles.sectionText}>
          Product availability, pricing, dealership details, and bulk supply terms may change and should be confirmed directly with Ramros before making any purchase or business decision.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2 className={styles.sectionHeading}>4. Certification and Compliance Information</h2>
        <p className={styles.sectionText}>
          Certification, approval, and compliance details are shared for information and trust-building purposes. Product-specific certification applicability should be confirmed before purchase or project use.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2 className={styles.sectionHeading}>5. External Links</h2>
        <p className={styles.sectionText}>
          The website may contain links to external websites or platforms. Ramros Wire and Cable Industries is not responsible for external content or third-party practices.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2 className={styles.sectionHeading}>6. Contact Information</h2>
        <p className={styles.sectionText}>
          For product confirmation, quotations, availability, or compliance details, please contact Ramros Wire and Cable Industries directly.
        </p>
      </div>
    </LegalLayout>
  );
}
