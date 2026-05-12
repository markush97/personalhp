import { Microscope, HardDrive, FileCheck } from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import { Section } from './Section';
import { SavedateIcon } from './icons/SavedateIcon';

export function ProjectsSection() {
  return (
    <Section id="projects" variant="darker">
      <div className="max-w-3xl mb-14 sm:mb-16">
        <span className="section-eyebrow">
          <span className="h-px w-6 bg-brand-400" />
          Selected work
        </span>
        <h2 className="section-title mt-3">Featured projects</h2>
        <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
          A curated selection of platforms, tools and open-source contributions
          I've shipped — spanning digital pathology, MSP automation, news media
          and developer experience.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:gap-6">
        <ProjectCard
          title="Patholux"
          role="Founding Engineer"
          year="2023 — present"
          description="Modern digital pathology platform unifying LIS, whole-slide management, a high-performance browser-based slide viewer, billing and AI-assisted analysis into a single coherent product — eliminating fragmentation in the diagnostic value chain."
          tags={[
            'WebGL',
            'Medical Imaging',
            'Bun',
            'TypeScript',
            'Monorepo',
            'AI',
          ]}
          link="https://patholux.com"
          githubLink="https://github.com/patholux"
          icon="/patholux.png"
        />
        <ProjectCard
          title="Enterprise Deployment Suite (EDS)"
          role="Lead Engineer"
          year="2022 — present"
          description="Internal MSP platform unifying device & ISO management, imaging pipelines, on-call scheduling, time tracking, ticket automation and certificate tooling. Deep integrations with NinjaRMM, Zoho, Absence.io, ITGlue, Microsoft Entra ID and Azure OpenAI."
          tags={[
            'NestJS',
            'React',
            'Turborepo',
            'Azure',
            'NinjaRMM',
            'Zoho',
            'PostgreSQL',
          ]}
          githubLink="https://github.com/cwi-eds/eds"
          icon={<HardDrive className="w-8 h-8" />}
        />
        <ProjectCard
          title="Zoho Desk Companion"
          role="Creator"
          year="2023"
          description="Enhanced agent dashboard for Zoho Desk that streamlines support operations with real-time customer insights, device status monitoring and daily event tracking. Built for multi-screen setups with auto-refresh for always-current information."
          tags={[
            'Help Desk',
            'Real-time Dashboard',
            'API Integration',
            'Enterprise Tools',
          ]}
          githubLink="https://github.com/markush97/zoho-desk-companion"
          icon="/zoho.png"
        />
        <ProjectCard
          title="savedate.io"
          role="Co-Founder & Engineer"
          year="2021 — 2023"
          description="Events-in-bio tool for event organizers. Create visually appealing, decentralized event representations to reach more people and sell more tickets — with analytics to deepen target group understanding."
          tags={[
            'Events Platform',
            'Analytics',
            'Angular',
            'Microservices',
            'TypeScript',
          ]}
          link="https://savedate.io"
          githubLink="https://github.com/savedateio"
          icon={<SavedateIcon className="w-8 h-8 text-brand-300" />}
        />
        <ProjectCard
          title="Ballot Recognition System"
          role="Computer Vision Researcher"
          year="2020"
          description="Prototype system for automated ballot recognition using advanced image processing. Implements computer vision algorithms in MATLAB to accurately detect and analyze voting marks on ballot papers."
          tags={[
            'Computer Vision',
            'MATLAB',
            'Image Processing',
            'Pattern Recognition',
          ]}
          githubLink="https://github.com/michaelkhuber/tuw-edbv-w20-ballot-recognizer"
          icon={<FileCheck className="w-8 h-8" />}
        />
        <ProjectCard
          title="Microscopy R&D"
          role="Researcher"
          year="2019 — 2021"
          description="Research and prototyping around whole-slide imaging — fast tile streaming, WebGL panning and zooming, and annotation tooling for collaborative review of microscopy datasets in the browser."
          tags={['WebGL', 'OpenSlide', 'Canvas API', 'Performance']}
          icon={<Microscope className="w-8 h-8" />}
        />
      </div>
    </Section>
  );
}