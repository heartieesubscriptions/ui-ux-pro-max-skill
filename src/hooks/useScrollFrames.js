import { useEffect, useRef, useMemo, useState } from 'react';

const FRAME_COUNT = 202;

function getFrameUrl(index) {
  const frameNum = String(index + 1).padStart(3, '0');
  return `/png sequence/ezgif-frame-${frameNum}.png`;
}

export function useScrollFrames(containerRef) {
  const imagesRef = useRef([]);
  const currentFrameRef = useRef(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const frameUrls = useMemo(() => {
    return Array.from({ length: FRAME_COUNT }, (_, i) => getFrameUrl(i));
  }, []);

  useEffect(() => {
    const preloadImages = async () => {
      const loadImage = (url) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => resolve(img);
          img.onerror = () => resolve(null);
          img.src = url;
        });
      };

      const images = await Promise.all(frameUrls.map(loadImage));
      imagesRef.current = images;
      setIsLoaded(true);
    };

    preloadImages();
  }, [frameUrls]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        let scrollPercent = 0;
        
        if (containerRef?.current) {
          const rect = containerRef.current.getBoundingClientRect();
          const scrollDistance = -rect.top;
          const totalHeight = rect.height - window.innerHeight;
          scrollPercent = Math.max(0, Math.min(1, scrollDistance / totalHeight));
        } else {
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (docHeight > 0) {
            scrollPercent = window.scrollY / docHeight;
          }
        }

        const frame = Math.min(
          Math.floor(scrollPercent * FRAME_COUNT),
          FRAME_COUNT - 1
        );

        currentFrameRef.current = frame;
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [containerRef]);

  return {
    imagesRef,
    currentFrameRef,
    isLoaded,
    FRAME_COUNT
  };
}