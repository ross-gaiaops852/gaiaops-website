# GaiaOps Website - Claude Code Project Configuration

## 🎯 Project Overview

**GaiaOps** is a Progressive Operational Excellence platform serving environmental consultancies (5-25 employees). Built with **Astro.js**, the website showcases a 7-track transformation framework with subscription-based services.

### Business Model
- **Target**: Environmental consultancies facing operational chaos
- **Solution**: 7-track Progressive Operational Excellence framework
- **Pricing**: Quick Start ($4,997), Systematic Growth ($2,997/mo), Operations Excellence ($4,997/mo)
- **Framework**: Foundation → Advanced → Complete progression

### 7 Operational Tracks
1. **Multi-Party Coordination** - Managing complex stakeholder ecosystems
2. **Client Relationships** - Building trust through systematic excellence  
3. **Resource Optimization** - Maximizing efficiency across projects
4. **Quality Assurance** - Delivering consistent, compliant results
5. **Business Intelligence** - Data-driven decision making
6. **Growth Systems** - Scalable operational infrastructure
7. **Strategic Advantage** - Long-term competitive positioning

---

## 🛠️ Development Commands

```bash
# Development server
npm run dev

# Production build  
npm run build

# Preview production build
npm run preview

# Lint/type checking (add these as they're implemented)
# npm run lint
# npm run typecheck
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/TrackCard.astro          # Reusable track display cards
│   ├── Header.astro                # Site navigation
│   ├── Footer.astro                # Site footer
│   └── Icon.astro                  # Heroicon management (critical component)
├── layouts/
│   └── BaseLayout.astro            # Base page template
├── pages/
│   ├── solutions/                  # Track-specific landing pages
│   │   ├── multi-party-coordination.astro
│   │   ├── client-relationships.astro
│   │   ├── resource-optimization.astro
│   │   ├── quality-assurance.astro
│   │   ├── business-intelligence.astro
│   │   ├── growth-systems.astro
│   │   └── strategic-advantage.astro
│   └── index.astro                 # Homepage
└── utils/
    └── trackData.ts                # Track data definitions
```

---

## 🎨 Brand System

### Colors
- **Teal Primary**: `#4A9B8B` (`var(--color-teal-primary)`) - Professional stability
- **Navy Primary**: `#1E3A5F` (`var(--color-navy-primary)`) - Authority, depth
- **Orange Accent**: `#E07A47` (`var(--color-orange-accent)`) - Energy, action
- **Supporting**: White (`#FFFFFF`), Off-white (`#F7FAFC`), Dark Gray (`#2D3748`)

### Typography
- **Primary**: Inter (headings, UI elements)
- **Secondary**: Crimson Pro (body text, narrative content)

### Logo Usage
- White on teal/navy backgrounds for contrast
- Teal version on light backgrounds
- Maintain minimum size standards

---

## 🚨 CRITICAL: Icon Implementation

### Icon Component (`src/components/Icon.astro`)
- Uses `iconMap` with pre-defined SVG strings
- SVGs use `stroke="currentColor"` for color inheritance
- **NEVER style Icon component directly**

### ✅ WORKING Method (Always Use This)
```astro
<!-- Wrap in styled span -->
<span class="icon-red">
  <Icon name="clock" type="outline" />
</span>
```
```css
.icon-red {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  color: #ef4444;
  flex-shrink: 0;
}
```

### ❌ FAILED Methods (Never Use)
- Tailwind classes directly on Icon component
- Custom CSS classes on Icon component  
- Direct SVG targeting with CSS
- Generic child selectors

### Verified Icons (Always Available)
```
users, shield-check, chart-bar-square, rocket-launch, trophy, 
arrow-right, presentation-chart-line, cpu-chip, magnifying-glass, 
cog, share, arrow-trending-up, check-circle, clock
```

**Complete Icon Reference**: See `docs/complete-list-available-heroicons.md` for all 316 available icons.

---

## 🧩 Reusable Components & Classes

### Key Components
```astro
// Essential imports for any page
import BaseLayout from '../../layouts/BaseLayout.astro';
import Header from '../../components/Header.astro';
import Footer from '../../components/Footer.astro';
import TrackCard from '../../components/ui/TrackCard.astro';
import Icon from '../../components/Icon.astro';
import { tracks } from '../../utils/trackData.ts';
```

### Standard CSS Classes

#### Layout
- `.container` - Max-width container with padding
- `.section-header` - Centered section headers  
- `.hero-content` - Hero section content wrapper

#### Typography
- `.text-h1, .text-h2, .text-h3, .text-h4` - Heading styles
- `.section-subtitle` - Gray subtitle text
- `.subtitle` - Hero subtitle styling

#### Buttons  
- `.btn` - Base button styling
- `.btn-primary-orange` - Orange primary button
- `.btn-secondary` - Teal outline button
- `.btn-secondary-white` - White outline button

#### Grids
- `.tracks-grid.row-2` - 2-card centered layout
- `.tracks-grid.row-3` - 3-card row layout
- `.pricing-grid` - 3-column pricing layout
- `.synergy-cards-grid` - 2x2 synergy card grid

#### Sections
- `.hero-section` - Hero with gradient background
- `.section-cta` - Mid-page call-to-action sections
- `.final-cta-section` - Bottom gradient CTA
- `.faq-section` - FAQ with accordion functionality

---

## ⚡ Page Building Workflow (Target: 2 Hours)

### Phase 1: Discovery (20 min)
1. **Component Audit**: Check existing components with `grep -r "component-name" src/components/`
2. **Icon Verification**: Confirm icons exist in iconMap
3. **Pattern Search**: Find similar page structures
4. **Branch Setup**: Work on `development` branch

### Phase 2: Implementation (90 min)
1. **Page Shell** (15 min): Import BaseLayout, Header, Footer
2. **Content Sections** (60 min): Reuse existing components/patterns
3. **Responsive Polish** (15 min): Test breakpoints

### Phase 3: Testing (10 min)
- Mobile (375px), Tablet (768px), Desktop (1024px+)
- Navigation functionality
- No console errors

### Success Metrics
- **Component Reuse**: 80%+ existing components
- **CSS Reuse**: 90%+ existing classes  
- **Icon Success**: 100% existing icons

---

## 📐 Standard Measurements

### Spacing System
```css
var(--spacing-1)    /* 8px */
var(--spacing-2)    /* 16px */
var(--spacing-3)    /* 24px */
var(--spacing-4)    /* 32px */
var(--spacing-6)    /* 48px */
var(--spacing-8)    /* 64px */
var(--spacing-12)   /* 96px */
```

### Responsive Breakpoints
```css
/* Mobile: 0-767px (base styles) */
@media (min-width: 768px)   /* Tablet */
@media (min-width: 1024px)  /* Desktop */
```

---

## 🔍 Quick Discovery Commands

```bash
# Find existing components
grep -r "ComponentName" src/components/

# Check icon availability  
grep -A 3 "icon-name" src/components/Icon.astro

# Find CSS classes
grep -r "class-name" src/ --include="*.astro" --include="*.css"

# Find section patterns
grep -r "section-class" src/pages/ --include="*.astro"
```

---

## 🚨 Development Rules

### DO
- ✅ Always wrap Icon components in styled spans
- ✅ Use existing components before building new ones
- ✅ Follow established CSS patterns
- ✅ Test all breakpoints immediately
- ✅ Work on `development` branch

### DON'T  
- ❌ Style Icon components directly
- ❌ Create custom icons without checking existing options
- ❌ Build new grid systems (use existing classes)
- ❌ Skip responsive testing
- ❌ Commit directly to `main` branch

---

## 📊 Content Strategy

### StoryBrand Framework Implementation
- **Hero Sections**: Problem → Solution → Success
- **Customer Journey**: Chaos → Clarity → Control → Confidence
- **Authority Building**: Expertise + Proven Framework + Results

### Track Content Structure
Each operational track page includes:
- Hero section with clear problem/solution positioning
- Challenge description with pain points
- Playbook/methodology overview  
- Transformation metrics and outcomes
- FAQ section addressing common concerns
- Progressive implementation levels

---

## 🔄 Git Workflow

```bash
# Standard development flow
git checkout development
git pull origin development
git checkout -b feature/new-feature-name

# After development
git add .
git commit -m "feat: description"
git push origin feature/new-feature-name

# Merge to development, then to main for deployment
```

### Auto-Deployment
- **Development**: https://dev.gaiaops.io (development branch)
- **Production**: https://gaiaops.io (main branch)

---

## 📋 Project Status

### Current Implementation (Complete)
- ✅ 7 operational track pages with full content
- ✅ Homepage with hero, tracks overview, pricing
- ✅ Responsive design across all breakpoints  
- ✅ Brand-compliant styling and components
- ✅ SEO optimization and performance
- ✅ Icon system with comprehensive styling guide

### Templates Available
- `docs/templates/page-template.astro` - Basic page structure
- `docs/templates/section-templates.astro` - Common section patterns
- `docs/templates/responsive-patterns.css` - Standard breakpoints

---

*Last Updated: September 2025 | Ready for development and expansion*