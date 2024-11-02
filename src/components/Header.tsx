import { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { SocialLink } from './SocialLink';

export function Header() {
  const [emailVisible, setEmailVisible] = useState(false);

  return (
    <header className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80"
          alt="Mountain Background"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
      </div>
      <div className="relative z-10 text-center px-4">
        <img
          src="/profileimage.jpg"
          alt="Markus Hinkel"
          className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg border-4 border-white/20"
          loading="eager"
        />
        <h1 className="text-5xl font-bold text-white mb-4">Markus Hinkel</h1>
        <p className="text-xl text-gray-200 mb-8">
          Senior IT Systems Engineer & Full-Stack Developer
        </p>
        <div className="flex justify-center gap-4">
          <SocialLink
            href="https://github.com/markush97"
            icon={<Github className="w-6 h-6" />}
            label="GitHub Profile"
          />
          <SocialLink
            href="https://linkedin.com/in/markus-hinkel"
            icon={<Linkedin className="w-6 h-6" />}
            label="LinkedIn Profile"
          />
          <button
            onClick={() => setEmailVisible(true)}
            className="p-2 text-white/80 hover:text-white transition-colors"
            aria-label="Show Email"
          >
            <Mail className="w-6 h-6" />
          </button>
        </div>
        {emailVisible && (
          <p className="mt-4 text-white/90 bg-black/30 px-4 py-2 rounded-full inline-block">
            <a href="mailto:hello@markushinkel.com">hello@markushinkel.com</a>
          </p>
        )}
      </div>
    </header>
  );
}
