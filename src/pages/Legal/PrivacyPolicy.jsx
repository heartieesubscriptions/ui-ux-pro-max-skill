import LegalLayout from './LegalLayout';
import styles from './Legal.module.css';

export default function PrivacyPolicy() {
  return (
    <LegalLayout 
      title="Privacy Policy"
      intro="This Privacy Policy explains how Ramros Wire and Cable Industries collects, uses, and protects information shared through this website."
    >
      <div className={styles.legalSection}>
        <h2 className={styles.sectionHeading}>1. Introduction</h2>
        <p className={styles.sectionText}>
          Ramros Wire and Cable Industries respects your privacy. This page explains what information we may collect when you visit our website or contact us through enquiry forms.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2 className={styles.sectionHeading}>2. Information We Collect</h2>
        <p className={styles.sectionText}>
          We may collect basic information such as your name, phone number, email address, city, company name, and enquiry details when you submit a form or contact us.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2 className={styles.sectionHeading}>3. How We Use Your Information</h2>
        <p className={styles.sectionText}>
          We use your information to respond to enquiries, provide product details, share quotations, support dealership or bulk requirements, and improve our website experience.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2 className={styles.sectionHeading}>4. Enquiry Forms and Contact Details</h2>
        <p className={styles.sectionText}>
          Information submitted through contact, product enquiry, dealership enquiry, or career forms is used only to communicate with you regarding your request.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2 className={styles.sectionHeading}>5. Cookies and Analytics</h2>
        <p className={styles.sectionText}>
          Our website may use cookies or analytics tools to understand website traffic, improve performance, and enhance user experience.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2 className={styles.sectionHeading}>6. Data Sharing</h2>
        <p className={styles.sectionText}>
          We do not sell your personal information. We may share limited information only when required for business communication, legal compliance, or service support.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2 className={styles.sectionHeading}>7. Data Security</h2>
        <p className={styles.sectionText}>
          We take reasonable steps to protect the information shared with us, but no online method is completely secure.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2 className={styles.sectionHeading}>8. Your Rights</h2>
        <p className={styles.sectionText}>
          You may contact us to request correction, update, or removal of your personal information where applicable.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2 className={styles.sectionHeading}>9. Policy Updates</h2>
        <p className={styles.sectionText}>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2 className={styles.sectionHeading}>10. Contact Information</h2>
        <p className={styles.sectionText}>
          For privacy-related questions, contact Ramros Wire and Cable Industries at the contact details provided on the website.
        </p>
      </div>
    </LegalLayout>
  );
}
