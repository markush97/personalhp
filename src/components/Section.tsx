import { type ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  backgroundImage: string;
  backgroundOverlay: string;
}

export function Section({ children, backgroundImage, backgroundOverlay }: SectionProps) {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Section Background"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className={`absolute inset-0 ${backgroundOverlay}`} />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        {children}
      </div>
    </section>
  );
}