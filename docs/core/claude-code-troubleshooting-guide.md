# GaiaOps Claude Code Troubleshooting Guide
**Living Document - Updated After Each Coding Session**  
**Last Updated**: October 8, 2025  
**Session Count**: 3 (Oct 2, Oct 8 x2)

---

## 📖 About This Document

This is a **living reference guide** for common issues encountered when using Claude Code for GaiaOps website development. After each coding session, add new problems, solutions, and prevention strategies discovered.

### How to Use This Guide
1. **Before starting a session**: Review the Prevention Checklist
2. **During a session**: Reference Solutions when issues arise
3. **After a session**: Add any new issues encountered to the appropriate section

---

## 🎯 Quick Prevention Checklist

Use this before EVERY coding session:

### Pre-Session Setup
- [ ] Confirm you're on `development` branch (`git branch --show-current`)
- [ ] Pull latest changes (`git pull origin development`)
- [ ] Dev server running (`npm run dev` on port 4321/4322)
- [ ] Have brand guidelines color codes ready (#2A7F7E, #1B365D, #D97642)
- [ ] Have session plan or task list prepared
- [ ] Review previous session retrospective (if continuing work)

### When Using Claude Code
- [ ] Feed it the session plan document first
- [ ] Ask it to read relevant reference files before coding
- [ ] Request one section/component at a time
- [ ] Test in browser immediately after each change
- [ ] Verify icon rendering after adding any icons
- [ ] Check color values against brand guidelines

### Before Committing
- [ ] Visual QA in browser (all sections, responsive)
- [ ] Console check (F12 - no errors)
- [ ] Review `git status` and `git diff`
- [ ] Clean commit message with task reference

---

## 🐛 ISSUE TRACKER

### Format for Each Entry:
```
## Issue Name
**First Encountered**: [Date]
**Last Encountered**: [Date]
**Frequency**: [High/Medium/Low]
**Severity**: [Critical/High/Medium/Low]

**Problem Description:**
[What goes wrong and how it manifests]

**Root Cause:**
[Why this happens]

**Solution:**
[Step-by-step fix]

**Prevention:**
[How to avoid this in the future]

**Related Issues:**
[Links to similar problems]
```

---

## 🎨 STYLING & VISUAL ISSUES

### Issue: Icon Rendering as Giant Blobs

**First Encountered**: October 2, 2025  
**Last Encountered**: October 2, 2025  
**Frequency**: High (occurred 3+ times in one session)  
**Severity**: High (breaks page layout)

**Problem Description:**
Heroicons render as massive filled circles/shapes instead of outlined icons. Icons take up entire viewport width/height instead of proper dimensions.

**Root Cause:**
- Missing `:global(svg)` wrapper in Astro component CSS
- Using Tailwind utility classes (w-8, h-8) instead of explicit pixel values
- Astro component scoping doesn't apply to SVG elements without :global()

**Solution:**
```css
/* ❌ WRONG - Doesn't work in Astro */
.icon-container svg {
  width: 24px;
}

/* ❌ WRONG - Tailwind classes don't work */
<Icon name="clock" class="w-12 h-12" />

/* ✅ CORRECT - Use :global(svg) with explicit pixels */
.icon-container :global(svg) {
  width: 32px;
  height: 32px;
  color: #2A7F7E; /* Explicit color */
}
```

**Prevention:**
1. Always use `:global(svg)` selector when styling icons in Astro
2. Use explicit pixel dimensions (24px, 32px, 48px)
3. Test icon rendering immediately after adding to page
4. Keep reference list of verified working Heroicon names
5. Add icons to Icon.astro component first, then use them

**Related Issues:**
- Icon color inheritance issues
- Icon not displaying at all

---

### Issue: Colors Don't Match Brand Guidelines

**First Encountered**: October 2, 2025  
**Last Encountered**: October 2, 2025  
**Frequency**: Medium (occurred multiple times)  
**Severity**: Medium (affects brand consistency)

**Problem Description:**
Sections use wrong shades of teal, blue, or orange. Colors appear slightly off from brand specifications (e.g., using #14B8A6 instead of #2A7F7E).

**Root Cause:**
- Using generic/common web colors without checking brand guidelines
- Relying on CSS variable names that might not match brand specs
- Not comparing rendered colors against reference screenshots

**Solution:**
1. **Always use exact brand hex codes:**
   - Ocean Teal: `#2A7F7E` (60% usage - backgrounds, subtle accents)
   - Systematic Blue: `#1B365D` (30% usage - headings, primary text)
   - Impact Orange: `#D97642` (10% usage - CTAs, strategic highlights)
   - Charcoal: `#2C3E50` (body text)
   - Cloud Gray: `#F8F9FA` (section backgrounds)
   - Pure White: `#FFFFFF` (primary background, text on dark)

2. **Search and replace wrong colors:**
```bash
# Search across project for wrong teal
grep -r "#14B8A6" src/
# Replace with correct brand color
```

3. **Screenshot comparison:**
   - Take screenshot of new section
   - Compare side-by-side with existing page sections
   - Use browser DevTools color picker to verify

**Prevention:**
1. Keep color reference card visible during development
2. Copy-paste hex codes from this guide (don't type from memory)
3. Verify 60/30/10 color distribution after completing each section
4. Screenshot compare with existing pages before committing
5. Add brand colors as CSS custom properties in global.css (future improvement)

**Related Issues:**
- Text contrast issues (white text on light background)
- Gradient color mismatches

---

### Issue: Text Not Visible on Colored Backgrounds

**First Encountered**: October 2, 2025  
**Last Encountered**: October 8, 2025  
**Frequency**: Medium  
**Severity**: Critical (makes content unreadable)

**Problem Description:**
Text appears dark on dark backgrounds or light on light backgrounds. Common with gradient backgrounds or when switching from light to dark sections.

**Root Cause:**
- Relying on parent color inheritance instead of explicit declarations
- Not testing contrast after adding backgrounds
- Copying section CSS from light section to dark section without updating text colors

**Solution:**
```css
/* ❌ WRONG - Unreliable inheritance */
.dark-section {
  background: linear-gradient(135deg, #2A7F7E, #1B365D);
  color: white; /* Only affects immediate children */
}

/* ✅ CORRECT - Explicit declarations for all text elements */
.dark-section {
  background: linear-gradient(135deg, #2A7F7E, #1B365D);
}

.dark-section h1,
.dark-section h2,
.dark-section h3,
.dark-section p,
.dark-section li,
.dark-section span {
  color: white;
}
```

**Prevention:**
1. Test text visibility IMMEDIATELY after adding any background
2. Never rely on color inheritance for text on colored backgrounds
3. Explicitly declare text colors on every text element in colored sections
4. Use DevTools to check contrast ratios (WCAG AA: 4.5:1 minimum)
5. Add text shadows as enhancement, not as primary contrast solution

**Related Issues:**
- Button text visibility issues
- Icon color visibility on backgrounds

---

### Issue: Gradient Background Overuse

**First Encountered**: October 8, 2025  
**Last Encountered**: October 8, 2025  
**Frequency**: Low (design issue, not technical)  
**Severity**: Medium (reduces visual impact)

**Problem Description:**
Multiple consecutive sections use the same gradient background, creating visual monotony and reducing the impact of the gradient treatment. Makes page feel repetitive.

**Root Cause:**
- Applying gradient to every "important" section without considering overall page rhythm
- Not stepping back to view full-page visual hierarchy
- Gradient is beautiful, so temptation to use it everywhere

**Solution:**
**Strategic gradient usage:**
1. Use gradient for ONE hero/CTA section per page (maximum impact)
2. Alternate with light sections (white/cloud gray) and dark sections (systematic blue)
3. Use card-in-section pattern for important content that needs emphasis

**Visual rhythm pattern:**
```
Hero (gradient)
↓
Light section (white/cloud gray)
↓
Light section with card emphasis
↓
Light section
↓
Dark section (solid systematic blue) OR light section
↓
Final CTA (gradient) ← THE gradient moment
↓
Footer (dark systematic blue)
```

**Prevention:**
1. Plan page visual hierarchy before building
2. Sketch or wireframe section backgrounds
3. Limit gradient to 1-2 sections maximum per page
4. Use card/border treatments for emphasis instead of backgrounds
5. Review full page scroll before finalizing

**Related Issues:**
- Visual hierarchy unclear
- CTAs losing impact due to background fatigue

---

## 🏗️ LAYOUT & STRUCTURE ISSUES

### Issue: Single Column Layout Looks Empty on Desktop

**First Encountered**: October 8, 2025  
**Last Encountered**: October 8, 2025  
**Frequency**: Low  
**Severity**: Low (aesthetic issue)

**Problem Description:**
Sections with 6+ list items or multiple content blocks use single column layout, appearing sparse and not utilizing screen real estate effectively on desktop/tablet.

**Root Cause:**
- Mobile-first approach defaulting to single column
- Not considering desktop layout during planning
- Copying patterns from other sections without evaluating fit

**Solution:**
```css
/* Responsive two-column grid for desktop */
.content-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
}

/* Alternative: Flexbox with wrap */
.content-flex {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

@media (min-width: 768px) {
  .content-flex {
    flex-direction: row;
    flex-wrap: wrap;
  }
  
  .content-flex > * {
    flex: 1 1 calc(50% - 1.5rem);
  }
}
```

**Prevention:**
1. Plan desktop layout for content-heavy sections
2. Use 2-3 column grid/flex for 6+ items on desktop
3. Always stack to single column on mobile (<768px)
4. Test at 375px, 768px, 1200px, 1920px during development
5. Consider visual balance: left column for list, right column for callout/quote

**Related Issues:**
- Content appearing too stretched on ultra-wide screens
- Inconsistent column breaks on tablet sizes

---

### Issue: Responsive Breakpoint Not Working

**First Encountered**: [Previous sessions - not documented]  
**Last Encountered**: [N/A in Oct 8 session]  
**Frequency**: Low  
**Severity**: Medium

**Problem Description:**
Mobile layout appearing on desktop or desktop layout appearing on mobile. Media queries not triggering at expected breakpoints.

**Root Cause:**
- Incorrect media query syntax
- Missing viewport meta tag
- Browser zoom affecting breakpoints
- Using min-width when max-width needed (or vice versa)

**Solution:**
```html
<!-- Ensure viewport meta tag in BaseLayout.astro -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

```css
/* Mobile-first approach (recommended) */
.element {
  /* Mobile styles (default) */
  flex-direction: column;
}

@media (min-width: 768px) {
  .element {
    /* Tablet and up */
    flex-direction: row;
  }
}

@media (min-width: 1200px) {
  .element {
    /* Desktop and up */
    max-width: 1200px;
  }
}
```

**Prevention:**
1. Always use mobile-first approach (default = mobile, media queries for larger)
2. Use standard breakpoints: 640px, 768px, 1024px, 1200px
3. Test with browser DevTools device toolbar
4. Check browser zoom is at 100%
5. Verify viewport meta tag present in layout

**Related Issues:**
- Content overflowing on mobile
- Unwanted horizontal scroll

---

## 🔧 GIT & DEPLOYMENT ISSUES

### Issue: Dependabot PRs Target Wrong Branch

**First Encountered**: October 8, 2025  
**Last Encountered**: October 8, 2025  
**Frequency**: High (every Dependabot PR)  
**Severity**: Medium (bypasses dev workflow)

**Problem Description:**
Dependabot creates PRs that target `main` branch instead of `development`, bypassing the dev → test → production workflow.

**Root Cause:**
- Dependabot default configuration targets repository's default branch (main)
- No `.github/dependabot.yml` configuration file specifying target branch

**Solution:**

**Option A: Change base branch per PR (temporary fix)**
1. Open PR on GitHub
2. Click "Edit" button
3. Change base branch from `main` to `development`
4. Merge PR
5. Test on dev site
6. Merge development to main

**Option B: Configure Dependabot (permanent fix)**
Create `.github/dependabot.yml`:
```yaml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    target-branch: "development"
    open-pull-requests-limit: 5
```

**Prevention:**
1. **Create `.github/dependabot.yml`** with target-branch: "development" (recommended)
2. Always check PR base branch before merging
3. Never merge Dependabot PRs directly to main
4. Test dependency updates on dev site first

**Related Issues:**
- Dependency updates breaking production without testing
- Merge conflicts when trying to sync branches

---

### Issue: Local Branch Out of Sync with Remote

**First Encountered**: October 8, 2025  
**Last Encountered**: October 8, 2025  
**Frequency**: Medium  
**Severity**: Medium (can cause merge conflicts)

**Problem Description:**
When switching to `main` branch locally, git shows "Your branch is behind 'origin/main' by X commits" causing merge issues.

**Root Cause:**
- Working on multiple machines without syncing
- PRs merged on GitHub without pulling locally
- Switching between branches without pulling latest

**Solution:**
```powershell
# Always pull before merging
git checkout main
git pull origin main

# Then merge
git merge development
git push origin main

# Return to development
git checkout development
```

**Prevention:**
1. **Always pull before switching branches:**
   ```powershell
   git checkout main
   git pull origin main
   ```
2. Pull development branch at start of each session:
   ```powershell
   git checkout development
   git pull origin development
   ```
3. After merging PRs on GitHub, pull locally immediately
4. Use `git status` frequently to check sync status
5. Consider using `git fetch` to see remote changes without merging

**Related Issues:**
- Merge conflicts during deployment
- Lost commits due to force push

---

### Issue: Uncommitted Files Showing in Git Status

**First Encountered**: October 8, 2025  
**Last Encountered**: October 8, 2025  
**Frequency**: High  
**Severity**: Low (informational)

**Problem Description:**
Files like `.claude/settings.local.json` or untracked docs/components show in `git status`, making it harder to see actual changes to commit.

**Root Cause:**
- Local development files not in .gitignore
- Claude Code settings tracked locally
- Documentation files created during development

**Solution:**

**For persistent local files (settings):**
```bash
# Add to .gitignore
echo ".claude/" >> .gitignore
echo ".aider*" >> .gitignore
git add .gitignore
git commit -m "chore: ignore local development tool settings"
```

**For one-time untracked files:**
```bash
# Just don't add them - they'll stay local
# Or add to .gitignore if they'll recur
```

**Prevention:**
1. Keep `.gitignore` updated with local tool directories
2. Review `git status` carefully before staging
3. Use `git add <specific-file>` instead of `git add .` when you have untracked files
4. Keep docs/experimental components local until ready for team sharing
5. Create project-specific `.gitignore` entries for your workflow

**Related Issues:**
- Accidentally committing local settings
- Large untracked files affecting repository

---

## 🎨 COMPONENT & ICON ISSUES

### Issue: Component Props Don't Match Use Case

**First Encountered**: October 2, 2025  
**Last Encountered**: [Not in Oct 8 session]  
**Frequency**: Medium  
**Severity**: Low (workaround available)

**Problem Description:**
Attempting to use existing component (e.g., TrackCard) for a different use case, but required props don't match the simplified needs.

**Root Cause:**
- Forcing component reuse when inline HTML would be simpler
- Not reviewing component interface before using
- Assuming all card components are interchangeable

**Solution:**

**Decision tree:**
```
1. Does the component exist? 
   → Yes: Check props
   → No: Create inline HTML

2. Do props match your use case exactly?
   → Yes: Use component
   → No: Evaluate effort to adapt

3. Is it simpler to create custom markup?
   → Yes: Don't force component reuse
   → No: Use/adapt component
```

**When to use inline HTML instead of component:**
- Component requires 5+ props but you only need 2-3
- Component has complex styling you need to override heavily
- One-off use case that won't recur
- Time pressure and custom HTML is faster

**Prevention:**
1. Review component code before deciding to use it
2. Ask Claude Code to show component interface first
3. Don't force component reuse for simplicity's sake
4. Create new simple components for common patterns
5. Document component use cases in component file

**Related Issues:**
- Over-engineering simple sections
- Component prop type errors

---

### Issue: Heroicon Name Not Found

**First Encountered**: October 2, 2025  
**Last Encountered**: October 8, 2025  
**Frequency**: Medium  
**Severity**: Low (easy fix)

**Problem Description:**
Icon doesn't render because the icon name doesn't exist in the Heroicons library or is misspelled. Claude Code suggests an icon that doesn't exist.

**Root Cause:**
- Using solid icon name when only outline available
- Misspelling icon name (e.g., "puzzle-piece" doesn't exist)
- Assuming icon exists without checking Heroicons catalog
- Claude Code hallucinating icon names

**Solution:**

1. **Check Icon.astro component first:**
   - Open `src/components/Icon.astro`
   - Review the `iconMap` object
   - See what icons are already available

2. **If icon needed but not in map:**
   - Visit https://heroicons.com
   - Search for the icon
   - Get the exact name (e.g., "rocket-launch" not "rocket")
   - Add to iconMap in Icon.astro

3. **Add new icon to Icon.astro:**
```javascript
// In iconMap object
'rocket-launch': () => import('@heroicons/react/24/outline/RocketLaunchIcon'),
'clipboard-document-check': () => import('@heroicons/react/24/outline/ClipboardDocumentCheckIcon'),
```

**Prevention:**
1. **Maintain verified icon list** in docs (done: `docs/complete-list-available-heroicons.md`)
2. Check Icon.astro iconMap before requesting icons from Claude Code
3. Cross-reference icon names with heroicons.com
4. Use kebab-case consistently (rocket-launch, not rocketLaunch)
5. Add commonly-needed icons to iconMap proactively
6. When Claude Code suggests an icon, verify it exists before using

**Verified Safe Icons List:**
```
check-circle, user-group, heart, shield-check, chart-bar, 
arrow-trending-up, star, clock, cog, academic-cap, 
magnifying-glass, adjustments-horizontal, cube, 
document-text, rocket-launch, clipboard-document-check,
briefcase
```

**Related Issues:**
- Icon rendering as blob (different issue)
- Icon wrong style (solid vs outline)

---

## 📝 CONTENT & CTA ISSUES

### Issue: Calendly URLs Missing UTM Parameters

**First Encountered**: October 8, 2025  
**Last Encountered**: October 8, 2025  
**Frequency**: Medium  
**Severity**: Medium (affects tracking)

**Problem Description:**
Calendly links don't include proper UTM tracking parameters, making it impossible to track which page/CTA generated the booking.

**Root Cause:**
- Copying old Calendly links without updating
- Not referencing the UTM structure CSV
- Manually typing URLs instead of copy-pasting from reference

**Solution:**

1. **Reference the Calendly UTM CSV** (gaiaops-calendly-utm-links.csv)
2. **Use base URL + UTM parameters:**

```astro
<!-- Standard website CTA pattern -->
<a href="https://calendly.com/d/cspg-g8f-tsd?utm_source=website&utm_medium=cta&utm_campaign=[page-specific]&utm_content=routing-form">
  Book Discovery Call
</a>

<!-- Examples by page: -->
<!-- Homepage hero -->
utm_campaign=homepage-hero

<!-- How We Help page -->
utm_campaign=how-we-help

<!-- Track pages -->
utm_campaign=multi-party-coordination
utm_campaign=client-relationships
<!-- etc -->
```

**Prevention:**
1. Keep Calendly UTM CSV reference open during CTA updates
2. Copy-paste URLs from CSV (don't manually type)
3. Create a UTM builder tool or snippet library
4. Do bulk find/replace for old URLs site-wide
5. Include UTM structure in session plans

**Related Issues:**
- Analytics showing "direct" traffic instead of page source
- Inability to measure CTA effectiveness

---

### Issue: CTA Copy Repetitive Across Sections

**First Encountered**: [Previous sessions]  
**Last Encountered**: October 8, 2025  
**Frequency**: Low  
**Severity**: Low (quality issue)

**Problem Description:**
Every CTA says "Book Discovery Call" or uses identical copy, making page feel repetitive and reducing effectiveness.

**Root Cause:**
- Using default CTA copy without customizing for context
- Not varying CTA language based on section content
- Focusing on functionality over copywriting

**Solution:**

**Vary CTA copy by context:**

| Section Type | Primary CTA | Secondary CTA |
|-------------|-------------|---------------|
| Problem/Pain | "Book Discovery Call" | "Take Free Assessment" |
| Solution Overview | "Explore This Track" | "See All Solutions" |
| Risk Mitigation | "Get Started Risk-Free" | "Learn About Guarantee" |
| Final CTA | "Transform Your Operations" | "Start with Assessment" |
| Track-Specific | "Discuss [Track Name]" | "Explore Other Tracks" |

**Prevention:**
1. Review CTA copy in content spec before building
2. Customize CTA text based on surrounding content
3. Use action-oriented verbs (Transform, Explore, Discover, Build)
4. A/B test different CTA copy over time
5. Document effective CTA patterns

**Related Issues:**
- Low CTA click-through rates
- User confusion about next steps

---

## 🔄 CLAUDE CODE SPECIFIC ISSUES

### Issue: Claude Code Context Window Limit

**First Encountered**: [General observation]  
**Last Encountered**: N/A  
**Frequency**: Low (on large files)  
**Severity**: Medium

**Problem Description:**
When working with very large files or asking Claude Code to review entire project, it may truncate context or miss details.

**Root Cause:**
- Claude Code has context window limitations
- Trying to review too many files at once
- Not providing focused instructions

**Solution:**

1. **Break work into smaller chunks:**
   ```
   ❌ "Fix all sections on the page"
   ✅ "Fix Section 6 (Risk Mitigation), then we'll do Section 7"
   ```

2. **Reference specific file sections:**
   ```
   ✅ "Look at lines 150-200 in how-we-help/index.astro"
   ```

3. **Use focused prompts:**
   ```
   ✅ "Read the session plan first, then implement Task 1.1"
   ```

**Prevention:**
1. Provide session plans with clear section-by-section breakdown
2. Work on one section/component at a time
3. Use "view" command for specific file sections
4. Reference line numbers when discussing changes
5. Keep prompts focused and specific

**Related Issues:**
- Claude Code forgetting earlier instructions
- Incomplete implementations

---

### Issue: Claude Code Making Unwanted Changes

**First Encountered**: [General observation]  
**Last Encountered**: N/A  
**Frequency**: Low  
**Severity**: Medium

**Problem Description:**
Claude Code changes sections or styling that weren't part of the request, potentially breaking working code.

**Root Cause:**
- Vague instructions allowing interpretation
- Claude Code trying to be helpful by "improving" code
- Not specifying which sections to preserve

**Solution:**

1. **Be explicit about scope:**
   ```
   ✅ "Update ONLY the Risk Mitigation section (lines 400-450). 
       Do NOT modify any other sections."
   ```

2. **Request confirmation before changes:**
   ```
   ✅ "Show me what you'll change before implementing"
   ```

3. **Review diffs carefully:**
   ```powershell
   git diff src/pages/how-we-help/index.astro
   ```

**Prevention:**
1. Use explicit scope boundaries in requests
2. Request "show me the plan" before implementation
3. Review git diff before committing
4. Test in browser after each Claude Code change
5. Keep separate components in separate files to limit blast radius

**Related Issues:**
- Regressions in previously working sections
- Unexpected styling changes

---

## 📚 DOCUMENTATION & WORKFLOW ISSUES

### Issue: Session Plan Not Fed to Claude Code

**First Encountered**: October 8, 2025  
**Last Encountered**: N/A  
**Frequency**: Low  
**Severity**: Low (quality issue)

**Problem Description:**
Starting coding in Claude Code without providing the session plan, leading to back-and-forth and missed context.

**Root Cause:**
- Eager to start coding without setup
- Forgetting to provide context documents
- Not treating Claude Code as new context each time

**Solution:**

**Always start Claude Code sessions with:**
```
I'm working on [specific task]. Please read this session plan first:

[Paste session plan content or reference file path]

Let's start with [specific first task]
```

**Prevention:**
1. Create session plan in Claude Web Chat BEFORE opening Claude Code
2. First Claude Code message should always include plan/context
3. Reference specific task numbers from plan
4. Keep plan open in browser while working
5. Update plan as you complete tasks

**Related Issues:**
- Misaligned expectations
- Unnecessary rework

---

### Issue: Not Testing Immediately After Changes

**First Encountered**: [General observation]  
**Last Encountered**: N/A  
**Frequency**: Medium  
**Severity**: High (causes compounding issues)

**Problem Description:**
Making multiple changes before testing in browser, leading to compounded issues that are harder to debug.

**Root Cause:**
- Trying to speed through implementation
- Trust in Claude Code output without verification
- Batch mindset rather than incremental testing

**Solution:**

**Test after EVERY section/component:**
1. Claude Code makes change
2. Refresh browser (Ctrl+Shift+R)
3. Scroll to changed section
4. Verify it looks correct
5. Check browser console for errors
6. Test responsive (resize window)
7. If issues, fix immediately before moving on

**Prevention:**
1. Build testing into workflow as mandatory step
2. Keep browser open side-by-side with VS Code
3. Use browser's responsive design mode
4. Check console after every refresh
5. Don't start next section until current one works

**Related Issues:**
- Multiple compounding bugs
- Unclear which change caused the issue
- Time wasted debugging

---

## 🎓 LESSONS LEARNED

### Session-Specific Learnings

**October 8, 2025 - Morning Session:**
- ✅ Two-column layouts vastly improve desktop presentation
- ✅ Strategic gradient usage (one per page) has more impact than overuse
- ✅ Card-in-section pattern works great for emphasis without color backgrounds
- ✅ Dependabot base branch configuration prevents workflow issues
- ✅ Hybrid Claude Web + Claude Code workflow is optimal

**October 2, 2025 - Track Pages:**
- ✅ Icon issues are caught fastest by testing immediately
- ✅ Color guidelines must be referenced constantly, not from memory
- ✅ Process timeline sections need careful contrast checking
- ✅ Building one section at a time prevents compounding issues

---

## 🔄 CONTINUOUS IMPROVEMENT

### After Each Session - Update This Guide

**Add New Issues:**
1. Did you encounter a problem not listed here?
2. Document it using the issue template
3. Add to appropriate category

**Update Existing Issues:**
1. Did an issue recur? Update "Last Encountered"
2. Found a better solution? Update solution section
3. New prevention strategy? Add to prevention list

**Review Frequency:**
1. Review prevention checklist before every session
2. Review full guide monthly
3. Archive rarely-occurring issues annually

---

## 📞 GETTING HELP

### When Stuck on an Issue

**1. Check This Guide First**
- Search for keywords related to your issue
- Review prevention strategies

**2. Use Claude Web Chat**
- Share screenshots of the issue
- Describe what you expected vs what happened
- Ask for troubleshooting help

**3. Use Claude Code**
- Provide specific error messages
- Show relevant code snippets
- Ask for step-by-step debugging

**4. Reference Documentation**
- Astro docs: https://docs.astro.build
- Heroicons: https://heroicons.com
- Tailwind: https://tailwindcss.com/docs

---

## 📈 SUCCESS METRICS

### How to Measure Improvement

Track these metrics over time:

**Development Efficiency:**
- Time to complete similar-sized pages (target: decreasing)
- Number of issues encountered per session (target: decreasing)
- Number of git commits per feature (target: stable or decreasing)

**Quality Metrics:**
- Number of regressions caught before production (target: increasing)
- Zero console errors on deployment (target: 100%)
- Mobile responsive issues (target: 0 per session)

**Process Adherence:**
- Prevention checklist completion rate (target: 100%)
- Immediate testing after changes (target: 100%)
- Git workflow followed correctly (target: 100%)

---

## 🎯 QUICK REFERENCE CARDS

### Git Workflow Quick Reference

```powershell
# Start of session
git checkout development
git pull origin development
git status

# After changes
git add [specific files]
git commit -m "feat: [description] - CU-[task]"
git push origin development

# Test on dev site, then deploy to production
git checkout main
git pull origin main
git merge development
git push origin main
git checkout development
```

### Brand Colors Quick Reference

```
Ocean Teal:      #2A7F7E  (60% - backgrounds, accents)
Systematic Blue: #1B365D  (30% - headings, text)
Impact Orange:   #D97642  (10% - CTAs, highlights)
Charcoal:        #2C3E50  (body text)
Cloud Gray:      #F8F9FA  (section backgrounds)
White:           #FFFFFF  (primary background)
```

### Icon Styling Quick Reference

```css
/* Always use this pattern */
.icon-container :global(svg) {
  width: 32px;        /* Explicit pixels */
  height: 32px;
  color: #2A7F7E;    /* Explicit color */
  flex-shrink: 0;    /* Prevent distortion */
}
```

### Breakpoints Quick Reference

```css
/* Mobile First - Always */
/* Base styles = Mobile (< 640px) */

@media (min-width: 640px) { /* Small tablet */ }
@media (min-width: 768px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1200px) { /* Large desktop */ }
```

---

**END OF GUIDE**

**Remember**: This is a living document. Add to it after every session. The more we document, the fewer issues we'll encounter!

**Last Updated**: October 8, 2025  
**Next Review**: After next coding session (planned for Calendly CTA updates)
