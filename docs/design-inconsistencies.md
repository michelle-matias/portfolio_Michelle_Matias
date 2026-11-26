# Design inconsistencies

Inconsistencies found between `DESIGN.md` (front-matter tokens and prose) and the page mockups in `docs/design/`. They are documented here, not resolved: `DESIGN.md` is kept unchanged, and the resolution belongs to the dedicated design-system issue.

**Working rule until resolved:** the front-matter tokens in `DESIGN.md` are the preferred reference, because the mockups match them (see "Evidence" below).

## 1. Colours: front-matter vs prose

| Role             | Front-matter token                 | Prose value                  |
| ---------------- | ---------------------------------- | ---------------------------- |
| Canvas           | `background` / `surface` `#fff7fb` | Ivory `#FAF7F5`              |
| Primary accent   | `primary` `#5f4054`                | Mauve `#79576C`              |
| Secondary accent | `secondary` `#7a5364`              | Dusty rose `#B88B9D`         |
| Tertiary accent  | `tertiary` `#55454b` (dark)        | Blush pink `#EED8DF` (light) |
| Foreground       | `on-surface` `#201922`             | Dark plum `#302832`          |
| Dark surface     | `inverse-surface` `#362e38`        | Dark plum `#302832`          |

Notes:

- The prose primary `#79576C` equals the front-matter `primary-container`, not `primary`.
- The prose tertiary is a light blush, while the front-matter `tertiary` is a dark brown-grey. They play opposite roles.
- The prose accents `#B88B9D` and `#EED8DF`, and the translucent glass values (`rgba(250, 247, 245, …)`, `rgba(238, 216, 223, …)`), have no front-matter equivalent.

## 2. Evidence from the mockups

Pixel values sampled from the mockups match the front-matter tokens, not the prose:

| Mockup          | Area         | Sampled colour | Matches                  |
| --------------- | ------------ | -------------- | ------------------------ |
| `home_page.png` | Page canvas  | `#fff7fb`      | `background` / `surface` |
| `contact.png`   | Page canvas  | `#fff7fb`      | `background` / `surface` |
| `resume.png`    | Page canvas  | `#fff7fb`      | `background` / `surface` |
| `home_page.png` | Footer       | `#362e38`      | `inverse-surface`        |
| `About_me.png`  | Section fill | `#feeffd`      | `surface-container-low`  |

The ivory canvas `#FAF7F5` from the prose does not appear in the sampled areas.

## 3. Tokens missing from the front-matter

- Arched image-frame radii (`120px 120px 1.5rem 1.5rem` desktop, `80px 80px 1rem 1rem` mobile) exist only in the prose.
- Elevation (shadows, glass blur and borders) exist only in the prose.
- The primary and secondary button font (Inter, 14px, medium) has no matching typography token (`body-md` is 15px).

Spacing, breakpoints and typography are consistent between the front-matter and the prose.

## 4. Mockups vs project requirements

- **Placeholder identity:** the mockups use a fictional person ("Elena Laurent"), fictional experience, certifications, metrics, projects and links. None of this may be reused; real content must come from the site owner.
- **Languages:** the mockups show an EN / FR toggle. The site must support English and Portuguese (pt-PT).
- **Theme toggle:** the mockups show a dark-mode toggle, but `DESIGN.md` defines no dark palette.
- **Navigation labels:** the header lists "Home, About, Projects, Case Study, Skills, Résumé, Contact", while the footer uses different labels ("About the Architect", "Selected Works", "Deep-Dive Case Study", "Technical Index", "Curriculum Vitae"). "Case Study" appears as a top-level item although case studies live at `/projects/[slug]`.
- **Header artefacts:** a broken "Monogram" image and a "Get in Touch" button with an avatar appear in every mockup.
- **Fixed-width exports:** the mockups are exported at different widths, so exact desktop and mobile layouts must be confirmed against `DESIGN.md` breakpoints.

## Follow-up

Resolve in the design-system issue: confirm the canonical palette, define the missing tokens, decide the footer and navigation labels, and define the dark palette (or defer dark mode) before implementing the language and dark-mode issues.
