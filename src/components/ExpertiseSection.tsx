import {
  Server,
  Code,
  Cloud,
  Shield,
  Network,
  Users,
} from 'lucide-react';
import { ExpertiseCard } from './ExpertiseCard';
import { Section } from './Section';

export function ExpertiseSection() {
  return (
    <Section
      backgroundImage="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80"
      backgroundOverlay="bg-white/95"
    >
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Areas of Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ExpertiseCard
          icon={<Users className="w-8 h-8" />}
          title="Team Leadership"
          description="Technical Team Lead and Account Manager with proven experience in driving successful IT initiatives"
        />
        <ExpertiseCard
          icon={<Server className="w-8 h-8" />}
          title="Systems Administration"
          description="Senior Windows & Active Directory expert with extensive experience in enterprise environments"
        />
        <ExpertiseCard
          icon={<Code className="w-8 h-8" />}
          title="Full-Stack Development"
          description="Building modern web applications with cutting-edge technologies"
        />
        <ExpertiseCard
          icon={<Cloud className="w-8 h-8" />}
          title="Cloud Solutions"
          description="Azure specialist focusing on scalable and reliable cloud infrastructure"
        />
        <ExpertiseCard
          icon={<Shield className="w-8 h-8" />}
          title="Virtualization"
          description="Proficient in Proxmox, vCenter, and Hyper-V environments"
        />
        <ExpertiseCard
          icon={<Network className="w-8 h-8" />}
          title="Network Infrastructure"
          description="Design and implementation of robust network solutions"
        />
      </div>
    </Section>
  );
}