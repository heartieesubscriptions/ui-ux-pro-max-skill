import { Link } from 'react-router-dom';
import styles from './CTA.module.css';

export default function CTA({ 
  title = "Want to Know More About Ramros?", 
  subtext,
  primaryText = "Contact Us", 
  primaryLink = "/contact",
  secondaryText = "View Products",
  secondaryLink = "/products"
}) {
  const renderLink = (text, link, className) => {
    const isExternal = link.startsWith('http') || link.startsWith('tel:') || link.startsWith('mailto:');
    
    if (isExternal) {
      return (
        <a href={link} className={className}>
          {text}
        </a>
      );
    }
    
    return (
      <Link to={link} className={className}>
        {text}
      </Link>
    );
  };

  return (
    <section className={styles.finalCta}>
      <div className={styles.ctaContent}>
        <h2 className={styles.ctaHeading}>{title}</h2>
        {subtext && <p className={styles.ctaSubtext}>{subtext}</p>}
        <div className={styles.ctaButtons}>
          {renderLink(primaryText, primaryLink, styles.primaryBtn)}
          {renderLink(secondaryText, secondaryLink, styles.secondaryBtn)}
        </div>
      </div>
    </section>
  );
}
