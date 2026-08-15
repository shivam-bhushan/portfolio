import React from 'react';

export function Select({ label, options = [], value, onChange, style }) {
  const [focus, setFocus] = React.useState(false);
  return React.createElement('label', { style: { display: 'flex', flexDirection: 'column', gap: 6, ...style } },
    label && React.createElement('span', { style: { fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 'var(--tracking-wide)', color: focus ? 'var(--fg-0)' : 'var(--fg-2)', textTransform: 'uppercase' } }, label),
    React.createElement('span', { style: { position: 'relative', display: 'flex' } },
      React.createElement('select', {
        value, onChange: (e) => onChange && onChange(e.target.value),
        onFocus: () => setFocus(true), onBlur: () => setFocus(false),
        style: {
          appearance: 'none', WebkitAppearance: 'none', width: '100%', padding: '10px 36px 10px 14px',
          borderRadius: 'var(--radius-control)', background: 'var(--surface-card)',
          border: '1px solid ' + (focus ? 'var(--border-strong)' : 'var(--border-subtle)'),
          color: 'var(--fg-0)', fontFamily: 'var(--font-body)', fontSize: 14, outline: 'none', cursor: 'pointer',
          transition: 'border-color var(--dur-fast) var(--ease-glide)',
        },
      },
        options.map((o) => React.createElement('option', { key: o, value: o, style: { background: 'var(--surface-card)' } }, o))
      ),
      React.createElement('span', { style: { position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-2)' } }, '▾')
    )
  );
}
