import styles from './TrustBand.module.css';

export default function TrustBand() {
  const items = [
    'TRUSTED BY 1000+ DEALERS',
    'ISI CERTIFIED',
    'ISO 9001:2015',
    'BIS APPROVED',
    'CE MARKED',
    'RoHS COMPLIANT',
    'CPRI TESTED',
    'NABL ACCREDITED',
  ];

  return (
    <section className={styles.band}>
      <div className={styles.marqueeTrack}>
        {[...Array(3)].map((_, setIdx) => (
          <div key={setIdx} className={styles.marqueeGroup}>
            {items.map((item, i) => (
              <span key={i} className={styles.item}>
                {item}
                <span className={styles.separator}>★</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
