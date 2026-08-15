import React from 'react';
import { Button } from '../components/Button.jsx';

export function BlogPost({ post, onBack }) {
  const p = post || { title: 'Placeholder post about a technical topic', date: 'Jul 12, 2026', mins: 6, topic: 'Engineering' };
  const body = 'Placeholder body copy. Replace this with the real text of your post — each paragraph should carry the actual argument.';
  return (
    <div style={{ paddingTop: 120 }} data-screen-label="Blog post">
      <article style={{ maxWidth: 680, margin: '0 auto', padding: 'var(--space-8) var(--container-pad) var(--space-10)' }}>
        <a href="#" onClick={(e) => { e.preventDefault(); onBack && onBack(); }} style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-2)', textDecoration: 'none' }}>← All writing</a>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-2)', margin: '40px 0 16px' }}>{p.date} · {p.mins} min · {p.topic}</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-3xl)', lineHeight: 1.15, letterSpacing: 'var(--tracking-display)', color: 'var(--fg-0)', margin: '0 0 32px' }}>{p.title}</h1>
        {[1, 2, 3].map((i) => (
          <p key={i} style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 'var(--leading-body)', color: 'var(--fg-1)', margin: '0 0 24px' }}>{body}</p>
        ))}
        <pre style={{ fontFamily: 'var(--font-mono)', fontSize: 13, lineHeight: 1.6, color: 'var(--fg-0)', background: 'var(--bg-2)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-control)', padding: '18px 20px', overflowX: 'auto', margin: '0 0 24px' }}>
          {'// code sample placeholder\nconst greet = (name) => `hello, ${name}`;'}
        </pre>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 'var(--leading-body)', color: 'var(--fg-1)', margin: '0 0 48px' }}>{body}</p>
        <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 24, display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-2)' }}>Thanks for reading.</span>
          <Button variant="secondary" size="sm" onClick={onBack}>Back to all posts</Button>
        </div>
      </article>
    </div>
  );
}
