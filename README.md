# hey-dev
# Bento Grid Portfolio
## Design & Development Specification

**Stack:** React.js + Tailwind CSS + Framer Motion  
**Design:** Dark Bento Grid / Developer Portfolio  
**Primary goal:** Showcase software engineering skills, projects, experience, achievements, and personality in a visually strong but professional single-page portfolio.

---

# 1. Overall Design Direction

### Visual Style

- Dark premium developer portfolio
- Bento-grid based layout
- Minimal glassmorphism
- Subtle gradients
- Soft borders
- Large rounded corners
- Strong typography hierarchy
- Purple as the primary accent
- Small amounts of blue/green/yellow for technology/achievement accents
- Smooth Framer Motion animations
- No excessive animations or distracting effects

### Design Keywords

```text
Premium
Minimal
Modern
Developer-focused
Dark
Technical
Interactive
Clean
Responsive
```

---

# 2. Page Structure

The desktop page will be organized into a Bento Grid:

```text
┌──────────────────────────────────────────────────────────────┐
│                         NAVBAR                               │
├────────────────────────────────┬─────────────────────────────┤
│                                │                             │
│             HERO               │          PROFILE            │
│                                │           IMAGE             │
│                                │                             │
├────────────────────────────────┼─────────────────────────────┤
│                                │                             │
│             ABOUT              │         TECH STACK           │
│                                │                             │
├────────────────────────────────┴──────────────┬──────────────┤
│                                               │              │
│               FEATURED PROJECT               │   PROJECT 2   │
│                                               │              │
│                                               ├──────────────┤
│                                               │   PROJECT 3  │
├────────────────────────────────┬──────────────┴──────────────┤
│                                │                             │
│          EXPERIENCE            │        ACHIEVEMENTS         │
│                                │                             │
├────────────────────────────────┼─────────────────────────────┤
│                                │                             │
│            QUOTE               │        CONTACT / CTA        │
│                                │                             │
└────────────────────────────────┴─────────────────────────────┘
```

On mobile, cards become a single-column flow.

---

# 3. Required Components

## Global Components

```text
App
Navbar
BentoGrid
BentoCard
SectionHeading
SocialLinks
AnimatedText
Button
```

## Content Components

```text
Hero
Profile
About
TechStack
Projects
FeaturedProject
ProjectCard
Experience
Achievements
Quote
Contact
Footer
```

Recommended component hierarchy:

```text
App
│
├── Navbar
│
└── BentoGrid
    │
    ├── Hero
    ├── Profile
    ├── About
    ├── TechStack
    ├── FeaturedProject
    ├── ProjectCard
    ├── ProjectCard
    ├── Experience
    ├── Achievements
    ├── Quote
    └── Contact
```

---

# 4. Bento Card System

Instead of styling every card independently, create one reusable component.

### BentoCard

Responsibilities:

- Background
- Border
- Border radius
- Padding
- Hover effect
- Optional gradient
- Optional glow
- Optional animation

Example API:

```jsx
<BentoCard
  size="large"
  hover
  glow
>
  ...
</BentoCard>
```

Possible sizes:

```text
small
medium
large
featured
full
```

---

# 5. Navbar

### Contents

Left:

```text
DD
```

Center:

```text
Home
About
Projects
Skills
Contact
```

Right:

```text
Let's Talk →
```

### Behavior

Desktop:

```text
Logo ───── Navigation ───── CTA
```

Mobile:

```text
Logo ───────────────── Menu
```

### Features

- Sticky
- Transparent/dark background
- Blur backdrop
- Active section indicator
- Smooth scrolling
- Mobile menu
- CTA scrolls to contact

---

# 6. Hero Card

This is the most important card.

### Content

```text
Hey, I'm

Dev Dhama

Software Engineer & Problem Solver

I build scalable web applications, enjoy solving
complex problems, and love turning ideas into
real-world products.

[View My Work]
[Download Resume]

GitHub
LinkedIn
Twitter/X
Email
```

### Visual hierarchy

```text
Small greeting
      ↓
Large name
      ↓
Professional title
      ↓
Short description
      ↓
CTA buttons
      ↓
Social links
```

### Animation

On page load:

```text
Greeting       → fade + slide
Name           → fade + slide
Description    → fade
Buttons        → stagger
Social links   → stagger
```

---

# 7. Profile Card

Large portrait/image card.

### Required asset

A high-quality professional photo of Dev.

Recommended:

```text
Aspect ratio: 1:1 or 4:5
Resolution: minimum 1000 × 1000
Background: preferably dark/simple
```

### Visual treatment

- Image fills card
- Rounded corners
- Slight gradient overlay
- Optional purple ambient glow
- Small handwritten/creative text overlay

Example:

```text
        Build
        Learn
        Improve
        Repeat
             ↘
              [PHOTO]
```

---

# 8. About Card

### Content

Short professional introduction.

Suggested structure:

```text
About Me

Short 2–4 line introduction

I enjoy building scalable systems,
solving challenging problems and
learning new technologies.

──────────────

2+        50+       5+
Years     Problems  Projects
Learning  Solved    Built
```

### Stats

Keep these data-driven.

```js
const stats = [
  { value: "2+", label: "Years Learning" },
  { value: "50+", label: "Problems Solved" },
  { value: "5+", label: "Projects Built" }
];
```

Actual values should be replaced with verified portfolio numbers.

---

# 9. Tech Stack Card

Display technologies using icons.

### Possible technologies

Frontend:

```text
React
JavaScript
HTML
CSS
Tailwind CSS
```

Backend:

```text
Node.js
Express.js
Java
Spring Boot
```

Database:

```text
MongoDB
PostgreSQL
MySQL
Redis
```

Tools:

```text
Git
GitHub
Docker
Postman
Linux
```

### Icon source

Use `react-icons` wherever possible.

Avoid downloading random SVGs manually unless necessary.

---

# 10. Projects Section

Projects should be one of the strongest parts of the portfolio.

### Project categories

```text
Featured Project
Project 2
Project 3
More Projects
```

---

# 11. Featured Project Card

This should be larger than the other project cards.

Example:

```text
┌─────────────────────────────────────────────┐
│ 📁 Featured Project                         │
│                                             │
│ LinkHub                         [Preview]   │
│                                             │
│ A full-stack URL shortening platform        │
│ with analytics, QR codes and user           │
│ management.                                 │
│                                             │
│ React   Node.js   MongoDB                   │
│                                             │
│ GitHub ↗                 Live Demo ↗        │
└─────────────────────────────────────────────┘
```

### Required assets

For every major project:

```text
Project screenshot
Project logo/icon (optional)
GitHub URL
Live URL
Tech stack
Short description
```

---

# 12. Project Card

Smaller projects can use compact cards.

```text
┌───────────────────────────────┐
│ 🟣 TaskFlow              ↗    │
│                               │
│ Collaborative task management │
│ application.                  │
│                               │
│ React • Node • MongoDB        │
└───────────────────────────────┘
```

Hover:

```text
Card moves slightly upward
        +
Border becomes brighter
        +
Subtle glow
        +
Arrow moves →
```

---

# 13. Experience Card

Use a timeline.

```text
Experience

● Software Engineer / Intern
│ Company
│ Date
│
│ Description
│
● Open Source Contributor
│ Project
│ Date
│
│ Description
```

Each experience entry should contain:

```text
Role
Company
Duration
Location (optional)
Description
Technologies
```

---

# 14. Achievements Card

Compact list.

Example:

```text
🏆 Solved 500+ DSA Problems
   LeetCode

⚡ Hackathon Finalist
   Hackathon 2024

🎓 Dean's List
   Academic Excellence
```

Possible additions:

```text
Competitive programming
Certifications
Hackathons
Open-source contributions
Academic achievements
Coding milestones
```

Only include achievements that are genuinely strong and verifiable.

---

# 15. Quote Card

A small personality card.

Example:

> "Stay curious. Keep building."

Could alternatively use a personal developer philosophy.

Design:

```text
“
Stay curious.
Keep building.

              — Dev
```

Keep this card visually simple.

---

# 16. Contact Card

Strong final CTA.

### Content

```text
Let's Build Something Together

Open to opportunities, collaborations,
and interesting ideas.

[Get In Touch →]
```

Possible secondary information:

```text
Email
LinkedIn
GitHub
Location
```

The CTA should open the preferred contact method.

---

# 17. Footer

Keep the footer minimal.

```text
© 2026 Dev Dhama

Built with React • Tailwind • Framer Motion

GitHub   LinkedIn   Email
```

Optional:

```text
Designed & Built by Dev
```

---

# 18. Required Links

We need to collect these before final implementation.

## Personal

```text
Portfolio URL
Email
GitHub
LinkedIn
Twitter/X
```

## Professional

```text
Resume PDF
LinkedIn
Email
```

## Projects

For every project:

```text
GitHub repository
Live deployment
Optional case-study page
```

### Link checklist

```text
[ ] GitHub
[ ] LinkedIn
[ ] Email
[ ] Resume
[ ] Project 1 GitHub
[ ] Project 1 Live
[ ] Project 2 GitHub
[ ] Project 2 Live
[ ] Project 3 GitHub
[ ] Project 3 Live
```

---

# 19. Required Images

## Profile

```text
profile.webp
```

Recommended:

```text
1000 × 1000+
WebP
Compressed
```

## Project screenshots

```text
linkhub.webp
taskflow.webp
devblog.webp
```

Recommended:

```text
16:9
WebP
1200 × 750 approximately
```

## Optional

```text
project-logo.svg
company-logo.svg
achievement-icons.svg
```

Do not overload the site with decorative images.

---

# 20. Asset Folder

Recommended structure:

```text
public/
└── assets/
    ├── images/
    │   ├── profile.webp
    │   ├── projects/
    │   │   ├── linkhub.webp
    │   │   ├── taskflow.webp
    │   │   └── devblog.webp
    │   │
    │   └── experience/
    │       └── ...
    │
    ├── icons/
    │   └── ...
    │
    └── resume/
        └── Dev_Dhama_Resume.pdf
```

---

# 21. Fonts

Use **Inter** as the primary font.

```text
Font: Inter
```

Recommended weights:

```text
400 → Body
500 → Labels
600 → Headings
700 → Main headings
800 → Hero/name
```

Optional display font:

```text
Space Grotesk
```

Use it only if we want a more technical/developer-oriented heading style.

### Recommended final combination

```text
Body: Inter
Headings: Inter / Space Grotesk
```

Avoid using more than two font families.

---

# 22. Color System

The base theme should remain dark.

### Background

```text
Primary Background
#09090B
```

```text
Secondary Background
#0F0F12
```

### Cards

```text
Card
#111116
```

```text
Card Hover
#15151C
```

### Borders

```text
Default Border
rgba(255,255,255,0.08)
```

```text
Hover Border
rgba(168,85,247,0.35)
```

### Text

```text
Primary
#F4F4F5
```

```text
Secondary
#A1A1AA
```

```text
Muted
#71717A
```

### Primary Accent

```text
Purple
#A855F7
```

```text
Light Purple
#C084FC
```

### Gradient

```text
Purple → Violet

#A855F7
      ↓
#7C3AED
```

### Optional accents

```text
Green
#22C55E

Blue
#3B82F6

Yellow
#EAB308
```

These should be used sparingly.

---

# 23. Border Radius

Bento cards should feel soft and modern.

```text
Small: 12px
Medium: 16px
Large: 20px
```

Recommended:

```text
rounded-2xl
```

for most cards.

Featured cards can use:

```text
rounded-3xl
```

---

# 24. Shadows & Glow

Avoid heavy shadows.

Default:

```text
Subtle dark shadow
```

Hover:

```text
Purple ambient glow
```

Example concept:

```text
box-shadow:
0 0 40px rgba(168, 85, 247, 0.08);
```

Glow should be extremely subtle.

---

# 25. Grid System

Desktop:

```text
4 columns
```

Tablet:

```text
2 columns
```

Mobile:

```text
1 column
```

Example:

```text
grid-cols-1
md:grid-cols-2
xl:grid-cols-4
```

Recommended row height:

```text
auto-rows-[180px]
```

Cards can span multiple rows.

Example:

```text
Hero:
col-span-2
row-span-2

Profile:
col-span-2
row-span-2

About:
col-span-2

Tech:
col-span-2
```

The exact spans can be adjusted during implementation to match the final viewport.

---

# 26. Responsive Breakpoints

### Mobile

```text
< 768px
```

- One column
- Smaller typography
- Smaller padding
- Navbar becomes hamburger
- Project cards stack
- Hero image moves below/above hero depending on composition

### Tablet

```text
768px – 1279px
```

- Two-column grid
- Reduced card spans

### Desktop

```text
1280px+
```

- Full 4-column Bento layout

---

# 27. Animation System

Use Framer Motion.

## Page entrance

Cards should appear using staggered animation.

```text
opacity: 0 → 1
y: 20 → 0
```

Duration:

```text
0.4 – 0.7 sec
```

## Hover

```text
scale: 1.01
y: -2 / -4px
```

Keep it subtle.

## Project cards

Image:

```text
scale: 1 → 1.04
```

Arrow:

```text
x: 0 → 4px
```

## Scroll reveal

Use viewport-based animations.

Avoid animating every single text element independently.

---

# 28. Interaction Requirements

### Navbar

```text
Home → Hero
About → About
Projects → Projects
Skills → Tech Stack
Contact → Contact
```

Use smooth scrolling.

### CTA

```text
View My Work → Projects
Let's Talk → Contact
Get In Touch → Email/contact
Download Resume → Resume PDF
```

### Project

```text
GitHub → Repository
Live Demo → Deployment
```

---

# 29. Accessibility

Must include:

```text
alt text for images
aria-label for icon-only buttons
keyboard navigation
visible focus states
sufficient text contrast
semantic HTML
```

Do not make important information accessible only through hover.

---

# 30. Performance

Images:

```text
WebP
Compressed
Lazy loaded where appropriate
```

Avoid:

```text
Huge background videos
Unnecessary animation libraries
Massive SVGs
Heavy image assets
```

Framer Motion animations should preferably use transform/opacity.

---

# 31. SEO

Add:

```text
<title>
<meta description>
Open Graph metadata
favicon
canonical URL
```

Suggested title:

```text
Dev Dhama — Software Engineer
```

Suggested description:

```text
Software engineer building scalable web applications
and solving challenging problems.
```

These can be refined later.

---

# 32. Favicon / Branding

Create a simple:

```text
DD
```

mark.

Possible favicon:

```text
┌─────┐
│ DD  │
└─────┘
```

Use the same branding in:

```text
Navbar
Favicon
OG image
Resume
Optional loading screen
```

---

# 33. Data-Driven Architecture

Content should NOT be hardcoded throughout components.

Create:

```text
src/data/
├── projects.js
├── experience.js
├── achievements.js
├── techStack.js
└── socialLinks.js
```

Example:

```js
export const projects = [
  {
    title: "LinkHub",
    descript
