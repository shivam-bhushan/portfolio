import React from 'react';
import { Button } from '../components/Button.jsx';
import { SectionLabel } from '../components/SectionLabel.jsx';
import { Tag } from '../components/Tag.jsx';

const EXP = [
  {
    role: 'Software Engineer 2', org: 'Walmart Global Tech, Bangalore', span: 'Jan 2025 — Present',
    pts: [
      'Built an AI-powered low/no-code DAG creation platform (React, FastAPI, Google ADK) enabling users to generate Airflow workflows through a conversational LLM interface, applying RAG-style retrieval and agentic workflows in production.',
      'Developed an ML-powered natural-language analytics assistant (Walmart AI Hackathon) using LangChain-backed pipelines, allowing business users to query data insights conversationally.',
      "Architected Danny's scheduling and alerting engine guaranteeing zero duplicate/lost deliveries across ~50K–60K daily emails, validated under 20% injected fault scenarios with zero drops in production.",
      "Built Danny's watchdog service, integrating ML-based anomaly detection across multiple sensors covering different data-quality issues, in collaboration with an ML team.",
      'Diagnosed compatibility blockers preventing MFA enforcement across 5,000+ DAGs in 7 markets; engineered framework-level fixes ensuring forward/backward compatibility, delivering compliance within a 14-day deadline.',
      'Automated migration of thousands of DAGs across platform versions using Python and GCP APIs, cutting per-DAG migration time from ~40 to 15 minutes.',
      "Built a reusable SSO middleware (Node.js) cutting new-app auth setup by ~80%, and set up CI/CD pipelines for the platform's microservices.",
    ],
  },
  {
    role: 'Research and Development Intern', org: 'IIT Madras, Chennai', span: 'Jan 2024 — Jul 2024',
    pts: [
      'Designed a desktop GUI (Electron, React.js, Node.js) for a Vessel Management System, consolidating multiple backend endpoints, and built REST APIs plus a React Native app for real-time data transmission between sailors and navigating officers.',
    ],
  },
];
const SKILLS = ['Python', 'JavaScript (ES6+)', 'SQL', 'React.js', 'FastAPI', 'Node.js', 'Express.js', 'LangChain', 'Google ADK', 'RAG Architectures', 'Agentic Workflows', 'PostgreSQL', 'MySQL', 'Redis', 'GCP', 'Docker', 'Kubernetes', 'CI/CD', 'Git'];

export function Resume() {
  return (
    <div style={{ paddingTop: 120 }} data-screen-label="Resume">
      <div className="resume-grid" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-8) var(--container-pad) var(--space-10)' }}>
        <div className="resume-sidebar" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-3xl)', letterSpacing: 'var(--tracking-display)', color: 'var(--fg-0)', margin: 0 }}>Resume</h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 'var(--leading-body)', color: 'var(--fg-1)', margin: 0 }}>
            Full-Stack Software Engineer building scalable backend microservices, responsive React frontends, and Generative AI applications — LLM-powered tools with LangChain, Google ADK, and RAG pipelines, shipped on Kubernetes.
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
              Walmart Bravo Award — recognized as an early adopter of GenAI and for proactively building automation tools from the ground up, driving measurable impact on developer productivity and AI adoption across the data organization.
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
