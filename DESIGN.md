---
name: Editorial Dev
colors:
  surface: '#fff7fb'
  surface-dim: '#e4d6e3'
  surface-bright: '#fff7fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#feeffd'
  surface-container: '#f8eaf7'
  surface-container-high: '#f2e4f2'
  surface-container-highest: '#ecdeec'
  on-surface: '#201922'
  on-surface-variant: '#4e4449'
  inverse-surface: '#362e38'
  inverse-on-surface: '#fbecfa'
  outline: '#807479'
  outline-variant: '#d1c3c9'
  surface-tint: '#765469'
  primary: '#5f4054'
  on-primary: '#ffffff'
  primary-container: '#79576c'
  on-primary-container: '#fdd1ea'
  inverse-primary: '#e5bbd3'
  secondary: '#7a5364'
  on-secondary: '#ffffff'
  secondary-container: '#ffcce0'
  on-secondary-container: '#7b5464'
  tertiary: '#55454b'
  on-tertiary: '#ffffff'
  tertiary-container: '#6d5d63'
  on-tertiary-container: '#edd8de'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd8ed'
  primary-fixed-dim: '#e5bbd3'
  on-primary-fixed: '#2c1324'
  on-primary-fixed-variant: '#5c3d51'
  secondary-fixed: '#ffd8e6'
  secondary-fixed-dim: '#eab9cc'
  on-secondary-fixed: '#2f1220'
  on-secondary-fixed-variant: '#603c4c'
  tertiary-fixed: '#f3dde4'
  tertiary-fixed-dim: '#d6c1c8'
  on-tertiary-fixed: '#24181d'
  on-tertiary-fixed-variant: '#524348'
  background: '#fff7fb'
  on-background: '#201922'
  surface-variant: '#ecdeec'
typography:
  display-hero:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '600'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '500'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-code-lg:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-code-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-lg: 2.5rem
  margin: 1.25rem
  margin-md: 2.5rem
  margin-lg: 5rem
  space-xs: 0.375rem
  space-sm: 0.75rem
  space-md: 1.25rem
  space-lg: 2rem
  space-xl: 3.5rem
---

## Brand & Style
The design system establishes a balance between high-end editorial elegance and technical rigor. Designed for a full-stack engineer, it discards sterile, cliché developer aesthetics in favor of a bespoke, feminine, high-contrast publishing aesthetic. 

The visual voice is poise, precision, and modern craftsmanship. It combines the tactility of printed monographs with sharp developer tools. Arched image frames, delicate glass overlays, pill-shaped micro-interactions, and refined typography signal taste, architectural clarity, and product maturity.

## Colors
The palette relies on warm, tinted surfaces rather than pure grays or stark whites. 

- **Background Canvas**: Ivory (`#FAF7F5`) serves as the foundational surface layer.
- **Primary Accent (`#79576C`)**: Mauve; used for primary actions, prominent labels, active navigation states, and headline emphasis.
- **Secondary Accent (`#B88B9D`)**: Dusty rose; handles hover states, secondary highlights, decorative lines, and soft structural frames.
- **Tertiary Accent (`#EED8DF`)**: Blush pink; provides soft container fills, pill tag backgrounds, glass highlights, and subtle borders.
- **Neutral Foreground (`#302832`)**: Dark plum; replaces harsh carbon black to anchor typography with deep editorial contrast while maintaining chromatic harmony.
- **Surface Elevation Containers**: Tinted glass layers derived from Ivory and Blush (`rgba(250, 247, 245, 0.75)` and `rgba(238, 216, 223, 0.35)`) for cards and floating bars.

## Typography
Typographic hierarchy is built around an intentional three-way pairing:

1. **Playfair Display**: Used exclusively for large editorial headlines, section titles, and pull quotes. It brings bookish luxury and narrative presence.
2. **Inter**: Used for paragraphs, long-form project case studies, and résumé body text to provide neutral, highly legible reading.
3. **JetBrains Mono**: Used for technical metadata, commit dates, architecture tags, code excerpts, and UI utility badges. It injects full-stack authenticity into the feminine editorial layout.

## Layout & Spacing
The layout follows a 12-column fluid grid governed by generous vertical cadence and asymmetrical margins typical of editorial publications.

- **Breakpoints**: Mobile (320px–767px, 4 columns, `margin: 1.25rem`), Tablet (768px–1023px, 8 columns, `margin-md: 2.5rem`), Desktop (1024px+, 12 columns with max container width 1280px, `margin-lg: 5rem`).
- **Rhythm**: Large section dividers prefer empty canvas space (`space-xl` and above) paired with ultra-fine hairline dividers (`1px` tinted in `#EED8DF`) instead of solid borders.
- **Reflow**: Editorial side headers lock beside case-study narratives on desktop and gracefully collapse above content blocks on screens below 768px.

## Elevation & Depth
Depth relies on translucent glass planes and warm tinted light rather than heavy dark shadows:

- **Surface Glassmorphism**: Floating headers and toolbars use `background: rgba(250, 247, 245, 0.82)` with `backdrop-filter: blur(16px)` and a subtle `1px` inner border of `rgba(238, 216, 223, 0.6)`.
- **Soft Ambient Shadows**: Cards and hover states cast diffused, tinted shadows using the dark plum hue at low opacity: `0 16px 36px -12px rgba(48, 40, 50, 0.08)`.
- **Ghost Layering**: Elements achieve stack depth via tonal stepped backgrounds: starting from `#FAF7F5` (Base Canvas), moving to `#FFFFFF` (Resting Surface Card), and floating with `rgba(238, 216, 223, 0.25)` (Raised/Interactive elements).

## Shapes
The shape language marries organic softness with architectural curves. 

- **Level 3 (Pill-shaped)**: Buttons, search inputs, tags, and category chips utilize full pill geometries (`rounded-full` / `border-radius: 9999px`) to reinforce the fluid, feminine feel.
- **Arched Frames**: Case study project previews, profile portraits, and hero vignettes feature an asymmetrical arched shape (`border-radius: 120px 120px 1.5rem 1.5rem` on desktop; `80px 80px 1rem 1rem` on mobile).
- **Cards & Modals**: Container surfaces maintain rounded corners with `1.5rem` to `2rem` radii, complemented by ultra-thin `1px` borders in Blush pink (`#EED8DF`).

## Components

### Buttons
- **Primary Pill**: Filled Mauve (`#79576C`) background, Ivory (`#FAF7F5`) text, Inter font (`14px`, medium weight), rounded-full shape. Hover state shifts to Dark Plum (`#302832`) with a subtle `0 6px 20px -4px rgba(121, 87, 108, 0.35)` shadow.
- **Secondary / Glass Pill**: Frosted Ivory fill (`rgba(250, 247, 245, 0.7)`), 1px border in Dusty Rose (`#B88B9D`), text in Mauve (`#79576C`). On hover, background shifts to solid Blush Pink (`#EED8DF`).

### Badges & Tech Chips
- **Tech Stack Badges**: Pill-shaped capsules using JetBrains Mono (`11px`). Background is soft blush (`rgba(238, 216, 223, 0.4)`), text is Dark Plum (`#302832`), and a subtle border of `rgba(184, 139, 157, 0.4)`.

### Project & Résumé Cards
- **Editorial Project Card**: Background `#FFFFFF` with hairline border in `#EED8DF`, soft 1.5rem radius, and an arched image frame at the top. On hover, the card floats `-4px` with a rose-plum ambient shadow.
- **Résumé Experience Timeline**: Minimalist vertical rule (`1px` in `#EED8DF`) connecting items. Company and role titles set in Playfair Display, dates and tech stacks formatted in JetBrains Mono pill tags.

### Inputs & Forms
- **Contact Inputs**: Rounded-full pill inputs for single-line text; 1.5rem rounded corners for message textareas. Ivory background with a `1px` border of `#EED8DF`. When focused, border transitions to Mauve (`#79576C`) with a glowing `0 0 0 3px rgba(184, 139, 157, 0.2)` ring.

### Checkboxes & Radio Controls
- **Selection Elements**: Custom rounded indicators; checked state fills with Mauve (`#79576C`) featuring a crisp Ivory check icon or inner radio dot.

### Code Blocks & Snippets
- **Developer Display Snippets**: Dark Plum (`#302832`) container surface with a top window bar containing muted Blush Pink dots. JetBrains Mono typography with rose-tinted syntax highlighting accents (`#EED8DF`, `#B88B9D`, `#FAF7F5`).