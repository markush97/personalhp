import { type ReactNode } from 'react';

interface ExpertiseCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function ExpertiseCard({ icon, title, description }: ExpertiseCardProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
      <div className="text-emerald-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}