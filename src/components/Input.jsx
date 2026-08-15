import React from 'react';

export function Input({ label, prefix, placeholder, value, onChange, type = 'text', multiline = false, rows = 4, style }) {
  const [focus, setFocus] = React.useState(false);
  const field = {
    flex: 1, background: 'transparent', border: 'none', outline: 'none', minWidth: 0,
    color: 'var(--fg-0)', fontFamily: 'var(--font-body)', fontSize: 14, resize: 'vertical',
  };
  return React.createElement('label', { style: { display: 'flex', flexDirection: 'column', gap: 6, ...style } },
    label && React.createElement('span', { style: { fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 'var(--tracking-wide)', color: focus ? 'var(--fg-0)' : 'var(--fg-2)', textTransform: 'uppercase' } }, label),
    React.createElement('span', {
      style: {
        display: 'flex', alignItems: multiline ? 'flex-start' : 'center', gap: 8, padding: multiline ? '11px 14px' : '10px 14px',
        borderRadius: 'var(--radius-control)',
        background: 'var(--surface-card)',
        border: '1px solid ' + (focus ? 'var(--border-strong)' : 'var(--border-subtle)'),
        transition: 'border-color var(--dur-fast) var(--ease-glide)',
      },
    },
      prefix && React.createElement('span', { style: { fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--fg-2)' } }, prefix),
      React.createElement(multiline ? 'textarea' : 'input', {
        type: multiline ? undefined : type, rows: multiline ? rows : undefined, placeholder, value,
        onChange: (e) => onChange && onChange(e.target.value),
        onFocus: () => setFocus(true), onBlur: () => setFocus(false), style: field,
      })
    )
  );
}
