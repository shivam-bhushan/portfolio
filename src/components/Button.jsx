import React from 'react';

const PAD = { sm: '7px 14px', md: '10px 20px', lg: '13px 28px' };
const FS = { sm: 13, md: 14, lg: 15 };

export function Button({ variant = 'primary', size = 'md', disabled = false, href, onClick, children, style }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const base = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
    padding: PAD[size], borderRadius: 'var(--radius-control)', border: '1px solid transparent',
    fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: FS[size], lineHeight: 1.2,
    cursor: disabled ? 'not-allowed' : 'pointer', textDecoration: 'none', userSelect: 'none', whiteSpace: 'nowrap',
    transition: 'all var(--dur-fast) var(--ease-glide)',
    transform: press ? 'translateY(1px)' : 'none',
  };
  let look;
  if (disabled) {
    look = { background: 'var(--bg-2)', color: 'var(--fg-disabled)', border: '1px solid var(--border-subtle)' };
  } else if (variant === 'ghost') {
    look = { background: hover ? 'var(--bg-2)' : 'transparent', color: 'var(--fg-0)' };
  } else if (variant === 'secondary') {
    look = {
      background: hover ? 'var(--bg-2)' : 'transparent', color: 'var(--fg-0)',
      border: '1px solid ' + (hover ? 'var(--border-strong)' : 'var(--border-subtle)'),
    };
  } else {
    look = { background: 'var(--accent)', color: 'var(--on-accent)', opacity: hover && !press ? 0.88 : 1 };
  }
  const Tag = href ? 'a' : 'button';
  return React.createElement(Tag, {
    href, disabled: Tag === 'button' ? disabled : undefined,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true), onMouseLeave: () => { setHover(false); setPress(false); },
    onMouseDown: () => setPress(true), onMouseUp: () => setPress(false),
    style: { ...base, ...look, ...style },
  }, children);
}
