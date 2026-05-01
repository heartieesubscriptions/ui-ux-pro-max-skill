import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './CustomCursor.module.css';

export default function CustomCursor() {
  const location = useLocation();
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  
  const [isHovering, setIsHovering] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
    const updateMousePos = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isLinkOrButton = target.tagName === 'A' || 
                             target.tagName === 'BUTTON' || 
                             target.tagName === 'SELECT' ||
                             target.tagName === 'INPUT' ||
                             target.tagName === 'TEXTAREA' ||
                             target.closest('button') || 
                             target.closest('a');
      setIsHovering(!!isLinkOrButton);
    };

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);

    window.addEventListener('mousemove', updateMousePos);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    const animate = () => {
      // Smooth interpolation for the ring
      const ease = 0.15;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ease;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ease;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', updateMousePos);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className={`${styles.cursorDot} ${isMouseDown ? styles.active : ''}`}
      />
      <div
        ref={ringRef}
        className={`${styles.cursorRing} ${isHovering ? styles.hovering : ''} ${isMouseDown ? styles.active : ''}`}
      >
        <div className={`${styles.textWrapper} ${isHovering || location.pathname !== '/' ? styles.hide : ''}`}>
          <svg viewBox="0 0 100 100">
            <path
              id="textPath"
              d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
              fill="none"
            />
            <text>
              <textPath href="#textPath" className={styles.cursorText}>
                SCROLL DOWN • SCROLL DOWN • SCROLL DOWN •
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </>
  );
}


