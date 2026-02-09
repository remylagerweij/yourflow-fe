---
description: Identify components, composables, and utilities that lack test coverage
---

Your goal is to find code that is not covered by tests and prioritize what needs testing.

## When to Use

- Before major releases
- During testing sprints
- After adding new features
- As part of `pre-release-audit`

## Coverage Categories

| Category        | Test Type         | Priority |
| --------------- | ----------------- | -------- |
| **Components**  | Cypress Component | High     |
| **Composables** | Cypress Component | High     |
| **Stores**      | Cypress Component | Medium   |
| **Server API**  | Cypress E2E       | Medium   |
| **Utils**       | Cypress Component | Low      |

## Workflow Steps

### 1. Run Analysis

Execute the analysis script from the Testing skill:

```bash
./.agent/skills/testing/scripts/find-untested-code.sh
```

> [!NOTE]
> If the script is missing, refer to the [Testing Skill](file:///Users/remymartinlagerweij/projects/md-fe/.agent/skills/testing/SKILL.md) to restore it.

### 2. Analyze Results

Review the output from step 1 to identify gaps.

### 3. Prioritize by Risk

**High Priority (test first):**

- Authentication components/composables
- Payment/checkout flows
- Form validation
- Data mutations (create/update/delete)
- Complex business logic

**Medium Priority:**

- Filtering/sorting logic
- Navigation components
- Display components with state

**Lower Priority:**

- Pure display components
- Utility functions
- Static pages

### 4. Prioritize by Complexity

Estimate complexity using the helper script:

```bash
./.agent/skills/testing/scripts/estimate-complexity.sh <file>
```

### 5. Check Critical Paths

Ensure these are tested:

- [ ] User authentication flow
- [ ] Search/filter functionality
- [ ] Advertisement display
- [ ] Favorites (likes) functionality
- [ ] Form submissions
- [ ] Error handling

### 6. Generate Coverage Report

Run the coverage script.

> [!IMPORTANT]
> You must run tests (`npm run test:component` or `npm run test:e2e`) **BEFORE** generating the report, as it relies on the coverage data produced during the test run.

```bash
./.agent/skills/testing/scripts/generate-coverage.sh
```

## Report Template

```markdown
# Test Coverage Report

**Date:** [DATE]
**Total Files:** [COUNT]
**Files with Tests:** [COUNT]
**Coverage:** [PERCENTAGE]%

## Summary by Category

| Category      | Total | Tested | Coverage | Gap |
| ------------- | ----- | ------ | -------- | --- |
| Components    | 45    | 20     | 44%      | 25  |
| Composables   | 20    | 8      | 40%      | 12  |
| Stores        | 7     | 3      | 43%      | 4   |
| API Endpoints | 15    | 5      | 33%      | 10  |
| Utils         | 10    | 2      | 20%      | 8   |

## High Priority Untested

### Critical Business Logic

1. `app/composables/usePayment.ts` - Payment processing
2. `app/stores/cart.ts` - Cart management
3. `app/components/checkout/` - Entire directory

### Complex Components

1. `app/components/filters/AdvancedFilters.vue` - Complex state
2. `app/components/advert/AdvertCard.vue` - Many variants

## Tested Files

### Components (20/45)

- [x] `ui/Button.vue`
- [x] `ui/Accordion.vue`
- [ ] `ui/Badge.vue`
      ...

### Composables (8/20)

- [x] `usePriceDataAggregation.ts`
- [ ] `useFilterUrlSync.ts`
      ...

## Recommendations

### Sprint Priority

1. Add tests for authentication flow
2. Add tests for filter composable
3. Add tests for favorites store

### Coverage Goals

- Increase component coverage to 60%
- Increase composable coverage to 80%
- Add integration tests for API
```

## Test Creation Templates

> [!TIP]
> Refer to the **[Testing Skill Templates](file:///Users/remymartinlagerweij/projects/md-fe/.agent/skills/testing/SKILL.md#3-templates)** for standardized test patterns.

- [Component Test Template](file:///Users/remymartinlagerweij/projects/md-fe/.agent/skills/testing/templates/component-test.ts)
- [Composable Test Template](file:///Users/remymartinlagerweij/projects/md-fe/.agent/skills/testing/templates/composable-test.ts)

## Checklist

- [ ] Inventory all testable files
- [ ] Inventory existing tests
- [ ] Calculate coverage percentage
- [ ] Identify untested files
- [ ] Prioritize by risk/complexity
- [ ] Check critical paths coverage
- [ ] Generate report
- [ ] Create test backlog
- [ ] Set coverage goals
