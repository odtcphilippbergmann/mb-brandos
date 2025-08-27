# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Mercedes-Benz brand showcase application built with React, TypeScript, and Vite. It's a single-page application (SPA) featuring a section-based navigation system with multiple marketing/brand sections like campaigns, AI tools, analytics, and more.

## Development Commands

```bash
npm run dev        # Start development server (Vite)
npm run build      # Build for production
npm run lint       # Run ESLint
npm run preview    # Preview production build locally
```

## Architecture & Structure

### Navigation System
The app uses a **section-based navigation** pattern instead of traditional routing:
- `App.tsx` contains a switch statement that renders different section components based on `activeSection` state
- Navigation state is managed by the `useActiveSection` hook
- Mobile menu state is managed by the `useMobileMenu` hook
- Navigation items are defined in `App.tsx` with their corresponding icons from Lucide React

### Key Components Structure
```
src/
├── App.tsx                    # Main app component with section switching logic
├── main.tsx                   # React entry point
├── components/
│   ├── layout/               # Header, Navigation components
│   ├── sections/             # Main content sections (Hero, Campaigns, etc.)
│   └── ui/                   # Reusable UI components (Button, Card, Input)
├── hooks/                    # Custom React hooks
├── types/                    # TypeScript interfaces
└── utils/                    # Utility functions
```

### Path Aliases
The project uses TypeScript path mapping configured in both `tsconfig.json` and `vite.config.ts`:
- `@components/*` → `./src/components/*`
- `@hooks/*` → `./src/hooks/*`
- `@utils/*` → `./src/utils/*`
- `@lib/*` → `./src/lib/*`
- `@styles/*` → `./src/styles/*`
- `@types/*` → `./src/types/*`
- `@routes/*` → `./src/routes/*`

### State Management Pattern
- Simple useState hooks for UI state (active section, mobile menu)
- Custom hooks for reusable state logic (`useActiveSection`, `useMobileMenu`)
- No external state management library is used

### Styling Approach
- **Tailwind CSS** for utility-first styling
- Dark theme with Mercedes-Benz luxury branding (black/gray color scheme)
- Responsive design with mobile-first approach
- Custom gradient text effects and hover animations

### Component Architecture
- Functional components with TypeScript interfaces
- Props are typed with dedicated interfaces in `@types/`
- Components follow the pattern of: imports → interface → component → export
- UI components (Button, Card) are designed to be reusable with variant props

### Icons & Assets
- Uses **Lucide React** for all icons
- Background images are hosted externally (Pexels)
- No local asset management system in place

## Key Technical Details

### Section Navigation Logic
The app renders different sections based on `activeSection` state rather than using React Router. This creates a single-page experience where content changes without URL changes.

### Mobile Responsiveness
- Desktop: Fixed sidebar navigation (lg:ml-64)
- Mobile: Collapsible menu overlay
- Responsive text sizes and layouts throughout

### TypeScript Configuration
- Strict TypeScript setup with project references
- Separate configs for app (`tsconfig.app.json`) and Node (`tsconfig.node.json`)
- Path mapping for clean imports

### Build & Tooling
- **Vite** for fast development and building
- **ESLint** with TypeScript and React plugins
- **PostCSS** with Autoprefixer for CSS processing
- **Tailwind CSS** for styling

## Development Notes

- No testing framework is currently set up
- No routing library is used (section-based navigation instead)
- No state management library (relies on useState and custom hooks)
- External image dependencies (consider moving to local assets for production)
- Component structure follows atomic design principles (ui → layout → sections)