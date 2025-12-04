# Contributing to Link Restaurant Platform

Thank you for your interest in contributing to Link! This document provides guidelines and instructions for contributing to the project.

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
3. [Development Workflow](#development-workflow)
4. [Coding Standards](#coding-standards)
5. [Commit Guidelines](#commit-guidelines)
6. [Pull Request Process](#pull-request-process)
7. [Testing](#testing)
8. [Documentation](#documentation)

## Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inspiring community for all. Please be respectful and constructive in all interactions.

### Our Standards

- ✅ Use welcoming and inclusive language
- ✅ Be respectful of differing viewpoints
- ✅ Accept constructive criticism gracefully
- ✅ Focus on what is best for the community
- ❌ No harassment or discriminatory behavior

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn
- Git
- Docker (optional)

### Setup

1. **Fork the repository**
   ```bash
   # Click "Fork" on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/kingkong.git
   cd kingkong
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/gowthaambr/kingkong.git
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

## Development Workflow

### 1. Create a Branch

Always create a new branch for your work:

```bash
# Update develop branch
git checkout develop
git pull upstream develop

# Create feature branch
git checkout -b feature/your-feature-name
```

### 2. Make Changes

- Write clean, readable code
- Follow existing code style
- Add comments for complex logic
- Update documentation as needed

### 3. Test Your Changes

```bash
# Run linter
npm run lint

# Run tests
npm run test

# Build to verify
npm run build
```

### 4. Commit Your Changes

Follow our [commit message guidelines](#commit-guidelines):

```bash
git add .
git commit -m "feat(menu): add variant selection feature"
```

### 5. Push and Create PR

```bash
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub.

## Coding Standards

### TypeScript/JavaScript

- Use TypeScript for type safety
- Use functional components with hooks
- Prefer `const` over `let`, avoid `var`
- Use meaningful variable names
- Keep functions small and focused
- Use async/await over promises

**Good:**
```typescript
const fetchMenuItems = async (restaurantId: string): Promise<MenuItem[]> => {
  const response = await api.get(`/restaurants/${restaurantId}/menu`);
  return response.data;
};
```

**Bad:**
```typescript
function getItems(id) {
  return api.get('/restaurants/' + id + '/menu').then(res => res.data);
}
```

### React Components

- One component per file
- Use named exports
- Props should be typed
- Use descriptive component names

**Good:**
```typescript
interface MenuItemCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem) => void;
}

export function MenuItemCard({ item, onAddToCart }: MenuItemCardProps) {
  return (
    <div className="menu-item-card">
      {/* component content */}
    </div>
  );
}
```

### CSS/Styling

- Use Tailwind CSS utility classes
- Follow mobile-first approach
- Use CSS variables for theming
- Avoid inline styles unless dynamic

### File Organization

```
app/
├── components/          # Reusable components
├── pages/              # Page components
├── lib/                # Utilities and helpers
├── hooks/              # Custom React hooks
├── types/              # TypeScript types
└── styles/             # Global styles
```

## Commit Guidelines

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation only
- **style**: Code style (formatting, missing semi-colons, etc.)
- **refactor**: Code refactoring
- **test**: Adding tests
- **chore**: Maintenance

### Examples

```bash
feat(menu): add variant selection for menu items

- Add variant groups UI
- Implement price calculation with variants
- Update cart to handle variants

Closes #123

---

fix(cart): correct total calculation with addons

Previously addon prices were not included.
Now properly calculates base + variants + addons.

Fixes #456
```

## Pull Request Process

### Before Submitting

- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] Tests added/updated
- [ ] All tests pass
- [ ] No console errors or warnings

### PR Description

Use our PR template and include:

1. **Description**: What changes were made and why
2. **Type of change**: Bug fix, feature, etc.
3. **Testing**: How to test the changes
4. **Screenshots**: For UI changes
5. **Related issues**: Link to issues

### Review Process

1. **Automated checks**: CI must pass
2. **Code review**: At least 1 approval required
3. **Testing**: Reviewer tests the changes
4. **Approval**: PR is approved and merged

### After Merge

- Delete your feature branch
- Update your local develop branch
- Close related issues

## Testing

### Unit Tests

```bash
npm run test
```

### Integration Tests

```bash
npm run test:integration
```

### E2E Tests

```bash
npm run test:e2e
```

### Manual Testing

- Test on multiple browsers (Chrome, Safari, Firefox)
- Test on mobile devices
- Test with slow network (throttling)
- Test edge cases

## Documentation

### Code Documentation

- Add JSDoc comments for functions
- Explain complex algorithms
- Document API endpoints
- Update README when needed

**Example:**
```typescript
/**
 * Calculates the total price of a cart item including variants and addons
 * @param item - The menu item
 * @param selectedVariants - Array of selected variant IDs
 * @param selectedAddons - Array of selected addon IDs
 * @returns The total price
 */
function calculateItemPrice(
  item: MenuItem,
  selectedVariants: string[],
  selectedAddons: string[]
): number {
  // Implementation
}
```

### User Documentation

- Update user guides for new features
- Add screenshots/videos for complex features
- Keep documentation up-to-date

## Questions?

- 💬 Ask in GitHub Discussions
- 📧 Email: support@linkrestaurant.com
- 🐛 Report bugs via GitHub Issues

## Recognition

Contributors will be:
- Listed in CONTRIBUTORS.md
- Mentioned in release notes
- Credited in documentation

## License

By contributing, you agree that your contributions will be licensed under the same license as the project.

---

**Thank you for contributing to Link! 🎉**
