# Page Building Workflow - Hybrid Approach
**Last Updated**: October 9, 2025  
**Version**: 2.0  
**Based On**: Successful October 2025 page implementations

---

## 🎯 Goal: Build Quality Pages Efficiently

This workflow reflects **actual experience** from building the GaiaOps website pages (Homepage, 7 track pages, How We Help, Solutions overview). It uses the proven **hybrid Claude Desktop + Claude Code approach** that has delivered consistent results.

### Typical Page Timeline
- **Simple pages** (stub/basic): 2-4 hours
- **Medium complexity** (standard content): 4-6 hours  
- **Complex pages** (interactive/assessment): 6-10 hours

*These are realistic estimates, not aspirational targets.*

---

## 🔄 THE HYBRID WORKFLOW

### Overview: Four-Phase Approach

```
Phase 1: PLANNING (Claude Desktop)        → Session plan document
Phase 2: IMPLEMENTATION (Claude Code)     → Working code files
Phase 3: DEPLOYMENT (PowerShell/GitHub)   → Live on dev/prod sites
Phase 4: REVIEW (Claude Desktop)          → Documentation & learnings
```

---

## 📋 PHASE 1: PLANNING & SETUP (Claude Desktop)

### Time: 30-45 minutes for new pages
### Tool: Claude.ai web interface (Desktop/Web Chat)

### Activities:

**1. Content Audit (10-15 min)**
- Review sitemap: What page are we building?
- Check existing pages: What patterns can we reuse?
- Identify required components: Which are already built?
- Review brand guidelines: Confirm colors, typography
- Check UTM structure: What Calendly links are needed?

**2. Session Plan Creation (15-20 min)**

Ask Claude Desktop to create a session plan that includes:

```markdown
# Session Plan: [Page Name]
**Date**: [Date]
**Estimated Time**: [Hours]

## Objective
[Clear description of what we're building]

## Page Structure
1. Hero Section
2. [Content sections...]
3. CTA Section

## Component Inventory
**Existing (Reuse):**
- Component name (location)

**New (Build):**
- Component name (requirements)

## Brand Requirements
- Colors: #2A7F7E (60%), #1B365D (30%), #D97642 (10%)
- Typography: Inter (UI), Crimson Pro (long-form)
- Spacing: 8px grid system

## Implementation Checklist
### Phase 1: Core Structure
- [ ] Create page file
- [ ] Import required components
- [ ] Set up base layout

### Phase 2: Section Implementation
- [ ] Section 1: [Name] (estimated time)
- [ ] Section 2: [Name] (estimated time)
...

### Phase 3: Polish & QA
- [ ] Mobile responsive check
- [ ] Color distribution (60/30/10)
- [ ] Icon verification
- [ ] CTA functionality

## Success Criteria
- [ ] All sections display correctly
- [ ] Mobile responsive
- [ ] Brand guidelines followed
- [ ] All links functional
```

**3. Resource Preparation (5-10 min)**
- Have brand guidelines open
- Locate similar existing pages
- Verify icon names in `complete-list-available-heroicons.md`
- Check Calendly UTM CSV for correct links

### Output: Session plan artifact ready for Claude Code

---

## 💻 PHASE 2: IMPLEMENTATION (Claude Code)

### Time: 2-8 hours (varies by complexity)
### Tool: Claude Code extension in VS Code

### Setup:

**1. Start Dev Server (if not running)**
```powershell
npm run dev
```

**2. Verify Environment**
```powershell
# Check branch
git status

# If not on development:
git checkout development
git pull origin development
```

**3. Feed Context to Claude Code**

**CRITICAL FIRST MESSAGE:**
```
I'm working on [page name]. Here's the session plan:

[Paste or attach session plan from Claude Desktop]

Before we start coding, please:
1. Read docs/core/brand_guidelines_claude_code.md
2. Read docs/reference/heroicon-styling-guide.md (if using icons)

Let's start with Phase 1, Task 1: [specific task]
```

### Implementation Loop:

**For EACH section (repeat this cycle):**

**Step 1: Code Implementation**
- Claude Code reads relevant files
- Implements ONE section at a time
- Shows diff for your review
- You approve or request changes

**Step 2: IMMEDIATE Testing** ⚠️ **CRITICAL**
```
1. Save file (Ctrl+S)
2. Switch to browser
3. Hard refresh (Ctrl+Shift+R)
4. Check the new section:
   ✓ Visual appearance correct?
   ✓ Colors match brand (#2A7F7E, #1B365D, #D97642)?
   ✓ Icons render properly (not giant shapes)?
   ✓ Text readable and properly styled?
   ✓ Spacing looks good?
5. Open DevTools Console (F12)
   ✓ No errors?
   ✓ No warnings?
6. Test responsive (resize browser)
   ✓ Mobile layout works?
   ✓ Tablet layout works?
   ✓ Desktop layout works?
```

**Step 3: Fix Issues Immediately**
- If anything wrong, tell Claude Code BEFORE moving on
- Don't build next section until current one works
- Take screenshot for Claude Desktop review if needed

**Step 4: Commit After Working Section** *(Optional but recommended)*
```powershell
git add src/pages/[file].astro
git commit -m "feat: add [section name] to [page] - CU-[task-id]"
```

**Step 5: Repeat for Next Section**

### Common Implementation Patterns:

**Hero Section** (30-45 min)
- Large headline with brand positioning
- Subtitle with value proposition
- Primary + Secondary CTAs
- Background gradient or image
- Mobile responsive layout

**Content Section with Icons** (20-30 min)
- Grid layout (2-3 columns)
- Icon + heading + description cards
- **Remember**: Icons must use wrapper span with explicit sizing
```html
<span class="icon-teal"><Icon name="users" type="outline" /></span>
```

**Two-Column Layout** (25-35 min)
- Text content on left, visual on right (or vice versa)
- Proper responsive stack on mobile
- Balanced spacing

**CTA Section** (15-20 min)
- Clear call-to-action headline
- Primary + secondary buttons
- Calendly links with proper UTM parameters

### Tips for Efficient Implementation:

✅ **DO:**
- Build sections in logical order (top to bottom)
- Test immediately after each section
- Copy patterns from existing pages
- Reference brand guidelines constantly
- Use exact hex codes (#2A7F7E, #1B365D, #D97642)

❌ **DON'T:**
- Build multiple sections before testing
- Trust output without browser verification
- Type color codes from memory
- Skip responsive testing
- Forget `:global(svg)` for icons

### Output: Working page in local environment

---

## 🚀 PHASE 3: DEPLOYMENT (PowerShell + GitHub)

### Time: 10-15 minutes
### Tools: VS Code Terminal (PowerShell) + GitHub + Browser

### Step 1: Final Review
```powershell
# Check what changed
git status

# Review full diff
git diff src/pages/[page].astro

# Review specific sections if needed
git diff src/components/[component].astro
```

### Step 2: Stage & Commit
```powershell
# Stage all related changes
git add src/pages/[page].astro
git add src/components/[any-modified].astro
git add public/images/[any-new].png

# Commit with clear message
git commit -m "feat: complete [page name] page - CU-[task-id]

- Added hero section with brand positioning
- Implemented [section names]
- Mobile responsive design
- Brand guidelines compliance (60/30/10 colors)
- Calendly CTAs with UTM tracking"
```

### Step 3: Deploy to Development
```powershell
# Push to development branch
git push origin development
```

### Step 4: Test on Dev Site
```
1. Wait 2-3 minutes for Sevalla auto-deploy
2. Visit: https://gaiaops-dev-f1kaz.sevalla.page/[page-path]
3. Full page testing:
   ✓ All sections display
   ✓ Navigation works
   ✓ All CTAs clickable
   ✓ Calendly links open correctly
   ✓ Mobile responsive verified
   ✓ No console errors
4. Test on actual mobile device (if available)
```

### Step 5: Deploy to Production (if approved)
```powershell
# Switch to main branch
git checkout main

# Pull latest (safety check)
git pull origin main

# Merge development
git merge development

# Push to production
git push origin main

# Return to development
git checkout development
```

### Step 6: Verify Production
```
1. Wait 2-3 minutes for auto-deploy
2. Visit: https://gaiaops.io/[page-path]
3. Final smoke test:
   ✓ Page loads correctly
   ✓ No broken links
   ✓ All features working
4. Clear browser cache and test again (hard refresh)
```

### Output: Page live on production site

---

## 📝 PHASE 4: REVIEW & DOCUMENTATION (Claude Desktop)

### Time: 15-30 minutes
### Tool: Claude.ai web interface

### Activities:

**1. Visual QA with Screenshots**
- Take screenshots of completed page
- Share with Claude Desktop for review
- Get feedback on:
  - Color distribution (60/30/10?)
  - Visual hierarchy
  - Spacing consistency
  - Responsive behavior
  - Any improvements needed

**2. Session Notes**
- What went well?
- What issues were encountered?
- How long did it actually take?
- Any new patterns discovered?

**3. Update Documentation (if needed)**

Ask Claude Desktop to update:
- `docs/core/claude-code-troubleshooting-guide.md` (if new issues)
- `docs/reference/quick-reference.md` (if new patterns)
- `docs/project/updated_clickup_tasks.md` (mark task complete)

**4. Create Session Retrospective (optional for major pages)**
```markdown
# Session Retrospective: [Page Name]
**Date**: [Date]
**Duration**: [Actual time]

## What Was Built
- [List of sections/features]

## Issues Encountered & Solutions
1. [Issue]: [Solution]

## Lessons Learned
- [Key learning]

## Time Breakdown
- Planning: [X min]
- Implementation: [X hours]
- Testing & QA: [X min]
- Deployment: [X min]
```

### Output: Documentation for future sessions

---

## 🛠️ PRACTICAL EXAMPLES

### Example 1: Simple Stub Page (2-3 hours)

**Page**: Who We Help (stub version)

**Phase 1 - Planning (30 min):**
- Review sitemap position
- Create basic session plan
- Identify reusable hero component
- List 3-4 sections needed

**Phase 2 - Implementation (90 min):**
- Hero section (30 min)
- Target markets grid (30 min)
- Company size explanation (20 min)
- CTA section (10 min)

**Phase 3 - Deployment (15 min):**
- Git commit and push
- Test on dev site
- Deploy to production

**Phase 4 - Review (15 min):**
- Screenshot review
- Mark task complete

**Total**: ~2.5 hours

---

### Example 2: Medium Complexity Page (4-6 hours)

**Page**: Pricing Page

**Phase 1 - Planning (45 min):**
- Research 3-tier structure
- Create detailed session plan
- Design pricing table layout
- Plan FAQ section

**Phase 2 - Implementation (4 hours):**
- Hero section (30 min)
- Quick Start package card (45 min)
- Tier 1 & 2 comparison (90 min)
- Value breakdown section (30 min)
- FAQ accordion (45 min)
- Final CTA (20 min)

**Phase 3 - Deployment (15 min):**
- Git workflow
- Comprehensive testing

**Phase 4 - Review (30 min):**
- Visual QA with stakeholder
- Pricing accuracy review
- Documentation updates

**Total**: ~5.5 hours

---

### Example 3: Complex Interactive Page (8-10 hours)

**Page**: Digital Operations Assessment Tool

**Phase 1 - Planning (60 min):**
- Design assessment logic
- Create comprehensive session plan
- Plan 7-track question structure
- Design results presentation

**Phase 2 - Implementation (7 hours):**
- Assessment intro/hero (30 min)
- Question form structure (90 min)
- Track-specific questions x7 (2 hours)
- Scoring algorithm (90 min)
- Results page layout (90 min)
- Recommendation engine (90 min)
- Testing & debugging (60 min)

**Phase 3 - Deployment (20 min):**
- Extensive testing required
- Multiple test cases

**Phase 4 - Review (45 min):**
- Functional testing review
- User flow documentation
- Assessment logic verification

**Total**: ~9 hours

---

## 🔧 QUICK REFERENCE

### Before Starting Any Page:

**Have Ready:**
- [ ] Session plan from Claude Desktop
- [ ] Brand guidelines (colors: #2A7F7E, #1B365D, #D97642)
- [ ] Heroicons list (`complete-list-available-heroicons.md`)
- [ ] Similar existing pages for reference
- [ ] Dev server running (`npm run dev`)
- [ ] On development branch

### During Implementation:

**After Every Section:**
- [ ] Save file
- [ ] Refresh browser (hard refresh)
- [ ] Visual check
- [ ] Console check (no errors)
- [ ] Responsive check (resize window)
- [ ] Fix issues before next section

### Essential Commands:

```powershell
# Development
npm run dev                           # Start dev server
git status                           # Check changes
git diff [file]                      # Review changes

# Deployment
git add [files]                      # Stage changes
git commit -m "feat: [message]"      # Commit
git push origin development          # Push to dev
git checkout main                    # Switch to main
git merge development                # Merge dev to main
git push origin main                 # Deploy to production
git checkout development             # Back to dev
```

### Brand Standards Checklist:

**Colors:**
- [ ] Ocean Teal (#2A7F7E) - 60% of brand elements
- [ ] Systematic Blue (#1B365D) - 30% of elements
- [ ] Impact Orange (#D97642) - 10% for CTAs only
- [ ] Generous white space (80-120px section padding)

**Typography:**
- [ ] Inter font for UI elements and headings
- [ ] Crimson Pro for long-form content
- [ ] Proper hierarchy (h1 → h4)

**Components:**
- [ ] Icons use wrapper span with explicit sizing
- [ ] Buttons use proper class (btn-primary, btn-secondary, btn-accent)
- [ ] Responsive breakpoints: 768px (tablet), 1024px (desktop)

---

## 🚨 COMMON PITFALLS TO AVOID

### Planning Phase:
❌ Skipping session plan creation
❌ Not reviewing brand guidelines
❌ Forgetting to check existing components

### Implementation Phase:
❌ Building multiple sections before testing
❌ Using approximate colors instead of exact hex
❌ Forgetting `:global(svg)` for icon styling
❌ Not testing responsive on actual devices
❌ Making assumptions about component behavior

### Deployment Phase:
❌ Committing without reviewing diff
❌ Pushing to main without testing on dev
❌ Not waiting for auto-deploy to complete
❌ Skipping mobile testing

### Review Phase:
❌ Not documenting new issues for troubleshooting guide
❌ Forgetting to update task tracking
❌ Not sharing learnings for future sessions

---

## 💡 PRO TIPS

### Efficiency Boosters:

1. **Reuse Aggressively**: Copy entire sections from similar pages and modify
2. **Component First**: Check existing components before building new ones
3. **Brand Reference Always Open**: Keep brand guidelines in separate tab
4. **Test Small**: Catch issues early by testing after every small change
5. **Screenshot Compare**: Compare new sections to existing pages visually

### Quality Improvements:

1. **Color Picker Verify**: Use browser DevTools to verify hex codes match
2. **Console Clean**: Always check browser console, fix warnings
3. **Real Device Test**: Test on actual phone/tablet when possible
4. **Accessibility Check**: Ensure color contrast meets WCAG AA
5. **Performance Monitor**: Check Lighthouse scores periodically

### Time Management:

1. **Set Realistic Expectations**: Use proven estimates, not aspirations
2. **Take Breaks**: Fresh eyes catch issues faster
3. **One Section Focus**: Complete each fully before moving to next
4. **Document As You Go**: Update notes during work, not after
5. **Plan Tomorrow Today**: End session with clear next steps

---

## 📊 SUCCESS METRICS

### Quality Indicators:
- ✅ No console errors on page load
- ✅ All CTAs functional and tracked
- ✅ Mobile responsive verified on devices
- ✅ Brand colors match exactly (no approximations)
- ✅ Icons render correctly (not giant shapes)
- ✅ Page loads in <3 seconds (Lighthouse check)

### Efficiency Indicators:
- ✅ Stayed within time estimate (+/- 30%)
- ✅ Minimal rework needed after initial implementation
- ✅ No "emergency fixes" after deployment
- ✅ Few or no issues found in dev testing
- ✅ Clear documentation for next session

### Process Indicators:
- ✅ Session plan created before coding
- ✅ Claude Code fed context at start
- ✅ Testing after every section
- ✅ Git commits after working sections
- ✅ Documentation updated post-session

---

## 🔄 CONTINUOUS IMPROVEMENT

### After Each Page:
1. **Update Time Estimates**: Record actual vs estimated time
2. **Document New Patterns**: Add successful patterns to quick-reference
3. **Note Issues**: Update troubleshooting guide with solutions
4. **Refine Workflow**: Improve efficiency for next page

### Monthly Review:
1. **Analyze Page Completion Times**: Identify bottlenecks
2. **Review Quality Metrics**: Any recurring issues?
3. **Update Workflow**: Incorporate lessons learned
4. **Refine Estimates**: Adjust time expectations based on data

---

**Remember**: This workflow is based on real experience building the GaiaOps website. It's proven to work. Trust the process, especially the "test after every section" rule - it saves massive time in the long run.

**Last Updated**: October 9, 2025  
**Based on**: Homepage, 7 track pages, How We Help, Solutions overview implementations
