---
name: model-router
description: Explain the plan/thinking process before coding it. Use this when planning what the code is going to do.
---

# My Skill

Manage the models that are going to be used to generate a response as to not use more tokens than needed for specific tasks.

## When to Use

- Use before substantial implementation or debugging tasks.

- Use when deciding whether to plan, explore, delegate, or implement directly.

- Use when a task may require multiple agents or extensive codebase analysis.

## Instructions

### 1. Classify Complexity

#### LOW:

- Small, clearly specified changes.

- Simple styling, imports, renames, and straightforward SQL.

- Small bug fixes with an obvious cause.

- Routine updates following an existing pattern.

#### MEDIUM:

- Features spanning multiple related files.

- Standard API integrations.

- Debugging requiring investigation.

- Refactoring a module while preserving its behavior.

- Tests requiring understanding of existing application logic.

#### HIGH:

- Architectural changes affecting multiple modules.

- Difficult bugs with unclear causes.

- Security-sensitive changes.

- Complex migrations or concurrency problems.

- Changes with broad regression risk or substantial uncertainty.

### 2. Select an Execution Strategy

- LOW: implement directly with the cheapest suitable available model.

- MEDIUM: inspect relevant code, make a concise plan, and use a capable general-purpose model.

- HIGH: use a stronger reasoning model when available, investigate dependencies, plan the implementation, and validate the result carefully.

Do not assume that a model is available or that its pricing is known without checking the current configuration.

### 3. Control Context and Delegation

- Read only the files needed to understand the task.

- Reuse existing findings instead of repeating repository exploration.

- Delegate only when parallel investigation or independent verification offers meaningful value.

- Give each subagent a narrow objective and request concise findings.

- Avoid spawning agents for trivial changes.

- Prefer targeted tests before broader validation.

### 4. Escalate When Necessary

Start with the least expensive reasonable strategy.

Escalate when:

- The initial approach repeatedly fails.

- The scope grows beyond the original assumptions.

- New evidence reveals significant architectural or security risks.

- The selected model cannot reliably resolve the problem.

Do not escalate solely because the task involves many lines of code.

### 5. Respect Tool Limitations

- A skill can guide model selection and delegation but cannot guarantee that the active model changes.

- Use native Cursor model selection, supported subagent configuration, or another explicitly available orchestration mechanism.

- Never claim to have switched models unless the switch actually occurred.

### 6. Completion

Prioritize correctness and necessary verification while minimizing unnecessary model calls, repeated context, and redundant explanations.