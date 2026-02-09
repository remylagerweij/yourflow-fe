#!/bin/bash
# .agent/skills/testing/scripts/estimate-complexity.sh

if [ -z "$1" ]; then
  echo "Usage: $0 <file>"
  exit 1
fi

FILE="$1"

if [ ! -f "$FILE" ]; then
  echo "Error: File $FILE not found"
  exit 1
fi

echo "Complexity Estimate for: $FILE"
echo "--------------------------------"
echo "Lines of code: $(wc -l < "$FILE" | tr -d ' ')"
echo "Functions/Methods: $(grep -c "function\|const.*=.*=>" "$FILE")"
echo "Reactive Refs: $(grep -c "ref\|reactive\|computed" "$FILE")"
echo "External Dependencies: $(grep -c "import" "$FILE")"
