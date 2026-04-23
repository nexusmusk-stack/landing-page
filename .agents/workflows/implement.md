---
description: The comprehensive E2E development lifecycle. Orchestrates Planning, Coding, Technical Review, QC Testing, and iterative Fix phases for high-quality delivery.
---

# Agent Workflow: Task Lifecycle

This document defines the standard operating procedure (SOP) for Antigravity when handling any user request. Following this workflow ensures consistency, quality, and transparency.

## 🔄 The E2E Development Lifecycle

### Phase 1: Planning (Skill: `skills/plan-task.md`)
- **Trigger**: New feature request or complex change.
- **Action**: Research codebase, analyze requirements, and generate a plan.
* **Output**: `docs/plans/<feature>.md` (Save directly to the Workspace, **DO NOT** use `IsArtifact: true`).
* **Gate**: **MUST** stop and request user approval for the plan before proceeding.

### Phase 2: Implementation / Coding (Skill: `skills/coding.md`)
- **Trigger**: Approved plan.
- **Action**: Execute tasks defined in the plan step-by-step.
- **Rules**: Follow `rules/tech.md` and `rules/ui-design-guidelines.md`.
- **Output**: Modified source code, updated implementation plan (ticked checkboxes).

### Phase 3: Technical Review (Skill: `skills/reviewer.md`)
- **Trigger**: Completion of code changes.
- **Action**: Self-review for potential bugs, performance issues, or style violations.
- **Output**: Review summary in comments or a temporary report, **updated implementation plan (ticked checkboxes)**.

### Phase 4: Fix-Review (After Reviewer) (Skill: `skills/fix-review.md`)
- **Trigger**: Issues identified during Phase 3.
- **Action**: Address findings from the technical review.
- **Output**: Refined code ready for testing, **updated implementation plan (ticked checkboxes)**.

### Phase 5: Quality Control & Testing (Skill: `skills/qc.md`)
- **Trigger**: Refined code after reviewer/fix-review.
- **Action**: Create/Run Playwright tests and perform visual/functional checks (QC Test).
- **Output**: `docs/testcases/<feature>.md` (Lưu trực tiếp vào Workspace), **QC Report** (In Vietnamese), và **cập nhật bản kế hoạch triển khai (tick checkboxes)**.

### Phase 6: Fix-Review (After QC) (Skill: `skills/fix-review.md`)
- **Trigger**: 🔴 Fail from QC or bugs found in testing.
- **Action**: Address the issues found during QC and re-verify.
- **Output**: Fixed code, updated QC Report, and **updated implementation plan (ticked checkboxes)**.

### Phase 7: Finalization & Documentation
- **Trigger**: All tests PASS and user satisfied.
- **Action**:
  - Update `.agent/memory.md` with new patterns or decisions.
  - Create a git commit following `rules/commit-convention.md`.
  - Provide a final summary to the user (In Vietnamese) including:
    - Task summary.
    - QC Status.
    - Resource usage (turns/tokens).

---

## 🛠 Operation Modes

| Task Type | Sequence |
| :--- | :--- |
| **Full Lifecycle** | Plan -> Coding -> Reviewer -> Fix-Review -> QC Test -> Fix-Review -> Finish |
| **Quick Fix** | Coding -> QC Test -> Fix-Review -> Finish |
| **UI Polish** | Coding -> Reviewer -> Fix-Review -> Visual QC -> Finish |

## 📏 Guardrails
1. **Incremental Commits**: Commit after every significant logical change.
2. **Always Plan**: Even small tasks benefit from a quick "Research & Plan" phase.
3. **Vietnamese for Humans**: All external reports, plans, and summaries MUST be in Vietnamese.
4. **English for Logic**: Internal thoughts, variable names, and technical docs are in English.
5. **No Placeholders**: Never use placeholder text or images; generate real assets if needed.
