# Quick Reference Card
**Last Updated**: October 9, 2025  
**Version**: 2.0

**Purpose**: Fast access to commonly-used patterns, colors, icons, and classes during Claude Code sessions.

---

## 🎨 Brand Colors (60/30/10 Distribution)

**See complete palette**: `docs/core/brand_guidelines_claude_code.md`

### Quick Copy-Paste:
```css
/* Primary (60% usage) */
#2A7F7E  /* Ocean Teal - backgrounds, CTAs, brand elements */

/* Secondary (30% usage) */
#1B365D  /* Systematic Blue - headers, authority */

/* Accent (10% usage - CTAs only) */
#D97642  /* Impact Orange - high-priority CTAs */

/* Text & Neutrals */
#2C3E50  /* Charcoal - body text */
#F8F9FA  /* Cloud Gray - backgrounds */
#FFFFFF  /* White - primary background */
```

### CSS Variables (if available):
```css
var(--color-ocean-teal)        /* #2A7F7E */
var(--color-systematic-blue)   /* #1B365D */
var(--color-impact-orange)     /* #D97642 */
var(--color-charcoal)          /* #2C3E50 */
var(--color-cloud-gray)        /* #F8F9FA */
var(--color-white)             /* #FFFFFF */
```

---

## ✅ Verified Icons (Always Use These)

**See complete list**: `docs/reference/complete-list-available-heroicons.md`

### Most Commonly Used:
```astro
<!-- Navigation & UI -->
<Icon name="bars-3" type="outline" />              <!-- Hamburger menu -->
<Icon name="x-mark" type="outline" />              <!-- Close button -->
<Icon name="chevron-down" type="outline" />        <!-- Dropdown indicator -->
<Icon name="arrow-right" type="outline" />         <!-- Forward/Next -->

<!-- Business & Features -->
<Icon name="users" type="outline" />               <!-- Team/People -->
<Icon name="chart-bar-square" type="outline" />    <!-- Analytics -->
<Icon name="rocket-launch" type="outline" />       <!-- Growth -->
<Icon name="shield-check" type="outline" />        <!-- Security/Quality -->
<Icon name="cog" type="outline" />                 <!-- Settings/Systems -->

<!-- Actions & Status -->
<Icon name="check-circle" type="outline" />        <!-- Success/Complete -->
<Icon name="clock" type="outline" />               <!-- Time/Schedule -->
<Icon name="magnifying-glass" type="outline" />    <!-- Search -->
<Icon name="share" type="outline" />               <!-- Share/Collaborate -->

<!-- Tracks-Specific -->
<Icon name="presentation-chart-line" type="outline" />  <!-- Business Intelligence -->
<Icon name="cpu-chip" type="outline" />                 <!-- Technology/Systems -->
<Icon name="trophy" type="outline" />                   <!-- Achievement -->
<Icon name="arrow-trending-up" type="outline" />        <!-- Growth/Progress -->
```

---

## 🎨 Icon Styling (CRITICAL - See Full Guide)

**Full details**: `docs/reference/heroicon-styling-guide.md`

### ⚠️ ONLY METHOD THAT WORKS:

```astro
<!-- Always wrap icons in styled spans -->
<span class="icon-teal">
  <Icon name="users" type="outline" />
</span>
```

```css
/* Define icon wrapper styles */
.icon-teal {
  display: inline-block;
  width: 1rem;          /* 16px - most common */
  height: 1rem;
  color: #2A7F7E;       /* Ocean Teal */
  flex-shrink: 0;
}

.icon-blue {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  color: #1B365D;       /* Systematic Blue */
  flex-shrink: 0;
}

.icon-orange {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  color: #D97642;       /* Impact Orange */
  flex-shrink: 0;
}

/* Size Variations */
.icon-small  { width: 0.875rem; height: 0.875rem; }  /* 14px */
.icon-base   { width: 1rem; height: 1rem; }          /* 16px */
.icon-large  { width: 1.25rem; height: 1.25rem; }    /* 20px */
.icon-xl     { width: 1.5rem; height: 1.5rem; }      /* 24px */
.icon-2xl    { width: 2rem; height: 2rem; }          /* 32px */
```

**❌ DON'T:**
- Use Tailwind classes directly on Icon component
- Use `:global(svg)` without wrapper (unreliable)
- Forget `flex-shrink: 0` in flex layouts

---

## 🧩 Reusable Components

### Layout Components:
```astro
import BaseLayout from '../../layouts/BaseLayout.astro';
import Header from '../../components/Header.astro';
import Footer from '../../components/Footer.astro';
```

### UI Components:
```astro
import Icon from '../../components/Icon.astro';
import TrackCard from '../../components/ui/TrackCard.astro';
```

### Data:
```astro
import { tracks } from '../../utils/trackData.ts';
```

---

## 🎨 Standard CSS Classes

### Layout Classes:
```css
.container           /* Max-width 1200px container with padding */
.section-header      /* Centered section headers with proper spacing */
.hero-content        /* Hero section content wrapper */
.hero-section        /* Full hero with gradient background */
```

### Typography Classes:
```css
/* Headings */
.text-h1             /* 2.5rem (40px), bold, Systematic Blue */
.text-h2             /* 2rem (32px), semibold, Systematic Blue */
.text-h3             /* 1.5rem (24px), semibold */
.text-h4             /* 1.25rem (20px), medium */

/* Body Text */
.section-subtitle    /* Gray subtitle text for section headers */
.subtitle            /* Hero subtitle text */
.body-text           /* Standard paragraph text */
.text-large          /* 1.125rem (18px) for emphasis */
.text-small          /* 0.875rem (14px) for captions */
```

### Button Classes:
```css
.btn                     /* Base button styles */
.btn-primary             /* Ocean Teal button (#2A7F7E) */
.btn-primary-orange      /* Impact Orange button (#D97642) */
.btn-secondary           /* Systematic Blue outline (#1B365D) */
.btn-secondary-white     /* White outline (for dark backgrounds) */
```

### Grid & Layout Classes:
```css
/* Track/Card Grids */
.tracks-grid             /* Base grid for track cards */
.tracks-grid.row-2       /* 2-card centered row */
.tracks-grid.row-3       /* 3-card row */

/* Other Grids */
.pricing-grid            /* 3-column pricing layout */
.grid-2                  /* 2-column responsive grid */
.grid-3                  /* 3-column responsive grid */
.grid-4                  /* 4-column responsive grid (2x2) */
```

### Section Classes:
```css
.hero-section            /* Hero with gradient background */
.section-cta             /* Mid-page CTA sections */
.final-cta-section       /* Bottom gradient CTA */
.content-section         /* Standard content section with padding */
.bg-gradient-teal        /* Ocean Teal gradient background */
.bg-gradient-blue        /* Systematic Blue gradient background */
```

---

## 📏 Standard Measurements

### Spacing (8px Grid):
```css
--spacing-1: 8px;      /* Tiny gap */
--spacing-2: 16px;     /* Small gap */
--spacing-3: 24px;     /* Medium gap */
--spacing-4: 32px;     /* Large gap */
--spacing-6: 48px;     /* Section padding (mobile) */
--spacing-8: 64px;     /* Section padding (tablet) */
--spacing-12: 96px;    /* Section padding (desktop) */
```

### Common Padding Values:
```css
/* Section padding */
padding: 48px 0;       /* Mobile */
padding: 64px 0;       /* Tablet */
padding: 96px 0;       /* Desktop */

/* Card padding */
padding: 24px;         /* Standard card */
padding: 32px;         /* Large card */

/* Container padding */
padding: 0 16px;       /* Mobile */
padding: 0 24px;       /* Tablet/Desktop */
```

### Breakpoints:
```css
/* Mobile: 0-767px (base styles) */
@media (min-width: 768px) { }   /* Tablet */
@media (min-width: 1024px) { }  /* Desktop */
@media (max-width: 767px) { }   /* Mobile only */
```

---

## ⚡ Common Patterns

### 1. Hero Section Pattern:
```astro
<section class="hero-section">
  <div class="container">
    <div class="hero-content">
      <h1 class="text-h1">Main Headline</h1>
      <p class="subtitle">Supporting description</p>
      <div class="hero-ctas">
        <a href="/assessment" class="btn btn-primary-orange">
          Primary Action
        </a>
        <a href="/contact" class="btn btn-secondary-white">
          Secondary Action
        </a>
      </div>
    </div>
  </div>
</section>
```

### 2. Content Section with Icons:
```astro
<section class="content-section">
  <div class="container">
    <div class="section-header">
      <h2 class="text-h2">Section Title</h2>
      <p class="section-subtitle">Section description</p>
    </div>
    
    <div class="grid-3">
      <div class="card">
        <span class="icon-teal icon-large">
          <Icon name="users" type="outline" />
        </span>
        <h3 class="text-h3">Feature Name</h3>
        <p>Feature description text here.</p>
      </div>
      <!-- Repeat for other cards -->
    </div>
  </div>
</section>
```

### 3. Two-Column Layout:
```astro
<section class="content-section">
  <div class="container">
    <div class="two-column-layout">
      <div class="column-text">
        <h2 class="text-h2">Section Headline</h2>
        <p>Content paragraph one.</p>
        <p>Content paragraph two.</p>
        <a href="/learn-more" class="btn btn-secondary">Learn More</a>
      </div>
      <div class="column-visual">
        <img src="/images/feature.png" alt="Description" />
      </div>
    </div>
  </div>
</section>
```

### 4. CTA Section:
```astro
<div class="section-cta">
  <h3 class="text-h3">Ready to get started?</h3>
  <p class="cta-text">Transform your operations today.</p>
  <div class="cta-buttons">
    <a href="/assessment" class="btn btn-primary-orange">
      Take Assessment
    </a>
    <a href="/contact" class="btn btn-secondary">
      Book Discovery Call
    </a>
  </div>
</div>
```

### 5. Track Card Grid (Homepage/Solutions):
```astro
<div class="tracks-grid row-3">
  {tracks.map(track => (
    <TrackCard
      title={track.title}
      description={track.description}
      icon={track.icon}
      href={track.href}
      color={track.color}
    />
  ))}
</div>
```

---

## 🔍 Quick Discovery Commands

```powershell
# Find existing components
Get-ChildItem -Recurse -Filter "*Component*.astro" src/components/

# Check available icons in Icon.astro
Select-String "case" src/components/Icon.astro

# Find CSS classes in use
Select-String "class=" src/pages/ -Include "*.astro"

# Find specific section patterns
Select-String "hero-section" src/pages/ -Include "*.astro"

# Check git changes
git status
git diff src/pages/[file].astro
```

---

## 🎯 Recently Used Patterns (From Latest Pages)

### Problem-Solution Split (How We Help page):
```astro
<div class="problem-solution-layout">
  <div class="problem-column">
    <h3 class="text-h3" style="color: #D97642;">The Problem</h3>
    <ul class="problem-list">
      <li>
        <span class="icon-red">
          <Icon name="x-circle" type="outline" />
        </span>
        Problem description
      </li>
    </ul>
  </div>
  
  <div class="solution-column">
    <h3 class="text-h3" style="color: #2A7F7E;">The Solution</h3>
    <ul class="solution-list">
      <li>
        <span class="icon-green">
          <Icon name="check-circle" type="outline" />
        </span>
        Solution description
      </li>
    </ul>
  </div>
</div>
```

### Progressive Level Showcase (Track Pages):
```astro
<div class="progressive-levels">
  <div class="level-card foundation">
    <span class="level-badge">Foundation</span>
    <h4>Level Name</h4>
    <p class="level-description">Description</p>
    <ul class="level-features">
      <li>Feature 1</li>
      <li>Feature 2</li>
    </ul>
    <p class="level-timeline">6-8 weeks, 40-50 hours</p>
  </div>
  <!-- Repeat for Advanced and Complete -->
</div>
```

### Calendly CTA with UTM (Site-wide):
```astro
<a 
  href="https://calendly.com/d/cspg-g8f-tsd?utm_source=website&utm_medium=cta&utm_campaign=track-client-relationships&utm_content=routing-form"
  class="btn btn-primary-orange"
  target="_blank"
  rel="noopener noreferrer"
>
  Book Discovery Call
</a>
```

**UTM Structure:**
- `utm_source=website` (always)
- `utm_medium=cta` (for buttons) or `hero` (for hero CTAs)
- `utm_campaign=[page-specific]` (e.g., `homepage-hero`, `track-client-relationships`)
- `utm_content=routing-form` (always)

---

## 📚 Reference Links

### Core Documentation:
- **Brand Guidelines**: `docs/core/brand_guidelines_claude_code.md`
- **Development Config**: `docs/core/gaiaops-development-config-v3.md`
- **Troubleshooting**: `docs/core/claude-code-troubleshooting-guide.md`

### Reference Documentation:
- **Complete Heroicons List**: `docs/reference/complete-list-available-heroicons.md`
- **Icon Styling Guide**: `docs/reference/heroicon-styling-guide.md`
- **Page Building Workflow**: `docs/reference/page-building-workflow.md`
- **Track Pages Content**: `docs/reference/track-pages-content.md`

### Project Context:
- **Project Brief**: `docs/project/gaiaops_project_brief_corrected.md`
- **Task Tracking**: `docs/project/updated_clickup_tasks.md`
- **Sitemap**: `docs/project/updated_sitemap.md`

---

## 🚨 Critical Reminders

### Before Starting Any Page:
1. ✅ Read session plan from Claude Desktop
2. ✅ Have brand guidelines open (`#2A7F7E`, `#1B365D`, `#D97642`)
3. ✅ Check heroicons list for valid icon names
4. ✅ Review similar existing pages
5. ✅ Verify on `development` branch

### During Implementation:
1. ✅ Test after EVERY section (not at the end)
2. ✅ Hard refresh browser (Ctrl+Shift+R)
3. ✅ Check console for errors
4. ✅ Verify responsive (resize browser)
5. ✅ Use exact hex codes (never approximate)

### Icon Usage:
1. ✅ Always wrap in `<span class="icon-[color]">`
2. ✅ Set explicit width/height in CSS
3. ✅ Add `flex-shrink: 0` for flex layouts
4. ✅ Use verified icon names only
5. ✅ Test rendering immediately

### Color Distribution:
1. ✅ Ocean Teal: 60% of brand elements
2. ✅ Systematic Blue: 30% of elements
3. ✅ Impact Orange: 10% for CTAs only
4. ✅ Generous white space (80-120px padding)
5. ✅ Verify contrast ratios (WCAG AA)

---

## 💡 Pro Tips

1. **Copy-Paste Colors**: Don't type from memory - copy exact hex values
2. **Component First**: Check existing components before building new
3. **Test Small**: Catch issues early by testing each section
4. **Console Watch**: Keep DevTools open, fix warnings immediately
5. **Mobile Always**: Test responsive on every section
6. **Screenshot Compare**: Visual QA against brand guidelines
7. **Git Often**: Commit after each working section
8. **Documentation**: Update notes as you discover new patterns

---

**Keep this file open during Claude Code sessions for instant reference!**

*Last Updated: October 9, 2025*  
*Based on: Homepage, 7 track pages, How We Help, Solutions overview*
