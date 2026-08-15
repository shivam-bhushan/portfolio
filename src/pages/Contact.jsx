import React from 'react';
import { Card } from '../components/Card.jsx';
import { Input } from '../components/Input.jsx';
import { Select } from '../components/Select.jsx';
import { Button } from '../components/Button.jsx';

const LINKS = [
  ['Email', 'shivam13202@gmail.com', 'mailto:shivam13202@gmail.com'],
  ['GitHub', 'github.com/shivam-bhushan', 'https://github.com/shivam-bhushan'],
  ['LinkedIn', 'linkedin.com/in/shivam-bhushan', 'https://linkedin.com/in/shivam-bhushan'],
];

export function Contact() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [topic, setTopic] = React.useState('Work inquiry');
  const [msg, setMsg] = React.useState('');
  const [sent, setSent] = React.useState(false);

  const submit = () => {
    const body = encodeURIComponent(`${msg}\n\n— ${name} (${email})`);
    const subject = encodeURIComponent(`[${topic}] Message from shivambhushan.com`);
    window.location.href = `mailto:shivam13202@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div style={{ paddingTop: 120 }} data-screen-label="Contact">
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-8) var(--container-pad) var(--space-10)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-9)', alignItems: 'start' }}>
        <div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-4xl)', letterSpacing: 'var(--tracking-display)', color: 'var(--fg-0)', margin: '0 0 16px' }}>Get in touch</h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', lineHeight: 'var(--leading-body)', color: 'var(--fg-1)', maxWidth: 420, margin: '0 0 40px' }}>
            Open to interesting engineering conversations, collaborations, and questions about what I've built. I read everything that comes in.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 48 }}>
            {LINKS.map(([k, v, href]) => (
              <div key={k} style={{ display: 'flex', gap: 16, alignItems: 'baseline' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--fg-2)', width: 80 }}>{k}</span>
                <a href={href} style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--fg-0)' }}>{v}</a>
              </div>
            ))}
          </div>
          <wire-object shape="torusknot" style={{ width: 220, height: 220 }}></wire-object>
        </div>
        <Card hoverable={false} padding={32}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <Input label="Name" placeholder="Your name" value={name} onChange={setName} />
            <Input label="Email" placeholder="you@example.com" value={email} onChange={setEmail} />
            <Select label="Topic" options={['Work inquiry', 'Collaboration', 'Question', 'Other']} value={topic} onChange={setTopic} />
            <Input label="Message" multiline rows={5} placeholder="What's on your mind?" value={msg} onChange={setMsg} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <Button onClick={submit}>Send message</Button>
              {sent && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--success)' }}>Opening your email client…</span>}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
