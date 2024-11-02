import { type ReactNode } from 'react';
import { Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  githubLink?: string;
  icon?: ReactNode | string;
}

export function ProjectCard({ title, description, tags, link, githubLink, icon }: ProjectCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300 border border-white/20 group">
      <div className="p-8">
        <div className="flex items-start gap-6">
          {icon && (
            <div className="flex-shrink-0 bg-white/10 rounded-lg p-4 w-20 h-20">
              {typeof icon === 'string' ? (
                <img src={icon} alt="" className="w-full h-full object-contain" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-emerald-300">
                  {icon}
                </div>
              )}
            </div>
          )}
          <div className="flex-grow min-w-0">
            <div className="flex items-center justify-between gap-4 mb-3">
              <h3 className="text-2xl font-bold text-white truncate">
                {link ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-300 transition-colors inline-flex items-center gap-2 group-hover:gap-3 duration-300"
                  >
                    {title}
                    <span className="text-emerald-400 text-xl">↗</span>
                  </a>
                ) : (
                  title
                )}
              </h3>
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                  aria-label={`${title} GitHub repository`}
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
            </div>
            <p className="text-gray-300 mb-6 line-clamp-3">{description}</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-emerald-500/10 text-emerald-300 text-sm rounded-full border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}