# Beautify — Makeup Artist & Hair Stylist (Next.js Template)

A faithful Next.js 16 recreation of the [Beautify](https://themeforest.net/item/beautify-makeup-artist-hair-stylist-elementor-template-kit/35390132) Elementor template kit by ThemeWarriors — rebuilt as a single-page React app with TypeScript, Tailwind CSS v4, and shadcn/ui.

## ✨ What's inside

A complete makeup artist & hair stylist landing page with **12 modular sections**:

| Section | Highlights |
|---|---|
| **TopBar** | Dark bar with social icons + contact info |
| **Header** | Centered Beautify serif logo + dropdown navigation + mobile drawer |
| **Hero** | Split layout with "Professional Makeup Artist" headline and a working **Book Makeup Schedule** form (name/email/date/phone) that shows a success state |
| **WelcomeAbout** | Image with double-frame border + features checklist |
| **Specials** | Two-image asymmetric collage |
| **WhyUs** | 5 numbered reasons inside a decorative double-rectangle frame |
| **Services** | 6-card grid (Makeup Lesson, Personal Make-Over, Bridal Beauty, Hairstyling, Hair Coloring, Skincare) |
| **Testimonials** | Dark charcoal section with gold stars + 3-testimonial carousel |
| **Partners** | 4 grayscale partner logos |
| **Blog** | 3 unique post cards with date/comment metadata |
| **Newsletter** | Working email subscribe form with success state |
| **Footer** | Diamond-patterned background, 4 navigation columns, opening hours, social icons, dark copyright bar |

## 🎨 Design system

- **Color palette** (defined as CSS variables in `src/app/globals.css`):
  - `--blush: #f7dfe2` — soft pink backgrounds
  - `--rose: #d6336c` — primary accent (buttons, links, eyebrows)
  - `--charcoal: #1f1d1d` — dark text and testimonials background
  - `--gold: #d4a648` — testimonial stars
- **Typography**:
  - Playfair Display (serif) for headings — loaded via `next/font/google`
  - Montserrat (sans-serif) for body and UI text
- **Decorative elements**: dot grids, wavy SVG rings, double-rectangle frames, diamond-patterned footer background, L-shaped corner accents

## 🛠 Tech stack

- [**Next.js 16**](https://nextjs.org/) with App Router (Turbopack)
- [**TypeScript 5**](https://www.typescriptlang.org/)
- [**Tailwind CSS 4**](https://tailwindcss.com/) with `@theme inline` custom tokens
- [**shadcn/ui**](https://ui.shadcn.com/) component library (New York style)
- [**Lucide React**](https://lucide.dev/) icons
- [**Prisma ORM**](https://www.prisma.io/) with SQLite (optional — only if you wire up the booking form to a database)

## 🚀 Getting started

```bash
# Install dependencies
bun install

# Run the dev server
bun run dev
# → http://localhost:3000

# Run lint
bun run lint

# Production build (standalone output for Docker-style deploys)
bun run build

# Netlify-friendly build (no standalone post-processing)
bun run build:netlify
```

> **Node version**: This project targets Node 20+. Use `nvm use` if you have a different default.

## 📁 Project structure

```
.
├── netlify.toml                 # Netlify build config + Next.js plugin
├── next.config.ts               # Conditional standalone output (off when NETLIFY env var is set)
├── prisma/
│   └── schema.prisma            # Database schema (optional)
├── public/                      # Static assets
├── src/
│   ├── app/
│   │   ├── globals.css          # Tailwind v4 theme + Beautify color tokens + helpers
│   │   ├── layout.tsx           # Root layout with Playfair Display + Montserrat fonts
│   │   └── page.tsx             # Main page — imports all 12 sections in order
│   ├── components/
│   │   ├── ui/                  # shadcn/ui primitives
│   │   └── site/                # 12 Beautify section components
│   │       ├── TopBar.tsx
│   │       ├── Header.tsx
│   │       ├── Hero.tsx
│   │       ├── WelcomeAbout.tsx
│   │       ├── Specials.tsx
│   │       ├── WhyUs.tsx
│   │       ├── Services.tsx
│   │       ├── Testimonials.tsx
│   │       ├── Partners.tsx
│   │       ├── Blog.tsx
│   │       ├── Newsletter.tsx
│   │       └── Footer.tsx
│   ├── hooks/                   # React hooks
│   └── lib/                     # Utilities (cn, db client, etc.)
├── tailwind.config.ts
└── tsconfig.json
```

## 🌐 Deployment

### Netlify (recommended — auto-deploys from GitHub)

1. Push this repo to GitHub.
2. In Netlify: **Add new site → Import an existing project** → pick this repo.
3. Build settings are pre-configured in `netlify.toml`:
   - **Build command**: `bun run build:netlify`
   - **Publish directory**: `.next`
   - **Node version**: 20
   - The official `@netlify/plugin-nextjs` runtime is auto-installed.
4. Click **Deploy site**. Every future `git push` triggers an automatic rebuild.

### Manual Netlify CLI deploy

```bash
netlify deploy --build --prod
```

### Other platforms (Vercel, Cloudflare Pages, etc.)

The project is a standard Next.js 16 app — point your platform at the repo and it should auto-detect.

## 🖼 Image credits

All photos used in this template are loaded from the original Beautify demo on `templatekits.themewarrior.com` (used here for educational/recreation purposes). For a production deploy, replace these with your own photography in `src/components/site/`.

## 📝 Notes

- The placeholder copy is intentionally Latin/Lorem-style — it matches the original Elementor template kit so you can swap in your own marketing copy.
- The booking form and newsletter form use client-side React state. To make them functional end-to-end, wire them up to an API route (e.g. `src/app/api/booking/route.ts`) backed by Prisma + an email service.
- `output: "standalone"` is conditional in `next.config.ts`: enabled for Docker-style local builds, disabled when `NETLIFY=true` is set (which Netlify does automatically).

## 📄 License

This is a recreation of a commercial template for educational purposes. The original Beautify template kit is © ThemeWarriors and available on ThemeForest. Use this codebase as a learning reference or starting point for your own original designs.
