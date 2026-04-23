---
name: Plan Task
description: Analyze requirements and create a detailed implementation plan in the docs directory.
model: gemini-3.1-pro
maxTurns: 10
tools: [list_dir, grep_search, view_file, write_to_file]
---

# Skill: Plan Task

## Description
This skill is used to analyze complex requirements and generate a detailed implementation plan in **Vietnamese**, stored in the `docs/plans/` directory.

## Workflow
1. **Requirements Analysis**: Extract core features, constraints, and dependencies from the user request.
2. **Context Exploration**: Search the codebase for existing components, utilities, and patterns.
3. **Plan Creation**:
   - Create a new markdown file in `docs/plans/<task-name>.md`.
   - **Language: Vietnamese.**
   - Content includes:
     - **Overview**: Goals of the task.
     - **Data & Models**: Data structures and models to be handled.
     - **Technical Details**: Libraries, hooks, or APIs to be used.
     - **Task List**: Specific implementation steps (Phase 1, 2, 3...).
4. **User Confirmation**: Send the plan link and a brief summary in **Vietnamese**. **STOP** and wait for the user to type "OK" or "Approved" before starting to code.

## Principles
- Tasks must be clear and verifiable.
- Always place plans in the `docs/plans/` directory of the workspace.
- **NEVER** use `IsArtifact: true` when writing plan files to ensure they stay in the workspace.
- Use the tech stack defined in `rules/tech.md`.
