import { type ReactNode } from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  githubLink?: string;
  icon?: ReactNode | string;
  role?: string;
  year?: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  link,
  githubLink,
  icon,
  role,
  year,
}: ProjectCardProps) {
  return (
    <article className="card-surface group p-6 sm:p-8">
      <div className="absolute inset-x-6 -top-px h-px bg-gradient-to-r from-transparent via-brand-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="flex flex-col sm:flex-row gap-6">
        {icon && (
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/5 border border-white/10 p-3 group-hover:border-brand-400/40 transition-colors">
              {typeof icon === 'string' ? (
                <img
                  src={icon}
                  alt=""
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-brand-300">
                  {icon}
                </div>
              )}
            </div>
          </div>
        )}

        <div className="flex-grow min-w-0">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-white">
                {link ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-brand-300 transition-colors"
                  >
                    {title}
                    <ExternalLink className="w-4 h-4 text-brand-400 opacity-70 group-hover:opacity-100" />
                  </a>
                ) : (
                  title
                )}
              </h3>
              {(role || year) && (
                <p className="mt-1 text-xs font-mono uppercase tracking-widest text-slate-500">
                  {[role, year].filter(Boolean).join(' · ')}
                </p>
              )}
            </div>
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white border border-white/10 hover:border-white/25 bg-white/5 hover:bg-white/10 rounded-full px-3 py-1.5 transition-colors"
                aria-label={`${title} repository`}
              >
                <Github className="w-3.5 h-3.5" />
                Source
              </a>
            )}
          </div>

          <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-300">
            {description}
          </p>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium text-brand-200 bg-brand-500/10 border border-brand-500/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}