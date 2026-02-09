---
name: Testing
description: Helper for running, writing, and debugging Cypress component and E2E tests
---

# Testing Skill

This skill consolidates all testing-related knowledge and workflows for the MotoData project. Use this skill whenever you need to run, write, or fix tests.

## 1. Conventions (From Rules)

### File Location

- **Co-locate tests** beside components: `ComponentName.cy.ts` next to `ComponentName.vue`
- E2E tests go in `cypress/e2e/`

### Mounting Strategy

- **ALWAYS use render functions (`h()`)** over template strings.
- Use kebab-case for v-model events: `h(Component, { "onUpdate:modelValue": spy })`

### Selectors

- **Prefer ARIA attributes**: `[role="button"]`, `[aria-expanded="true"]`
- **Avoid CSS classes**: `.bg-blue-500` (brittle)

### Anti-Patterns

- ❌ `cy.get("...").click({ force: true })` (hides real issues)
- ❌ `cy.wait(1000)` (arbitrary waits)

## 2. Workflows

### Run Tests

**Goal**: Run the test suite.

1.  **Component Tests**: `npm run test:component`
2.  **E2E Tests**: `npm run test:e2e`
3.  **All Tests**: `npm run test:component && npm run test:e2e`

### Write Tests

**Goal**: Write robust, non-flaky Cypress tests.

1.  **Analyze**: component vs E2E? Nuxt injections needed?
2.  **Draft**:
    - Imports: `import MyComponent from './MyComponent.vue'`
    - Setup: Spy on events, mock props.
    - Nuxt Fallback: `const nuxtSafe = typeof useNuxtApp === "function" ? useNuxtApp() : {}`
3.  **Verify**: Run the spec locally to ensure it passes.

### Fix Failures

**Goal**: debug and resolve test failures.

1.  **Reproduce**: `npx cypress run --component --spec "<path>" --browser electron`
2.  **Debug**:
    - **Injection Errors**: Add `useNuxtApp` fallbacks.
    - **Timing/Flakiness**: Disable transitions, use robust selectors.
    - **Debug Mode**: Use `it.only` or `console.log` (temporarily).

### Find Untested Code

**Goal**: Identify files lacking coverage and prioritize testing.

1.  **Run Analysis**: Use the helper script stored in this skill to find _missing_ test files.
    ```bash
    ./.agent/skills/testing/scripts/find-untested-code.sh
    ```
2.  **Estimate Complexity**: Analyze a specific file's complexity.
    ```bash
    ./.agent/skills/testing/scripts/estimate-complexity.sh <path/to/file>
    ```
3.  **Generate Coverage Report**:

    > [!IMPORTANT]
    > You must run tests **BEFORE** generating the report to collect data.

    a. Run Component Tests:

    ```bash
    npm run test:component
    ```

    b. (Optional) Run E2E Tests:

    ```bash
    npm run test:e2e
    ```

    c. Generate Report:

    ```bash
    ./.agent/skills/testing/scripts/generate-coverage.sh
    ```

4.  **Review**: Open the generated HTML report or check the summary in the terminal.

## 3. Templates

Use these templates to consistently test components and composables.

- **Component Test**: [component-test.ts](file:///Users/remymartinlagerweij/projects/md-fe/.agent/skills/testing/templates/component-test.ts)
- **Composable Test**: [composable-test.ts](file:///Users/remymartinlagerweij/projects/md-fe/.agent/skills/testing/templates/composable-test.ts)
