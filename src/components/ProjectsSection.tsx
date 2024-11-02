import { Github, Microscope, HardDrive, FileCheck, LayoutDashboard } from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import { Section } from './Section';
import { SavedateIcon } from './icons/SavedateIcon';

export function ProjectsSection() {
  return (
    <Section
      backgroundImage="https://images.unsplash.com/photo-1439853949127-fa647821eba0?auto=format&fit=crop&q=80"
      backgroundOverlay="bg-gray-900/95"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-4">Featured Projects</h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          A selection of my recent work and contributions to open-source projects
        </p>
        <div className="grid grid-cols-1 gap-8">
          <ProjectCard
            title="Zoho Desk Companion"
            description="Enhanced agent dashboard for Zoho Desk that streamlines support operations. Features real-time customer insights, device status monitoring, and daily event tracking. Designed for multi-screen setups with auto-refresh capabilities for up-to-date information delivery."
            tags={['Help Desk', 'Real-time Dashboard', 'API Integration', 'Customer Support', 'Enterprise Tools']}
            githubLink="https://github.com/markush97/zoho-desk-companion"
            icon="/zoho.png"
          />
          <ProjectCard
            title="Enterprise Deployment Suite"
            description="Advanced imaging and deployment solution for MSPs. Features automated multi-client device imaging, VPN-integrated domain joins, and Veeam backup integration. Streamlines device management with an intuitive web interface for efficient fleet deployment."
            tags={['Device Management', 'MSP Solutions', 'Veeam Integration', 'Automation', 'Enterprise Tools']}
            githubLink="https://github.com/markush97/Enterprise-Deployment-Suite"
            icon={<HardDrive className="w-12 h-12 text-emerald-300" />}
          />
          <ProjectCard
            title="savedate.io"
            description="Events-in-bio tool for event organizers. Create visually appealing, decentralized event representations to reach more people and sell more tickets. Features analytics and optimizations to improve target group understanding."
            tags={['Events Platform', 'Analytics', 'Marketing Tools', 'Angular', 'Microservices', 'TypeScript']}
            link="https://savedate.io"
            githubLink="https://github.com/savedateio"
            icon={<SavedateIcon className="w-12 h-12 text-emerald-300" />}
          />
          <ProjectCard
            title="Patholux"
            description="High-performance whole-slide imaging software enabling fast display, panning, and zooming of microscopy slides directly in the web browser. Advanced features include annotation tools and collaborative viewing capabilities."
            tags={['WebGL', 'Medical Imaging', 'Performance Optimization', 'OpenSlide', 'Canvas API']}
            link="https://patholux.com"
            githubLink="https://github.com/patholux"
            icon="/patholux.png"
          />
          <ProjectCard
            title="Ballot Recognition System"
            description="Prototype system for automated ballot recognition using advanced image processing techniques. Implements computer vision algorithms in MATLAB to accurately detect and analyze voting marks on ballot papers."
            tags={['Computer Vision', 'MATLAB', 'Image Processing', 'Pattern Recognition', 'Automation']}
            githubLink="https://github.com/michaelkhuber/tuw-edbv-w20-ballot-recognizer"
            icon={<FileCheck className="w-12 h-12 text-emerald-300" />}
          />
        </div>
      </div>
    </Section>
  );
}