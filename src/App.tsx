import { Header } from './components/Header';
import { ExpertiseSection } from './components/ExpertiseSection';
import { ProjectsSection } from './components/ProjectsSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <ExpertiseSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}