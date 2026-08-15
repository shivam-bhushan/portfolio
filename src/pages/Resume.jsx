import React from 'react';
import { Button } from '../components/Button.jsx';
import { SectionLabel } from '../components/SectionLabel.jsx';
import { Tag } from '../components/Tag.jsx';

const EXP = [
  {
    role: 'Software Engineer 2', org: 'Walmart Global Tech, Bangalore', span: 'Jan 2025 — Present',
    pts: [
      'Build backend microservices and RESTful APIs (Python/FastAPI, Node.js) on Kubernetes for a low/no-code DAG creation platform and an internal scheduling & alerting service used across teams.',
      'Automated migration of thousands of DAGs across platform versions using Python and GCP APIs, cutting per-DAG migration time from ~40 to 15 minutes.',
      'Diagnosed compatibility issues blocking MFA enforcement across 5,000+ DAGs in 7 markets ahead of a 14-day org-wide deadline; engineered a fix ensuring forward and backward compatibility.',
      'Own the watchdog-svc microservice powering opt-in reliability alerts on scheduled data pipelines — built the triggering, lifecycle, and data-integration layer, coordinating with an ML team on the detection model.',
      "Own scale and reliability for the platform's delivery pipeline — built the ingestion API and automated LLM-based change-summary generation, ensuring lakhs of alert deliveries reach thousands of internal users daily with zero dropped or duplicate sends (idempotent processing, retry/backoff).",
      'Built a reusable SSO authentication middleware (Node.js) as a shared service, cutting new-app auth setup effort by ~80%, and set up CI/CD pipelines for the platform\'s microservices.',
    ],
  },
  {
    role: 'Research and Development Intern', org: 'IIT Madras, Chennai', span: 'Jan 2024 — Jul 2024',
    pts: [
      'Designed and implemented a desktop GUI (Electron, React.js, Node.js) for a Vessel Management System, consolidating multiple backend endpoints and streamlining operations.',
      'Built REST APIs and a React Native application to enable real-time, reliable data transmission between sailors and navigating officers.',
    ],
  },
];
const SKILLS = ['JavaScript (ES6+)', 'TypeScript', 'Python', 'SQL', 'React', 'FastAPI', 'Node.js', 'Express.js', 'MySQL', 'PostgreSQL', 'Redis', 'Google Cloud Platform', 'Docker', 'Kubernetes', 'Git', 'CI/CD'];

export function Resume() {
  return (
    <div style={{ paddingTop: 120 }} data-screen-label="Resume">
      <div className="resume-grid" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-8) var(--container-pad) var(--space-10)' }}>
        <div className="resume-sidebar" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-3xl)', letterSpacing: 'var(--tracking-display)', color: 'var(--fg-0)', margin: 0 }}>Resume</h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 'var(--leading-body)', color: 'var(--fg-1)', margin: 0 }}>
            Full-Stack Software Engineer with production experience across the stack — React front-ends and scalable backend microservices, containerized with Docker and deployed on GCP.
          </p>
          <div style={{ display: 'flex', gap: 10 }}>
            <Button size="sm" href="/resume.pdf">Download PDF</Button>
            <Button variant="secondary" size="sm" href="mailto:shivam13202@gmail.com">Email me</Button>
          </div>
          <div>
            <SectionLabel rule={false} style={{ marginBottom: 12 }}>Skills</SectionLabel>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>{SKILLS.map((s) => <Tag key={s}>{s}</Tag>)}</div>
          </div>
          <div>
            <SectionLabel rule={false} style={{ marginBottom: 12 }}>Awards</SectionLabel>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, lineHeight: 1.6, color: 'var(--fg-1)', margin: 0 }}>
              Walmart Bravo Award — recognized as an early adopter of GenAI within the team and for proactively building automation tools from the ground up.
            </p>
          </div>
        </div>
        <div>
          <SectionLabel style={{ marginBottom: 32 }}>Experience</SectionLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            {EXP.map((e) => (
              <div key={e.role} className="resume-row">
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-2)', paddingTop: 3 }}>{e.span}</div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-lg)', letterSpacing: 'var(--tracking-display)', color: 'var(--fg-0)' }}>{e.role}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-2)', margin: '4px 0 12px' }}>{e.org}</div>
                  <ul style={{ margin: 0, paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {e.pts.map((p) => <li key={p} style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.6, color: 'var(--fg-1)' }}>{p}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <SectionLabel style={{ margin: '56px 0 24px' }}>Education</SectionLabel>
          <div className="resume-row">
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-2)', paddingTop: 3 }}>Sept 2020 — Jun 2024</div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-lg)', letterSpacing: 'var(--tracking-display)', color: 'var(--fg-0)' }}>B.Tech, Computer Science and Engineering</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-2)', marginTop: 4 }}>SRM Institute of Science and Technology, Chennai</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
