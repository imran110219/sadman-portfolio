# CLAUDE.md — sadman-portfolio

Portfolio website for **Sadman Sobhan**, a Senior Software Engineer with 9+ years of experience. Live at **sadmansobhan.com**.

---

## Read before acting

| Task | Files to read first |
|---|---|
| Any content update (profile, skills, experience, projects) | The relevant file under `data/` |
| Adding or editing a component | `app/page.tsx`, the relevant component in `components/` |
| New page or route | `app/layout.tsx`, `app/page.tsx` |
| Styling changes | `app/globals.css`, `components/ui/` |
| Type changes | `types/` |

Data is driven entirely by JSON files in `data/`. Components read data through helper functions in `lib/data.ts`. Never hardcode content into components.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| UI Components | Radix UI + shadcn/ui (`components/ui/`) |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Fonts | Geist Sans / Geist Mono |
| Analytics | Vercel Analytics + Google Analytics (G-VSQQQDSJXV) |
| Deployment | Vercel |

---

## Project structure

```
app/
  layout.tsx       Root layout — metadata, analytics scripts, ThemeProvider
  page.tsx         Single-page app entry — view routing logic (recruiter/developer/client/all)
  globals.css      Global styles

components/
  recruiter-view.tsx   Skills, experience timeline, achievements
  developer-view.tsx   Projects, tech stack, architecture
  client-view.tsx      Services, case studies
  navigation.tsx       Top nav with view switcher
  live-metrics.tsx     Animated stats widget
  floating-contact-button.tsx
  download-cv-button.tsx
  footer.tsx
  ui/              Radix/shadcn primitives (do not hand-edit)

data/              Single source of truth for all content (JSON)
  profile.json     Name, title, tagline, bio, social links, availability
  experience.json  Work history timeline
  projects.json    Portfolio projects (featured flag controls what surfaces)
  skills.json      Full skills (recruiterSkills + techStack)
  core-skills.json Simplified skill categories for recruiter view
  achievements.json Metrics and milestones
  services.json    Service offerings and case studies (client view)
  testimonials.json Testimonials (featured flag controls what surfaces)

lib/
  data.ts          Typed accessor functions for all data files
  analytics.ts     trackViewChange() for GA event tracking
  utils.ts         Tailwind cn() helper

types/             TypeScript type definitions for all data shapes
```

---

## View routing

The site has three audience views controlled by `ViewType` in `app/page.tsx`:

| View | Audience | Component |
|---|---|---|
| `recruiter` | Recruiters / HR | `RecruiterView` — skills, experience, achievements |
| `developer` | Other engineers | `DeveloperView` — projects, tech stack |
| `client` | Clients / founders | `ClientView` — services, case studies |
| `all` | Everyone | All three views stacked |

`null` state = Hero / landing screen.

---

## Content update rules

- **All content lives in `data/*.json`** — update JSON, never hardcode into components.
- To add a project: add an entry in `data/projects.json`. Set `"featured": true` to surface it in the default view.
- To add a testimonial: add an entry in `data/testimonials.json`. Set `"featured": true` to show it.
- To update profile info: edit `data/profile.json`.
- To update work history: edit `data/experience.json`.
- Skills shown to recruiters come from `data/skills.json → recruiterSkills`.
- Tech stack shown to developers comes from `data/skills.json → techStack`.

---

## Hard rules

- **Never invent** experience, skills, projects, metrics, or achievements. All content must reflect Sadman's actual career.
- **Do not modify** `components/ui/` — these are generated shadcn primitives.
- Keep SEO metadata in `app/layout.tsx` in sync with actual profile content.
- Structured data (JSON-LD) in `layout.tsx` must stay accurate — it affects search indexing.
- Sensitive contact details (phone, personal email) must not be added to any committed file. Use `data/profile.json → social.email` for the public contact email only.

---

## Dev commands

```bash
pnpm dev        # Start local dev server
pnpm build      # Production build
pnpm lint       # ESLint check
```

---

## Relationship to other repos

This repo is one part of a larger career-growth workspace. Portfolio content should reflect and stay in sync with:
- `career/master/resume.md` — canonical work history and skills
- `career/master/skills-inventory.md` — verified skills list
- `Articles/` — published writing (link to articles from portfolio if relevant)
