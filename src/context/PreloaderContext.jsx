import { createContext, useContext, useState, useEffect } from 'react';

const PreloaderContext = createContext();

export function PreloaderProvider({ children }) {
  const [isActive, setIsActive] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  const triggerPreloader = () => {
    setIsActive(true);
    setIsExiting(false);

    // Auto exit after animation duration
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        setIsActive(false);
      }, 800);
    }, 1000);

    return () => clearTimeout(timer);
  };

  // Initial load effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        setIsActive(false);
      }, 800);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <PreloaderContext.Provider value={{ isActive, isExiting, triggerPreloader }}>
      {children}
    </PreloaderContext.Provider>
  );
}

export const usePreloader = () => useContext(PreloaderContext);
