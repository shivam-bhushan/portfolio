import React from 'react';

export function Tooltip({ text, children, style }) {
  const [show, setShow] = React.useState(false);
  return React.createElement('span', {
    onMouseEnter: () => setShow(true), onMouseLeave: () => setShow(false),
    style: { position: 'relative', display: 'inline-block', ...style },
  },
    children,
    show && React.createElement('span', {
      style: {
        position: 'absolute', bottom: 'calc(100% + 8px)', left: '50%', transform: 'translateX(-50%)',
        whiteSpace: 'nowrap', padding: '5px 10px', borderRadius: 'var(--radius-tag)',
        background: 'var(--accent)', color: 'var(--on-accent)',
        fontFamily: 'var(--font-body)', fontSize: 12,
        boxShadow: 'var(--shadow-card)', zIndex: 50,
      },
    }, text)
  );
}
