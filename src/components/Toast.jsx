import React from 'react';

const TONES = {
  neutral: 'var(--fg-1)', success: 'var(--success)', warning: 'var(--warning)', danger: 'var(--danger)',
  /* legacy aliases */ lime: 'var(--success)', cyan: 'var(--fg-1)',
};

export function Toast({ tone = 'neutral', title, children, onDismiss, style }) {
  const c = TONES[tone] || tone;
  return React.createElement('div', {
    style: {
      display: 'flex', gap: 12, alignItems: 'flex-start', width: 360, padding: '14px 16px',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-control)',
      boxShadow: 'var(--shadow-pop)', ...style,
    },
  },
    React.createElement('span', { style: { width: 7, height: 7, borderRadius: '50%', background: c, marginTop: 6, flexShrink: 0 } }),
    React.createElement('div', { style: { flex: 1, minWidth: 0 } },
      title && React.createElement('div', { style: { fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 13, color: 'var(--fg-0)', marginBottom: 2 } }, title),
      React.createElement('div', { style: { fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-1)', lineHeight: 1.5 } }, children)),
    onDismiss && React.createElement('button', { onClick: onDismiss, style: { background: 'none', border: 'none', color: 'var(--fg-2)', cursor: 'pointer', fontFamily: 'var(--font-mono)', fontSize: 12, padding: 2 } }, '✕')
  );
}
