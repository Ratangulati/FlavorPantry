#!/usr/bin/env bash
set -euo pipefail

# Run full project checks locally and in CI
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

echo "▶ Node version"
node -v || true
npm -v || true

echo "▶ Install (CI-safe)"
if [ -n "${CI:-}" ]; then
  npm ci
else
  npm install
fi

echo "▶ Lint"
npm run lint

echo "▶ Format check"
npm run format:check

echo "▶ Tests with coverage"
npm run test:coverage

echo "▶ Build"
npm run build

echo "✅ All checks passed"


