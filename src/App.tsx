import { Header } from './components/Header';
import { AboutSection } from './components/AboutSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { ProjectsSection } from './components/ProjectsSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-ink-950 text-slate-200">
      <Header />
      <main>
        <AboutSection />
        <ExpertiseSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}