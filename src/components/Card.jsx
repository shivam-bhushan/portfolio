import React from 'react';

export function Card({ label, labelColor = 'var(--fg-2)', hoverable = true, padding = 28, onClick, children, style }) {
  const [hover, setHover] = React.useState(false);
  const lift = hoverable && hover;
  return React.createElement('div', {
    onClick,
    onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--surface-card)',
      border: '1px solid ' + (lift ? 'var(--border-strong)' : 'var(--border-subtle)'),
      borderRadius: 'var(--radius-card)', boxShadow: 'var(--shadow-card)',
      padding, transition: 'border-color var(--dur-base) var(--ease-glide)',
      cursor: onClick ? 'pointer' : 'default', ...style,
    },
  },
    label && React.createElement('div', { style: { fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: labelColor, marginBottom: 14 } }, label),
    children
  );
}
