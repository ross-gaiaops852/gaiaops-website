# Session Plan: Fix Security Vulnerabilities
**Created**: March 10, 2026
**Priority**: High
**Estimated Effort**: 1 session
**Prerequisite**: Ideally after dependency updates (Session 2)

---

## Background

`npm audit` reports 18 vulnerabilities:
- **5 high** severity
- **7 moderate** severity
- **4 low** severity
- **2 other** (informational)

These were flagged during the March 10, 2026 session when pushing to GitHub.
Many may be resolved by the dependency updates in Session 2.

## Approach

### Phase 1: Run full audit
```bash
npm audit
```
Review each vulnerability to understand:
- Which package is affected
- Is it a production dependency or dev-only?
- What is the fix (update, replace, or accept risk)?

### Phase 2: Classify vulnerabilities

**Production dependencies** (affect deployed site):
- These are highest priority
- Must be fixed or documented as accepted risk

**Dev-only dependencies** (only affect build/development):
- Lower urgency but still fix
- Often resolved by updating dev packages

**Transitive dependencies** (nested deep in dependency tree):
- Check if parent package has an update that resolves it
- May require `npm audit fix` or overrides

### Phase 3: Apply fixes

**Safe fixes first:**
```bash
npm audit fix
```
This applies non-breaking updates automatically.

**Breaking fixes (if needed):**
```bash
npm audit fix --force
```
Only use after reviewing what will change. May cause breaking updates.

**Manual overrides (last resort):**
Add `overrides` to package.json for transitive dependency issues:
```json
{
  "overrides": {
    "vulnerable-package": "^fixed-version"
  }
}
```

### Phase 4: Verify
1. Run `npm audit` again — should show 0 or reduced vulnerabilities
2. Run `npm run build` — verify build still works
3. Run `npm run dev` — smoke test pages
4. Commit and push

## Success Criteria
- [ ] `npm audit` reports 0 high-severity vulnerabilities
- [ ] All moderate vulnerabilities fixed or documented as accepted risk
- [ ] `npm run build` passes
- [ ] Dev site deploys and works correctly
- [ ] Merged to main and production verified

## Notes
- Many vulnerabilities may be automatically resolved by Session 2 (dependency updates)
- If a vulnerability is in a dev-only dependency with no fix available, it may be
  acceptable to document and defer
- Check if Dependabot security alerts on GitHub match the npm audit findings
