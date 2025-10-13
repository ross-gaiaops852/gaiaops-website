# Session Plan: Pricing, About, and Contact Pages - Batch Build
**Date**: October 9, 2025  
**Estimated Time**: 6-8 hours total (across multiple work sessions)  
**Strategy**: Build all three pages in sequence, leveraging shared components and patterns

---

## 🎯 Objectives

Build three essential pages that complete the core conversion path:
1. **Pricing Page** - Clear value proposition with three-tier structure
2. **About Page** - Authority building with founder story and mission
3. **Contact Page** - Multiple contact options with embedded Calendly routing form

---

## 📋 Pre-Session Checklist

### Reference Materials Ready
- [x] Brand Guidelines: #2A7F7E (Ocean Teal), #1B365D (Systematic Blue), #D97642 (Impact Orange)
- [x] Typography: Inter (primary), Crimson Pro (testimonials/long-form)
- [x] Existing page examples: Homepage, How We Help, Solutions pages
- [x] Component library: Hero, Icon, Button components
- [x] Calendly URLs and UTM tracking structure
- [x] Company story and founder background
- [x] Pricing tiers and details

### Development Environment
- [ ] Working directory: `C:\Users\rcart\gaiaops-website`
- [ ] Current branch: `development`
- [ ] Dev server ready: `npm run dev` (port 4321 or 4322)
- [ ] Git status clean or known changes only

---

## 🏗️ PAGE 1: PRICING PAGE

**Path**: `/pricing`  
**Estimated Time**: 2.5-3 hours  
**ClickUp Task**: #86d01nkjq

### Content Structure

#### Section 1: Hero
**Component**: Standard Hero with gradient background
- **Headline**: "Transparent, Value-Driven Pricing"
- **Subheadline**: "Investment that scales with your growth. No surprises, no hidden fees."
- **Visual**: Subtle geometric pattern background (consistent with brand)

#### Section 2: Three-Tier Pricing Cards
**Layout**: Three equal-width cards in a row (responsive stack on mobile)

**Card 1: Digital Operations Jumpstart**
- **Price**: $7,497 (one-time)
- **Timeline**: 6-8 weeks
- **Best For**: "Firms wanting to test with a single implementation"
- **What's Included**:
  - One complete playbook implementation
  - Same implementation as subscription clients receive
  - 40-50 hours of focused work
  - Full training and documentation
  - 30-day satisfaction guarantee
- **CTA**: "Get Started with Jumpstart" (secondary button style)
- **Visual Note**: No "Most Popular" badge

**Card 2: Systematic Growth** ⭐ MOST POPULAR
- **Price**: $2,997/month + $1,997 onboarding (one-time)
- **Timeline**: Ongoing with implementations every 6-8 weeks
- **Best For**: "Most environmental consultancies seeking sustainable transformation"
- **What's Included**:
  - **Unlimited playbook implementations** (1 active at a time)
  - Monthly strategy sessions (2 hours)
  - Ongoing optimization support
  - Comprehensive training and documentation
  - Priority email support (24-hour response)
  - 6-month minimum commitment
- **CTA**: "Start Systematic Growth" (primary teal button)
- **Visual Badge**: "MOST POPULAR" (orange accent badge at top)

**Card 3: Operations Excellence**
- **Price**: $4,997/month + $2,997 onboarding (one-time)
- **Timeline**: Ongoing with implementations every 4-5 weeks
- **Best For**: "Firms ready for accelerated transformation"
- **What's Included**:
  - **Unlimited playbook implementations** (1 active at a time)
  - Accelerated implementation pace (4-5 weeks vs 6-8)
  - Bi-weekly strategy sessions (1 hour each)
  - Premium priority support (12-hour response)
  - Parallel implementation capability
  - Advanced optimization support
  - 6-month minimum commitment
- **CTA**: "Begin Operations Excellence" (secondary navy button)
- **Visual Note**: Subtle premium styling (maybe slight shadow/border enhancement)

#### Section 3: Value Comparison
**Component**: Simple comparison table (optional - can be simple bullet list format)

| Feature | Jumpstart | Systematic Growth | Operations Excellence |
|---------|-----------|-------------------|----------------------|
| Playbook Implementations | 1 (fixed) | Unlimited (1 active) | Unlimited (1 active) |
| Implementation Pace | 6-8 weeks | 6-8 weeks each | 4-5 weeks each |
| Strategy Sessions | Initial only | Monthly (2hrs) | Bi-weekly (1hr) |
| Response Time | 48 hours | 24 hours | 12 hours |
| Training & Documentation | ✓ | ✓ | ✓ Enhanced |
| 30-Day Guarantee | ✓ | ✓ | ✓ |
| Commitment | None (one-time) | 6 months | 6 months |

**Alternative**: Instead of table, use feature comparison cards or accordion format for mobile-friendly design

#### Section 4: ROI Calculator Section
**Visual**: Interactive or static demonstration
- **Headline**: "Calculate Your Return on Investment"
- **Example Calculation**:
  - "Average time savings: 10-15 hours/week after 2-3 playbooks"
  - "At $150/hour billable rate: $6,000-9,000/month in capacity gained"
  - "Monthly investment: $2,997"
  - "Net monthly value: $3,000-6,000+"
- **Note**: For MVP, can be static text. Phase 2 can add interactive calculator.

#### Section 5: Why Subscription vs One-Time?
**Layout**: Two-column comparison or side-by-side cards

**One-Time Consulting**:
- ❌ Single implementation then you're on your own
- ❌ No ongoing optimization
- ❌ Limited support after delivery
- ❌ New project fees for each improvement

**GaiaOps Subscription**:
- ✓ Continuous optimization and improvements
- ✓ Unlimited implementations over time
- ✓ Ongoing strategic guidance
- ✓ We succeed when you succeed

#### Section 6: 30-Day Satisfaction Guarantee
**Component**: Highlighted box with icon
- **Icon**: shield-check (verified available)
- **Headline**: "Risk-Free 30-Day Guarantee"
- **Body**: "We establish clear deliverables during onboarding. If we don't meet them within 30 days, you'll receive a proportional refund. This demonstrates our confidence in the methodology and aligns our success with yours."

#### Section 7: FAQ Accordion
**Common Questions** (expandable sections):

1. **"Can we customize the playbooks?"**
   - Yes, all playbooks are customized to your specific tools and workflows. Custom development is welcomed at all tiers.

2. **"What if we need more than one implementation at a time?"**
   - Operations Excellence tier includes this capability. Systematic Growth can add concurrent implementations for $1,000/month.

3. **"Can we start with Jumpstart then move to subscription?"**
   - Absolutely! Many clients start with Jumpstart to experience our methodology, then transition to ongoing subscriptions. We'll credit your jumpstart investment toward subscription onboarding.

4. **"What happens after the 6-month commitment?"**
   - Subscriptions continue month-to-month with 30-day notice for cancellation. Most clients see such strong results they continue indefinitely.

5. **"Do you work with our existing tools?"**
   - Yes! We integrate with your current tech stack (ClickUp, Asana, Monday, etc.) and only recommend changes when it significantly improves outcomes.

#### Section 8: Final CTA
**Component**: Full-width section with dual-path CTA
- **Headline**: "Ready to Transform Your Operations?"
- **Subheadline**: "Book a discovery call to discuss which approach fits your needs"
- **CTA Button**: "Schedule Discovery Call" 
  - URL: `https://calendly.com/d/cspg-g8f-tsd?utm_source=website&utm_medium=cta&utm_campaign=pricing-page&utm_content=routing-form`
- **Secondary Link**: "Or email ross@gaiaops.io with questions"

### Technical Requirements
- Mobile-responsive pricing cards (stack vertically on mobile)
- 60/30/10 color distribution (Ocean Teal 60%, Systematic Blue 30%, Impact Orange 10%)
- Clear visual hierarchy with pricing as focal point
- Consistent spacing using 8px grid system
- Icons verified from available heroicons list

### Component Reuse
- Hero component (from Homepage)
- Button components (Primary, Secondary, Accent)
- Icon component (verified icons only)
- Section layouts (consistent with other pages)

---

## 🏗️ PAGE 2: ABOUT PAGE

**Path**: `/about`  
**Estimated Time**: 2-2.5 hours  
**ClickUp Task**: #86d01nkz1 (with nested subtasks)

### Content Structure

#### Section 1: Hero
**Component**: Standard Hero with mission focus
- **Headline**: "Amplifying Environmental Impact Through Operational Excellence"
- **Subheadline**: "We believe environmental consultancies are crucial to addressing sustainability challenges. Our mission is to multiply their impact through systematic operational advancement."
- **No CTA**: Let the story flow naturally into mission section

#### Section 2: Company Mission & Values
**Subtask**: 2.6.3.1 - Company Overview and Mission Development

**Mission Statement** (prominent box or highlighted section):
> "GaiaOps exists to help environmental consultancies transform from operational chaos to systematic excellence—enabling them to serve more clients, deliver higher quality work, and ultimately increase their environmental impact when every day matters."

**Our Values** (3-column layout with icons):

1. **#ImpactFirst** 
   - Icon: rocket-launch
   - "Environmental Impact Through Operational Excellence"
   - Every solution prioritizes freeing teams to focus on their environmental mission. Success measured by additional environmental work clients can accomplish.

2. **#SustainableExcellence**
   - Icon: chart-bar
   - "Quality Through Smart Systems, Not Burnout"  
   - Exceptional results through intelligent systems and thoughtful processes. Solutions that improve over time through systematic refinement.

3. **#ProgressiveGrowth**
   - Icon: arrow-trending-up
   - "Continuous Advancement, Not One-Time Fixes"
   - Systematic elevation across operational tracks. Building toward sustainable excellence, not quick fixes.

#### Section 3: The Founding Story
**Subtask**: 2.6.3.1 - Company Overview and Mission

**Headline**: "From Environmental Science to Operational Excellence"

**The Story** (narrative format with Crimson Pro for body text):

**Opening** (2-3 paragraphs):
- Ross Carter-Brown's background in environmental science and research
- Experience with BitPrime (cryptocurrency exchange) - operational excellence at scale
- Recognition that environmental consultancies face unique operational challenges
- The connection between operational efficiency and environmental impact

**Key Insight Paragraph**:
> "During my work on projects like the Punakaiki Coastal Restoration Project, I saw firsthand how environmental professionals managed complex field data coordination, multi-stakeholder project management, and regulatory reporting requirements. I understood the unique workflow challenges that environmental firms faced."

**The Opportunity**:
- Combining environmental science background with digital operations expertise
- Recognition that operational chaos limits environmental impact
- Research-driven approach: 48 environmental consulting firms studied, 25 testable hypotheses developed
- Commitment to building systematic excellence from the foundation

**The Mission**:
> "Operational efficiency and environmental impact are directly connected. Everything takes resources—hours wasted on admin, commuting when you could work remotely, repeating work because it wasn't done properly. All of this equals waste. I wanted to give people time back so they can work *on* their business and mission, rather than being stuck in day-to-day survival."

**The Personal Stakes**:
- Climate crisis creates daily urgency
- Rather than feeling overwhelmed, channeling energy into systematic solutions
- Multiplying effectiveness of people already working on environmental problems
- Success measured in environmental impact enabled, not just business metrics

#### Section 4: Founder Credentials
**Subtask**: 2.6.3.2 - Team Credentials and Expertise Showcase

**Headline**: "Unique Expertise at the Intersection of Environmental Science and Digital Operations"

**Ross Carter-Brown, Founder** (professional photo if available, otherwise skip)

**Credentials** (bullet list format or cards):

**Environmental Science Background**:
- Bachelor of Science in Ecology & Biodiversity
- Research experience with DOC, Wildlands, and university projects
- Field work in coastal restoration, seabird monitoring, and ecological assessment
- Deep understanding of environmental consulting workflows and challenges

**Digital Operations Mastery**:
- Co-founder of BitPrime (New Zealand's leading cryptocurrency exchange)
- Managed $40M NZD in assets with zero security breaches
- Implemented systematic process improvements across operations, compliance, and customer service
- Head of New Zealand Operations at Swyftx (Australia's top-rated crypto exchange)

**Regulatory & Compliance Expertise**:
- Industry spokesperson in consultations with Financial Markets Authority and Reserve Bank
- Comprehensive risk management framework implementation
- Experience navigating complex regulatory environments
- Understanding of environmental compliance and reporting requirements

**Technology & Automation**:
- Business Intelligence and AI Solutions Architect at Task Rescue
- Developed automated workflows for professional services firms
- Expertise in ClickUp, process automation, and system integration
- Focus on practical, scalable operational solutions

**Quote Box**:
> "Your environmental expertise combined with systematic operational excellence creates unstoppable impact. You bring the environmental knowledge—I bring the operational frameworks that let you serve more clients and create greater environmental change."

#### Section 5: Why GaiaOps is Different
**Subtask**: 2.6.3.3 - Environmental Impact and Authority Positioning

**Headline**: "Built Specifically for Environmental Consultancies"

**Differentiation Points** (3-column grid):

1. **Industry Specialization**
   - Icon: academic-cap
   - Not general business consulting adapted for environmental firms
   - Operational excellence designed from the ground up for environmental consulting
   - Understanding of field data coordination, compliance requirements, multi-stakeholder projects

2. **Progressive Excellence Framework**
   - Icon: chart-bar
   - Not one-time implementations—continuous systematic advancement
   - Track-based progression across seven operational domains
   - Sustainable transformation, not quick fixes

3. **Environmental Mission Alignment**
   - Icon: heart
   - Every operational improvement multiplies environmental impact
   - Success measured by additional clients served and projects completed
   - Aligned incentives through subscription model

#### Section 6: Our Approach
**Component**: Process overview with icons

**4-Step Process** (horizontal timeline or card layout):

1. **Assessment** - Understanding current operational maturity
2. **Implementation** - Systematic playbook deployment
3. **Optimization** - Continuous improvement and refinement
4. **Advancement** - Progressive elevation across operational tracks

#### Section 7: Sustainability Commitment
**Subtask**: 2.6.3.3 - Environmental Impact and Authority Positioning

**Headline**: "Walking Our Talk on Sustainability"

**Our Commitments** (simple list or cards):
- Remote-first operations minimizing commuting emissions
- Paperless operations and documentation
- Supporting clients whose work advances environmental outcomes
- Measuring our impact by the environmental work we enable

**Impact Statement**:
> "Since founding GaiaOps, we've helped environmental consultancies [future: insert specific metrics like 'reclaim 500+ hours,' 'serve 25% more clients,' 'complete projects 30% faster']. Each efficiency gain means more environmental work accomplished with the same resources."

#### Section 8: Final CTA
**Component**: Simple, mission-focused CTA
- **Headline**: "Ready to Amplify Your Environmental Impact?"
- **Subheadline**: "Let's discuss how systematic operational excellence can multiply your effectiveness"
- **CTA Button**: "Book a Discovery Call"
  - URL: `https://calendly.com/d/cspg-g8f-tsd?utm_source=website&utm_medium=cta&utm_campaign=about-page&utm_content=routing-form`

### Technical Requirements
- Mix Inter (headings, UI) and Crimson Pro (narrative story sections)
- Professional, credible tone without being cold
- Founder photo (if available, otherwise text-only is fine)
- Mobile-responsive layout
- 60/30/10 color distribution
- Icons verified from available list

### Component Reuse
- Hero component
- Section layouts from other pages
- Icon components (verified available icons)
- Button components

---

## 🏗️ PAGE 3: CONTACT PAGE

**Path**: `/contact`  
**Estimated Time**: 1.5-2 hours  
**ClickUp Task**: #86d01nkjz

### Content Structure

#### Section 1: Hero
**Component**: Simple, clean hero
- **Headline**: "Let's Start a Conversation"
- **Subheadline**: "Whether you're ready to transform your operations or just curious about what's possible, we're here to help."
- **No CTA**: Let users choose their preferred contact method below

#### Section 2: Primary Contact Method - Calendly Routing Form (EMBEDDED)
**Layout**: Full-width embedded section

**Headline**: "Schedule a Call"
**Subheadline**: "The fastest way to get started is a conversation. Our routing form will help us find the right type of call for your needs."

**Calendly Embed**:
- Use embedded routing form (NOT popup)
- URL: `https://calendly.com/d/cspg-g8f-tsd?utm_source=website&utm_medium=embed&utm_campaign=contact-page&utm_content=routing-form`
- Embed code:
```html
<!-- Calendly inline widget begin -->
<div class="calendly-inline-widget" 
     data-url="https://calendly.com/d/cspg-g8f-tsd?utm_source=website&utm_medium=embed&utm_campaign=contact-page&utm_content=routing-form" 
     style="min-width:320px;height:700px;">
</div>
<script type="text/javascript" 
        src="https://assets.calendly.com/assets/external/widget.js" 
        async>
</script>
<!-- Calendly inline widget end -->
```

**Design Note**: Give this prominent placement - it's the primary conversion path

#### Section 3: Alternative Contact Methods
**Layout**: 2-column grid (stack on mobile)

**Email Contact**:
- Icon: envelope (or similar from verified icons)
- **Headline**: "Send Us an Email"
- **Email**: ross@gaiaops.io
- **Copy**: "Prefer email? Send us your questions and we'll respond within 24 hours."

**General Inquiries**:
- Icon: question-mark-circle (if available, otherwise use chat or similar)
- **Headline**: "Questions About Our Services?"
- **Copy**: "Not sure where to start? Email us your questions and we'll help you determine the best next steps."

#### Section 4: What to Expect
**Component**: Simple timeline or steps

**After You Book**:
1. **Confirmation Email** - Immediate calendar invite with call details
2. **Pre-Call Questionnaire** - Short form to make the most of our time
3. **Discovery Call** - In-depth conversation about your challenges and goals
4. **Proposal** - Tailored recommendation within 48 hours

#### Section 5: Office Information (Simple)
**Component**: Single column info box

**Location**: 
- Remote-first company
- Serving environmental consultancies across PST timezone
- (New Zealand based, serving North America)

**Hours**:
- Monday - Friday, 9am - 5pm PST
- Response within 24 hours during business days

#### Section 6: Quick Links
**Component**: Simple link grid

**Helpful Resources**:
- [Solutions Overview](/solutions)
- [How We Help](/how-we-help)
- [Pricing](/pricing)
- [About Us](/about)

#### Section 7: Final Note
**Component**: Simple text box or highlighted section

**Not Ready to Call Yet?**
"That's perfectly fine! Explore our website to learn more about our approach, or sign up for our newsletter to receive insights on operational excellence for environmental consultancies."

**Note**: Newsletter signup can be simple email input for Phase 1, or just remove this section if not implementing newsletter yet.

### Technical Requirements
- Calendly embed must load properly (test across browsers)
- Mobile-responsive layout
- Email links should open mail client: `mailto:ross@gaiaops.io`
- Clean, simple design - contact page should be functional, not flashy
- Fast loading (Calendly embed can slow things down)
- 60/30/10 color distribution maintained

### Component Reuse
- Hero component
- Icon components (verified icons only)
- Section layouts
- Simple link styling

### Note on Contact Form
**Current Strategy**: Using embedded Calendly routing form as primary contact method instead of building separate contact form. This:
- Reduces development time
- Provides immediate scheduling
- Routes inquiries appropriately
- Integrates with existing ClickUp automation

**Future Enhancement**: Can add traditional contact form later if data shows users prefer it.

---

## 🔄 Implementation Strategy

### Recommended Build Order
1. **Pricing Page** (most complex structure)
2. **About Page** (content-heavy, establish narrative tone)
3. **Contact Page** (simplest, mostly embed)

### Why This Order?
- Pricing page establishes card patterns that might be reused
- About page lets us dial in the storytelling tone
- Contact page is straightforward finish

### Alternative: Parallel Approach
If using multiple Claude Code sessions, can build simultaneously:
- **Session A**: Pricing structure and cards
- **Session B**: About narrative and story
- **Session C**: Contact page and Calendly embed

Then merge all to development branch.

---

## 📝 Implementation Checklist

### Phase 1: Pricing Page (2.5-3 hours)

**Section 1: Hero** (20 min)
- [ ] Create pricing page file: `src/pages/pricing.astro`
- [ ] Import Hero component
- [ ] Add headline and subheadline
- [ ] Test rendering

**Section 2: Pricing Cards** (60 min)
- [ ] Create three-card layout structure
- [ ] Card 1: Jumpstart - price, features, CTA
- [ ] Card 2: Systematic Growth - price, features, CTA, "Most Popular" badge
- [ ] Card 3: Operations Excellence - price, features, CTA
- [ ] Mobile responsive stack
- [ ] Color styling (teal primary, navy secondary, orange accents)
- [ ] Test all CTAs

**Section 3: Comparison Table/Features** (30 min)
- [ ] Create comparison structure (table or cards)
- [ ] Add feature comparison rows
- [ ] Mobile responsive handling
- [ ] Test readability

**Section 4: ROI Calculator** (20 min)
- [ ] Create static ROI example section
- [ ] Add calculation breakdown
- [ ] Visual styling
- [ ] Test on mobile

**Section 5: Subscription vs One-Time** (15 min)
- [ ] Create two-column comparison
- [ ] Add check/x marks for features
- [ ] Mobile stack
- [ ] Test contrast

**Section 6: 30-Day Guarantee** (15 min)
- [ ] Create highlighted box
- [ ] Add shield-check icon (verify available)
- [ ] Add guarantee copy
- [ ] Test styling

**Section 7: FAQ Accordion** (30 min)
- [ ] Create accordion structure (or simple expandable sections)
- [ ] Add 5 FAQ items
- [ ] Test expand/collapse
- [ ] Mobile friendly
- [ ] Test all answers display

**Section 8: Final CTA** (10 min)
- [ ] Create CTA section
- [ ] Add headline and subheadline
- [ ] Calendly link with proper UTM parameters
- [ ] Secondary email link
- [ ] Test both links

**Testing & Polish** (20 min)
- [ ] Review entire page for consistency
- [ ] Check color distribution (60/30/10)
- [ ] Test all CTAs
- [ ] Mobile responsive check
- [ ] Console check (no errors)
- [ ] Screenshot comparison with brand guidelines

---

### Phase 2: About Page (2-2.5 hours)

**Section 1: Hero** (15 min)
- [ ] Create about page file: `src/pages/about.astro`
- [ ] Import Hero component
- [ ] Add mission-focused headline/subheadline
- [ ] Test rendering

**Section 2: Mission & Values** (30 min)
- [ ] Create mission statement box/section
- [ ] Add three values in 3-column grid
- [ ] Add icons for each value (verify available)
- [ ] Style with brand colors
- [ ] Mobile responsive stack
- [ ] Test icons render

**Section 3: Founding Story** (40 min)
- [ ] Create narrative section with Crimson Pro font for body
- [ ] Add opening paragraphs (environmental background)
- [ ] Add BitPrime experience
- [ ] Add key insight paragraph
- [ ] Add opportunity recognition
- [ ] Add mission statement quote
- [ ] Add personal stakes paragraph
- [ ] Test readability and flow
- [ ] Mobile formatting

**Section 4: Founder Credentials** (25 min)
- [ ] Create credentials section
- [ ] Add four credential categories (Environmental, Digital Ops, Regulatory, Technology)
- [ ] Add bullet points for each
- [ ] Add founder quote box
- [ ] Style for professional appearance
- [ ] Test mobile layout

**Section 5: Why GaiaOps is Different** (20 min)
- [ ] Create 3-column differentiation grid
- [ ] Add icons (verify available)
- [ ] Add three differentiation points
- [ ] Mobile responsive stack
- [ ] Test icon rendering

**Section 6: Our Approach** (15 min)
- [ ] Create 4-step process timeline or cards
- [ ] Add Assessment, Implementation, Optimization, Advancement
- [ ] Style consistently
- [ ] Test mobile

**Section 7: Sustainability Commitment** (15 min)
- [ ] Create sustainability section
- [ ] Add commitments list/cards
- [ ] Add impact statement
- [ ] Style appropriately
- [ ] Test mobile

**Section 8: Final CTA** (10 min)
- [ ] Create mission-focused CTA
- [ ] Add Calendly link with proper UTM
- [ ] Test button

**Testing & Polish** (15 min)
- [ ] Review entire page for narrative flow
- [ ] Check color distribution
- [ ] Test all links
- [ ] Mobile responsive check
- [ ] Typography check (Inter headings, Crimson Pro story sections)
- [ ] Console check
- [ ] Screenshot review

---

### Phase 3: Contact Page (1.5-2 hours)

**Section 1: Hero** (10 min)
- [ ] Create contact page file: `src/pages/contact.astro`
- [ ] Import Hero component
- [ ] Add simple headline/subheadline
- [ ] Test rendering

**Section 2: Calendly Embed** (30 min)
- [ ] Add section headline and subheadline
- [ ] Add Calendly inline embed code
- [ ] Verify UTM parameters correct
- [ ] Test embed loads properly
- [ ] Test mobile responsiveness
- [ ] Check embed height on different screen sizes
- [ ] Test actual booking flow

**Section 3: Alternative Contact Methods** (20 min)
- [ ] Create 2-column grid
- [ ] Add email contact section with icon
- [ ] Add general inquiries section with icon
- [ ] Add mailto links
- [ ] Test mailto links open mail client
- [ ] Mobile stack
- [ ] Test icons render

**Section 4: What to Expect** (15 min)
- [ ] Create timeline or steps section
- [ ] Add 4 steps of process
- [ ] Style consistently
- [ ] Test mobile

**Section 5: Office Information** (10 min)
- [ ] Create info box
- [ ] Add location and hours
- [ ] Style simply
- [ ] Test mobile

**Section 6: Quick Links** (10 min)
- [ ] Create link grid
- [ ] Add 4 helpful resource links
- [ ] Test all links
- [ ] Mobile responsive

**Section 7: Final Note** (10 min)
- [ ] Add "Not ready to call yet?" section
- [ ] Style as simple text box
- [ ] Test mobile

**Testing & Polish** (15 min)
- [ ] Review entire page
- [ ] Test Calendly embed thoroughly
- [ ] Test all mailto links
- [ ] Test all navigation links
- [ ] Mobile responsive check
- [ ] Page load speed (Calendly can be slow)
- [ ] Console check
- [ ] Cross-browser test (especially Calendly embed)

---

## 🚀 Deployment Process

### Git Workflow

**After Each Page is Complete**:
```powershell
# Review changes
git status
git diff src/pages/[page].astro

# Stage and commit
git add src/pages/[page].astro
git commit -m "feat: add [page name] with [key features]"

# Push to development
git push origin development
```

**After All Three Pages Complete**:
```powershell
# Final review on development branch
# Test all three pages on dev site: gaiaops-dev-f1kaz.sevalla.page

# When ready for production
git checkout main
git merge development
git push origin main

# Verify on production: gaiaops.io
```

### Testing Checklist (Before Production)

**Each Page**:
- [ ] All sections render correctly
- [ ] All CTAs functional with correct UTM parameters
- [ ] All links work (internal and external)
- [ ] Icons render properly (not as blobs)
- [ ] Colors match brand guidelines exactly
- [ ] Typography correct (Inter/Crimson Pro as specified)
- [ ] Mobile responsive on actual devices
- [ ] No console errors
- [ ] Page loads in <3 seconds
- [ ] Color distribution: 60% teal, 30% blue, 10% orange

**Site-Wide After Deploy**:
- [ ] Navigation links to new pages work
- [ ] Footer links work
- [ ] Breadcrumbs (if applicable) work
- [ ] New pages in sitemap (future enhancement)
- [ ] SEO meta tags present (future enhancement)

---

## 💡 Success Criteria

### Functional Requirements
- [ ] All three pages deployed and accessible
- [ ] All Calendly CTAs functional with proper UTM tracking
- [ ] Contact page Calendly embed works on all devices
- [ ] All email links (mailto) work correctly
- [ ] Mobile responsive on all pages
- [ ] Navigation complete (all pages linked in nav/footer)

### Content Requirements
- [ ] No placeholder/Lorem ipsum text
- [ ] All pricing details accurate and complete
- [ ] Company story complete and compelling
- [ ] Contact information correct
- [ ] All CTAs have appropriate copy

### Technical Requirements
- [ ] Brand guidelines consistently applied (colors, typography)
- [ ] 60/30/10 color distribution maintained
- [ ] Icons verified and rendering correctly
- [ ] Cross-browser compatibility
- [ ] No console errors
- [ ] Page load times acceptable (<3 seconds)

### Quality Indicators
- [ ] Professional appearance matches brand
- [ ] Clear value proposition on pricing page
- [ ] Compelling narrative on about page
- [ ] Easy-to-use contact page
- [ ] Consistent user experience across pages
- [ ] Mobile experience tested and optimized

---

## 📚 Reference Materials

### Brand Colors (Exact Hex Codes)
- **Ocean Teal (Primary)**: #2A7F7E (use this, not #4A9B8B from older docs)
- **Systematic Blue (Secondary)**: #1B365D
- **Impact Orange (Accent)**: #D97642
- **Supporting**: 
  - Success Green: #48BB78
  - Info Blue: #4299E1
  - Neutral Grays: #2D3748, #4A5568, #E2E8F0, #F7FAFC

### Typography
- **Inter**: Headings, UI elements, body text on most pages
  - Weights: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
- **Crimson Pro**: Long-form narrative content (like About page story)
  - Weights: 400 (Regular), 600 (SemiBold)

### Verified Icons (From Icon.astro)
check-circle, user-group, heart, shield-check, chart-bar, arrow-trending-up, star, clock, cog, academic-cap, magnifying-glass, adjustments-horizontal, cube, document-text, rocket-launch, clipboard-document-check, briefcase, envelope, question-mark-circle (verify these before using)

### Calendly URLs
**Primary (Routing Form)**:
```
https://calendly.com/d/cspg-g8f-tsd
```

**Direct Event Types** (if needed):
- Operations Transformation Call: `https://calendly.com/ross-gaiaops/operations-transformation-call`
- Coffee Chat: `https://calendly.com/ross-gaiaops/coffee-chat`
- Partnership Discussion: `https://calendly.com/ross-gaiaops/partnership-discussion`

**UTM Parameters** (add to all Calendly links):
- Pricing Page: `?utm_source=website&utm_medium=cta&utm_campaign=pricing-page&utm_content=routing-form`
- About Page: `?utm_source=website&utm_medium=cta&utm_campaign=about-page&utm_content=routing-form`
- Contact Page (embed): `?utm_source=website&utm_medium=embed&utm_campaign=contact-page&utm_content=routing-form`

### Contact Information
- **Email**: ross@gaiaops.io
- **Location**: Remote-first, serving PST timezone
- **Hours**: Monday-Friday, 9am-5pm PST

---

## 🎓 Lessons from Previous Sessions

### What Works Well
1. **Building section by section with testing after each** - Catches issues early
2. **Using exact hex codes** - Copy-paste, never type from memory
3. **Verifying icons before using** - Check Icon.astro or verified list
4. **Mobile testing throughout** - Don't wait until the end
5. **Clear commit messages** - Makes Git history useful
6. **Following brand guidelines strictly** - Maintains consistency

### Common Pitfalls to Avoid
1. **Icons rendering as blobs** - Use :global(svg) selector in styles
2. **Colors not matching** - Always use exact hex codes from brand guidelines
3. **Skipping mobile testing** - Test on actual devices when possible
4. **Too many changes before testing** - Test after each major section
5. **Forgetting UTM parameters** - Always use full Calendly URLs with tracking
6. **Over-engineering components** - Keep it simple, especially for unique sections

### Time Management Tips
1. **Start with structure, add polish later** - Get working version first
2. **Use existing patterns** - Reference Homepage, How We Help, Solutions pages
3. **Take breaks between pages** - Fresh eyes catch more issues
4. **Don't aim for perfection first pass** - Iterate and improve
5. **Budget extra time for testing** - Better to over-estimate than rush

---

## 📋 Pre-Code Checklist for Claude Code

Before starting any coding, ensure Claude Code has:
- [ ] This session plan document
- [ ] Access to brand guidelines (colors, typography)
- [ ] List of verified heroicons
- [ ] Examples of existing pages (Homepage, How We Help)
- [ ] Calendly URLs with proper UTM parameters
- [ ] Component documentation (Hero, Icon, Button)
- [ ] Understanding of 8px grid spacing system
- [ ] Mobile-first responsive design approach

---

## 🎯 Next Steps

### Immediate (This Session)
1. Review this session plan with Claude Code
2. Ensure development environment ready
3. Verify git branch (development)
4. Start with Pricing Page

### During Build
1. Test after every major section
2. Commit working sections (don't wait for full page)
3. Keep dev server running for fast feedback
4. Screenshot comparison for color accuracy
5. Mobile test frequently

### After Build
1. Comprehensive testing all three pages
2. Deploy to development for review
3. Final QA on actual dev site
4. Deploy to production when approved
5. Update ClickUp tasks as complete

---

## 📞 Support Resources

If you encounter issues during build:
- **Troubleshooting Guide**: `docs/core/claude-code-troubleshooting-guide.md`
- **Component Documentation**: Review existing page files in `src/pages/` and `src/components/`
- **Brand Guidelines**: This session plan + `docs/core/brand_guidelines_claude_code.md`
- **Icon List**: `docs/reference/complete-list-available-heroicons.md`

---

**Ready to build! Let's create three excellent pages that complete the core conversion path.** 🚀
