import { type ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  id?: string;
  variant?: 'dark' | 'darker';
  className?: string;
}

export function Section({
  children,
  id,
  variant = 'dark',
  className = '',
}: SectionProps) {
  const bg = variant === 'darker' ? 'bg-ink-950' : 'bg-ink-900';
  return (
    <section
      id={id}
      className={`relative isolate overflow-hidden py-20 sm:py-24 lg:py-28 ${bg} ${className}`}
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-grid-pattern bg-[size:48px_48px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]"
      />
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -z-10 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-brand-700/10 blur-3xl"
      />
      <div className="container-wide">{children}</div>
    </section>
  );
}