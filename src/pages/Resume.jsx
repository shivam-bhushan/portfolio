import React from 'react';
import { Button } from '../components/Button.jsx';
import { SectionLabel } from '../components/SectionLabel.jsx';
import { Tag } from '../components/Tag.jsx';

const EXP = [
  {
    role: 'Software Engineer 2', org: 'Walmart Global Tech, Bangalore', span: 'Jan 2025 — Present',
    pts: [
      'Built a full-stack, LLM-powered Airflow DAG generation platform using React, FastAPI, and Google ADK, enabling users to create workflows through a conversational interface with retrieval-augmented generation and agentic orchestration in production.',
      'Developed an ML-powered natural-language analytics assistant (Walmart AI Hackathon) using LangChain-backed pipelines, allowing business users to query data insights conversationally.',
      "Engineered core components of DannY (3-engineer team), a self-serve scheduling and alerting platform that turns analysts' ad-hoc KPI queries into recurring reports and threshold alerts; its engine processes 50K–60K daily email deliveries with zero duplicate or lost deliveries, validated through fault-injection testing with 20% injected faults.",
      "Built DannY's watchdog service with ML-based anomaly detection across multiple sensors; owned automated unit and integration testing, Kubernetes deployments using Docker and CI/CD, and production debugging of scheduling, delivery, API, and performance issues.",
      'Diagnosed compatibility blockers preventing MFA enforcement across 5,000+ Airflow DAGs in 7 markets, enabling backward and forward-compatible enforcement within a 14-day compliance deadline.',
      'Automated migration of thousands of Airflow DAGs across platform versions using Python and GCP APIs, reducing migration time from ~40 to ~15 minutes per DAG.',
      'Developed reusable Node.js SSO middleware that reduced authentication setup effort for new applications by ~80%; established CI/CD pipelines for platform microservices.',
    ],
  },
  {
    role: 'Research and Development Intern', org: 'IIT Madras, Chennai', span: 'Jan 2024 — Jul 2024',
    pts: [
      'Designed a desktop GUI (Electron, React.js, Node.js) for a Vessel Management System, consolidating multiple backend endpoints, and built REST APIs plus a React Native app for real-time data transmission between sailors and navigating officers.',
    ],
  },
];
const PROJECTS = [
  {
    name: 'Kado', org: 'kado.studio', span: '2025',
    pts: [
      'Solo-building an AI-native platform that helps marketing agencies plan, create, and launch ad campaigns faster. (TypeScript, React, Node.js, Prisma, GCP Cloud Run, Claude API)',
      'Designed the orchestration engine: a durable workflow executor chaining 14+ steps (brand scraping, AI copy and image generation, human-in-the-loop approval gates, Meta Ads publishing, performance sync), using a clean-architecture split that isolates business logic from Prisma, the Meta API, and AI providers.',
      'Built the Meta Ads publishing pipeline end-to-end (campaign → ad set → creative), with objective-specific optimization-goal mapping and a self-healing recovery path for stale or orphaned ad-account links.',
    ],
  },
];
const SKILLS = ['Python', 'JavaScript (ES6+)', 'SQL', 'React.js', 'Tailwind CSS', 'HTML5/CSS3', 'FastAPI', 'Node.js', 'Express.js', 'RESTful API Design', 'Microservices', 'LangChain', 'Google ADK', 'RAG Architectures', 'Prompt Engineering', 'Agentic Workflows', 'PostgreSQL', 'MySQL', 'Kafka', 'Redis', 'GCP', 'Docker', 'Kubernetes', 'CI/CD', 'Git'];

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
          <SectionLabel style={{ margin: '56px 0 24px' }}>Projects</SectionLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            {PROJECTS.map((p) => (
              <div key={p.name} className="resume-row">
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-2)', paddingTop: 3 }}>{p.span}</div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-lg)', letterSpacing: 'var(--tracking-display)', color: 'var(--fg-0)' }}>{p.name}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-2)', margin: '4px 0 12px' }}>{p.org}</div>
                  <ul style={{ margin: 0, paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {p.pts.map((pt) => <li key={pt} style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.6, color: 'var(--fg-1)' }}>{pt}</li>)}
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
