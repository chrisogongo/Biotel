# Contributing to Biotel DNA Website

First off, thank you for considering contributing to the Biotel DNA website! It's people like you that make this project better for everyone.

---

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Style Guides](#style-guides)
- [Pull Request Process](#pull-request-process)
- [Community](#community)

---

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to dna@bioteldna.co.ke.

### Our Pledge

- Use welcoming and inclusive language
- Be respectful of differing viewpoints and experiences
- Gracefully accept constructive criticism
- Focus on what is best for the community
- Show empathy towards other community members

---

## How Can I Contribute?

### 🐛 Reporting Bugs

Before creating bug reports, please check the existing issues as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* Use a clear and descriptive title
* Describe the exact steps which reproduce the problem
* Provide specific examples to demonstrate the steps
* Describe the behavior you observed after following the steps
* Explain which behavior you expected to see instead and why
* Include screenshots and animated GIFs if possible
* Include your environment details (browser, OS, device)

### 💡 Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

* Use a clear and descriptive title
* Provide a step-by-step description of the suggested enhancement
* Provide specific examples to demonstrate the steps
* Describe the current behavior and explain the behavior you expected to see
* Explain why this enhancement would be useful
* List some other applications where this enhancement exists (if applicable)

### 📝 Pull Requests

* Fill in the required template
* Do not include issue numbers in the PR title
* Include screenshots and animated GIFs in your pull request whenever possible
* Follow the style guides
* Include thoughtfully-worded, well-structured tests
* Document new code
* End all files with a newline

---

## Getting Started

### Prerequisites

* Node.js 18+ and npm
* Git
* A code editor (VS Code recommended)
* Basic knowledge of React and TypeScript

### Setup

1. Fork the repository on GitHub
2. Clone your fork locally
```bash
git clone https://github.com/your-username/biotel-dna-website.git
cd biotel-dna-website
```
3. Install dependencies
```bash
npm install
```
4. Create a branch for your work
```bash
git checkout -b feature/your-feature-name
```
5. Start the development server
```bash
npm run dev
```

---

## Development Workflow

### Branch Naming Convention

* `feature/` - New features
* `fix/` - Bug fixes
* `docs/` - Documentation changes
* `style/` - Code style changes
* `refactor/` - Code refactoring
* `test/` - Adding tests
* `chore/` - Maintenance tasks

Examples:
* `feature/ai-chatbot-enhancement`
* `fix/mobile-navigation-issue`
* `docs/update-readme`

### Commit Messages

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Types:
* `feat`: A new feature
* `fix`: A bug fix
* `docs`: Documentation only changes
* `style`: Changes that do not affect the meaning of the code
* `refactor`: A code change that neither fixes a bug nor adds a feature
* `perf`: A code change that improves performance
* `test`: Adding missing tests or correcting existing tests
* `chore`: Changes to the build process or auxiliary tools

Examples:
```
feat: add new DNA test service page
fix: resolve mobile menu not closing
docs: update README with deployment instructions
style: format code with Prettier
refactor: simplify chatbot knowledge base structure
```

### Code Style

#### TypeScript/React

* Use TypeScript for all new files
* Follow the existing code style
* Use functional components with hooks
* Keep components small and focused
* Use meaningful variable and function names
* Add JSDoc comments for complex functions

#### CSS/Tailwind

* Use Tailwind utility classes
* Avoid custom CSS when possible
* Follow mobile-first approach
* Use semantic HTML elements
* Maintain responsive design

#### File Organization

```
src/
├── components/        # Reusable components
│   ├── ui/           # Basic UI components
│   └── features/     # Feature-specific components
├── pages/            # Page components
├── data/             # Data and constants
├── hooks/            # Custom hooks
├── utils/            # Utility functions
└── types/            # TypeScript types
```

---

## Style Guides

### TypeScript Style Guide

```typescript
// ✅ Good
interface UserData {
  id: string;
  name: string;
  email: string;
}

const getUserData = (userId: string): UserData => {
  // Implementation
};

// ❌ Bad
const getUserData = (userId) => {
  // Implementation
};
```

### React Style Guide

```typescript
// ✅ Good
export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

// ❌ Bad
export default function(props) {
  return <div>{props.title}</div>;
}
```

### Component Structure

```typescript
// 1. Imports
import React from 'react';
import { useState } from 'react';

// 2. Types/Interfaces
interface ComponentProps {
  // Props definition
}

// 3. Component
export const Component: React.FC<ComponentProps> = (props) => {
  // 3.1 State and hooks
  const [state, setState] = useState();
  
  // 3.2 Effects
  useEffect(() => {
    // Effect logic
  }, []);
  
  // 3.3 Handlers
  const handleClick = () => {
    // Handler logic
  };
  
  // 3.4 Render
  return (
    <div>
      {/* JSX */}
    </div>
  );
};
```

---

## Pull Request Process

### Before Submitting

1. **Update your branch**
```bash
git checkout main
git pull origin main
git checkout your-feature-branch
git rebase main
```

2. **Run tests**
```bash
npm run type-check
npm run lint
npm run build
```

3. **Test your changes**
   - Test on different browsers
   - Test on mobile devices
   - Check accessibility
   - Verify SEO elements

4. **Update documentation**
   - Update README if needed
   - Add comments for complex code
   - Update CHANGELOG if applicable

### Submitting the PR

1. Go to your fork on GitHub
2. Click "New Pull Request"
3. Select your branch
4. Fill in the PR template:
   - Clear title
   - Description of changes
   - Related issues
   - Screenshots (if UI changes)
   - Testing steps
5. Request review from maintainers
6. Address review comments
7. Wait for approval

### PR Template

```markdown
## Description
Brief description of what this PR does

## Related Issue
Closes #123

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
Describe the tests you ran to verify your changes

## Screenshots
If applicable, add screenshots

## Checklist
- [ ] My code follows the style guidelines
- [ ] I have performed a self-review
- [ ] I have commented my code
- [ ] I have updated the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests
- [ ] New and existing tests pass locally
```

---

## Community

### Communication Channels

* **GitHub Issues**: For bug reports and feature requests
* **GitHub Discussions**: For questions and general discussion
* **Email**: dna@bioteldna.co.ke for direct contact

### Getting Help

* Check the documentation first
* Search existing issues
* Ask in GitHub Discussions
* Contact us directly

---

## Recognition

Contributors will be recognized in:
* README.md contributors section
* Release notes
* Project documentation

---

## Questions?

Don't hesitate to reach out:
* Open an issue
* Start a discussion
* Email: dna@bioteldna.co.ke

---

Thank you for contributing to Biotel DNA Website! 🎉
