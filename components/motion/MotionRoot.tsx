'use client';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Lenis from 'lenis';
gsap.registerPlugin(ScrollTrigger, useGSAP);

export function MotionRoot({ children }: { children: React.ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add({ desktop: '(min-width: 900px) and (pointer: fine)', reduced: '(prefers-reduced-motion: reduce)' }, (context) => {
      if (context.conditions?.reduced) return;
      let lenis: Lenis | undefined;
      let tick: ((time: number) => void) | undefined;
      if (context.conditions?.desktop) {
        lenis = new Lenis({ duration: 1.05, smoothWheel: true, syncTouch: false, anchors: { offset: -24 } });
        lenis.on('scroll', ScrollTrigger.update);
        tick = (time) => lenis?.raf(time * 1000);
        gsap.ticker.add(tick);
        gsap.ticker.lagSmoothing(0);
        gsap.from('.name-line > span', { yPercent: 105, duration: 1.05, stagger: 0.11, ease: 'power3.out' });
      }
      return () => {
        if (tick) gsap.ticker.remove(tick);
        lenis?.off('scroll', ScrollTrigger.update);
        lenis?.destroy();
        if (tick) gsap.ticker.lagSmoothing(500, 33);
      };
    }, scope);
    // Font loading and expanding native notes can change document geometry.
    let alive = true;
    const refresh = () => { if (alive) ScrollTrigger.refresh(); };
    void document.fonts.ready.then(refresh);
    const notes = scope.current?.querySelectorAll('details');
    notes?.forEach((note) => note.addEventListener('toggle', refresh));
    return () => {
      alive = false;
      notes?.forEach((note) => note.removeEventListener('toggle', refresh));
      media.revert();
    };
  }, { scope });
  return <div ref={scope}>{children}</div>;
}
