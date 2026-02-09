#!/bin/bash
# .agent/skills/testing/scripts/generate-coverage.sh

echo "=== Cypress Coverage Report ==="
echo "Note: Ensure you have run 'npm run test:component' or 'npm run test:e2e' first."

# Combine coverage if needed (Cypress usually handles this if configured right, or we might need to merge)
# For now, just try to report from the default coverage folder

if [ -d ".nyc_output" ]; then
    echo "Intermediate coverage data found. generating report..."
    npx nyc report --reporter=html --reporter=text-summary
elif [ -d "coverage" ]; then
    echo "Coverage report found in coverage/."
else
    echo "No coverage data found. Run 'npm run test:component' first."
fi

if [ -f "coverage/index.html" ]; then
    echo "Opening coverage report..."
    if [[ "$OSTYPE" == "darwin"* ]]; then
        open coverage/index.html
    elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
        xdg-open coverage/index.html
    else
        echo "Report generated at coverage/index.html"
    fi
else
    echo "HTML report not found. Checked coverage/index.html"
fi
