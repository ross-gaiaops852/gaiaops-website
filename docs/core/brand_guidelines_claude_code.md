# GaiaOps Brand Guidelines - For Claude Code Implementation
**Last Updated**: October 9, 2025  
**Version**: 2.0 - Updated with exact colors and production paths

## Brand Overview
GaiaOps is a specialized digital operations agency transforming environmental consultancies through Progressive Operational Excellence. We position as sophisticated systems experts who help environmental firms multiply their impact through systematic operational advancement.

---

## Logo System

### Primary Logo
- **Logo Mark**: Geometric nested squares in teal/navy with orange accent
- **Color Combination**: Ocean Teal outer frame, Systematic Blue inner frame, Impact Orange center square
- **Typography**: "GaiaOps" in Systematic Blue, clean sans-serif
- **Style**: Modern, systematic, geometric precision reflecting operational excellence

### Logo Usage
- **Primary Use**: Full logo with mark and text for headers, main branding
- **Secondary Use**: Logo mark only for favicons, small applications
- **Clear Space**: Minimum 1x the height of the logo on all sides
- **Minimum Size**: 120px wide for web use, maintains readability

### File Formats
- **Web Use**: SVG preferred for scalability
- **PNG**: Transparent background for overlays
- **Color Variations**: Full color, monochrome navy, white/reverse

---

## Color Palette

### Primary Colors (60/30/10 Distribution)

#### Ocean Teal - PRIMARY (60% of brand applications)
- **Exact Hex**: `#2A7F7E`
- **RGB**: `42, 127, 126`
- **CMYK**: `67, 0, 1, 50`
- **Pantone**: 5483 C (closest match)
- **Usage**: Primary brand accent, key navigation, service highlights, CTAs
- **Psychology**: Sophisticated environmental connection, trust, depth, professionalism without cliché

#### Systematic Blue - SECONDARY (30% of brand applications)
- **Exact Hex**: `#1B365D`
- **RGB**: `27, 54, 93`
- **CMYK**: `71, 42, 0, 64`
- **Pantone**: 533 C (closest match)
- **Usage**: Headers, section titles, professional authority elements, navigation bars
- **Psychology**: Reliability, expertise, systematic thinking, operational excellence

#### Impact Orange - ACCENT (10% of brand applications - strategic use only)
- **Exact Hex**: `#D97642`
- **RGB**: `217, 118, 66`
- **CMYK**: `0, 46, 70, 15`
- **Pantone**: 7526 C (closest match)
- **Usage**: Primary CTAs, key metrics, transformation highlights, urgent actions
- **Psychology**: Energy, results, transformation, action

### Supporting Colors

#### Sustainable Sage (Minimal Accent - Use Sparingly)
- **Exact Hex**: `#7A9B7E`
- **RGB**: `122, 155, 126`
- **CMYK**: `21, 0, 19, 39`
- **Usage**: Environmental context imagery, subtle references only
- **Psychology**: Growth, sustainability, environmental stewardship

#### Neutral Palette

**Charcoal (Primary Text)**
- **Exact Hex**: `#2C3E50`
- **RGB**: `44, 62, 80`
- **Usage**: All body text, paragraphs, dark elements

**Cloud Gray (Backgrounds)**
- **Exact Hex**: `#F8F9FA`
- **RGB**: `248, 249, 250`
- **Usage**: Page backgrounds, card backgrounds, section dividers

**Pure White**
- **Exact Hex**: `#FFFFFF`
- **RGB**: `255, 255, 255`
- **Usage**: Primary background, text on dark backgrounds, clean space

#### Success/Status Colors (Use for functional elements only)
- **Success Green**: `#48BB78` (completion, positive metrics)
- **Warning Orange**: `#ED8936` (attention, in-progress)
- **Error Red**: `#F56565` (alerts, issues)
- **Info Blue**: `#4299E1` (informational elements)

### CSS Color Variables
```css
:root {
  /* Primary Brand Colors (60/30/10 distribution) */
  --color-ocean-teal: #2A7F7E;        /* 60% - Primary brand */
  --color-systematic-blue: #1B365D;   /* 30% - Secondary */
  --color-impact-orange: #D97642;     /* 10% - Accent CTAs */
  
  /* Supporting Colors */
  --color-sustainable-sage: #7A9B7E;  /* Minimal environmental accent */
  
  /* Neutral Palette */
  --color-charcoal: #2C3E50;          /* Primary text */
  --color-cloud-gray: #F8F9FA;        /* Backgrounds */
  --color-white: #FFFFFF;             /* Primary background */
  
  /* Functional Colors */
  --color-success: #48BB78;
  --color-warning: #ED8936;
  --color-error: #F56565;
  --color-info: #4299E1;
  
  /* Legacy aliases (for backward compatibility) */
  --color-teal-primary: var(--color-ocean-teal);
  --color-navy-primary: var(--color-systematic-blue);
  --color-orange-accent: var(--color-impact-orange);
  --color-dark-gray: var(--color-charcoal);
  --color-off-white: var(--color-cloud-gray);
}
```

### Color Usage Guidelines
- **60% Ocean Teal**: Dominant brand presence in sections, backgrounds, primary CTAs
- **30% Systematic Blue**: Headers, important text, professional elements
- **10% Impact Orange**: Strategic CTAs only, key metrics, transformation highlights
- **Generous White Space**: 80-120px section padding, clean minimal application
- **High Contrast**: Always ensure WCAG AA compliance (4.5:1 ratio minimum)
- **Environmental Context**: Sophisticated palette avoids cliché bright greens
- **Professional Authority**: Systematic Blue establishes B2B credibility

---

## Typography System

### Primary Typeface: Inter
- **Font Family**: Inter (Google Fonts)
- **Weights Used**: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
- **Usage**: All digital applications, UI elements, body text
- **Why Inter**: Systematic design, excellent readability, professional authority
- **Fallback**: `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`

### Secondary Typeface: Crimson Pro
- **Font Family**: Crimson Pro (Google Fonts)
- **Weights Used**: 400 (Regular), 600 (SemiBold)
- **Usage**: Long-form content, reports, traditional documents
- **Why Crimson Pro**: Authoritative serif, environmental appropriateness, readability
- **Fallback**: `Georgia, 'Times New Roman', Times, serif`

### Typography Hierarchy
```css
/* Headlines */
h1: Inter 700 (Bold), 2.5rem (40px), line-height 1.2, color: var(--color-systematic-blue)
h2: Inter 600 (SemiBold), 2rem (32px), line-height 1.3, color: var(--color-systematic-blue)
h3: Inter 600 (SemiBold), 1.5rem (24px), line-height 1.4, color: var(--color-systematic-blue)
h4: Inter 500 (Medium), 1.25rem (20px), line-height 1.4, color: var(--color-charcoal)

/* Body Text */
body: Inter 400 (Regular), 1rem (16px), line-height 1.6, color: var(--color-charcoal)
large-text: Inter 400 (Regular), 1.125rem (18px), line-height 1.6
small-text: Inter 400 (Regular), 0.875rem (14px), line-height 1.5

/* UI Elements */
button-text: Inter 500 (Medium), 0.875rem (14px), line-height 1.4
caption: Inter 400 (Regular), 0.75rem (12px), line-height 1.4
```

---

## Component Styles

### Buttons

#### Primary Button (Ocean Teal)
```css
.btn-primary {
  background: #2A7F7E;  /* Ocean Teal */
  color: #FFFFFF;
  font-family: Inter;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  transition: background 0.2s ease;
}
.btn-primary:hover {
  background: #236968;  /* Darken Ocean Teal by 10% */
}
```

#### Secondary Button (Systematic Blue Outline)
```css
.btn-secondary {
  background: transparent;
  color: #1B365D;  /* Systematic Blue */
  font-family: Inter;
  font-weight: 500;
  border: 2px solid #1B365D;
  border-radius: 8px;
  padding: 10px 22px;  /* Adjust for border */
  transition: all 0.2s ease;
}
.btn-secondary:hover {
  background: #1B365D;
  color: #FFFFFF;
}
```

#### Accent Button (Impact Orange)
```css
.btn-accent {
  background: #D97642;  /* Impact Orange */
  color: #FFFFFF;
  font-family: Inter;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  transition: background 0.2s ease;
}
.btn-accent:hover {
  background: #C36739;  /* Darken Impact Orange by 10% */
}
```

### Cards
```css
.card {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 24px;
  transition: box-shadow 0.2s ease;
}
.card:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}
```

### Track-Specific Colors
When creating track pages, use these color associations:
- **Multi-Party Coordination**: Ocean Teal (`#2A7F7E`)
- **Client Relationships**: Systematic Blue (`#1B365D`)
- **Resource Optimization**: Impact Orange (`#D97642`)
- **Quality Assurance**: Success Green (`#48BB78`)
- **Business Intelligence**: Info Blue (`#4299E1`)
- **Growth Systems**: Ocean Teal (`#2A7F7E`)
- **Strategic Advantage**: Systematic Blue (`#1B365D`) - Premium positioning

---

## Layout Principles

### Spacing System (8px Grid)
```css
--spacing-1: 8px;
--spacing-2: 16px;
--spacing-3: 24px;
--spacing-4: 32px;
--spacing-6: 48px;
--spacing-8: 64px;
--spacing-12: 96px;
```
- **Section Padding**: 48px to 96px vertical (use --spacing-6 to --spacing-12)
- **Element Margins**: 16px to 32px between related items
- **Line Height**: 1.6 for body text, 1.2-1.4 for headlines

### Grid System
- **Desktop**: 12-column grid, max-width 1200px
- **Tablet**: 8-column grid, max-width 768px
- **Mobile**: 4-column grid, max-width 480px
- **Gutters**: 24px desktop, 16px mobile

### Visual Hierarchy
- **Primary Focus**: Largest typography, Ocean Teal accents, prominent placement
- **Secondary Elements**: Medium typography, Systematic Blue, supporting placement
- **Supporting Content**: Smaller typography, Charcoal text, Cloud Gray backgrounds

---

## Brand Voice & Messaging

### Voice Characteristics
- **Knowledgeable but not condescending**: Expert guidance without talking down
- **Systematic but human**: Process-focused while maintaining personal connection
- **Confident but humble**: Assured capabilities while respecting client expertise
- **Professional but approachable**: B2B appropriate while remaining accessible
- **Mission-driven**: Always connecting operational excellence to environmental impact

### Key Messages
- **Primary Value Prop**: "Transform operational chaos into systematic excellence"
- **Secondary Value Prop**: "Unlimited playbook implementations for the same monthly price"
- **Progressive Framework**: "Advance through seven operational tracks"
- **System Flexibility**: "Start with your existing tools, advance to optimal systems"
- **Environmental Impact**: "Multiply your environmental impact through operational excellence"

### Tone Adaptations
- **Sales Content**: Confident, results-focused, benefit-driven
- **Educational Content**: Helpful, detailed, authority-building
- **Support Content**: Patient, clear, problem-solving oriented
- **About/Authority**: Professional, credible, mission-focused

---

## Logo Assets and File Locations

### ⚠️ CRITICAL: Correct File Paths for Production

**Logo files are located in:**
```
/public/images/logos/
```

### Available Logo Files
```html
<!-- Primary Logo (horizontal layout, full color) -->
<img src="/images/logos/gaiaops-primary.png" alt="GaiaOps" />

<!-- Stacked Logo (vertical layout for square formats) -->
<img src="/images/logos/gaiaops-stacked.png" alt="GaiaOps" />

<!-- Icon Only (logo mark without text) -->
<img src="/images/logos/gaiaops-icon.png" alt="GaiaOps" />

<!-- Monochrome (single color version) -->
<img src="/images/logos/gaiaops-mono.png" alt="GaiaOps" />

<!-- White Version (for dark backgrounds) -->
<img src="/images/logos/gaiaops-white.png" alt="GaiaOps" />

<!-- Favicon (automatically served from public root) -->
<link rel="icon" href="/favicon.ico" />
```

**Note**: When using in Astro components, paths automatically resolve from `/public/` so you reference them as `/images/logos/filename.png`

---

## Implementation Standards

### Color Distribution Checklist
Before completing any page, verify:
- [ ] Ocean Teal appears in ~60% of brand elements
- [ ] Systematic Blue in ~30% (headers, key text)
- [ ] Impact Orange in ~10% (strategic CTAs only)
- [ ] Generous white space (80-120px section padding)
- [ ] All text meets WCAG AA contrast ratios

### Accessibility Requirements
- **Color Contrast Ratios** (on white background):
  - Ocean Teal text: 4.8:1 ✓
  - Systematic Blue text: 8.2:1 ✓
  - Charcoal text: 12.6:1 ✓
  - Impact Orange: Use on buttons only (3.1:1 - passes for large text)

### Common Mistakes to Avoid
❌ **DON'T:**
- Use approximate or "close enough" color values
- Overuse Impact Orange (limit to 10% of design)
- Use bright/basic greens (avoid environmental clichés)
- Apply colors without checking contrast ratios
- Forget generous white space between elements

✅ **DO:**
- Copy exact hex values from this guide
- Use Ocean Teal as dominant brand color
- Apply Impact Orange strategically for CTAs
- Verify 60/30/10 distribution
- Maintain consistent spacing (8px grid)

---

## Quick Reference Card

### Essential Colors (Copy-Paste Ready)
```css
/* Primary (60%) */
#2A7F7E  /* Ocean Teal - backgrounds, CTAs, brand */

/* Secondary (30%) */
#1B365D  /* Systematic Blue - headers, authority */

/* Accent (10%) */
#D97642  /* Impact Orange - strategic CTAs only */

/* Text & Neutrals */
#2C3E50  /* Charcoal - body text */
#F8F9FA  /* Cloud Gray - backgrounds */
#FFFFFF  /* White - primary background */
```

### Button Classes Quick Reference
```html
<!-- Primary CTA (Ocean Teal) -->
<a href="/assessment" class="btn btn-primary">Primary Action</a>

<!-- Secondary CTA (Systematic Blue Outline) -->
<a href="/contact" class="btn btn-secondary">Secondary Action</a>

<!-- Accent CTA (Impact Orange - use sparingly) -->
<a href="/start" class="btn btn-accent">High-Impact Action</a>
```

---

## Brand Differentiation

### What Makes GaiaOps Unique
- **Progressive Excellence**: Not one-time fixes, systematic advancement
- **Environmental Focus**: Industry specialization vs. generic operations
- **System Flexibility**: Work with existing tools while showing optimal path
- **Sophisticated Palette**: Avoids environmental clichés and corporate blandness
- **Operational Authority**: Typography and colors signal systematic expertise

### Visual Personality
- **Systematic but Warm**: Geometric precision with approachable colors
- **Professional but Approachable**: B2B credible without being cold
- **Modern but Timeless**: Contemporary without being trendy
- **Environmental but Sophisticated**: Connection without cliché imagery

---

**This brand system positions GaiaOps as the sophisticated operational excellence authority while maintaining the approachable professionalism that environmental consultancy decision-makers expect.**

*Last Updated: October 9, 2025 - All colors verified against production logo files*
