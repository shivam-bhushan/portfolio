import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs } from '../components/Tabs.jsx';
import { POSTS, TOPICS } from '../content/posts.js';

export function Blog() {
  const navigate = useNavigate();
  const [topic, setTopic] = React.useState('All');
  const shown = topic === 'All' ? POSTS : POSTS.filter((p) => p.topic === topic);
  return (
    <div style={{ paddingTop: 120 }} data-screen-label="Blog">
      <div style={{ maxWidth: 760, margin: '0 auto', padding: 'var(--space-8) var(--container-pad) var(--space-10)' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-4xl)', letterSpacing: 'var(--tracking-display)', color: 'var(--fg-0)', margin: '0 0 16px' }}>Writing</h1>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', lineHeight: 'var(--leading-body)', color: 'var(--fg-1)', margin: '0 0 40px' }}>
          Notes on the things I build, mostly backend systems, automation, and lessons from production.
        </p>
        <Tabs items={TOPICS} value={topic} onChange={setTopic} style={{ marginBottom: 8, width: '100%' }} />
        <div>
          {shown.length === 0 && (
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--fg-2)', padding: '40px 0' }}>No posts in this topic yet.</p>
          )}
          {shown.map((p) => (
            <a key={p.slug} href={`/blog/${p.slug}`} onClick={(e) => { e.preventDefault(); navigate(`/blog/${p.slug}`); }}
              style={{ display: 'block', padding: '28px 0', borderBottom: '1px solid var(--border-subtle)', textDecoration: 'none' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-2)', marginBottom: 8 }}>{p.date} · {p.mins} min · {p.topic}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-xl)', letterSpacing: 'var(--tracking-display)', color: 'var(--fg-0)', marginBottom: 8 }}>{p.title}</div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.65, color: 'var(--fg-1)', margin: 0 }}>{p.excerpt}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
