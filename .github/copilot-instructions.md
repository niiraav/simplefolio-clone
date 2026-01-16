# AI Coding Agent Instructions for simplefolio-clone

## Project Overview
A **portfolio website** for a UX/UI designer (Nirav Arvinda) built with Vite + React + TypeScript, showcasing case studies and projects with rich interactive components.

## Tech Stack & Build
- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS 3 + shadcn/ui components
- **Routing**: React Router (SPA with `/project/:id` dynamic routes)
- **State**: React Query (TanStack Query v5) for potential server state
- **Dev Command**: `bun run dev` (dev server on port 8080)
- **Build**: `bun run build` → `dist/` folder
- **Package Manager**: Bun (lockfile: `bun.lockb`)
- **Linting**: ESLint with TypeScript + React Hooks plugins (disabled some strict rules)

## Architecture & Data Flow

### Key Files & Directories
- **[src/pages/Index.tsx](src/pages/Index.tsx)** - Homepage (landing page with all sections)
- **[src/pages/ProjectDetail.tsx](src/pages/ProjectDetail.tsx)** - Dynamic case study pages
- **[src/data/projects.ts](src/data/projects.ts)** - Single source of truth for all projects/case studies (458 lines, includes metadata, images, detailed sections)
- **[src/components/](src/components/)** - Page sections (HeroSection, CaseStudiesSection, ProjectsCarousel, etc.)
- **[src/components/ui/](src/components/ui/)** - shadcn/ui components (pre-built, don't edit)

### Data Model (Projects)
Projects in [src/data/projects.ts](src/data/projects.ts) have two tiers:

1. **Carousel projects** - Simple list in `ProjectsCarousel.tsx` (id, title, description, image, optional `caseStudyId`)
2. **Detailed case studies** - Full project objects with:
   - `id`, `title`, `description`, `image`, `role`, `timeline`, `tools`, `overview`, `liveUrl`
   - **`sections`** array (Challenge, Discovery, Strategy, Solution, Execution)
   - **`impacts`** array (metrics like "Speed: 40%")
   - **`galleryImages`** within sections for carousel displays

### Component Pattern
- **Index.tsx** composes all page sections vertically
- **ProjectDetail.tsx** uses `useParams` to fetch project by ID, handles "not found" gracefully
- Sections are self-contained, stateless functional components
- Navigation: smooth scroll within homepage, React Router links for project detail pages

## Styling Conventions

### Tailwind Setup
- Custom fonts: `DM Sans` (sans), `Playfair Display` (serif)
- CSS variables for colors (see [tailwind.config.ts](tailwind.config.ts#L17-L50))
- Max-width constraint: `max-w-[510px]` is used for content centering (custom, not standard Tailwind)
- Spacing: Use `pt-28`, `pb-20`, `py-[120px]` for section padding

### Color System
- `background`, `foreground` for text/bg
- `primary`, `secondary`, `accent`, `muted` for semantic colors
- Borders use `border` token; shadows via `shadow-nav` (custom)
- Button variants: `hero`, `nav`, `navActive` (see shadcn Button component)

### Example Component Layout
```tsx
// HeroSection pattern: max-width container, centered, with semantic Tailwind classes
<section className="max-w-[510px] mx-auto px-4 py-[120px] flex flex-col">
  <h1 className="font-serif text-4xl md:text-5xl font-medium">
  <p className="text-muted-foreground">
  <Button variant="hero">
```

## Development Workflows

### Adding a New Project
1. Add object to `projects` array in [src/data/projects.ts](src/data/projects.ts):
   - Import image assets from `/src/assets/`
   - Add `id` (must match route if case study)
   - Include `caseStudyId` if it should link to detailed page
2. Images are imported as modules (not URLs)—ensure they're in `src/assets/`
3. Test routing: `/project/:id` should render `ProjectDetail.tsx`

### Adding a New Section Component
1. Create `src/components/NewSection.tsx` (e.g., `ExperienceSection.tsx`)
2. Export as default functional component
3. Add to imports in [src/pages/Index.tsx](src/pages/Index.tsx)
4. Place `<NewSection />` in JSX in desired order
5. Add `id="section-name"` if needs scroll-to navigation (navbar targets these)

### Image Handling
- Images are **imported as modules**, not referenced as strings
- Use `<img alt="descriptive text" src={importedImage} />`
- For multiple images in sequence, use `embla-carousel-react` (see ProjectsCarousel, SectionImageCarousel)
- Images stored in `public/lovable-uploads/` or `src/assets/`

## Important Patterns & Gotchas

### Scroll-to Navigation
```tsx
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
// Target sections must have matching id: <section id="contact">
```

### Project Lookup
```tsx
import { getProjectById } from "@/data/projects";
const project = getProjectById(id);  // Returns full project object or undefined
```

### Dynamic Routes
- Path: `/project/:id` (id is string, e.g., "gophr-logistics")
- ProjectDetail handles "not found" with fallback UI + link home
- No trailing slashes

### Accessibility Notes
- Large buttons for touch targets (see HeroSection avatar, CTA buttons)
- High contrast text via semantic color tokens
- Typography hierarchy: serif for headings, sans for body
- Alt text required on all images

### ESLint Rules
- React Hooks warnings are enforced
- `react-refresh/only-export-components` = warn (some components can have const exports)
- `@typescript-eslint/no-unused-vars` = off (intentionally disabled for flexibility)

## File Aliases
- `@/` = `src/` (configured in tsconfig.json and vite.config.ts)
- Import components: `@/components/HeroSection`
- Import utilities: `@/lib/utils`

## Common Commands
```bash
bun run dev       # Start dev server (port 8080)
bun run build     # Build for production
bun run lint      # Run ESLint
bun run preview   # Preview production build locally
```

## Merging & Deployment
- Changes are reflected in Lovable.dev on push
- Custom domain setup via Lovable admin panel
- All components use shadcn/ui + Tailwind (no additional UI libraries)

---
**Last Updated**: January 2026  
**Key Maintainer Context**: This is a personal portfolio site with rich case study narratives; preserve storytelling tone and visual hierarchy when adding content.
