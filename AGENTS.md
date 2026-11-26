# AGENTS.md

Shared development rules for AI coding assistants working in this repository. Project overview, commands and structure are in [`README.md`](README.md).

## Project

Personal resume and portfolio website. Stack: Next.js (App Router), React, TypeScript (strict), Tailwind CSS v4, ESLint, Prettier, npm, Lucide React.

## Workflow

- Never work directly on `main`. Create a dedicated feature branch for each issue.
- Read the relevant GitHub issue before implementing it, and implement only its scope. Do not start unrelated features.
- Do not commit, push, merge, close GitHub issues or create pull requests without explicit approval from the repository owner.
- Preserve existing files and unrelated changes.
- Use English for code, comments, documentation, branch names and commit messages.

## Code

- Prioritise readability and maintainability; use clear, descriptive component and variable names.
- Follow separation of concerns. Avoid duplicated code and styling, and avoid unnecessary abstractions.
- Prefer reusable components where appropriate.
- Prefer server components unless client-side functionality is necessary.
- Keep TypeScript strict; do not suppress type or lint errors without a documented reason.
- Install only necessary dependencies.
- Use semantic HTML, mobile-first responsive design, and consider accessibility from the start.
- Never expose credentials, secrets or API keys.
- Never invent professional experience, achievements or personal information. Use neutral placeholders until real content is provided.

## Design

- Read `DESIGN.md` and the relevant mockup in `docs/design/` before implementing any UI.
- Use centralised design tokens from `src/styles/tokens.css`. Do not hardcode design-specific colours, typography or spacing in components.
- Reuse existing UI components and keep visual consistency across pages.
- Ensure responsive and accessible layouts.
- Do not modify the values in `DESIGN.md` without approval. Document any necessary design-system changes.
- Report conflicting design specifications instead of silently choosing between them. Known conflicts are listed in `docs/design-inconsistencies.md`.

## Project structure

The folder structure is documented in [`README.md`](README.md#project-structure). Keep to it: route files in `src/app/`, shared and reusable components in `src/components/`, content in `src/content/`, and design tokens in `src/styles/`.

No testing framework is installed yet; it is added in a dedicated issue. Put tests in `tests/`.

## Verification

Before reporting work as complete, run and report honestly:

```bash
npm run lint
npm run format:check
npm run typecheck
npm run build
```

Never report a check as passing unless it was actually run.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
