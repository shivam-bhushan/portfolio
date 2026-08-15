import React from 'react';

export function Radio({ label, checked = false, onChange, style }) {
  return React.createElement('label', {
    style: { display: 'inline-flex', alignItems: 'center', gap: 10, cursor: 'pointer', ...style },
    onClick: () => onChange && onChange(true),
  },
    React.createElement('span', {
      style: {
        width: 17, height: 17, borderRadius: '50%', display: 'grid', placeItems: 'center',
        background: 'var(--surface-card)',
        border: '1px solid ' + (checked ? 'var(--fg-0)' : 'var(--border-strong)'),
        transition: 'all var(--dur-fast) var(--ease-glide)',
      },
    }, checked && React.createElement('span', { style: { width: 7, height: 7, borderRadius: '50%', background: 'var(--fg-0)' } })),
    label && React.createElement('span', { style: { fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--fg-1)' } }, label)
  );
}
