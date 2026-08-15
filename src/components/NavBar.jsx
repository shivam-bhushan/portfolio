import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { StatusDot } from './StatusDot.jsx';
import { IconButton } from './IconButton.jsx';

const ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Blog', to: '/blog' },
  { label: 'Resume', to: '/resume' },
  { label: 'Contact', to: '/contact' },
];

function isActive(pathname, to) {
  if (to === '/') return pathname === '/';
  return pathname === to || pathname.startsWith(to + '/');
}

export function NavBar({ statusLabel = 'Open to work', extra = null, fixed = true, style }) {
  const { pathname } = useLocation();
  const [hovered, setHovered] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia('(max-width: 720px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  React.useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <nav style={{
      position: fixed ? 'fixed' : 'relative', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', gap: 20, padding: '16px clamp(16px, 5vw, 32px)',
      background: 'var(--bg-glass)', backdropFilter: 'var(--blur-glass)', WebkitBackdropFilter: 'var(--blur-glass)',
      borderBottom: '1px solid var(--border-subtle)', ...style,
    }}>
      <Link to="/"
        style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: 'var(--fg-0)', textDecoration: 'none', letterSpacing: 'var(--tracking-display)', whiteSpace: 'nowrap' }}>
        shivambhushan.com
      </Link>

      {!isMobile && (
        <div style={{ display: 'flex', gap: 4, flex: 1 }}>
          {ITEMS.map((it) => {
            const on = isActive(pathname, it.to);
            return (
              <Link key={it.label} to={it.to}
                onMouseEnter={() => setHovered(it.label)} onMouseLeave={() => setHovered(null)}
                style={{
                  fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: on ? 600 : 400, textDecoration: 'none',
                  padding: '6px 12px', borderRadius: 'var(--radius-control)',
                  color: on ? 'var(--fg-0)' : hovered === it.label ? 'var(--fg-0)' : 'var(--fg-2)',
                  background: on ? 'var(--bg-2)' : 'transparent',
                  transition: 'all var(--dur-fast) var(--ease-glide)',
                }}
              >{it.label}</Link>
            );
          })}
        </div>
      )}
      {isMobile && <div style={{ flex: 1 }} />}

      {!isMobile && statusLabel && <StatusDot label={statusLabel} />}
      {extra}
      {isMobile && (
        <IconButton glyph={open ? '✕' : '☰'} label="Menu" size={32} active={open} onClick={() => setOpen(!open)} />
      )}

      {isMobile && open && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: 'var(--surface-card)', borderBottom: '1px solid var(--border-subtle)',
          boxShadow: 'var(--shadow-pop)', display: 'flex', flexDirection: 'column', padding: '4px 20px 16px',
        }}>
          {ITEMS.map((it) => {
            const on = isActive(pathname, it.to);
            return (
              <Link key={it.label} to={it.to}
                style={{
                  fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: on ? 600 : 400, textDecoration: 'none',
                  padding: '13px 2px', borderBottom: '1px solid var(--border-subtle)',
                  color: on ? 'var(--fg-0)' : 'var(--fg-1)',
                }}
              >{it.label}</Link>
            );
          })}
          {statusLabel && <div style={{ padding: '14px 2px 0' }}><StatusDot label={statusLabel} /></div>}
        </div>
      )}
    </nav>
  );
}
