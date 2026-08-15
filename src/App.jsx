import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <ScrollToTop />
      <NavBar extra={<ThemeToggle />} />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
