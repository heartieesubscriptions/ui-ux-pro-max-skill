import { usePreloader } from '../../context/PreloaderContext';
import styles from './Preloader.module.css';
import logoGif from '../../assets/logo-animation.gif';

export default function Preloader() {
  const { isActive, isExiting } = usePreloader();

  if (!isActive) return null;

  return (
    <div className={`${styles.preloader} ${isExiting ? styles.exit : ''}`}>
      <div className={styles.content}>
        <div className={styles.logoWrapper}>
          <img src={logoGif} alt="Ramros Logo" className={styles.logo} />

        </div>
        <div className={styles.brandName}>
          {['R', 'A', 'M', 'R', 'O', 'S', ' ', 'W', 'I', 'R', 'E', 'S', ' ', '&', ' ', 'C', 'A', 'B', 'L', 'E', 'S'].map((char, index) => (
            <span key={index} className={char === ' ' ? styles.space : styles.letter} style={{ animationDelay: `${0.1 + index * 0.05}s` }}>
              {char}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
