---
name: explain-before-code
description: Explain the plan/thinking process before coding it. Use this when planning what the code is going to do.
---

# My Skill

Explain why the decisions you made were made and how that impacted the performance and complexity of the project.

## When to Use

- Use this skill when planning a feature or a non-trivial code change.
- Use it when multiple implementation approaches are possible.
- Use it when a decision may affect performance, maintainability, scalability, security, or complexity.
- Use it when the user explicitly asks for an explanation or implementation plan.

## Instructions

- Before implementing a non-trivial change, briefly explain the proposed approach.

- Break down the plan into logical steps in the order they should be implemented.

- Explain the reasoning behind important technical decisions.

- When relevant, compare alternatives and explain why the chosen approach is preferable.

- Consider these factors when they materially affect the decision:
  - Runtime and rendering performance.
  - Time and space complexity.
  - Maintainability and readability.
  - Reusability and separation of concerns.
  - Dependencies, bundle size, and third-party libraries.
  - Testing effort and potential regressions.
  - Security and accessibility.

- Prefer the simplest solution that meets the requirements without sacrificing important quality attributes.

- Do not introduce abstractions, dependencies, caching, or optimizations without a concrete justification.

- Follow existing project conventions unless there is a meaningful reason to change them.

- Clearly distinguish facts verified in the codebase from assumptions or estimates.

- If requirements are ambiguous and the ambiguity materially affects the implementation, ask the user for clarification before proceeding.

- After explaining the plan, implement it when authorized by the task. Do not stop at planning if the user requested implementation.

### Output Guidelines

- For small, straightforward changes, provide a short explanation or proceed directly when no meaningful planning is needed.

- For medium-sized tasks, provide a concise ordered plan and explain the key trade-offs.

- For complex tasks, explain the architecture, dependencies, risks, and validation strategy before implementation.

- Avoid explaining trivial syntax or repeating the same rationale.

- Focus on the decisions that are useful for understanding, reviewing, or maintaining the code.