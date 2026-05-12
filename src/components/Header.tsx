import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, MapPin, ArrowDown } from 'lucide-react';
import { SocialLink } from './SocialLink';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  const [emailVisible, setEmailVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Navigation */}
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-ink-950/80 backdrop-blur-md border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
        <div className="container-wide flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5 group">
            <img
              src="/mhi-it-logo.png"
              alt="MHI-IT"
              className="h-8 w-8 object-contain drop-shadow-[0_0_12px_rgba(49,155,255,0.35)] transition-transform group-hover:scale-105"
            />
            <span className="font-display font-semibold tracking-tight text-white">
              MHI<span className="text-brand-400">-</span>IT
            </span>
          </a>
          <ul className="hidden md:flex items-center gap-7 text-sm">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://github.com/markush97"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 text-sm text-slate-200 hover:bg-white/10 hover:border-white/25 transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header
        id="top"
        className="relative isolate overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32"
      >
        {/* Background layers */}
        <div className="absolute inset-0 -z-10 bg-ink-950" />
        <div className="absolute inset-0 -z-10 bg-radial-glow" />
        <div className="absolute inset-0 -z-10 bg-grid-pattern bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
        <div
          aria-hidden
          className="absolute -top-24 left-1/2 -z-10 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-brand-600/20 blur-3xl animate-pulse-slow"
        />

        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Available for select engagements
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05]">
                <span className="text-white">Hi, I'm </span>
                <span className="text-gradient">Markus Hinkel</span>
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
                Senior IT Systems Engineer & Full-Stack Developer building
                enterprise platforms, cloud infrastructure, and
                developer-focused tooling.
              </p>

              <div className="mt-4 flex items-center gap-2 text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-brand-400" />
                Vienna, Austria
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-500 hover:bg-brand-400 text-white px-5 py-2.5 text-sm font-medium shadow-lg shadow-brand-900/40 transition-colors"
                >
                  View projects
                  <ArrowDown className="w-4 h-4" />
                </a>
                <button
                  onClick={() => setEmailVisible(true)}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white px-5 py-2.5 text-sm font-medium transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {emailVisible ? 'hello@markushinkel.com' : 'Get in touch'}
                </button>
              </div>

              <div className="mt-8 flex items-center gap-2">
                <SocialLink
                  href="https://github.com/markush97"
                  icon={<Github className="w-5 h-5" />}
                  label="GitHub Profile"
                />
                <SocialLink
                  href="https://linkedin.com/in/markus-hinkel"
                  icon={<Linkedin className="w-5 h-5" />}
                  label="LinkedIn Profile"
                />
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-in-up [animation-delay:120ms]">
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-brand-500/30 via-brand-400/10 to-transparent blur-2xl" />
                <div className="relative rounded-full p-1 bg-gradient-to-br from-brand-400/60 via-brand-700/40 to-white/10">
                  <img
                    src="/profileimage.jpg"
                    alt="Markus Hinkel"
                    className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full object-cover bg-ink-800"
                    loading="eager"
                  />
                </div>
                {/* Floating MHI-IT brand badge */}
                <div className="absolute -bottom-3 -right-3 sm:-right-4 flex items-center gap-2 rounded-full border border-white/10 bg-ink-900/90 backdrop-blur px-3 py-2 shadow-xl shadow-black/40">
                  <img
                    src="/mhi-it-logo.png"
                    alt=""
                    className="h-6 w-6 object-contain"
                  />
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-200">
                    MHI-IT
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Tech ticker */}
          <div className="mt-16 lg:mt-20 border-y border-white/10 py-5">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-sm font-mono uppercase tracking-widest text-slate-400">
              {[
                'TypeScript',
                'React',
                'Node.js',
                'NestJS',
                'Azure',
                'Active Directory',
                'Proxmox',
                'PostgreSQL',
              ].map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
