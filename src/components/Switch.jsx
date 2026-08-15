import React from 'react';

export function Switch({ label, on = false, onChange, style }) {
  return React.createElement('label', {
    style: { display: 'inline-flex', alignItems: 'center', gap: 10, cursor: 'pointer', ...style },
    onClick: () => onChange && onChange(!on),
  },
    React.createElement('span', {
      style: {
        width: 38, height: 22, borderRadius: 'var(--radius-pill)', position: 'relative', flexShrink: 0,
        background: on ? 'var(--accent)' : 'var(--bg-3)',
        border: '1px solid ' + (on ? 'var(--accent)' : 'var(--border-subtle)'),
        transition: 'all var(--dur-base) var(--ease-glide)',
      },
    },
      React.createElement('span', {
        style: {
          position: 'absolute', top: 2, left: on ? 18 : 2, width: 16, height: 16, borderRadius: '50%',
          background: on ? 'var(--on-accent)' : 'var(--surface-card)',
          boxShadow: '0 1px 2px rgba(0,0,0,0.2)',
          transition: 'left var(--dur-base) var(--ease-glide)',
        },
      })),
    label && React.createElement('span', { style: { fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--fg-1)' } }, label)
  );
}
