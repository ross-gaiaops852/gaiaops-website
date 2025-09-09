# Solutions Overview Page Wireframe for Claude Code

## Page Location
`/src/pages/solutions/index.astro`

## Important Instructions
- REUSE existing components from homepage wherever possible (Header, Footer, Hero, Card components, CTAs)
- MAINTAIN design consistency with homepage styling and layout patterns
- USE the same color scheme, typography, and spacing as homepage
- DO NOT create new design patterns - adapt existing ones

## Components to Reuse from Homepage
- Header.astro (navigation)
- Footer.astro (footer)
- Hero component structure
- Track card components (the 7 cards showing on homepage)
- CTA button styles
- Section containers and spacing

---

## Page Structure

### 1. HERO SECTION
**Reuse**: Homepage hero structure with modifications
**Content**:
- Headline: "7 Proven Tracks to Transform Your Environmental Operations"
- Subheadline: "Stop fixing problems one at a time. Build a complete operational system that scales your environmental impact."
- Primary CTA (orange button): "Take the Assessment" → `/assessment`
- Secondary CTA (teal outline button): "Book Discovery Call" → `/book-call`
- Breadcrumb: Home > Solutions
**Visual Note**: If homepage hero has background pattern/gradient, maintain same style

### 2. INTRODUCTION SECTION
**Layout**: Centered text container, max-width similar to homepage content sections
**Structure**:
```
<section class="[use homepage section spacing]">
  <div class="[use homepage container width]">
    <p class="lead-text">[Lead paragraph]</p>
    <p>[Problem statement paragraph]</p>
    <p>[Solution preview paragraph]</p>
  </div>
</section>
```

### 3. TRACK CARDS GRID
**Reuse**: EXACT track cards from homepage - do not recreate
**Section Title**: "Choose Your Transformation Path"
**Section Subtitle**: "Start with any track and expand systematically as you grow"
**Layout**: 
- Use same grid layout as homepage (2-2-1 then 2 for premium)
- Each card should link to its respective track page
- Maintain hover effects from homepage cards
**Track Links**:
- Card 1 → `/solutions/client-relationships`
- Card 2 → `/solutions/resource-optimization`
- Card 3 → `/solutions/quality-assurance`
- Card 4 → `/solutions/business-intelligence`
- Card 5 → `/solutions/growth-systems`
- Card 6 → `/solutions/multi-party-coordination`
- Card 7 → `/solutions/strategic-advantage`

### 4. PROGRESSIVE EXCELLENCE FRAMEWORK
**Layout**: Three-column grid (responsive: stack on mobile)
**Section Title**: "The Power of Progressive Transformation"
**Columns**:
```
Column 1: Foundation (Months 1-4)
- Heading
- Description paragraph
- No special styling needed

Column 2: Optimization (Months 5-8)
- Heading
- Description paragraph
- No special styling needed

Column 3: Excellence (Months 9-12)
- Heading
- Description paragraph
- No special styling needed
```
**Below columns**: Highlighted box with key message about 30% efficiency gains

### 5. SYNERGY SHOWCASE
**Layout**: Two-column (desktop) - left side content, right side examples
**Section Title**: "Why Multiple Tracks Multiply Results"
**Left Column**: Introduction paragraph
**Right Column**: List of synergy combinations
```
- "Client + Resource" = Perfect Project Matching
- "Quality + Intelligence" = Predictive Quality Control
- "Growth + Multi-Party" = Complex Project Scalability
- "All Tracks Combined" = Operational Excellence
```
**Note**: Keep this simple - no complex interactions needed for MVP

### 6. IMPLEMENTATION APPROACH
**Layout**: Three-step process (similar to homepage if it has process steps)
**Section Title**: "Your Journey to Operational Excellence"
**Steps**:
```
Step 1: Assess
- Icon: Heroicon "clipboard-document-check" or similar
- Heading
- Description
- Link text: "Take the Assessment" → `/assessment`

Step 2: Plan
- Icon: Heroicon "map" or "light-bulb"
- Heading
- Description
- Link text: "Book Your Discovery Call" → `/book-call`

Step 3: Transform
- Icon: Heroicon "rocket-launch" or "arrow-trending-up"
- Heading
- Description
```
**Timeline Note**: Add simple text below: "Most firms complete their core transformation in 6-12 months"

### 7. SUCCESS INDICATORS
**Layout**: Four metrics in a row (responsive: 2x2 grid on tablet, stack on mobile)
**Section Title**: "Join Environmental Leaders Transforming Their Operations"
**Metrics Row**: Use same metric card style as homepage if available
```
- "15+ Firms Transformed"
- "50% Average Efficiency Gain"
- "1.5x Capacity Increase"
- "90% Client Retention"
```
**Testimonial**: Single testimonial quote below metrics (use homepage testimonial styling if exists)

### 8. TRACK SELECTOR PREVIEW
**Layout**: Centered content with light background
**Section Title**: "Find Your Starting Point"
**Content**:
- Introduction sentence
- 3 preview questions (styled as simple text, not interactive for MVP)
- CTA button (orange): "Take the Full Assessment" → `/assessment`

### 9. PRICING PREVIEW
**Reuse**: If homepage has pricing cards, use same component structure
**Section Title**: "Investment in Your Operational Future"
**Introduction**: Single paragraph
**Three Cards** (match homepage pricing card styling):
```
Card 1: Digital Operations Jumpstart
- Price: $7,497 one-time
- Key features list
- CTA button

Card 2: Systematic Growth (add "RECOMMENDED" badge like homepage)
- Price: $2,997/month + $1,997 setup
- Key features list
- CTA button

Card 3: Operations Excellence
- Price: $4,997/month + $2,997 setup
- Key features list
- CTA button
```
**Below cards**: "30-day satisfaction guarantee" text
**Section CTA**: Button linking to `/pricing`

### 10. BOTTOM CTA SECTION
**Reuse**: Homepage bottom CTA section structure if exists
**Headline**: "Ready to Transform Your Environmental Operations?"
**Subheadline**: "Start with one track, scale to complete excellence"
**Trust Signals**: Three checkmarks with text (use homepage checkmark style if exists)
**Two CTAs**:
- Primary (orange button): "Take the Assessment" → `/assessment`
- Secondary (teal button): "Book Discovery Call" → `/book-call`
**Closing text**: "Stop letting operations limit your environmental impact. Start building systems that scale."

---

## Technical Notes

### Responsive Behavior
- Follow homepage responsive patterns exactly
- Mobile: Single column layouts, stacked cards
- Tablet: 2-column grids where appropriate
- Desktop: Full layouts as described

### Icons Needed (from Heroicons)
- Step 1: "clipboard-document-check" or "clipboard-list"
- Step 2: "map" or "light-bulb"
- Step 3: "rocket-launch" or "arrow-trending-up"
- Checkmarks: "check" or "check-circle"

### Links and Navigation
- All track cards link to individual track pages
- Primary CTAs go to `/assessment`
- Secondary CTAs go to `/book-call`
- Pricing CTA goes to `/pricing`
- Breadcrumb links back to home

### Styling Priorities
1. Match homepage exactly for consistency
2. Use existing component styles
3. Only create new styles if absolutely necessary
4. Maintain brand colors: Teal (#4A9B8B), Navy (#1E3A5F), Orange (#E07A47)

### Content Source
All copy is provided in the "Solutions Overview Page - Complete Copy" document. Copy directly from that source.

---

## Implementation Order
1. Set up page with Layout.astro wrapper
2. Add Header and Footer components
3. Implement Hero section
4. Add Introduction content
5. Import and display track cards from homepage
6. Build progressive framework section
7. Add remaining content sections
8. Implement CTAs and links
9. Test responsive behavior
10. Verify all links work correctly