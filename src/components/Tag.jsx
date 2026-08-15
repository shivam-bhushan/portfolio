import React from 'react';

export function Tag({ active = false, onClick, children, style }) {
  const [hover, setHover] = React.useState(false);
  return React.createElement('span', {
    onClick, onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-block', whiteSpace: 'nowrap', padding: '3px 9px', borderRadius: 'var(--radius-tag)',
      fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.03em',
      background: active ? 'var(--accent)' : 'var(--bg-2)',
      border: '1px solid ' + (active ? 'var(--accent)' : hover && onClick ? 'var(--border-strong)' : 'var(--border-subtle)'),
      color: active ? 'var(--on-accent)' : 'var(--fg-1)',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'all var(--dur-fast) var(--ease-glide)', ...style,
    },
  }, children);
}
