import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    // Check if touch device or prefers reduced motion
    const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isTouch || prefersReducedMotion) return;

    document.body.classList.add('has-custom-cursor');

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.1, ease: 'power3.out' });
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.1, ease: 'power3.out' });

    const fXTo = gsap.quickTo(follower, 'x', { duration: 0.35, ease: 'power3.out' });
    const fYTo = gsap.quickTo(follower, 'y', { duration: 0.35, ease: 'power3.out' });

    const onMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
      fXTo(e.clientX);
      fYTo(e.clientY);
    };

    window.addEventListener('mousemove', onMouseMove);

    // Hover state on links & buttons
    const handleMouseEnter = () => {
      gsap.to(cursor, { scale: 0, duration: 0.2 });
      gsap.to(follower, { scale: 1.8, backgroundColor: 'rgba(56, 189, 248, 0.25)', borderColor: '#38bdf8', duration: 0.25 });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, { scale: 1, duration: 0.2 });
      gsap.to(follower, { scale: 1, backgroundColor: 'transparent', borderColor: 'rgba(255, 255, 255, 0.3)', duration: 0.25 });
    };

    const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"], [data-magnetic]');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Handle dynamically mounted elements
    const observer = new MutationObserver(() => {
      const updatedElements = document.querySelectorAll('a, button, input, textarea, [role="button"], [data-magnetic]');
      updatedElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', onMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-cyan-400 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/30 dark:border-white/30 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-colors hidden md:block backdrop-blur-[1px]"
      />
    </>
  );
}
