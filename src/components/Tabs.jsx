import React from 'react';

export function Tabs({ items = [], value, onChange, style }) {
  const [hovered, setHovered] = React.useState(null);
  return React.createElement('div', {
    style: { display: 'inline-flex', gap: 20, borderBottom: '1px solid var(--border-subtle)', ...style },
  },
    items.map((it) => {
      const active = it === value;
      return React.createElement('button', {
        key: it, onClick: () => onChange && onChange(it),
        onMouseEnter: () => setHovered(it), onMouseLeave: () => setHovered(null),
        style: {
          padding: '8px 2px 10px', border: 'none', borderBottom: '2px solid ' + (active ? 'var(--fg-0)' : 'transparent'),
          marginBottom: -1, cursor: 'pointer', background: 'transparent',
          fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: active ? 600 : 400,
          color: active || hovered === it ? 'var(--fg-0)' : 'var(--fg-2)',
          transition: 'color var(--dur-fast) var(--ease-glide)',
        },
      }, it);
    })
  );
}
