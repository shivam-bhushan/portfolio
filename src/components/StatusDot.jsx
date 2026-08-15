import React from 'react';

export function StatusDot({ color = 'var(--success)', label, pulse = true, style }) {
  return React.createElement('span', { style: { display: 'inline-flex', alignItems: 'center', gap: 8, ...style } },
    React.createElement('span', {
      style: {
        width: 7, height: 7, borderRadius: '50%', background: color,
        animation: pulse ? 'ds-pulse 2.4s ease-in-out infinite' : 'none',
      },
    }),
    React.createElement('style', null, '@keyframes ds-pulse{0%,100%{opacity:1}50%{opacity:0.4}}'),
    label && React.createElement('span', { style: { fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.05em', color: 'var(--fg-1)' } }, label)
  );
}
