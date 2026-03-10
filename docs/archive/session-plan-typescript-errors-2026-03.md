# Session Plan: Fix 287 TypeScript Errors
**Created**: March 10, 2026
**Priority**: High
**Estimated Effort**: 1 session
**Prerequisite**: None

---

## Background

The `astro check` command reports 287 TypeScript errors across 41 files. These are
pre-existing errors that accumulated over time. The build script was updated on
March 10, 2026 to skip `astro check` so deploys aren't blocked, but the errors
should be resolved so type checking can be re-enabled.

## Error Profile

Most errors are **ts(18047): 'X' is possibly 'null'** in client-side `<script>`
blocks within `.astro` files. These occur when DOM queries (`querySelector`,
`querySelectorAll`) return potentially null values that are used without null checks.

**Heaviest files** (from build output):
- `src/pages/solutions/strategic-advantage.astro` — multiple null-check errors
- Other solution track pages likely have similar patterns
- 41 files total, 287 errors, 29 hints

## Approach

### Phase 1: Assess the full error list
```bash
npx astro check 2>&1 | head -100
```
Categorise errors by type and file to find patterns.

### Phase 2: Fix by pattern
Most fixes will follow this pattern:

**Before:**
```typescript
const element = document.querySelector('.faq-question');
element.addEventListener('click', () => { ... });
```

**After:**
```typescript
const element = document.querySelector('.faq-question');
if (element) {
  element.addEventListener('click', () => { ... });
}
```

Or use non-null assertion where the element is guaranteed to exist:
```typescript
const element = document.querySelector('.faq-question')!;
```

### Phase 3: Re-enable type checking in build
Once all errors are fixed, restore `astro check` to the build script:
```json
"build": "astro check && astro build"
```

## Success Criteria
- [ ] `npx astro check` reports 0 errors
- [ ] `npm run build` includes `astro check` and passes
- [ ] All pages still render correctly
- [ ] Commit and push to development
- [ ] Merge to main after dev testing

## Files to Modify
- All 41 files with TS errors (mostly `src/pages/solutions/*.astro`)
- `package.json` (restore `astro check` to build script)

## Risks
- Low risk — these are type annotation fixes, not logic changes
- Test each page after fixing to ensure no runtime regressions
