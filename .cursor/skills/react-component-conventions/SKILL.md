---
name: react-component-conventions
description: Create/maintain a personal component architectural organization. Use when creating anything related to components.
---

# My Skill

This should always be called in order to maintain the integrity of component organization within the project.

## When to Use

- Use this skill when first creating the component structure of the project to create the pattern using the one described here as a template

- Use this skill when creating following components for the same project so they will follow the same pattern

## Instructions

- Inside the /components directory, create two folders: /structure and /ui. The first one will store components that are used once throughout the whole application (Navbar, Sidebar, etc.) and the second one will store components that are used multiple times (input fields for a form, buttons, product tiles, etc.)

- The components should all be declared as a const and exported using the default statement (i.e.: export default const ExampleComponent () {})

- The components' TypeScript interfaces must always be declared inside their own file

- Use the ask questions tool if you need to clarify requirements with the user
