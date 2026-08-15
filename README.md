# shivambhushan.com

Personal site — home, projects, blog, resume, contact. React + Vite, built from the Claude Design "Personal website design system" project, filled in with real content.

## Develop

```
npm install
npm run dev
```

## Build

```
npm run build   # outputs to dist/
npm run preview # serve the production build locally
```

## Content to edit

- `src/pages/Blog.jsx` — `POSTS` array. Add real posts here (title, excerpt, date, mins, topic).
- `src/pages/BlogPost.jsx` — currently renders placeholder body copy for every post. Once you have real post content (e.g. per-post Markdown/MDX), wire it in here.
- `src/pages/Projects.jsx` / `src/pages/Home.jsx` — project cards, pulled from resume experience.
- `src/pages/Resume.jsx` — experience, education, skills, awards. `public/resume.pdf` is downloaded by the "Download PDF" button — replace it when your resume updates.
- `src/pages/Contact.jsx` — verify the GitHub/LinkedIn URLs are correct (guessed from username, not confirmed).

## Deploy (Vercel + GoDaddy domain)

1. Push this repo to GitHub (already done if you're reading this from the repo).
2. Import the repo at vercel.com → New Project. Vercel auto-detects Vite; no config needed.
3. In the Vercel project → Settings → Domains, add `shivambhushan.com` (and `www.shivambhushan.com`).
4. In GoDaddy DNS settings, either point the A/CNAME records at Vercel as shown in the Vercel dashboard, or switch nameservers to Vercel's for it to manage DNS entirely.
5. Vercel auto-builds on every push to `main` and issues SSL automatically.

No backend/server (e.g. Railway) is needed — this is a fully static build.
