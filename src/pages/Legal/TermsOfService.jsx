import LegalLayout from './LegalLayout';
import styles from './Legal.module.css';

export default function TermsOfService() {
  return (
    <LegalLayout 
      title="Terms of Service"
      intro="These Terms of Service explain the basic rules for using the Ramros Wire and Cable Industries website."
    >
      <div className={styles.legalSection}>
        <h2 className={styles.sectionHeading}>1. Introduction</h2>
        <p className={styles.sectionText}>
          By using this website, you agree to these Terms of Service. If you do not agree, please avoid using the website.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2 className={styles.sectionHeading}>2. Use of Website</h2>
        <p className={styles.sectionText}>
          This website is provided for general information about Ramros Wire and Cable Industries, our products, services, quality standards, and business enquiries.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2 className={styles.sectionHeading}>3. Product Information</h2>
        <p className={styles.sectionText}>
          Product names, categories, images, sizes, specifications, and descriptions are provided for general understanding. Actual product details may vary and should be confirmed before placing an order or enquiry.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2 className={styles.sectionHeading}>4. Enquiries and Quotations</h2>
        <p className={styles.sectionText}>
          Submitting an enquiry does not create a confirmed order. Product availability, pricing, delivery, dealership, and bulk supply details will be confirmed through direct communication.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2 className={styles.sectionHeading}>5. Intellectual Property</h2>
        <p className={styles.sectionText}>
          All website content, including text, images, logos, graphics, product visuals, and design elements, belongs to Ramros Wire and Cable Industries unless otherwise stated.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2 className={styles.sectionHeading}>6. Third-Party Links</h2>
        <p className={styles.sectionText}>
          The website may include links to third-party platforms or services. Ramros is not responsible for the content, policies, or practices of external websites.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2 className={styles.sectionHeading}>7. Limitation of Liability</h2>
        <p className={styles.sectionText}>
          Ramros Wire and Cable Industries is not responsible for any loss or damage caused by misuse of website information, outdated information, technical issues, or third-party links.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2 className={styles.sectionHeading}>8. Changes to Terms</h2>
        <p className={styles.sectionText}>
          We may update these Terms of Service from time to time. Continued use of the website means you accept the updated terms.
        </p>
      </div>

      <div className={styles.legalSection}>
        <h2 className={styles.sectionHeading}>9. Contact Information</h2>
        <p className={styles.sectionText}>
          For questions about these terms, contact Ramros Wire and Cable Industries through the contact details provided on the website.
        </p>
      </div>
    </LegalLayout>
  );
}
