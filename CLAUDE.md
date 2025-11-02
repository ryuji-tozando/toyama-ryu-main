# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Build & Development
- `npm run dev` - Start Vite development server (hot reload enabled)
- `npm run build` - Production build (outputs to `dist/`)
- `npm run preview` - Preview production build locally

### Code Quality
- `npm run lint` - Run ESLint on all TypeScript/TSX files
- `npm run typecheck` - Run TypeScript compiler type checking without emitting files

## Project Overview

This is the official website for 戸山流居合道会 (Toyama-ryu Iaido Association), deployed on Vercel.

## Deployment

### Vercel Configuration
- **Platform**: Vercel (configured via `vercel.json`)
- **Build Command**: `npm run build`
- **Output Directory**: `dist/`
- **Framework Detection**: Vite
- **SPA Routing**: All routes rewrite to `/index.html` for client-side routing
- **Security Headers**: X-Content-Type-Options, X-Frame-Options, X-XSS-Protection enabled
- **Asset Caching**: Static assets cached for 1 year with immutable flag

### Deployment Workflow
1. Push to main branch triggers automatic deployment
2. Vercel runs `npm install` and `npm run build`
3. Output from `dist/` directory is deployed
4. Preview deployments created for all branches

## Project Architecture

### Tech Stack
- **Framework**: React 18 + TypeScript (strict mode enabled)
- **Build Tool**: Vite 5 with React plugin
- **Styling**: Tailwind CSS with custom Toyama color palette
- **Icons**: lucide-react
- **Backend**: Supabase (client configured but not yet integrated)

### Custom Tailwind Theme
The project uses a custom "Toyama" color palette defined in `tailwind.config.js`:
- `toyama-dark` (#264653) - Primary dark color
- `toyama-teal` (#2A9D8F) - Accent teal
- `toyama-yellow` (#E9C46A) - Highlight yellow
- `toyama-orange` (#F4A261) - Call-to-action orange
- `toyama-base` (#F8F9FA) - Base background

Custom fonts configured: `Noto Serif JP` (serif) and `Noto Sans` (sans-serif)

### Component Structure
All components live in `src/components/`. The app follows a single-page layout pattern with sequential sections:
- `Navigation.tsx` - Top navigation
- `Hero.tsx` - Full-screen hero with background image and CTAs
- `WelcomeSection.tsx` - Welcome content
- `About.tsx` - About section
- `StyleGuide.tsx` - Style guide reference
- `Footer.tsx` - Footer

Main app in `src/App.tsx` composes these components vertically.

### TypeScript Configuration
- Strict mode enabled with additional checks:
  - `noUnusedLocals: true`
  - `noUnusedParameters: true`
  - `noFallthroughCasesInSwitch: true`
- Module resolution: `bundler` mode
- Target: ES2020

### Key Development Patterns
- Components use Tailwind utility classes extensively (no CSS modules)
- Responsive design with mobile-first breakpoints (sm:, md:)
- Icon imports from lucide-react (e.g., `ChevronDown`)
- Supabase client available at `@supabase/supabase-js` but not yet initialized in code

## Directory Structure

```
toyama-ryu-main/
├── docs/                    # Project documentation
│   ├── requirements/        # Requirements documents
│   ├── design/             # Design & UI/UX specs
│   ├── architecture/       # System architecture docs
│   ├── meeting-notes/      # Meeting notes & memos
│   └── assets/             # Documentation assets
├── public/                  # Static assets (served from root)
│   ├── images/             # Public images
│   └── fonts/              # Custom fonts
├── src/                     # Source code
│   ├── components/         # React components
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── vercel.json             # Vercel deployment configuration
└── [config files]          # tsconfig, vite.config, etc.
```

## Important Notes
- No test framework currently configured
- Lucide-react is excluded from Vite optimizations (see `vite.config.ts`)
- Static assets should be placed in `public/` directory
- Documentation follows date-prefixed naming convention (e.g., `2025-10-03_filename.md`)