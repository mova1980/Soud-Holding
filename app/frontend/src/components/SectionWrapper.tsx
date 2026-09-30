import { useEffect, useRef, ReactNode } from 'react';

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function SectionWrapper({ id, children, className = '' }: SectionWrapperProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // The entrance is decorative only: every `.reveal` element stays at full
    // opacity in the markup, and we merely add a short staggered animation.
    // This guarantees the section is never blank — no scroll observer, no
    // hidden start state, no dependency on when the page is captured.
    const reveals = Array.from(section.querySelectorAll<HTMLElement>('.reveal'));

    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    reveals.forEach((el, index) => {
      el.style.animationDelay = `${Math.min(index * 80, 320)}ms`;
      el.classList.add('reveal-in');
    });
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`relative py-20 md:py-28 overflow-hidden ${className}`}
    >
      {children}
    </section>
  );
}
