# Rule: Branching Strategy

## Workflow
All development must follow the "Feature Branching" workflow:

1. **Main Branch**: `main` (Production-ready code).
2. **Feature Branches**: `feat/<short-description>` for new features.
3. **Bugfix Branches**: `fix/<issue-number>-<short-description>` for bug fixes.
4. **Research/Spike Branches**: `lab/<description>` for experiments.

## Pull Request Requirements
- Must pass all CI/CD checks (linting, tests).
- Must be reviewed by at least one other developer or the AI agent.
- Squashing is preferred before merging to keep the history clean.
