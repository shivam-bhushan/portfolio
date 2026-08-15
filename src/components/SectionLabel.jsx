import React from 'react';

export function SectionLabel({ children, color = 'var(--fg-2)', rule = true, style }) {
  return React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 16, ...style } },
    React.createElement('span', { style: { fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 'var(--tracking-wide)', color, textTransform: 'uppercase', whiteSpace: 'nowrap' } }, children),
    rule && React.createElement('span', { style: { flex: 1, height: 1, background: 'var(--border-subtle)' } })
  );
}
