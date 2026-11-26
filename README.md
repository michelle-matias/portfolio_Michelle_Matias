# Portfolio — Michelle Matias

Personal resume and portfolio website showcasing technical skills, academic background, professional experience and software development projects. It aims for a professional, elegant, editorial aesthetic and is built with clean architecture and maintainable code in mind.

> **Status:** project foundation only. Routes contain placeholder content; page designs and the design system are implemented incrementally through GitHub issues.

## Technology stack

| Area      | Technology                                            |
| --------- | ----------------------------------------------------- |
| Framework | Next.js 16 (App Router) and React 19                  |
| Language  | TypeScript (strict mode)                              |
| Styling   | Tailwind CSS v4 (CSS-first configuration)             |
| Icons     | Lucide React                                          |
| Quality   | ESLint, Prettier (with Tailwind class sorting)        |
| Tooling   | npm, Git and GitHub                                   |
| Typefaces | Playfair Display, Inter, JetBrains Mono (`next/font`) |

## Prerequisites

- Node.js 20.9 or newer (Node 22 LTS recommended)
- npm 10 or newer

## Installation

```bash
git clone https://github.com/michelle-matias/portfolio_Michelle_Matias.git
cd portfolio_Michelle_Matias
npm install
npm run dev
```

The site is then available at <http://localhost:3000>.

## Available commands

| Command                | Description                                          |
| ---------------------- | ---------------------------------------------------- |
| `npm run dev`          | Start the development server                         |
| `npm run build`        | Create a production build                            |
| `npm run start`        | Serve the production build                           |
| `npm run lint`         | Run ESLint                                           |
| `npm run format`       | Format all files with Prettier                       |
| `npm run format:check` | Check formatting without changing files              |
| `npm run typecheck`    | Generate route types and run the TypeScript compiler |

## Routes

| Path               | Page               |
| ------------------ | ------------------ |
| `/`                | Home               |
| `/about`           | About Me           |
| `/skills`          | Technical Skills   |
| `/projects`        | Projects           |
| `/projects/[slug]` | Project Case Study |
| `/resume`          | Resume             |
| `/contact`         | Contact            |

## Project structure

```text
.
├── .github/
│   └── pull_request_template.md
├── docs/
│   ├── design/                  # Page mockups (visual references)
│   └── design-inconsistencies.md
├── public/                      # Static assets
├── src/
│   ├── app/                     # Application routes, root layout, global styles
│   ├── components/
│   │   ├── layout/              # Shared layout components
│   │   ├── pages/               # Page-specific components
│   │   └── ui/                  # Reusable UI components
│   ├── content/                 # Structured content and project data
│   ├── lib/                     # Utility functions
│   ├── styles/                  # Design tokens
│   └── types/                   # Type definitions
├── tests/                       # Tests (framework added in a later issue)
├── AGENTS.md                    # Shared rules for AI coding assistants
├── CLAUDE.md                    # Claude Code-specific instructions
└── DESIGN.md                    # Official design specification
```

## Design

`DESIGN.md` is the official design specification and `docs/design/` holds the page mockups. The mockups use placeholder identity content that must not be reused. Known inconsistencies between the design references are tracked in [`docs/design-inconsistencies.md`](docs/design-inconsistencies.md).

## Current limitations

This repository contains the project foundation only:

- Routes render placeholder content (`src/components/ui/PagePlaceholder.tsx`), to be replaced page by page.
- Design tokens, global styles and UI components are not implemented yet; only the font families are wired (`src/styles/tokens.css`).
- There is no favicon yet. The default Next.js favicon was removed and a project favicon is a future task.
- No testing framework is installed; `tests/` is a placeholder.
- Language switching (English and Portuguese, pt-PT) and dark mode are not implemented.

## Development workflow

Work is managed through GitHub milestones, parent issues and sub-issues. Each issue is implemented on its own branch and merged through a pull request. See [`AGENTS.md`](AGENTS.md) for the full development rules.
