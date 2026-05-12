import { Section } from './Section';

const HIGHLIGHTS = [
  { value: '10+', label: 'Years in IT' },
  { value: '50+', label: 'Projects delivered' },
  { value: '∞', label: 'Cups of coffee' },
];

export function AboutSection() {
  return (
    <Section id="about" variant="darker">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-7">
          <span className="section-eyebrow">
            <span className="h-px w-6 bg-brand-400" />
            About
          </span>
          <h2 className="section-title mt-3">
            Bridging operations and engineering.
          </h2>
          <div className="mt-6 space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed">
            <p>
              I'm Markus — an IT generalist who fell for the craft of software.
              For over a decade I've worked at the intersection of systems
              engineering and software development, helping companies run
              reliable infrastructure and build the tools their teams actually
              enjoy using.
            </p>
            <p>
              Under the{' '}
              <span className="text-white font-medium">MHI-IT</span> banner I
              design and build enterprise platforms, automate the boring parts
              of IT operations, and ship modern web applications — from a
              digital pathology suite to a national news platform and an MSP
              automation toolkit used in daily production.
            </p>
            <p>
              I care deeply about pragmatism, developer experience and
              long-term maintainability. KISS over cleverness, always.
            </p>
          </div>
        </div>

        <aside className="lg:col-span-5 lg:sticky lg:top-24">
          <div className="card-surface p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <img
                src="/mhi-it-logo.png"
                alt="MHI-IT"
                className="h-10 w-10 object-contain"
              />
              <div>
                <p className="font-display font-semibold text-white">MHI-IT</p>
                <p className="text-xs text-slate-400 font-mono uppercase tracking-widest">
                  Engineering · Consulting
                </p>
              </div>
            </div>

            <dl className="mt-6 grid grid-cols-3 gap-4">
              {HIGHLIGHTS.map((h) => (
                <div
                  key={h.label}
                  className="text-center rounded-xl border border-white/10 bg-white/5 px-2 py-4"
                >
                  <dt className="font-display text-2xl font-bold text-white">
                    {h.value}
                  </dt>
                  <dd className="mt-1 text-[11px] uppercase tracking-wider text-slate-400">
                    {h.label}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-400">Based in</span>
                <span className="text-white">Vienna, Austria</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-400">Focus</span>
                <span className="text-white">
                  Cloud · Full-Stack · Automation
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Languages</span>
                <span className="text-white">German · English</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </Section>
  );
}
