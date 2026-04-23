# Project Memory

This file serves as the long-term context for the AI agent. It should be updated whenever significant architectural decisions, conventions, or project-specific knowledge are established.

## Established Patterns
- UI Components: Mọi component UI mới phải được đặt trong `src/components/ui` và tuân thủ nguyên lý **Atomic Design**.

## Key Architectural Decisions
- [2026-04-20] Initialized `.agent` structure for standardized AI orchestration.
- [2026-04-20] Implemented Premium Login Form with Next.js App Router and strict TS typing.
- [2026-04-20] Refined Login UI with Vietnamese localization and advanced animations.
- [2026-04-23] Implemented Landing Page Portfolio with i18n (next-intl, 5 languages) and next-themes (Dark/Light mode). Fixed lucide-react icon missing issues by using available generic icons (Code, Globe).

## Known Challenges & Gotchas
- *None identified yet.*

## Project Goals
- Maintain a highly modular and testable codebase.
- Ensure 100% compliance with established `.agent/rules`.
