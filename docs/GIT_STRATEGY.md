# GitHub Branch Strategy

## Overview
This document outlines the branching strategy for the Link Restaurant Platform project.

## Branch Structure

### Main Branches

#### 1. `main` (Production)
- **Purpose**: Production-ready code
- **Protection**: Protected, requires PR approval
- **Deployment**: Auto-deploys to production
- **Merges from**: `develop` only (via release PRs)

#### 2. `develop` (Development)
- **Purpose**: Integration branch for features
- **Protection**: Protected, requires PR approval
- **Deployment**: Auto-deploys to staging
- **Merges from**: `feature/*`, `bugfix/*`, `hotfix/*`

### Supporting Branches

#### 3. `feature/*` (Feature Branches)
- **Naming**: `feature/feature-name`
- **Examples**: 
  - `feature/menu-management`
  - `feature/qr-generation`
  - `feature/real-time-orders`
- **Branch from**: `develop`
- **Merge into**: `develop`
- **Lifetime**: Temporary (deleted after merge)

#### 4. `bugfix/*` (Bug Fix Branches)
- **Naming**: `bugfix/bug-description`
- **Examples**:
  - `bugfix/cart-calculation-error`
  - `bugfix/image-upload-fail`
- **Branch from**: `develop`
- **Merge into**: `develop`
- **Lifetime**: Temporary (deleted after merge)

#### 5. `hotfix/*` (Hotfix Branches)
- **Naming**: `hotfix/critical-issue`
- **Examples**:
  - `hotfix/payment-gateway-down`
  - `hotfix/security-patch`
- **Branch from**: `main`
- **Merge into**: Both `main` AND `develop`
- **Lifetime**: Temporary (deleted after merge)

#### 6. `release/*` (Release Branches)
- **Naming**: `release/v1.0.0`
- **Examples**:
  - `release/v1.0.0`
  - `release/v1.1.0`
- **Branch from**: `develop`
- **Merge into**: `main` and back to `develop`
- **Lifetime**: Temporary (deleted after merge)

## Workflow

### Feature Development
```bash
# 1. Create feature branch from develop
git checkout develop
git pull origin develop
git checkout -b feature/menu-management

# 2. Work on feature, commit regularly
git add .
git commit -m "Add menu category CRUD operations"

# 3. Push to remote
git push origin feature/menu-management

# 4. Create Pull Request to develop
# - Add description
# - Request review
# - Link related issues

# 5. After approval and merge
git checkout develop
git pull origin develop
git branch -d feature/menu-management
```

### Bug Fixes
```bash
# 1. Create bugfix branch from develop
git checkout develop
git pull origin develop
git checkout -b bugfix/cart-calculation-error

# 2. Fix bug and test
git add .
git commit -m "Fix cart total calculation for variants"

# 3. Push and create PR
git push origin bugfix/cart-calculation-error

# 4. Merge to develop after approval
```

### Hotfixes (Critical Production Issues)
```bash
# 1. Create hotfix from main
git checkout main
git pull origin main
git checkout -b hotfix/payment-gateway-down

# 2. Fix critical issue
git add .
git commit -m "Fix payment gateway timeout issue"

# 3. Push and create PR to main
git push origin hotfix/payment-gateway-down

# 4. After merging to main, also merge to develop
git checkout develop
git merge hotfix/payment-gateway-down
git push origin develop
```

### Release Process
```bash
# 1. Create release branch from develop
git checkout develop
git pull origin develop
git checkout -b release/v1.0.0

# 2. Update version numbers, changelog
# - Update package.json version
# - Update CHANGELOG.md
# - Final testing

# 3. Merge to main
git checkout main
git merge release/v1.0.0
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin main --tags

# 4. Merge back to develop
git checkout develop
git merge release/v1.0.0
git push origin develop

# 5. Delete release branch
git branch -d release/v1.0.0
```

## Commit Message Convention

### Format
```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types
- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, etc.)
- **refactor**: Code refactoring
- **test**: Adding or updating tests
- **chore**: Maintenance tasks

### Examples
```bash
feat(menu): add variant management for menu items

- Add variant groups (size, base, etc.)
- Add price adjustments for variants
- Update menu API to include variants

Closes #123

---

fix(cart): correct total calculation with addons

Previously, addon prices were not included in cart total.
Now properly calculates: base price + variants + addons

Fixes #456

---

docs(readme): update Docker setup instructions

Added troubleshooting section for common Docker issues
```

## Pull Request Guidelines

### PR Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Manual testing completed

## Screenshots (if applicable)
Add screenshots here

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings generated
```

### Review Process
1. **Self-review**: Author reviews their own code first
2. **Peer review**: At least 1 approval required
3. **CI checks**: All automated tests must pass
4. **Merge**: Squash and merge (keep history clean)

## Branch Protection Rules

### `main` Branch
- ✅ Require pull request reviews (1 approval)
- ✅ Require status checks to pass
- ✅ Require branches to be up to date
- ✅ Include administrators
- ✅ Restrict who can push (only via PR)

### `develop` Branch
- ✅ Require pull request reviews (1 approval)
- ✅ Require status checks to pass
- ✅ Allow force pushes (for rebasing)

## Version Numbering (Semantic Versioning)

Format: `MAJOR.MINOR.PATCH`

- **MAJOR**: Breaking changes (v1.0.0 → v2.0.0)
- **MINOR**: New features, backward compatible (v1.0.0 → v1.1.0)
- **PATCH**: Bug fixes (v1.0.0 → v1.0.1)

Examples:
- `v1.0.0` - Initial MVP release
- `v1.1.0` - Added real-time order updates
- `v1.1.1` - Fixed cart calculation bug
- `v2.0.0` - Major redesign with breaking API changes

## Git Hooks (Optional)

### Pre-commit Hook
```bash
#!/bin/sh
# Run linter before commit
npm run lint

# Run tests
npm run test
```

### Pre-push Hook
```bash
#!/bin/sh
# Run all tests before push
npm run test:all
```

## Best Practices

### DO ✅
- Create small, focused branches
- Write descriptive commit messages
- Pull latest changes before creating new branch
- Delete branches after merging
- Use PR templates
- Request reviews promptly
- Keep commits atomic (one logical change per commit)

### DON'T ❌
- Commit directly to `main` or `develop`
- Create long-lived feature branches
- Mix multiple features in one branch
- Force push to protected branches
- Merge without review
- Leave stale branches

## Team Workflow

### Daily
1. Pull latest `develop` before starting work
2. Create feature branch for new work
3. Commit regularly with clear messages
4. Push to remote at end of day

### Weekly
1. Review and merge completed PRs
2. Clean up merged branches
3. Update project board
4. Sync with team on progress

### Sprint End
1. Create release branch
2. Final testing
3. Merge to main
4. Tag release
5. Deploy to production

## Emergency Procedures

### Production is Down
1. Create hotfix branch from `main`
2. Fix issue
3. Fast-track PR review
4. Merge to `main` immediately
5. Deploy
6. Merge back to `develop`

### Rollback Needed
```bash
# Revert to previous version
git checkout main
git revert HEAD
git push origin main

# Or rollback to specific tag
git checkout v1.0.0
git checkout -b hotfix/rollback
# Deploy this version
```

## Resources

- [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Semantic Versioning](https://semver.org/)

---

**Last Updated**: December 2024  
**Maintained by**: Development Team
