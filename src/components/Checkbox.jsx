import React from 'react';

export function Checkbox({ label, checked = false, onChange, style }) {
  return React.createElement('label', {
    style: { display: 'inline-flex', alignItems: 'center', gap: 10, cursor: 'pointer', ...style },
    onClick: () => onChange && onChange(!checked),
  },
    React.createElement('span', {
      style: {
        width: 17, height: 17, borderRadius: 4, display: 'grid', placeItems: 'center',
        background: checked ? 'var(--accent)' : 'var(--surface-card)',
        border: '1px solid ' + (checked ? 'var(--accent)' : 'var(--border-strong)'),
        transition: 'all var(--dur-fast) var(--ease-glide)',
      },
    }, checked && React.createElement('span', { style: { color: 'var(--on-accent)', fontSize: 11, fontWeight: 700, lineHeight: 1 } }, '✓')),
    label && React.createElement('span', { style: { fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--fg-1)' } }, label)
  );
}
