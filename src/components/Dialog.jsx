import React from 'react';
import { IconButton } from './IconButton.jsx';

export function Dialog({ open = false, title, label = 'Dialog', onClose, children, width = 460, style }) {
  if (!open) return null;
  return React.createElement('div', {
    onClick: onClose,
    style: {
      position: 'fixed', inset: 0, zIndex: 200, display: 'grid', placeItems: 'center',
      background: 'var(--surface-overlay)', backdropFilter: 'blur(4px)',
    },
  },
    React.createElement('div', {
      onClick: (e) => e.stopPropagation(), style: {
        width, maxWidth: 'calc(100vw - 48px)', background: 'var(--surface-card)',
        border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-card)',
        boxShadow: 'var(--shadow-pop)', padding: 28, ...style,
      },
    },
      React.createElement('div', { style: { display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, marginBottom: 16 } },
        React.createElement('div', null,
          React.createElement('div', { style: { fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--fg-2)', marginBottom: 8 } }, label),
          title && React.createElement('div', { style: { fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 600, letterSpacing: 'var(--tracking-display)', color: 'var(--fg-0)' } }, title)),
        React.createElement(IconButton, { glyph: '✕', label: 'Close', size: 30, onClick: onClose })),
      React.createElement('div', { style: { fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 'var(--leading-body)', color: 'var(--fg-1)' } }, children)
    )
  );
}
