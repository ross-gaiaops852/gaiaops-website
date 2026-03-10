# Session Plan: Dependabot Dependency Updates
**Created**: March 10, 2026
**Priority**: High
**Estimated Effort**: 1 session
**Prerequisite**: Ideally after TypeScript errors are fixed (Session 1)

---

## Background

The project was inactive from late October 2025 to March 2026 (~5 months). During
this time, Dependabot accumulated multiple open PRs for dependency updates. These
need to be reviewed, merged, and tested.

## Current Dependencies (as of March 10, 2026)

### Production
| Package | Current | Notes |
|---------|---------|-------|
| @astrojs/check | ^0.9.4 | Type checking |
| @astrojs/sitemap | ^3.7.0 | Added Mar 2026 |
| astro | ^5.14.4 | Core framework |
| heroicons | ^2.2.0 | Icons |
| typescript | ^5.9.3 | Language |

### Dev Dependencies
| Package | Current | Notes |
|---------|---------|-------|
| @typescript-eslint/eslint-plugin | ^8.46.0 | Linting |
| @typescript-eslint/parser | ^8.46.1 | Linting |
| astro-eslint-parser | ^1.2.2 | Linting |
| eslint | ^9.37.0 | Linting |
| eslint-plugin-astro | ^1.3.1 | Linting |
| prettier | ^3.6.2 | Formatting |
| prettier-plugin-astro | ^0.14.1 | Formatting |

## Approach

### Phase 1: Audit open Dependabot PRs
```bash
gh pr list --label dependencies
```
Or check GitHub UI for all open Dependabot PRs.

### Phase 2: Batch by risk level

**Low risk (merge first):**
- Dev-only dependencies (eslint, prettier, typescript-eslint)
- These don't affect production output

**Medium risk (test carefully):**
- Astro minor/patch updates — test build and page rendering
- TypeScript updates — run `astro check` after

**Higher risk (review changelogs):**
- Astro major version bumps (if any)
- Any package with breaking changes noted in PR

### Phase 3: Merge and test
1. Change PR base branch to `development` if targeting `main`
2. Merge low-risk PRs first
3. Pull locally, run `npm install`, `npm run build`, `npm run dev`
4. Smoke test key pages in browser
5. Merge medium-risk PRs next, repeat testing
6. Push to development, verify dev site
7. Merge to main when stable

### Phase 4: Verify Dependabot config
Check `.github/dependabot.yml` targets `development` branch:
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

## Success Criteria
- [ ] All Dependabot PRs reviewed and merged (or closed with reason)
- [ ] `npm run build` passes after all updates
- [ ] Dev site deploys and renders correctly
- [ ] Merged to main and production verified
- [ ] Dependabot config confirmed targeting `development` branch

## Risks
- Breaking changes in Astro updates — check release notes
- Conflicting dependency versions — `npm install` will flag these
- ESLint config compatibility with newer eslint versions
