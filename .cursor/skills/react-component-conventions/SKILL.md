---
name: react-component-conventions
description: Create/maintain a personal component architectural organization. Use when creating anything related to components.
---

# My Skill

This should always be called in order to maintain the integrity of component organization within the project.

## When to Use

- Use this skill when creating a new React component.
- Use it when modifying or refactoring existing components.
- Use it when establishing component organization for a new project.
- Use it when deciding whether a component belongs in a shared UI directory or a feature-specific location.

## Instructions

### 1. Inspect the Existing Architecture

- Before creating files, inspect the existing component directories and representative components.

- Follow established project conventions when they are consistent and maintainable.

- Do not reorganize existing files solely to match this skill.

- If no component structure exists, use the organization described below as the default.

### 2. Component Organization

For projects without an established alternative, organize shared components under:

- components/structure/: application-level structural components, such as Navbar, Sidebar, Footer, and shared layouts.

- components/ui/: reusable, generic UI components, such as buttons, inputs, dialogs, badges, and cards.

Use feature-specific directories when components belong exclusively to a particular domain or feature.

#### Guidelines:

- A component used in multiple unrelated parts of the application is a candidate for a shared location.

- A component used only by one feature should generally remain close to that feature.

- Do not create abstractions for components that are unlikely to be reused or that have no meaningful shared behavior.

- Avoid circular dependencies between shared components and feature-specific modules.

- Every component must be placed inside its own directory named after the component, with an index.tsx file as its entry point. For example: components/structure/Navbar/index.tsx or components/ui/Button/index.tsx.

### 3. Component Declaration and Exports

- Use TypeScript for components in TypeScript projects.

- Prefer named const component declarations and default exports when consistent with the project conventions.

- Use valid TypeScript syntax. For example:

```
interface ExampleComponentProps {
  title: string;
}

const ExampleComponent = ({ title }: ExampleComponentProps) => {
  return <h1>{title}</h1>;
};

export default ExampleComponent;
```

- Do not use invalid syntax such as export default const.

- Avoid unnecessary React.FC annotations unless the project uses that convention.

- Keep component responsibilities focused and avoid unnecessarily large components.

### 4. TypeScript and Props

- Define component-specific prop interfaces or types in the same file as the component by default.

- Extract shared types when they are genuinely reused across files or represent a domain-level contract.

- Use descriptive prop names and explicit types.

- Avoid any unless there is a justified reason and no practical safer alternative.

- Prefer discriminated unions or other precise types when they improve correctness.

- Handle optional props and default values explicitly.

### 5. Reusability and Composition

- Prefer composition over components with excessive conditional behavior.

- Keep business logic separate from presentation when that improves clarity or testability.

- Avoid premature generalization.

- Keep components accessible and ensure interactive elements have appropriate semantics.

- Follow the project's established styling, state-management, and data-fetching conventions.

### 6. Dependencies and Scope

- Check whether the project already has a suitable library or component before adding a dependency.

- Do not introduce a new library for a trivial requirement without evaluating the trade-off.

- Limit changes to the components and files necessary for the requested task.

- Preserve existing public interfaces unless a change is required and its impact is understood.

### 7. Validation

- Run the relevant linting, type-checking, and tests when available and appropriate.

- Verify that imports, exports, and component usages remain valid.

- If the project lacks a suitable validation command, report that limitation instead of claiming validation succeeded.

### 8. Clarification

- Ask the user for clarification when a meaningful architectural decision cannot be resolved from the existing codebase or requirements.

- Otherwise, use the simplest convention consistent with the project and proceed.
