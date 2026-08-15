import React from 'react';

const TONES = {
  neutral: 'var(--fg-1)', success: 'var(--success)', warning: 'var(--warning)', danger: 'var(--danger)',
  /* legacy aliases */ lime: 'var(--success)', cyan: 'var(--fg-1)', muted: 'var(--fg-2)',
};

export function Badge({ tone = 'neutral', dot = true, children, style }) {
  const c = TONES[tone] || tone;
  return React.createElement('span', {
    style: {
      display: 'inline-flex', alignItems: 'center', gap: 7, padding: '3px 10px',
      borderRadius: 'var(--radius-pill)', border: '1px solid var(--border-subtle)',
      background: 'var(--bg-2)', fontFamily: 'var(--font-mono)', fontSize: 11,
      letterSpacing: '0.05em', color: 'var(--fg-1)', ...style,
    },
  },
    dot && React.createElement('span', { style: { width: 6, height: 6, borderRadius: '50%', background: c, flexShrink: 0 } }),
    children
  );
}
