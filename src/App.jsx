import React from 'react';
import { NavBar } from './components/NavBar.jsx';
import { IconButton } from './components/IconButton.jsx';
import { Home } from './pages/Home.jsx';
import { Projects } from './pages/Projects.jsx';
import { Blog } from './pages/Blog.jsx';
import { BlogPost } from './pages/BlogPost.jsx';
import { Resume } from './pages/Resume.jsx';
import { Contact } from './pages/Contact.jsx';

function ThemeToggle() {
  const [dark, setDark] = React.useState(document.documentElement.getAttribute('data-theme') === 'dark');
  const flip = () => {
    const next = dark ? '' : 'dark';
    if (next) document.documentElement.setAttribute('data-theme', next);
    else document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('sb-theme', next);
    setDark(!dark);
  };
  return <IconButton glyph={dark ? '☀' : '☾'} label="Toggle theme" size={32} onClick={flip} />;
}

function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border-subtle)', padding: '40px var(--container-pad)', marginTop: 'auto' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, color: 'var(--fg-0)' }}>shivambhushan.com</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-2)' }}>© {new Date().getFullYear()} Shivam Bhushan</span>
        <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-2)' }}>Built by hand</span>
      </div>
    </footer>
  );
}

export default function App() {
  const [route, setRoute] = React.useState('Home');
  const [post, setPost] = React.useState(null);
  const nav = (r) => { setPost(null); setRoute(r); window.scrollTo(0, 0); };
  let screen = null;
  if (route === 'Home') screen = <Home onNavigate={nav} />;
  else if (route === 'Projects') screen = <Projects />;
  else if (route === 'Blog') screen = post ? <BlogPost post={post} onBack={() => setPost(null)} /> : <Blog onOpenPost={setPost} />;
  else if (route === 'Resume') screen = <Resume />;
  else if (route === 'Contact') screen = <Contact />;
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }} data-screen-label={route}>
      <NavBar items={['Home', 'Projects', 'Blog', 'Resume', 'Contact']} active={route} onNavigate={nav} extra={<ThemeToggle />} />
      <div style={{ flex: 1 }}>{screen}</div>
      <Footer />
    </div>
  );
}
