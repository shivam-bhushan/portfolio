export const PROJECTS = [
  {
    name: 'Kado',
    desc: 'An AI-native platform helping marketing agencies plan, create, and launch ad campaigns faster. Building the full product solo, from the workflow design to the integrations that publish it live.',
    tags: ['TypeScript', 'React', 'Node.js', 'Claude API'],
    year: 'Building',
    kind: 'Product',
    link: 'https://kado.studio',
    linkLabel: 'kado.studio',
  },
  { name: 'Low/No-Code DAG Platform', desc: 'Backend microservices and RESTful APIs (Python/FastAPI, Node.js) on Kubernetes for a low/no-code DAG creation platform and an internal scheduling & alerting service used across teams.', tags: ['Python', 'FastAPI', 'Node.js', 'Kubernetes'], year: '2025', kind: 'Backend' },
  { name: 'DAG Migration Automation', desc: 'Automated migration of thousands of DAGs across platform versions using Python and GCP APIs, cutting per-DAG migration time from ~40 to 15 minutes.', tags: ['Python', 'GCP'], year: '2025', kind: 'Tools' },
  { name: 'watchdog-svc', desc: 'Own the microservice powering opt-in reliability alerts on scheduled data pipelines — built the triggering, lifecycle, and data-integration layer, coordinating with an ML team on the detection model.', tags: ['Python', 'FastAPI'], year: '2025', kind: 'Backend' },
  { name: 'Delivery Pipeline & Ingestion API', desc: 'Own scale and reliability for the platform\'s delivery pipeline — built the ingestion API and automated LLM-based change-summary generation, ensuring lakhs of alert deliveries reach thousands of users daily with zero dropped or duplicate sends.', tags: ['Python', 'LLM', 'Idempotency'], year: '2025', kind: 'Backend' },
  { name: 'Reusable SSO Middleware', desc: 'Built a reusable SSO authentication middleware as a shared service, cutting new-app auth setup effort by ~80%, and set up CI/CD pipelines for the platform\'s microservices.', tags: ['Node.js', 'CI/CD'], year: '2025', kind: 'Tools' },
  { name: 'MFA Compatibility Fix at Scale', desc: 'Diagnosed compatibility issues blocking MFA enforcement across 5,000+ DAGs in 7 markets ahead of a 14-day org-wide deadline; engineered a fix ensuring forward and backward compatibility.', tags: ['Python', 'Auth'], year: '2025', kind: 'Tools' },
  { name: 'Vessel Management System', desc: 'Designed and implemented a desktop GUI for a Vessel Management System, consolidating multiple backend endpoints and streamlining operations, as an R&D intern at IIT Madras.', tags: ['Electron', 'React', 'Node.js'], year: '2024', kind: 'Web' },
  { name: 'Sailor–Officer Data Link', desc: 'Built REST APIs and a React Native application to enable real-time, reliable data transmission between sailors and navigating officers.', tags: ['React Native', 'REST'], year: '2024', kind: 'Web' },
];
