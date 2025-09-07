# GaiaOps Brand Guidelines - For Claude Code Implementation

## Brand Overview
GaiaOps is a specialized digital operations agency transforming environmental consultancies through Progressive Operational Excellence. We position as sophisticated systems experts who help environmental firms multiply their impact through systematic operational advancement.

---

## Logo System

### Primary Logo
- **Logo Mark**: Geometric nested squares in teal/navy with orange accent
- **Color Combination**: Teal outer frame, navy inner frame, orange center square
- **Typography**: "GaiaOps" in navy blue, clean sans-serif
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

### Primary Colors

#### Teal Primary
- **Color**: Sophisticated teal (from logo outer frame)
- **Approximate Hex**: #4A9B8B (adjust to match logo exactly)
- **Usage**: Primary brand accent, CTAs, highlights
- **Psychology**: Trust, growth, environmental connection without cliché

#### Navy Primary  
- **Color**: Deep navy blue (from logo inner frame and text)
- **Approximate Hex**: #1E3A5F (adjust to match logo exactly)  
- **Usage**: Text, headers, professional authority elements
- **Psychology**: Expertise, reliability, business credibility

#### Orange Accent
- **Color**: Warm orange (from logo center)
- **Approximate Hex**: #E07A47 (adjust to match logo exactly)
- **Usage**: Key CTAs, important highlights, energy elements
- **Psychology**: Energy, action, transformation

### Supporting Colors

#### Neutral Grays
- **Dark Gray**: #2D3748 (primary text)
- **Medium Gray**: #4A5568 (secondary text) 
- **Light Gray**: #E2E8F0 (borders, subtle backgrounds)
- **Off-White**: #F7FAFC (clean backgrounds)

#### Success/Status Colors
- **Success Green**: #48BB78 (completion, positive metrics)
- **Warning Orange**: #ED8936 (attention, in-progress)
- **Error Red**: #F56565 (alerts, issues)
- **Info Blue**: #4299E1 (informational elements)

### Color Usage Guidelines
- **Primary Palette**: Teal, Navy, Orange for all brand elements
- **High Contrast**: Always ensure WCAG AA compliance (4.5:1 ratio minimum)
- **Environmental Context**: Sophisticated palette avoids cliché environmental greens
- **Professional Authority**: Navy establishes B2B credibility
- **System Flexibility**: Colors work across digital and print applications

---

## Typography System

### Primary Typeface: Inter
- **Font Family**: Inter (Google Fonts)
- **Weights Used**: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
- **Usage**: All digital applications, UI elements, body text
- **Why Inter**: Systematic design, excellent readability, professional authority
- **Fallback**: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif

### Secondary Typeface: Crimson Pro
- **Font Family**: Crimson Pro (Google Fonts)  
- **Weights Used**: 400 (Regular), 600 (SemiBold)
- **Usage**: Long-form content, reports, traditional documents
- **Why Crimson Pro**: Authoritative serif, environmental appropriateness, readability
- **Fallback**: Georgia, 'Times New Roman', Times, serif

### Typography Hierarchy
```css
/* Headlines */
h1: Inter 700 (Bold), 2.5rem (40px), line-height 1.2
h2: Inter 600 (SemiBold), 2rem (32px), line-height 1.3  
h3: Inter 600 (SemiBold), 1.5rem (24px), line-height 1.4
h4: Inter 500 (Medium), 1.25rem (20px), line-height 1.4

/* Body Text */
body: Inter 400 (Regular), 1rem (16px), line-height 1.6
large-text: Inter 400 (Regular), 1.125rem (18px), line-height 1.6
small-text: Inter 400 (Regular), 0.875rem (14px), line-height 1.5

/* UI Elements */
button-text: Inter 500 (Medium), 0.875rem (14px), line-height 1.4
caption: Inter 400 (Regular), 0.75rem (12px), line-height 1.4
```

---

## Component Styles

### Buttons

#### Primary Button
- **Background**: Teal Primary (#4A9B8B)
- **Text**: White, Inter Medium
- **Border**: None
- **Border Radius**: 8px
- **Padding**: 12px 24px
- **Hover**: Darken teal by 10%
- **Usage**: Main CTAs, primary actions

#### Secondary Button  
- **Background**: Transparent
- **Text**: Navy Primary, Inter Medium
- **Border**: 2px solid Navy Primary
- **Border Radius**: 8px
- **Padding**: 10px 22px (adjust for border)
- **Hover**: Navy background, white text
- **Usage**: Secondary actions, alternate options

#### Accent Button
- **Background**: Orange Accent (#E07A47)
- **Text**: White, Inter Medium  
- **Border**: None
- **Border Radius**: 8px
- **Padding**: 12px 24px
- **Hover**: Darken orange by 10%
- **Usage**: High-energy CTAs, conversion focus

### Cards
- **Background**: White
- **Border**: 1px solid Light Gray (#E2E8F0)
- **Border Radius**: 12px
- **Shadow**: 0 4px 6px rgba(0, 0, 0, 0.1)
- **Padding**: 24px
- **Hover**: Subtle shadow increase

### Track-Specific Colors
- **Multi-Party Coordination**: Teal Primary
- **Client Relationships**: Navy Primary  
- **Resource Optimization**: Orange Accent
- **Quality Assurance**: Success Green
- **Business Intelligence**: Info Blue
- **Growth Systems**: Teal Primary
- **Strategic Advantage**: Navy Primary (Premium)

---

## Layout Principles

### Spacing System (8px Grid)
- **Base Unit**: 8px
- **Common Spacings**: 8px, 16px, 24px, 32px, 48px, 64px, 96px
- **Section Padding**: 48px to 96px vertical
- **Element Margins**: 16px to 32px between related items
- **Line Height**: 1.6 for body text, 1.2-1.4 for headlines

### Grid System
- **Desktop**: 12-column grid, max-width 1200px
- **Tablet**: 8-column grid, max-width 768px  
- **Mobile**: 4-column grid, max-width 480px
- **Gutters**: 24px desktop, 16px mobile

### Visual Hierarchy
- **Primary Focus**: Largest typography, primary colors, prominent placement
- **Secondary Elements**: Medium typography, secondary colors, supporting placement
- **Supporting Content**: Smaller typography, neutral colors, background placement

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
- **Progressive Framework**: "Advance through six operational tracks" 
- **System Flexibility**: "Start with your existing tools, advance to optimal systems"
- **Environmental Impact**: "Multiply your environmental impact through operational excellence"

### Tone Adaptations
- **Sales Content**: Confident, results-focused, benefit-driven
- **Educational Content**: Helpful, detailed, authority-building
- **Support Content**: Patient, clear, problem-solving oriented
- **About/Authority**: Professional, credible, mission-focused

---

## Implementation Guidelines

### Website Application
- **Header**: Logo, Inter typography, teal/navy color scheme
- **Navigation**: Clean, systematic, Inter Medium typography
- **CTAs**: Primary (teal), secondary (navy outline), accent (orange) buttons
- **Content Cards**: White backgrounds, subtle shadows, clear hierarchy
- **Track Pages**: Track-specific accent colors while maintaining brand consistency

### Progressive Showcases
- **Foundation Level**: Light teal backgrounds, approachable imagery
- **Advanced Level**: Medium teal/navy, sophisticated imagery  
- **Complete Level**: Deep navy/orange accents, premium imagery
- **Visual Flow**: Clear progression from light to bold

### Accessibility Standards
- **Color Contrast**: Minimum 4.5:1 for normal text, 3:1 for large text
- **Typography**: Minimum 16px body text, scalable with zoom
- **Interactive Elements**: Clear focus states, adequate touch targets
- **Alternative Text**: Descriptive alt text for all images

---

## Logo Assets and File Locations

### Available Logo Files
- **Primary Logo**: `/images/logos/gaiaops-primary.png` (Horizontal layout, full color)
- **Stacked Logo**: `/images/logos/gaiaops-stacked.png` (Vertical layout for square formats)
- **Icon Only**: `/images/logos/gaiaops-icon.png` (Logo mark without text)
- **Monochrome**: `/images/logos/gaiaops-mono.png` (Single color version)
- **White Version**: `/images/logos/gaiaops-white.png` (For dark backgrounds)
- **Favicon**: `/favicon.ico` (Located in public root for browser access)

### Implementation Examples
```html
<!-- Header primary logo -->
<img src="/images/logos/gaiaops-primary.png" alt="GaiaOps" />

<!-- Footer or small space logo -->
<img src="/images/logos/gaiaops-icon.png" alt="GaiaOps" />

<!-- Dark background usage -->
<img src="/images/logos/gaiaops-white.png" alt="GaiaOps" />

<!-- Favicon (automatically served from public root) -->
<link rel="icon" href="/favicon.ico" />
```

---

## Assets Ready for Implementation

### Logo Files ✓
All logo variations available in PNG format at `/public/images/logos/`
Favicon properly positioned at `/public/favicon.ico`

### Color Swatches
- **CSS Variables**: All brand colors as custom properties
- **Hex Values**: Exact color matches from logo files
- **Usage Examples**: Proper color combinations and applications

### Typography
- **Google Fonts Links**: Inter and Crimson Pro import statements
- **CSS Classes**: Pre-defined typography styles
- **Fallback Fonts**: Complete font stack definitions

---

## Brand Differentiation

### What Makes GaiaOps Unique
- **Progressive Excellence**: Not one-time fixes, systematic advancement
- **Environmental Focus**: Industry specialization vs. generic operations  
- **System Flexibility**: Work with existing tools while showing optimal path
- **Sophisticated Palette**: Avoids environmental clichés and corporate blandness
- **Operational Authority**: Typography and colors signal systematic expertise

### Visual Personality
- **Systematic but Warm**: Geometric precision with human-friendly colors
- **Professional but Approachable**: B2B credible without being cold
- **Modern but Timeless**: Contemporary without being trendy
- **Environmental but Sophisticated**: Green connection without cliché imagery

This brand system positions GaiaOps as the sophisticated operational excellence authority while maintaining the approachable professionalism that environmental consultancy decision-makers expect.