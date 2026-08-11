# Sri Harish S — Portfolio

A premium, recruiter-focused personal portfolio built with React 19, TypeScript, Vite, Tailwind CSS v4, and Framer Motion.

## Sections
- Hero with animated typing role text and glowing 3D-style avatar ring
- About (mission/strengths/goals + education & experience timelines)
- Skills (animated progress bars by category)
- Projects (filterable cards + detail modal with problem/solution/features/tech)
- Research (ICIRIST 2026 publication showcase)
- Resume (highlights + download button)
- Contact (validated form via react-hook-form, opens mail client)

## Getting Started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Before deploying

1. **Resume**: drop your PDF file at `public/resume.pdf` (exact filename). The Hero and Resume section "Download Resume" buttons already point to `/resume.pdf` — no code change needed, just add the file.
2. **Project images**: drop screenshots in `public/projects/` (e.g. `public/projects/registration-portal.png`), then set `image: "/projects/registration-portal.png"` on the matching entry in `src/data/portfolio.ts`. Leave `image: ""` to show the default gradient placeholder instead.
3. **Certificates**: drop certificate images/screenshots in `public/certificates/`, then in `src/data/portfolio.ts` fill in each `certifications` entry — `name`, `issuer`, `date`, `credentialId`, `verifyUrl` (link to the issuer's verification page, e.g. Coursera/IBM credential URL), and `image: "/certificates/your-file.png"`. Add one object per certificate to the array; a `Certifications` section between Research and Resume renders them automatically.
4. **Adding a new project**: copy one object in the `projects` array in `src/data/portfolio.ts` and edit `title`, `image`, `summary`, `problem`, `solution`, `features`, `tech`, `tags`. It appears automatically — no component changes needed.
5. **Content**: edit `src/data/portfolio.ts` — this single file drives all text, projects, skills, experience, certifications, and social links. No fake metrics are pre-filled; verify every stat before publishing.
6. **Social links**: update `profile.social` and `profile.email` in `src/data/portfolio.ts`.
7. **Contact form**: currently opens the visitor's email client (`mailto:`) with the message pre-filled — no backend required. To use EmailJS instead, install `@emailjs/browser` and swap the `onSubmit` handler in `src/components/Contact.tsx` (a comment marks where).
8. **Favicon**: replace `public/favicon.svg` with your own mark if desired.

## Deploying to Vercel

```bash
npm i -g vercel
vercel
```
Or connect the repo directly in the Vercel dashboard — it auto-detects Vite.

## Tech Stack
React 19 · TypeScript · Vite · Tailwind CSS v4 · Framer Motion · React Hook Form · lucide-react · react-icons

## Notes on scope
This is the focused, recruiter-ready version of the full spec (hero, about, skills, projects, research, resume, contact). It's structured so you can extend it: add a `src/data/testimonials.ts` + `Testimonials.tsx` component, a GitHub stats widget via the GitHub REST API, a blog section, dark/light theme toggle, etc. — the component/data separation makes each addition isolated.
"# Sri-Harish-Portfolio" 
