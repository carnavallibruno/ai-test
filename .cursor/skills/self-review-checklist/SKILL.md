---
name: self-review-checklist
description: Ensure the best and most refined possible outcome for the project. Always use this when the code has finished generating.
---

# My Skill

Correct errors, run tests, and check accessibility code before ending the response. This will tailor the code to never break when sending a prompt and finishing it.

## When to Use

- Use this skill after implementing a feature or modifying existing code.
- Use it after fixing a bug or refactoring a component.
- Use it when linting, type-checking, tests, or runtime checks reveal problems.
- Use it before reporting that an implementation is complete.

## Instructions

### 1. Review the Changes

- Inspect the actual changes made, including the diff where available.
- Confirm that the implementation addresses the user's requirements.
- Check for unrelated modifications, accidental deletions, debugging statements, and unused imports.
- Look for duplicated logic, unnecessary complexity, and inconsistent project conventions.
- Check for common correctness issues such as missing error handling, incorrect assumptions, and unexpected null or undefined values.
- Avoid rewriting code that is already correct simply to impose personal preferences.

### 2. TypeScript and Code Quality

- Run the project's existing lint and type-check commands when available and appropriate.

- Fix errors introduced by the current changes.

- Avoid weakening types or disabling lint rules merely to make validation pass.

- Check that component props, API contracts, and return types are consistent.

- Remove unnecessary any, unsafe casts, and dead code when relevant to the change.

- Validate TypeScript configuration files (tsconfig.json, tsconfig.app.json, tsconfig.node.json, and any relevant extended configurations) when applicable.

- Investigate configuration errors, including unsupported compiler options, incompatible TypeScript versions, invalid extends references, and conflicting settings.

- When a validation command reports errors, investigate and resolve errors introduced by the current changes before completing the task. Do not stop at reporting the errors if they can be safely fixed within the requested scope.

- Do not remove compiler options, weaken type checking, or change dependency versions merely to silence an error without understanding the underlying cause.

- If an error is pre-existing, outside the requested scope, or cannot be safely resolved, clearly report it and explain what remains unresolved.

### 3. Testing

- Identify the tests most relevant to the modified behavior.
- Run targeted tests first, then expand to broader suites when warranted.
- Add or update tests for meaningful new behavior and bug fixes.
- Check edge cases and failure paths when they are relevant.
- If a test fails, determine whether the failure was introduced by the change or existed beforehand.
- Fix regressions caused by the implementation and rerun the relevant tests.
- Do not modify a test merely to make it pass if that would conceal a genuine defect.
- Do not claim tests passed unless they actually completed successfully.

### 4. Accessibility and User Experience

When the change affects the UI, check the following where applicable:

- Semantic HTML and appropriate interactive elements.
- Accessible names and labels for controls.
- Keyboard navigation and visible focus indicators.
- Appropriate contrast and readable text.
- Alternative text for meaningful images.
- Loading, empty, error, and disabled states.
- Responsive layouts and potential visual regressions.

Do not perform an exhaustive accessibility audit for a backend-only change.

### 5. Performance and Security

- Look for unnecessary repeated requests, expensive computations, redundant rendering, and avoidable dependencies.
- Check for obvious resource leaks or incorrect effect cleanup where applicable.
- Review input validation, authorization, and sensitive-data handling when relevant.
- Avoid speculative optimizations that make the implementation harder to maintain without a measurable or credible benefit.

### 6. Scope and Regression Risk

- Confirm that the changes are limited to the requested scope.
- Preserve existing behavior unless a change is explicitly required.
- Inspect affected call sites when modifying shared components, public interfaces, or common utilities.
- If a pre-existing issue is discovered, avoid expanding the task to fix it unless it blocks the requested implementation or presents a material risk.

### 7. Completion Criteria

Before finishing:

- Confirm that the requested behavior is implemented.
- Run the appropriate available checks.
- Resolve issues introduced by the changes.
- Recheck relevant tests after making fixes.
- Report any checks that could not be run and any known unresolved problems.

## Output Guidelines

Provide a concise summary containing:

- What was implemented or changed.

- Which relevant checks were run and their results.

- Any remaining limitations or issues.

Never claim that code is error-free, accessible, or fully tested without sufficient evidence.
