import {
  Server,
  Code,
  Cloud,
  Shield,
  Network,
  Users,
  Database,
  Cpu,
} from 'lucide-react';
import { ExpertiseCard } from './ExpertiseCard';
import { Section } from './Section';

export function ExpertiseSection() {
  return (
    <Section id="expertise" variant="dark">
      <div className="max-w-3xl mb-14 sm:mb-16">
        <span className="section-eyebrow">
          <span className="h-px w-6 bg-brand-400" />
          What I do
        </span>
        <h2 className="section-title mt-3">Areas of expertise</h2>
        <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
          A decade of bridging operations and engineering — from enterprise
          Windows estates and virtualization clusters to modern TypeScript
          full-stack platforms running in the cloud.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        <ExpertiseCard
          icon={<Users className="w-5 h-5" />}
          title="Team Leadership"
          description="Technical Team Lead and Account Manager with proven experience driving successful IT initiatives across multidisciplinary teams."
        />
        <ExpertiseCard
          icon={<Code className="w-5 h-5" />}
          title="Full-Stack Development"
          description="Modern web applications with TypeScript, React, Node.js and NestJS — from component libraries to large-scale platforms."
        />
        <ExpertiseCard
          icon={<Cloud className="w-5 h-5" />}
          title="Cloud Architecture"
          description="Azure specialist focused on scalable, observable, and cost-aware infrastructure with Entra ID, AKS and serverless workloads."
        />
        <ExpertiseCard
          icon={<Server className="w-5 h-5" />}
          title="Systems Administration"
          description="Senior Windows & Active Directory expert with extensive experience operating mission-critical enterprise environments."
        />
        <ExpertiseCard
          icon={<Shield className="w-5 h-5" />}
          title="Virtualization"
          description="Designing and operating Proxmox VE clusters, vCenter and Hyper-V environments with HA, backups and DR strategies."
        />
        <ExpertiseCard
          icon={<Network className="w-5 h-5" />}
          title="Network Infrastructure"
          description="Design and implementation of robust segmented networks, VPN topologies and Zero Trust access patterns."
        />
        <ExpertiseCard
          icon={<Database className="w-5 h-5" />}
          title="Data & Integrations"
          description="PostgreSQL, REST/GraphQL APIs and integrations with NinjaRMM, Zoho, Microsoft Graph, ITGlue and Azure OpenAI."
        />
        <ExpertiseCard
          icon={<Cpu className="w-5 h-5" />}
          title="Automation & DevOps"
          description="CI/CD pipelines, Infrastructure-as-Code, monorepos with Turborepo, and pragmatic developer experience tooling."
        />
      </div>
    </Section>
  );
}