import React from 'react';
import { Card } from '../components/Card.jsx';
import { Tag } from '../components/Tag.jsx';

const ALL = [
  { name: 'Low/No-Code DAG Platform', desc: 'Backend microservices and RESTful APIs (Python/FastAPI, Node.js) on Kubernetes for a low/no-code DAG creation platform and an internal scheduling & alerting service used across teams.', tags: ['Python', 'FastAPI', 'Node.js', 'Kubernetes'], year: '2025', kind: 'Backend' },
  { name: 'DAG Migration Automation', desc: 'Automated migration of thousands of DAGs across platform versions using Python and GCP APIs, cutting per-DAG migration time from ~40 to 15 minutes.', tags: ['Python', 'GCP'], year: '2025', kind: 'Tools' },
  { name: 'watchdog-svc', desc: 'Own the microservice powering opt-in reliability alerts on scheduled data pipelines — built the triggering, lifecycle, and data-integration layer, coordinating with an ML team on the detection model.', tags: ['Python', 'FastAPI'], year: '2025', kind: 'Backend' },
  { name: 'Delivery Pipeline & Ingestion API', desc: 'Own scale and reliability for the platform\'s delivery pipeline — built the ingestion API and automated LLM-based change-summary generation, ensuring lakhs of alert deliveries reach thousands of users daily with zero dropped or duplicate sends.', tags: ['Python', 'LLM', 'Idempotency'], year: '2025', kind: 'Backend' },
  { name: 'Reusable SSO Middleware', desc: 'Built a reusable SSO authentication middleware as a shared service, cutting new-app auth setup effort by ~80%, and set up CI/CD pipelines for the platform\'s microservices.', tags: ['Node.js', 'CI/CD'], year: '2025', kind: 'Tools' },
  { name: 'MFA Compatibility Fix at Scale', desc: 'Diagnosed compatibility issues blocking MFA enforcement across 5,000+ DAGs in 7 markets ahead of a 14-day org-wide deadline; engineered a fix ensuring forward and backward compatibility.', tags: ['Python', 'Auth'], year: '2025', kind: 'Tools' },
  { name: 'Vessel Management System', desc: 'Designed and implemented a desktop GUI for a Vessel Management System, consolidating multiple backend endpoints and streamlining operations, as an R&D intern at IIT Madras.', tags: ['Electron', 'React', 'Node.js'], year: '2024', kind: 'Web' },
  { name: 'Sailor–Officer Data Link', desc: 'Built REST APIs and a React Native application to enable real-time, reliable data transmission between sailors and navigating officers.', tags: ['React Native', 'REST'], year: '2024', kind: 'Web' },
];
const KINDS = ['All', 'Backend', 'Tools', 'Web'];

export function Projects() {
  const [kind, setKind] = React.useState('All');
  const shown = kind === 'All' ? ALL : ALL.filter((p) => p.kind === kind);
  return (
    <div style={{ paddingTop: 120 }} data-screen-label="Projects">
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-8) var(--container-pad) var(--space-10)' }}>
        <div className="projects-header" style={{ marginBottom: 56 }}>
          <div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-4xl)', letterSpacing: 'var(--tracking-display)', color: 'var(--fg-0)', margin: '0 0 16px' }}>Projects</h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', lineHeight: 'var(--leading-body)', color: 'var(--fg-1)', maxWidth: 480, margin: 0 }}>
              Backend microservices, automation tooling, and full-stack apps — built at Walmart Global Tech and IIT Madras.
            </p>
          </div>
          <wire-object className="hide-mobile" shape="octahedron" style={{ width: 140, height: 140 }}></wire-object>
        </div>
        <div style={{ display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
          {KINDS.map((k) => <Tag key={k} active={k === kind} onClick={() => setKind(k)}>{k}</Tag>)}
        </div>
        <div className="grid-2">
          {shown.map((p) => (
            <Card key={p.name} label={p.year}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-xl)', letterSpacing: 'var(--tracking-display)', color: 'var(--fg-0)', marginBottom: 10 }}>{p.name}</div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.65, color: 'var(--fg-1)', margin: '0 0 20px' }}>{p.desc}</p>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', alignItems: 'center' }}>
                {p.tags.map((t) => <Tag key={t}>{t}</Tag>)}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
