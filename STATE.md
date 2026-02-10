# Riaz University — Build State

## Current Phase: 8
## Status: COMPLETE

### Phase 1: Project Scaffolding
- [x] Create Vite + React + TypeScript project
- [x] Install dependencies (tailwindcss, react-router, i18next, react-i18next, gray-matter, marked)
- [x] Create folder structure
- [x] Create site.config.ts
- [x] Create robots.txt
- [x] Verify dev server starts

### Phase 2: Design System & Base Components
- [x] Configure Tailwind (colors, fonts, spacing)
- [x] Set up Google Fonts loading
- [x] Build Layout component
- [x] Build Nav component (with mobile hamburger)
- [x] Build Footer component
- [x] Build Hero component
- [x] Build PageContent component
- [x] Build ProjectCard component
- [x] Build LanguageToggle component
- [x] Build ComingSoon badge

### Phase 3: Content Pipeline
- [x] Set up Markdown processing (Vite plugin or custom solution)
- [x] Create content type definitions
- [x] Write all English Markdown files
- [x] Translate all Markdown files to Korean
- [x] Create useContent hook
- [x] Verify hot reload works with Markdown changes

### Phase 4: Routing & i18n
- [x] Configure React Router with locale prefix
- [x] Set up i18next with EN/KO UI strings
- [x] Create useLocale hook
- [x] Wire LanguageToggle to route switching
- [x] Verify all routes work in both languages

### Phase 5: Page Implementation
- [x] Build HomePage (hero + intro + project cards)
- [x] Build PhilosophyPage
- [x] Build StoneSoupPage
- [x] Build BookPage
- [x] Build MorningRitualPage
- [x] Build WanderingTablePage
- [x] Build HowILearnedEnglishPage

### Phase 6: Images
- [x] Source placeholder images (browser MCP or fallback URLs)
- [x] Save images to public/images/
- [x] Verify all hero images display correctly

### Phase 7: Deployment Setup
- [x] Create GitHub Actions workflow
- [x] Create _redirects for SPA routing
- [x] Verify build completes without errors
- [x] Document manual steps for owner

### Phase 8: Review & Polish
- [x] Visual review of all pages (desktop)
- [x] Visual review of all pages (mobile width)
- [x] Check both languages
- [x] Verify all internal links work
- [x] Verify language toggle works on every page
- [x] Final cleanup (remove console.logs, TODO comments, etc.)

## Decisions Log
- Used custom Vite plugin with gray-matter + marked for markdown processing
- Tailwind CSS v4 with @tailwindcss/vite plugin
- Custom @theme block in index.css for design tokens
- Eager import.meta.glob for content loading (all content loaded at build time)

## Issues (Resolved)
- Korean markdown files had `<!-- DRAFT TRANSLATION -->` comment before frontmatter, breaking gray-matter parsing — removed comments
- Unused imports in useContent.ts (useState, useEffect) — removed
- Unused parameter in vite.config.ts (code → _code) — renamed
