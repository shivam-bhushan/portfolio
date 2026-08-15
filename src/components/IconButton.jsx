import React from 'react';

export function IconButton({ glyph = '↗', label, size = 34, active = false, onClick, style }) {
  const [hover, setHover] = React.useState(false);
  return React.createElement('button', {
    'aria-label': label, onClick,
    onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false),
    style: {
      width: size, height: size, display: 'inline-grid', placeItems: 'center',
      borderRadius: 'var(--radius-control)', cursor: 'pointer',
      background: active || hover ? 'var(--bg-2)' : 'transparent',
      border: '1px solid ' + (active ? 'var(--border-strong)' : 'var(--border-subtle)'),
      color: active ? 'var(--fg-0)' : 'var(--fg-1)',
      fontFamily: 'var(--font-mono)', fontSize: size * 0.42, lineHeight: 1,
      transition: 'all var(--dur-fast) var(--ease-glide)', ...style,
    },
  }, glyph);
}
