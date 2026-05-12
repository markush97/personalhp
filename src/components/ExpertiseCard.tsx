import { type ReactNode } from 'react';

interface ExpertiseCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function ExpertiseCard({ icon, title, description }: ExpertiseCardProps) {
  return (
    <div className="card-surface group p-6 sm:p-7">
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-300 group-hover:bg-brand-500/15 group-hover:text-brand-200 transition-colors">
        {icon}
      </div>
      <h3 className="mt-5 font-display text-lg font-semibold text-white">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">
        {description}
      </p>
    </div>
  );
}