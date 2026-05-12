import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      id="contact"
      className="relative isolate overflow-hidden bg-ink-950 border-t border-white/10"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-grid-pattern bg-[size:48px_48px] opacity-30 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]"
      />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -z-10 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-brand-700/15 blur-3xl"
      />

      <div className="container-wide py-20 sm:py-24">
        <div className="max-w-3xl">
          <span className="section-eyebrow">
            <span className="h-px w-6 bg-brand-400" />
            Get in touch
          </span>
          <h2 className="section-title mt-3">
            Let's build something{' '}
            <span className="text-gradient">remarkable</span>.
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            Open to freelance engagements, technical advisory and interesting
            problems. The fastest way to reach me is email.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="mailto:hello@markushinkel.com"
              className="inline-flex items-center gap-2 rounded-full bg-brand-500 hover:bg-brand-400 text-white px-5 py-2.5 text-sm font-medium shadow-lg shadow-brand-900/40 transition-colors"
            >
              <Mail className="w-4 h-4" />
              hello@markushinkel.com
            </a>
            <a
              href="https://linkedin.com/in/markus-hinkel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white px-5 py-2.5 text-sm font-medium transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="https://github.com/markush97"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white px-5 py-2.5 text-sm font-medium transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/mhi-it-logo.png"
              alt="MHI-IT"
              className="h-8 w-8 object-contain"
            />
            <div className="text-sm">
              <p className="text-white font-medium">Markus Hinkel</p>
              <p className="text-slate-500 inline-flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                Vienna, Austria
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-500">
            © {year} Markus Hinkel · MHI-IT · All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}