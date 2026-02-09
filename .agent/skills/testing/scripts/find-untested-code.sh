#!/bin/bash
# scripts/find-untested-code.sh

echo "=== Test Coverage Analysis ==="
echo "Date: $(date)"
echo ""

echo "## File Counts"
echo "Components: $(find app/components -name "*.vue" | wc -l | tr -d ' ')"
echo "Composables: $(find app/composables -name "*.ts" ! -name "*.cy.ts" | wc -l | tr -d ' ')"
echo "Stores: $(find app/stores -name "*.ts" | wc -l | tr -d ' ')"
echo "API: $(find server/api -name "*.ts" | wc -l | tr -d ' ')"
echo ""

echo "## Test Counts"
echo "Component tests: $(find app/components -name "*.cy.ts" | wc -l | tr -d ' ')"
echo "Composable tests: $(find app/composables -name "*.cy.ts" | wc -l | tr -d ' ')"
echo "Cypress component: $(find cypress/components -name "*.cy.ts" 2>/dev/null | wc -l | tr -d ' ')"
echo "E2E tests: $(find cypress/e2e -name "*.cy.ts" | wc -l | tr -d ' ')"
echo ""

echo "## Untested Components"
for f in $(find app/components -name "*.vue"); do
  test="${f%.vue}.cy.ts"
  if [ ! -f "$test" ]; then
    echo "- $f"
  fi
done

echo ""
echo "## Untested Composables"
for f in $(find app/composables -name "*.ts" ! -name "*.cy.ts" ! -name "index.ts"); do
  test="${f%.ts}.cy.ts"
  if [ ! -f "$test" ]; then
    echo "- $f"
  fi
done

echo ""
echo "## Untested Stores"
for f in $(find app/stores -name "*.ts" ! -name "*.test.ts" ! -name "index.ts"); do
  test="${f%.ts}.test.ts"
  spec="${f%.ts}.spec.ts"
  cy="${f%.ts}.cy.ts"
  if [ ! -f "$test" ] && [ ! -f "$spec" ] && [ ! -f "$cy" ]; then
    echo "- $f"
  fi
done

echo ""
echo "## Untested API"
for f in $(find server/api -name "*.ts" ! -name "*.test.ts" ! -name "*.spec.ts"); do
  test="${f%.ts}.test.ts"
  spec="${f%.ts}.spec.ts"
  cy="${f%.ts}.cy.ts"
  if [ ! -f "$test" ] && [ ! -f "$spec" ] && [ ! -f "$cy" ]; then
    echo "- $f"
  fi
done
