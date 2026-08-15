import React from 'react';
import { Card } from '../components/Card.jsx';
import { Tag } from '../components/Tag.jsx';
import { PROJECTS } from '../content/projects.js';

const KINDS = ['All', 'Product', 'Backend', 'Tools', 'Web'];

export function Projects() {
  const [kind, setKind] = React.useState('All');
  const shown = kind === 'All' ? PROJECTS : PROJECTS.filter((p) => p.kind === kind);
  return (
    <div style={{ paddingTop: 120 }} data-screen-label="Projects">
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-8) var(--container-pad) var(--space-10)' }}>
        <div className="projects-header" style={{ marginBottom: 56 }}>
          <div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-4xl)', letterSpacing: 'var(--tracking-display)', color: 'var(--fg-0)', margin: '0 0 16px' }}>Projects</h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', lineHeight: 'var(--leading-body)', color: 'var(--fg-1)', maxWidth: 480, margin: 0 }}>
              Kado, the startup I'm building, plus backend microservices and automation tooling from Walmart Global Tech and IIT Madras.
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
                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                    style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-2)', textDecoration: 'none', whiteSpace: 'nowrap' }}>
                    {p.linkLabel} ↗
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
