import React from 'react';
import { StatusDot } from './StatusDot.jsx';

export function NavBar({ items = ['Home', 'Projects', 'Blog', 'Resume'], active, onNavigate, statusLabel = 'Open to work', extra = null, fixed = true, style }) {
  const [hovered, setHovered] = React.useState(null);
  return React.createElement('nav', {
    style: {
      position: fixed ? 'fixed' : 'relative', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', gap: 28, padding: '16px 32px',
      background: 'var(--bg-glass)', backdropFilter: 'var(--blur-glass)', WebkitBackdropFilter: 'var(--blur-glass)',
      borderBottom: '1px solid var(--border-subtle)', ...style,
    },
  },
    React.createElement('a', {
      href: '#', onClick: (e) => { e.preventDefault(); onNavigate && onNavigate(items[0]); },
      style: { fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: 'var(--fg-0)', textDecoration: 'none', letterSpacing: 'var(--tracking-display)' },
    }, 'shivambhushan.com'),
    React.createElement('div', { style: { display: 'flex', gap: 4, flex: 1 } },
      items.map((it) => {
        const on = it === active;
        return React.createElement('a', {
          key: it, href: '#',
          onClick: (e) => { e.preventDefault(); onNavigate && onNavigate(it); },
          onMouseEnter: () => setHovered(it), onMouseLeave: () => setHovered(null),
          style: {
            fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: on ? 600 : 400, textDecoration: 'none',
            padding: '6px 12px', borderRadius: 'var(--radius-control)',
            color: on ? 'var(--fg-0)' : hovered === it ? 'var(--fg-0)' : 'var(--fg-2)',
            background: on ? 'var(--bg-2)' : 'transparent',
            transition: 'all var(--dur-fast) var(--ease-glide)',
          },
        }, it);
      })),
    statusLabel && React.createElement(StatusDot, { label: statusLabel }),
    extra
  );
}
