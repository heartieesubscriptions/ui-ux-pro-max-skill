import { useState, useRef, useEffect, useCallback } from 'react';

const FRAME_RATE = 48;
const VIDEO_DURATION = 6;
const TOTAL_FRAMES = FRAME_RATE * VIDEO_DURATION;

export function useScrollVideo() {
  const canvasRef = useRef(null);
  const videoRef = useRef(null);
  const currentFrameRef = useRef(-1);
  const ctxRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    ctxRef.current = canvas.getContext('2d', { alpha: false });
    
    const handleLoadedData = () => {
      if (ctxRef.current) {
        ctxRef.current.drawImage(video, 0, 0);
        currentFrameRef.current = 0;
      }
    };

    video.addEventListener('loadeddata', handleLoadedData, { once: true });
    video.load();
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const ctx = ctxRef.current;
      
      if (!video || !canvas || !ctx) {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(handleScroll);
        }
        return;
      }

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      
      const scrollPercent = window.scrollY / docHeight;
      const frame = Math.min(
        Math.floor(scrollPercent * TOTAL_FRAMES),
        TOTAL_FRAMES - 1
      );
      
      if (frame === currentFrameRef.current) return;

      const duration = video.duration;
      if (!duration || duration === 0) return;

      const time = (frame / TOTAL_FRAMES) * duration;
      video.currentTime = time;
      
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      currentFrameRef.current = frame;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return {
    canvasRef,
    videoRef
  };
}