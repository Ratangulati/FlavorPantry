# 📦 FlavorPantry

FlavorPantry is a smart recipe finder app that helps you discover meals you can cook with the ingredients already in your kitchen. Built with **React**, **Vite**, and **Tailwind CSS**, and powered by the **TheMealDB API**.

---

## 🚀 Features

- ✅ Add ingredients to your virtual pantry
- 🔍 Search for recipes using TheMealDB API
- 📖 View full recipe details and instructions
- 💾 Save pantry state with `localStorage` (optional)
- 💡 Fully responsive UI
- 💬 Clean, minimal interface using TailwindCSS

---

## 🛠️ Tech Stack

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [TheMealDB API](https://www.themealdb.com/)

---

## 📦 Installation

```bash
git clone https://github.com/your-username/FlavorPantry.git
cd FlavorPantry
npm install
npm run dev
```

### Usage
Go to the home page and click Check Recipes

Add your ingredients one by one

Click Find Recipes

Scroll to view suggested recipes

Click any recipe to see full instructions


## Contributing
Thank you for considering contributing to FlavorPantry! 🥦🍅

See [contributing](CONTRIBUTING.md) for more information



### Quality checks

- Lint: `npm run lint`
- Format: `npm run format` / check `npm run format:check`
- Tests: `npm test` or with coverage `npm run test:coverage`
- All checks (local/CI): `npm run ci:checks`

Husky pre-commit runs `lint-staged` to auto-fix and format staged files.

### CI/CD

- GitHub Actions CI runs on PRs and on pushes to `main`:
  - Install, Lint, Format Check, Test (with coverage), and Build
  - Coverage artifacts are uploaded
- Optional Vercel Preview deploy workflow posts a preview URL when secrets are configured:
  - `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`

📢 Pull Requests
Write a descriptive title and body

Link issues using Closes #1

Ensure all checks pass

### Code of Conduct
Be sure to check our [Code of Conduct](CODE_OF_CONDUCT.md)


#### Some ideas for PR's 
```bash
 Add pantry-based search

 Recipe card listing

 Modal with full recipe details

 LocalStorage support for pantry

 Theme toggle (light/dark)

 PWA support

 Unit testing with React Testing Library
```

#### License
MIT License. See [LICENSE](LICENSE) for details.

