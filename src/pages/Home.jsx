import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/Button.jsx';
import { SectionLabel } from '../components/SectionLabel.jsx';
import { Card } from '../components/Card.jsx';
import { Tag } from '../components/Tag.jsx';
import { POSTS } from '../content/posts.js';
import { PROJECTS } from '../content/projects.js';

export function Home() {
  const navigate = useNavigate();
  return (
    <div style={{ paddingTop: 120 }} data-screen-label="Home">
      <section className="hero-grid" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-9) var(--container-pad) var(--space-10)' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--fg-2)', marginBottom: 24 }}>Full Stack Software Engineer</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-5xl)', lineHeight: 'var(--leading-tight)', letterSpacing: 'var(--tracking-display)', color: 'var(--fg-0)', margin: '0 0 24px' }}>
            Shivam Bhushan builds software, and writes about how.
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-lg)', lineHeight: 'var(--leading-body)', color: 'var(--fg-1)', maxWidth: 520, margin: '0 0 40px' }}>
            Software Engineer at Walmart Global Tech, building backend microservices, RESTful APIs, and responsive front-ends. I write about the systems I ship and what I learn building them.
          </p>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <Button onClick={() => navigate('/projects')}>View projects</Button>
            <Button variant="secondary" onClick={() => navigate('/blog')}>Read the blog</Button>
          </div>
        </div>
        <wire-object className="hide-mobile" shape="icosahedron" style={{ width: '100%', height: 360 }}></wire-object>
      </section>

      <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--container-pad) var(--space-10)' }}>
        <SectionLabel style={{ marginBottom: 40 }}>Selected work</SectionLabel>
        <div className="grid-3">
          {PROJECTS.slice(0, 3).map((p) => (
            <Card key={p.name} label={p.year} onClick={() => navigate('/projects')}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-lg)', letterSpacing: 'var(--tracking-display)', color: 'var(--fg-0)', marginBottom: 10 }}>{p.name}</div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.6, color: 'var(--fg-1)', margin: '0 0 18px' }}>{p.desc}</p>
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
      </section>

      <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--container-pad) var(--space-10)' }}>
        <SectionLabel style={{ marginBottom: 16 }}>Recent writing</SectionLabel>
        <div>
          {POSTS.slice(0, 3).map((p) => (
            <Link key={p.slug} to={`/blog/${p.slug}`}
              style={{ display: 'flex', alignItems: 'baseline', gap: 24, padding: '22px 0', borderBottom: '1px solid var(--border-subtle)', textDecoration: 'none' }}>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-lg)', fontWeight: 500, color: 'var(--fg-0)', flex: 1 }}>{p.title}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-2)', whiteSpace: 'nowrap' }}>{p.date} · {p.mins} min</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
