# GaiaOps Development Configuration
**For**: Claude Sonnet 4.5 (Desktop/Web Chat Sessions)  
**Last Updated**: October 8, 2025  
**Version**: 3.0  
**Project Phase**: MVP Phase 2 - Core Conversion Path Development  
**Current Status**: "How We Help" page live, Calendly CTAs partially updated, 7 track pages live

---

## 🎯 CRITICAL: READ THIS FIRST

### What This Document Is
This is your **complete reference guide** for working on the GaiaOps website. It contains:
- Development environment details
- Git workflows (with exact PowerShell commands)
- Hybrid Claude Desktop + Claude Code workflow (recommended approach)
- Project structure and file locations
- Brand guidelines and technical standards
- Common issues and solutions

### How to Use This Document
1. **At session start**: Read the Session Start Checklist
2. **During development**: Reference workflows and quick references
3. **When stuck**: Check Troubleshooting section (or the separate troubleshooting guide)
4. **At session end**: Follow the Session Wrap-Up checklist

---

## 📋 SESSION START CHECKLIST

### Before Every Development Session

**1. Understand the Context**
- [ ] What task am I working on? (Check project files for task details)
- [ ] Is there a session plan? (Look for session-plan-*.md files)
- [ ] Is there a retrospective from previous session?
- [ ] What files will I be working with?

**2. Review Key Documents**
- [ ] This configuration file (you're reading it)
- [ ] Session plan (if continuing previous work)
- [ ] Brand guidelines (colors, typography)
- [ ] Troubleshooting guide (claude-code-troubleshooting-guide.md)

**3. Verify Development Environment**
- [ ] Working directory: `C:\Users\rcart\gaiaops-website`
- [ ] Current branch: Should be `development`
- [ ] Dev server: Should run on port 4321 or 4322
- [ ] Git status: Clean or known uncommitted files only

**4. Prepare Resources**
- [ ] Have brand color codes ready (#2A7F7E, #1B365D, #D97642)
- [ ] Have Calendly UTM CSV available (if working on CTAs)
- [ ] Know which heroicons are verified (check Icon.astro or docs)

---

## 🚀 HYBRID WORKFLOW (RECOMMENDED)

### The Optimal Development Approach

Based on successful October 8, 2025 session, this is the **recommended workflow** that combines the strengths of both Claude Desktop (web chat) and Claude Code (VS Code extension):

### **Claude Desktop (Web Chat) - For Strategic Work** 🧠

**Use Claude Desktop for:**
1. **Session Planning**
   - Creating comprehensive session plans with checklists
   - Breaking down complex tasks into phases
   - Defining success criteria

2. **Documentation Creation**
   - Writing guides, retrospectives, configuration files
   - Creating troubleshooting documentation
   - Generating reference materials

3. **Strategic Decisions**
   - Content decisions (which sections to include)
   - Design decisions (color schemes, layouts)
   - Architecture decisions (component structure)

4. **Visual QA & Feedback**
   - Reviewing screenshots of implemented features
   - Comparing rendered output to design specs
   - Identifying visual hierarchy issues

5. **Prompt Engineering**
   - Writing detailed prompts for Claude Code to execute
   - Creating specifications for implementation
   - Structuring complex multi-step instructions

**Why Claude Desktop Excels Here:**
- ✅ Better for creating long-form artifacts (session plans, documentation)
- ✅ Can view and analyze screenshots/images
- ✅ Maintains context across longer strategic conversations
- ✅ Better for planning and decision-making
- ✅ Can search project knowledge base

### **Claude Code (VS Code Extension) - For Implementation** 💻

**Use Claude Code for:**
1. **Code Implementation**
   - Writing new components/pages
   - Editing existing files
   - Implementing features from session plan

2. **File Navigation**
   - Finding files in project structure
   - Reading component interfaces
   - Exploring existing code

3. **Incremental Development**
   - Building one section at a time
   - Testing after each change
   - Iterating on feedback

4. **Code Review**
   - Viewing diffs before committing
   - Checking for errors or issues
   - Verifying changes are scoped correctly

**Why Claude Code Excels Here:**
- ✅ Direct file system access and navigation
- ✅ Can read and write files with proper syntax highlighting
- ✅ Integrated with your VS Code setup
- ✅ Can see full project context
- ✅ Makes precise, surgical edits

### **PowerShell (VS Code Terminal) - For Commands** ⚡

**Use PowerShell for:**
1. **Git Operations**
   - Branch management
   - Staging, committing, pushing
   - Checking status and diffs

2. **Package Management**
   - npm install
   - npm run dev
   - Dependency updates

3. **File System Operations**
   - Moving files
   - Creating directories
   - Viewing file contents (if needed)

**Why Manual Terminal:**
- ✅ You maintain direct control
- ✅ Can verify each step before executing
- ✅ Clear understanding of what's happening
- ✅ Easier to troubleshoot issues

### **GitHub Web Interface - For PRs & Deployment** 🌐

**Use GitHub for:**
1. **Dependabot PR Management**
   - Reviewing dependency updates
   - Changing base branch (to development)
   - Merging PRs after review

2. **Deployment Verification**
   - Checking deployment status
   - Viewing commit history
   - Monitoring build logs

### **Sevalla Dashboard - For Hosting** 🏗️

**Use Sevalla for:**
1. **Deployment Monitoring**
   - Verifying auto-deployments completed
   - Checking deployment logs if issues
   - Managing environment variables (if needed)

---

## 🔄 TYPICAL SESSION WORKFLOW

### Phase 1: Planning & Setup (Claude Desktop)

**In Claude Desktop Chat:**
```
1. User: "Let's work on [feature X]"

2. Claude creates session plan artifact:
   - Breaks down into phases/tasks
   - Defines success criteria
   - Lists files to modify
   - Includes checklists

3. User reviews and approves plan

4. Claude creates any needed specifications:
   - Content specifications
   - Design specifications
   - Technical requirements
```

**Output**: Session plan document ready for Claude Code

---

### Phase 2: Implementation (Claude Code)

**In VS Code with Claude Code:**
```
1. User feeds session plan to Claude Code:
   "I'm working on [feature]. Here's the session plan: [paste/attach]
    Let's start with Phase 1, Task 1.1"

2. Claude Code implements changes:
   - Reads relevant files
   - Makes changes
   - Shows diffs for review

3. User tests in browser after each change:
   - Refresh page
   - Check console
   - Verify visual appearance
   - Test responsive behavior

4. User provides feedback if needed

5. Repeat steps 2-4 for each task
```

**Output**: Working code in local files

---

### Phase 3: Git & Deployment (PowerShell + GitHub)

**In VS Code Terminal (PowerShell):**
```powershell
# 1. Review changes
git status
git diff src/pages/[modified-file].astro

# 2. Stage changes
git add src/pages/[modified-file].astro
git add src/components/[modified-file].astro

# 3. Commit
git commit -m "feat: [clear description] - CU-[task-id]"

# 4. Push to development
git push origin development
```

**In Browser - Dev Site:**
```
1. Wait 2-3 minutes for auto-deploy
2. Visit: https://gaiaops-dev-f1kaz.sevalla.page/[page]
3. Test thoroughly
4. If issues, fix and repeat
5. If good, proceed to production
```

**In VS Code Terminal - Deploy to Production:**
```powershell
git checkout main
git pull origin main
git merge development
git push origin main
git checkout development
```

**In Browser - Production:**
```
1. Wait 2-3 minutes for auto-deploy
2. Visit: https://gaiaops.io/[page]
3. Final smoke test
4. Verify GTM/analytics (if applicable)
```

---

### Phase 4: Review & Documentation (Claude Desktop)

**Back in Claude Desktop Chat:**
```
1. User shares screenshots of completed work

2. Claude provides feedback:
   - Visual QA review
   - Suggestions for improvements
   - Identifies any issues

3. If needed, create follow-up tasks

4. User requests retrospective/documentation

5. Claude creates:
   - Session retrospective
   - Updates to troubleshooting guide
   - Notes for next session
```

**Output**: Documentation for future sessions

---

## 🏗️ TECHNICAL INFRASTRUCTURE

### Live Environments

**Production Site**: https://gaiaops.io  
- SSL Grade A
- Auto-deploys from `main` branch
- Sevalla hosting: gaiaops-production-n8rje

**Development Site**: https://gaiaops-dev-f1kaz.sevalla.page  
- Password protected
- Auto-deploys from `development` branch
- Sevalla hosting: gaiaops-dev-f1kaz

**GitHub Repository**: https://github.com/ross-gaiaops852/gaiaops-website  
- Owner: ross-gaiaops852
- Main branch: production
- Development branch: staging/testing

**DNS Management**: Namecheap (gaiaops.io)

### Local Development Environment

**Path**: `C:\Users\rcart\gaiaops-website`  
**IDE**: Visual Studio Code
- Claude Code extension installed (latest version)
- Integrated PowerShell terminal

**Node Version**: v22.13.1  
**Framework**: Astro.js 4.x  
**Package Manager**: npm  
**UI Library**: Heroicons (220 icons integrated)  
**CSS Framework**: Tailwind CSS (via Astro)

### Dev Server
```powershell
# Start dev server
npm run dev

# Usually runs on:
http://localhost:4321
# Or if 4321 is taken:
http://localhost:4322
```

---

## 📁 PROJECT STRUCTURE

### Key Directories & Files

```
gaiaops-website/
├── .github/
│   └── dependabot.yml (configure to target 'development' branch)
├── src/
│   ├── pages/
│   │   ├── index.astro (homepage - complete ✅)
│   │   ├── how-we-help/
│   │   │   └── index.astro (complete ✅ - deployed Oct 8)
│   │   ├── solutions/
│   │   │   ├── index.astro (overview - complete ✅)
│   │   │   ├── multi-party-coordination.astro ✅
│   │   │   ├── client-relationships.astro ✅
│   │   │   ├── resource-optimization.astro ✅
│   │   │   ├── quality-assurance.astro ✅
│   │   │   ├── business-intelligence.astro ✅
│   │   │   ├── growth-systems.astro ✅
│   │   │   └── strategic-advantage.astro ✅
│   │   ├── pricing.astro (stub - needs development)
│   │   ├── about.astro (stub - needs development)
│   │   ├── contact.astro (stub - needs development)
│   │   ├── assessment.astro (stub - HIGH PRIORITY)
│   │   └── book-call.astro (may need updating)
│   ├── components/
│   │   ├── Header.astro (navigation - needs Calendly URL updates)
│   │   ├── Footer.astro (5-column layout - needs Calendly URL updates)
│   │   ├── Icon.astro (heroicons wrapper - contains iconMap)
│   │   └── ui/ (various card components)
│   ├── layouts/
│   │   └── BaseLayout.astro (master layout)
│   └── styles/
│       └── global.css (Tailwind + custom styles)
├── public/
│   ├── robots.txt (environment-specific)
│   └── images/
├── docs/ (local only - not in git)
│   ├── templates/
│   ├── guides/
│   └── references/
└── package.json
```

### Component Inventory

**Available Components:**
- `Header.astro` - Site navigation (desktop + mobile)
- `Footer.astro` - Site footer with links
- `Icon.astro` - Heroicons wrapper (use this for all icons)

**Important**: Always check Icon.astro's iconMap before using icons. Only use icons that are already imported, or add new ones first.

---

## 🎨 BRAND GUIDELINES

### Color Palette (MEMORIZE THESE)

**Primary Colors:**
- **Ocean Teal**: `#2A7F7E` (60% usage - backgrounds, subtle accents)
- **Systematic Blue**: `#1B365D` (30% usage - headings, primary text)
- **Impact Orange**: `#D97642` (10% usage - CTAs, strategic highlights only)

**Supporting Colors:**
- **Charcoal**: `#2C3E50` (body text)
- **Cloud Gray**: `#F8F9FA` (section backgrounds)
- **Pure White**: `#FFFFFF` (primary background, text on dark)

### Color Usage Rules

1. **60/30/10 Distribution**:
   - 60% Ocean Teal (backgrounds, accents)
   - 30% Systematic Blue (headings, text)
   - 10% Impact Orange (CTAs only - use sparingly!)

2. **Gradient Usage**:
   - Use for ONE primary CTA section per page maximum
   - Standard gradient: `linear-gradient(135deg, #2A7F7E, #1B365D)`
   - Don't overuse - reduces impact

3. **Text Contrast**:
   - Always check WCAG AA compliance (4.5:1 ratio minimum)
   - Explicitly declare text colors on colored backgrounds
   - Never rely on inheritance

### Typography

**Font Stack**: System fonts (defined in global.css)

**Heading Hierarchy**:
- H1: Hero sections only
- H2: Section headers
- H3: Subsection headers
- Body: Charcoal (#2C3E50)

**Font Sizes**: Use clamp() for fluid typography
```css
h1 { font-size: clamp(2rem, 5vw, 3rem); }
h2 { font-size: clamp(1.5rem, 4vw, 2.5rem); }
```

---

## 🔧 GIT WORKFLOW

### Branch Strategy

**Main Branch**: `main`
- Production deployment
- Protected (in spirit, not technically)
- Only merge from development after testing

**Development Branch**: `development`
- Active development
- Auto-deploys to dev site
- Always work here first

**Feature Branches**: (optional for complex features)
- Branch from development
- Merge back to development when complete

### Daily Git Workflow (PowerShell Commands)

#### Starting Your Session

```powershell
# 1. Navigate to project
cd C:\Users\rcart\gaiaops-website

# 2. Verify branch
git branch --show-current
# Should output: development

# 3. Pull latest changes
git pull origin development

# 4. Check status
git status
# Should be clean or show only known local files

# 5. Start dev server
npm run dev
```

#### During Development

```powershell
# Check status frequently
git status

# View what changed
git diff

# View specific file changes
git diff src/pages/how-we-help/index.astro
```

#### Committing Changes

```powershell
# 1. Stage specific files (recommended)
git add src/pages/how-we-help/index.astro
git add src/components/Icon.astro

# Or stage all (use with caution)
git add .

# 2. Verify what's staged
git status
# Files should be green under "Changes to be committed"

# 3. Commit with proper message format
git commit -m "feat: complete How We Help page sections 6-7 - CU-86942w2f3"

# Commit message format:
# <type>: <description> - CU-<task-id>
# Types: feat, fix, style, refactor, docs, chore

# 4. Push to development
git push origin development
```

#### Testing on Dev Site

```powershell
# After pushing, wait 2-3 minutes
# Then visit: https://gaiaops-dev-f1kaz.sevalla.page

# Check deployment status in browser or Sevalla dashboard
```

#### Deploying to Production

```powershell
# 1. Switch to main branch
git checkout main

# 2. Pull latest (important!)
git pull origin main

# 3. Merge development
git merge development

# 4. Resolve any conflicts (if they occur)
# Open conflicted files, fix manually, then:
git add <resolved-files>
git commit

# 5. Push to production
git push origin main

# 6. IMMEDIATELY return to development
git checkout development

# 7. Verify production (wait 2-3 minutes)
# Visit: https://gaiaops.io
```

#### Checking Sync Status

```powershell
# Compare local to remote
git fetch
git status

# Compare branches
git log main..development
# No output = branches are identical

git diff main development
# No output (except local files) = synced
```

### Common Git Scenarios

#### Scenario: Dependabot PR Merged to Development

```powershell
# On development branch
git pull origin development

# Install updated dependencies
npm install

# Test locally
npm run dev

# If all good, deploy to production
git checkout main
git pull origin main
git merge development
git push origin main
git checkout development
```

#### Scenario: Accidentally Made Changes on Main

```powershell
# Stash changes
git stash

# Switch to development
git checkout development

# Apply changes
git stash pop

# Continue normal workflow
git add .
git commit -m "..."
git push origin development
```

#### Scenario: Need to Undo Last Commit (Not Pushed)

```powershell
# Undo commit but keep changes
git reset --soft HEAD~1

# Undo commit and discard changes (dangerous!)
git reset --hard HEAD~1
```

#### Scenario: Merge Conflict During Merge

```powershell
# Git will show conflict markers in files
# Open files and manually resolve conflicts
# Look for:
<<<<<<< HEAD
(your changes)
=======
(their changes)
>>>>>>> development

# After fixing conflicts:
git add <resolved-files>
git commit -m "resolve: merge conflicts between main and development"
git push origin main
```

---

## 📦 PACKAGE MANAGEMENT

### NPM Commands

```powershell
# Install all dependencies
npm install

# Start dev server
npm run dev

# Build for production (test locally)
npm run build

# Preview production build
npm run preview

# Update dependencies (use cautiously)
npm update
```

### Dependabot PR Handling

**Default Behavior**: Dependabot creates PRs targeting `main`  
**Desired Behavior**: PRs should target `development`

**Fixing Each PR (Temporary):**
1. Open PR on GitHub
2. Click "Edit" button
3. Change base branch from `main` to `development`
4. Merge PR
5. Test on dev site
6. Deploy to production

**Permanent Fix (Recommended):**

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

---

## 🎯 CALENDLY URL STRUCTURE

### The 5 Core Calendly URLs

**1. Routing Form** (Primary - use for most website CTAs)
```
Base: https://calendly.com/d/cspg-g8f-tsd
```

**2. Operations Transformation Call**
```
Base: https://calendly.com/ross-gaiaops/operations-transformation-call
```

**3. Coffee Chat**
```
Base: https://calendly.com/ross-gaiaops/coffee-chat
```

**4. Partnership Discussion**
```
Base: https://calendly.com/ross-gaiaops/partnership-discussion
```

**5. Client Check-in** (Existing clients only)
```
Base: https://calendly.com/ross-gaiaops/client-check-in-30m
```

### UTM Parameter Structure

**Format**: `?utm_source=[source]&utm_medium=[medium]&utm_campaign=[campaign]&utm_content=[content]`

**For Website CTAs** (most common):
```
utm_source=website
utm_medium=cta
utm_campaign=[page-specific]
utm_content=routing-form
```

**Examples by Page:**
```
Homepage Hero:
https://calendly.com/d/cspg-g8f-tsd?utm_source=website&utm_medium=cta&utm_campaign=homepage-hero&utm_content=routing-form

How We Help:
https://calendly.com/d/cspg-g8f-tsd?utm_source=website&utm_medium=cta&utm_campaign=how-we-help&utm_content=routing-form

Track Pages (example - Multi-Party Coordination):
https://calendly.com/d/cspg-g8f-tsd?utm_source=website&utm_medium=cta&utm_campaign=multi-party-coordination&utm_content=routing-form
```

**Reference**: Full UTM mapping in `gaiaops-calendly-utm-links.csv` (in project files)

---

## 🚨 COMMON ISSUES & QUICK FIXES

### For detailed troubleshooting, see: `claude-code-troubleshooting-guide.md`

### Quick Fixes

**Icons rendering as blobs:**
```css
/* Use :global(svg) selector */
.icon-container :global(svg) {
  width: 32px;
  height: 32px;
}
```

**Colors don't match brand:**
- Always use exact hex codes: #2A7F7E, #1B365D, #D97642
- Copy-paste, don't type from memory
- Screenshot compare with existing pages

**Text not visible on background:**
```css
/* Explicitly declare all text colors */
.dark-section h1,
.dark-section h2,
.dark-section p {
  color: white;
}
```

**Git branch out of sync:**
```powershell
# Always pull before switching branches
git checkout main
git pull origin main
```

**Dev server won't start:**
```powershell
# Kill any process using the port
netstat -ano | findstr :4321
taskkill /PID <process-id> /F

# Or just use different port
npm run dev -- --port 4322
```

---

## 📝 SESSION DOCUMENTATION TEMPLATE

### Create This at Start of Each Session

**File**: `/home/claude/session-[date]-[task].md` (if working in Linux environment)  
**Or**: Note in Claude Desktop chat

```markdown
# Session: [Task Name]
**Date**: [Date]
**Start Time**: [Time]
**Goal**: [Specific goal]

## Pre-Session Checklist
- [ ] Read configuration
- [ ] Reviewed retrospective
- [ ] Brand guidelines ready
- [ ] On development branch
- [ ] Dev server running

## Plan
1. [Phase 1 description]
2. [Phase 2 description]
3. [Phase 3 description]

## Progress Log
[Track decisions, issues, solutions as you work]

## Completed Tasks
- [x] Task 1
- [x] Task 2
- [ ] Task 3 (in progress)

## Issues Encountered
1. [Issue description] - [Solution]

## Next Steps
- [ ] Remaining task 1
- [ ] Remaining task 2
```

---

## ✅ SESSION WRAP-UP CHECKLIST

### At End of Each Session

**Git & Deployment:**
- [ ] All changes committed with proper messages
- [ ] Pushed to development branch
- [ ] Tested on dev site
- [ ] Merged to production (if approved)
- [ ] Verified on production site
- [ ] Back on development branch

**Documentation:**
- [ ] Session retrospective created (if needed)
- [ ] Troubleshooting guide updated (if new issues)
- [ ] Notes made for next session

**Cleanup:**
- [ ] Dev server stopped (or left running)
- [ ] No uncommitted changes (except local files)
- [ ] Branches synced

**Communication:**
- [ ] Update user on completed work
- [ ] Flag any blockers or questions
- [ ] Set expectations for next session

---

## 📚 REFERENCE LINKS

### Documentation
- **Astro Docs**: https://docs.astro.build
- **Heroicons**: https://heroicons.com
- **Tailwind CSS**: https://tailwindcss.com/docs

### Project URLs
- **Production**: https://gaiaops.io
- **Dev Site**: https://gaiaops-dev-f1kaz.sevalla.page
- **GitHub Repo**: https://github.com/ross-gaiaops852/gaiaops-website
- **Sevalla Dashboard**: [Login at sevalla.com]

### Internal Documents (via project_knowledge_search)
- Brand guidelines
- Content strategy
- MVP project instructions
- ClickUp task breakdowns
- Session retrospectives
- Troubleshooting guide

---

## 🎓 KEY PRINCIPLES

### Development Philosophy

**1. Incremental Development**
- Build one section at a time
- Test immediately after each change
- Don't move to next section until current works

**2. Test Early, Test Often**
- Refresh browser after every change
- Check console for errors
- Verify responsive behavior
- Test on actual devices when possible

**3. Follow Brand Guidelines**
- Use exact color codes
- Maintain 60/30/10 color distribution
- Check text contrast
- Use approved typography

**4. Git Best Practices**
- Always work on development branch
- Pull before starting work
- Commit with clear messages
- Test on dev before production
- Never force push

**5. Hybrid Workflow**
- Use each tool for its strengths
- Plan in Claude Desktop
- Execute in Claude Code
- Control with PowerShell
- Manage PRs in GitHub

---

## 🚀 CURRENT PRIORITIES

### Immediate Next Tasks (In Order)

**1. Update Remaining Calendly CTAs Site-Wide** (High Priority)
- [ ] Header component (`src/components/Header.astro`)
- [ ] Footer component (`src/components/Footer.astro`)
- [ ] Homepage (`src/pages/index.astro`)
- [ ] All 7 track pages (`src/pages/solutions/*.astro`)
- [ ] Solutions overview (`src/pages/solutions/index.astro`)
- [ ] Pricing page (`src/pages/pricing.astro`)
- [ ] About page (`src/pages/about.astro`)
- [ ] Contact page (`src/pages/contact.astro`)

**2. Digital Operations Assessment Tool** (Next Major Feature)
- Interactive assessment form
- Scoring algorithm
- Results page with recommendations
- Lead capture integration

**3. Complete Stub Pages**
- Pricing page (3-tier display)
- About page (company story)
- Contact page (form integration)

### Completed Work (October 2025)
- ✅ Homepage (fully responsive, live)
- ✅ All 7 solution track pages (live)
- ✅ Solutions overview page (live)
- ✅ "How We Help" page complete (live Oct 8)
- ✅ Navigation system (desktop + mobile)
- ✅ Dependabot PRs cleared (Oct 8)

---

## 💡 TIPS FOR SUCCESS

### Working with Claude Code

**DO:**
- Feed it the session plan first
- Ask it to read relevant files before coding
- Request one section at a time
- Review diffs before accepting changes
- Test immediately after each change

**DON'T:**
- Make multiple changes before testing
- Trust output without verification
- Skip the planning phase
- Forget to specify scope ("change ONLY section X")

### Working with Claude Desktop

**DO:**
- Use for strategic planning and documentation
- Share screenshots for visual feedback
- Ask for session plans before coding
- Request clarifications on complex topics

**DON'T:**
- Ask it to write code (use Claude Code for that)
- Expect it to know your local file state
- Skip the planning phase

### General Tips

1. **Keep dev server running** - faster feedback loop
2. **Browser DevTools open** - catch errors immediately
3. **Screenshot compare** - verify colors match brand
4. **Git status frequently** - know what changed
5. **Commit early, commit often** - easier to undo
6. **Test responsive always** - mobile matters
7. **Read error messages** - they usually tell you what's wrong
8. **Take breaks** - fresh eyes catch more issues

---

## 📞 GETTING HELP

### When Stuck

**1. Check Troubleshooting Guide First**
- `claude-code-troubleshooting-guide.md`
- Search for keywords related to issue

**2. Use Claude Desktop**
- Share screenshots
- Describe expected vs actual
- Ask for debugging steps

**3. Use Claude Code**
- Show error messages
- Provide code context
- Ask for specific fixes

**4. Review Documentation**
- Astro docs for framework issues
- Heroicons for icon problems
- Tailwind docs for CSS issues

**5. Check Git Status**
```powershell
git status
git diff
git log --oneline -5
```

---

## 🔄 VERSION HISTORY

**Version 3.0** (October 8, 2025)
- Added hybrid workflow documentation
- Updated Calendly URL structure
- Added detailed PowerShell commands
- Integrated troubleshooting guide reference
- Updated current priorities
- Reflected completed "How We Help" page

**Version 2.0** (October 2, 2025)
- Added track pages structure
- Comprehensive git workflows
- Brand guidelines expanded
- Common issues documented

**Version 1.0** (September 2025)
- Initial configuration
- Basic project structure
- Core workflows

---

## 📝 MAINTENANCE

### Keep This Document Updated

**After Each Session:**
- Update "Current Priorities" section
- Add new completed work to checklist
- Note any workflow improvements
- Update version history

**Monthly:**
- Review and remove outdated information
- Consolidate repeated issues into troubleshooting guide
- Update package versions if relevant
- Verify all URLs still work

**Major Changes:**
- Increment version number
- Update "Last Updated" date
- Document significant workflow changes
- Notify user of major updates

---

**END OF CONFIGURATION**

**Remember**: This document is your complete reference. When in doubt, check here first!

**Questions? Use Claude Desktop for strategic guidance, Claude Code for implementation.**

**Last Updated**: October 8, 2025  
**Version**: 3.0  
**Maintained By**: Claude Sonnet 4.5 (with Ross)
