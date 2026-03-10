# Session Plan: Lighthouse Score Improvements

**Created**: March 11, 2026
**Priority**: Medium
**Estimated Duration**: 2-3 hours

## Context

The CI/CD pipeline now runs Lighthouse audits on every push to `main`. The first successful audit (run #76) revealed two areas below target:

- **Accessibility**: 0.94 (target: 0.95) — 1 point below threshold
- **Best Practices**: 0.79 (target: 0.90) — 11 points below threshold
- **PWA**: Not applicable (disabled — site is not a PWA)

Performance (0.85+) and SEO (0.95+) passed.

Lighthouse thresholds have been temporarily set to "warn" instead of "error" for accessibility and best-practices so the pipeline doesn't block deploys while we fix these issues.

**Lighthouse report**: https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1773177880792-48185.report.html

## Goals

1. Raise accessibility score from 0.94 to 0.95+
2. Raise best-practices score from 0.79 to 0.90+
3. Restore "error" thresholds in `.lighthouserc.json` once targets are met

## Pre-Session Preparation

1. Open the Lighthouse report link above and review specific failing audits
2. Download the `lighthouse-results` artifact from GitHub Actions run #76 for detailed breakdown
3. Have Chrome DevTools Lighthouse tab ready for local testing

## Likely Issues to Investigate

### Accessibility (0.94 → 0.95+)
Common issues on Astro sites at this score range:
- Missing `alt` attributes on images
- Insufficient color contrast ratios (check against brand colors)
- Missing form labels or ARIA attributes
- Heading hierarchy issues (skipping levels)
- Missing landmark roles
- Focus management on interactive elements (Calendly popup triggers)

### Best Practices (0.79 → 0.90+)
Common issues:
- **Console errors** — JavaScript errors in production (check Calendly widget loading)
- **Mixed content** — HTTP resources loaded on HTTPS page
- **Deprecated APIs** — using deprecated browser APIs
- **Missing HTTPS** — external resources not using HTTPS
- **Image aspect ratios** — images displayed at incorrect aspect ratios
- **Permissions policy** — missing or misconfigured security headers
- **Third-party cookies** — Calendly widget or other embeds using third-party cookies

### Not Applicable
- **PWA**: Disabled in `.lighthouserc.json` — the site is not a progressive web app

## Implementation Approach

### Phase 1: Diagnosis (30 min)
1. Run Lighthouse locally on the production URL using Chrome DevTools
2. Review the detailed report from CI artifact
3. Categorize each failing audit by effort (quick fix vs. significant change)
4. Prioritize: fix quick wins first, then tackle larger issues

### Phase 2: Accessibility Fixes (45-60 min)
- Address each failing accessibility audit
- Test with `npm run build && npx serve dist` for local Lighthouse testing
- Verify fixes don't break visual design

### Phase 3: Best Practices Fixes (45-60 min)
- Address console errors and deprecated API usage
- Fix any mixed content or HTTPS issues
- Review security headers in `src/middleware.ts`

### Phase 4: Verification (15 min)
1. Run local Lighthouse audit to confirm scores
2. Update `.lighthouserc.json` to restore "error" thresholds:
   ```json
   "categories:accessibility": ["error", { "minScore": 0.95 }],
   "categories:best-practices": ["error", { "minScore": 0.9 }]
   ```
3. Run `npm run test` to verify all checks pass
4. Commit, push to development, verify CI, merge to main

## Key Files
- `.lighthouserc.json` — Lighthouse CI thresholds
- `src/layouts/BaseLayout.astro` — meta tags, scripts, global structure
- `src/middleware.ts` — security headers
- `src/components/Header.astro` — navigation accessibility
- `src/components/Footer.astro` — footer accessibility
- `src/styles/global.css` — global styles affecting accessibility

## Success Criteria
- Accessibility score >= 0.95
- Best Practices score >= 0.90
- CI pipeline fully green on main (all jobs passing)
- Thresholds restored to "error" level in `.lighthouserc.json`
