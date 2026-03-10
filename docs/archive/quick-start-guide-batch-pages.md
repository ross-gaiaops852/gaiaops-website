# Quick-Start Guide for Claude Code Session
**Date**: October 9, 2025  
**Task**: Build Pricing, About, and Contact Pages (Batch)

---

## 🎯 Today's Goal

Build three complete pages in one session:
1. **Pricing Page** (`/pricing`) - 2.5-3 hours
2. **About Page** (`/about`) - 2-2.5 hours  
3. **Contact Page** (`/contact`) - 1.5-2 hours

**Total Estimated Time**: 6-8 hours (can break into multiple work sessions)

---

## 📋 Pre-Flight Checklist

### Files to Have Ready
- ✅ **Main Session Plan**: `docs/sessions/session-plan-pricing-about-contact-batch.md` (this file)
- ✅ **Brand Guidelines**: In project knowledge (colors, typography) + `docs/core/brand_guidelines_claude_code.md`
- ✅ **Verified Icons List**: `docs/reference/complete-list-available-heroicons.md`
- ✅ **Development Config**: `docs/core/gaiaops-development-config-v3.md`
- ✅ **Troubleshooting Guide**: `docs/core/claude-code-troubleshooting-guide.md`

### Environment Check
```powershell
# Navigate to project
cd C:\Users\rcart\gaiaops-website

# Verify branch
git status
# Should show: On branch development

# If not on development:
git checkout development
git pull origin development

# Start dev server
npm run dev
# Should start on port 4321 (or 4322 if 4321 is busy)
```

---

## 🚀 Starting the Claude Code Session

### Step 1: Feed Claude Code the Context

**In Claude Code, send this message first**:

```
Hi! I need you to help me build three pages for the GaiaOps website: Pricing, About, and Contact pages. 

Before we start coding, please read these essential files:

1. docs/sessions/session-plan-pricing-about-contact-batch.md (the complete session plan)
2. docs/core/gaiaops-development-config-v3.md (development configuration)
3. docs/reference/complete-list-available-heroicons.md (verified icons only)

After reading these, confirm you understand:
- The three pages we're building
- Brand colors (Ocean Teal #2A7F7E, Systematic Blue #1B365D, Impact Orange #D97642)
- 60/30/10 color distribution rule
- That we test after EVERY section
- Verified icons only (from the list)
- Proper Calendly URLs with UTM parameters

Ready to start with the Pricing Page?
```

### Step 2: Build in Order

**Recommended Order**:
1. Pricing Page (establishes patterns)
2. About Page (narrative flow)
3. Contact Page (simplest)

**Or if you prefer parallel**:
- Can work on pages simultaneously if comfortable with git branching
- But sequential is safer for first time

### Step 3: Test After Every Section

**Critical**: Don't move to the next section until current one works!

```powershell
# After each section:
1. Save file in VS Code
2. Check browser (hard refresh: Ctrl+Shift+R)
3. Check console for errors (F12)
4. Test on mobile width (responsive toggle in DevTools)
5. If good, move to next section
6. If issues, fix before proceeding
```

---

## 🎨 Critical Brand Requirements

### Colors (Copy-Paste These Exact Hex Codes)
```css
/* Primary */
--ocean-teal: #2A7F7E;      /* 60% of page */
--systematic-blue: #1B365D;  /* 30% of page */
--impact-orange: #D97642;    /* 10% of page */

/* Supporting */
--success-green: #48BB78;
--light-gray: #E2E8F0;
--dark-gray: #2D3748;
```

### Typography
- **Inter**: Headings, UI, most body text
- **Crimson Pro**: Long-form narrative (About page founder story)

### Verified Icons (These definitely work)
```
check-circle, user-group, heart, shield-check, chart-bar, 
arrow-trending-up, star, clock, cog, academic-cap, 
magnifying-glass, adjustments-horizontal, cube, document-text, 
rocket-launch, clipboard-document-check, briefcase, envelope
```

---

## 📞 Calendly URLs (Copy Exact URLs)

**Routing Form (Primary)**:
```
https://calendly.com/d/cspg-g8f-tsd
```

**With UTM Parameters**:

Pricing Page:
```
https://calendly.com/d/cspg-g8f-tsd?utm_source=website&utm_medium=cta&utm_campaign=pricing-page&utm_content=routing-form
```

About Page:
```
https://calendly.com/d/cspg-g8f-tsd?utm_source=website&utm_medium=cta&utm_campaign=about-page&utm_content=routing-form
```

Contact Page (embedded):
```
https://calendly.com/d/cspg-g8f-tsd?utm_source=website&utm_medium=embed&utm_campaign=contact-page&utm_content=routing-form
```

---

## 🎯 Key Pricing Information

### Three Tiers

**1. Digital Operations Jumpstart**
- Price: $7,497 (one-time)
- Timeline: 6-8 weeks
- One complete playbook implementation

**2. Systematic Growth** ⭐ MOST POPULAR
- Price: $2,997/month + $1,997 onboarding (one-time)
- Timeline: Ongoing, implementations every 6-8 weeks
- Unlimited playbooks (1 active at a time)
- Monthly strategy sessions (2 hours)
- 24-hour response time
- 6-month minimum commitment

**3. Operations Excellence**
- Price: $4,997/month + $2,997 onboarding (one-time)
- Timeline: Ongoing, implementations every 4-5 weeks
- Unlimited playbooks (1 active at a time)
- Bi-weekly strategy sessions (1 hour each)
- 12-hour response time
- Premium support
- 6-month minimum commitment

---

## 📖 About Page Key Content

### Founder: Ross Carter-Brown

**Background**:
- Bachelor of Science in Ecology & Biodiversity
- Co-founder of BitPrime (cryptocurrency exchange, managed $40M NZD)
- Head of NZ Operations at Swyftx
- Business Intelligence and AI Solutions Architect
- Deep understanding of environmental consulting workflows

**Mission**:
> "GaiaOps exists to help environmental consultancies transform from operational chaos to systematic excellence—enabling them to serve more clients, deliver higher quality work, and ultimately increase their environmental impact when every day matters."

**Core Values**:
1. **#ImpactFirst** - Environmental Impact Through Operational Excellence
2. **#SustainableExcellence** - Quality Through Smart Systems, Not Burnout
3. **#ProgressiveGrowth** - Continuous Advancement, Not One-Time Fixes

---

## 📧 Contact Information

- **Email**: ross@gaiaops.io
- **Location**: Remote-first, serving PST timezone
- **Hours**: Monday-Friday, 9am-5pm PST

---

## ⚠️ Common Pitfalls to Avoid

1. **Icons as Blobs**: Use `:global(svg)` selector
2. **Wrong Colors**: Copy-paste hex codes, don't type from memory
3. **Missing UTM Parameters**: Always use full Calendly URLs
4. **Skipping Mobile Testing**: Test responsive after each section
5. **Too Many Changes**: Test after EVERY section
6. **Unverified Icons**: Only use icons from verified list

---

## 🔄 Git Workflow

### After Each Completed Page
```powershell
# Check what changed
git status
git diff src/pages/[page].astro

# Stage and commit
git add src/pages/[page].astro
git commit -m "feat: add [page name] with [key features]"

# Example commits:
git commit -m "feat: add pricing page with three-tier structure and FAQ"
git commit -m "feat: add about page with founder story and mission"
git commit -m "feat: add contact page with embedded Calendly routing form"

# Push to development
git push origin development
```

### After All Three Pages Complete
```powershell
# Test on dev site first
# Visit: gaiaops-dev-f1kaz.sevalla.page/pricing
# Visit: gaiaops-dev-f1kaz.sevalla.page/about
# Visit: gaiaops-dev-f1kaz.sevalla.page/contact

# When satisfied, deploy to production
git checkout main
git merge development
git push origin main

# Verify on production
# Visit: gaiaops.io/pricing
# Visit: gaiaops.io/about
# Visit: gaiaops.io/contact
```

---

## ✅ Success Checklist (Before Calling It Done)

### Each Page
- [ ] All sections render correctly
- [ ] All CTAs work with proper UTM parameters
- [ ] All links functional (internal and external)
- [ ] Icons render properly (not as giant blobs)
- [ ] Colors match brand exactly (screenshot compare)
- [ ] Mobile responsive verified
- [ ] No console errors
- [ ] Page loads fast (<3 seconds)
- [ ] Typography correct (Inter for UI, Crimson Pro for About story)

### Site-Wide
- [ ] Navigation links to new pages work from all pages
- [ ] Footer links updated and functional
- [ ] All three pages consistent with brand guidelines
- [ ] 60/30/10 color distribution maintained
- [ ] Professional appearance across all pages

---

## 📞 If You Get Stuck

1. **Check Troubleshooting Guide**: `docs/core/claude-code-troubleshooting-guide.md`
2. **Reference Similar Pages**: Look at `src/pages/index.astro` (Homepage) or `src/pages/how-we-help.astro`
3. **Verify Icons**: Check `docs/reference/complete-list-available-heroicons.md`
4. **Check Console**: F12 → Console tab for error messages
5. **Test in Incognito**: Sometimes cache causes issues

---

## 🎉 When You're Done

1. **Test all three pages thoroughly**
2. **Deploy to development branch** (test on dev site)
3. **Deploy to production** (when satisfied)
4. **Update ClickUp tasks** (mark as complete):
   - Subtask 2.6.2: Pricing Page Development (#86d01nkjq)
   - Subtask 2.6.3: About Page Development (#86d01nkz1)
   - Subtask 2.6.4: Contact Page Development (#86d01nkjz)
5. **Create session retrospective** (what went well, what to improve)
6. **Celebrate!** 🎉 Three major pages complete!

---

**Ready to start! Begin with Claude Code and feed it the session plan first.** 🚀
