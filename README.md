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

## 📁 Folder Structure

FlavorPantry/
├── public/
├── src/
│ ├── api/ # API utilities
│ │ └── mealApi.js
│ ├── assets/ # Static images/icons
│ ├── components/ # Shared/reusable components
│ │ └── common/ # UI elements like buttons/tags
│ ├── pages/ # Route-based views
│ ├── App.jsx
│ ├── main.jsx
│ └── routes.jsx # (Optional)
├── .github/ # ISSUE_TEMPLATE, PR_TEMPLATE
│ ├── ISSUE_TEMPLATE/
│ │ ├── bug_report.md
│ │ └── feature_request.md
│ └── PULL_REQUEST_TEMPLATE.md
├── .eslintrc.js
├── .prettierrc
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE
├── tailwind.config.js
├── vite.config.js
├── package.json
└── README.md

yaml
Copy
Edit

---

## 📦 Installation

```bash
git clone https://github.com/your-username/FlavorPantry.git
cd FlavorPantry
npm install
npm run dev


💡 Usage
Go to the home page and click Check Recipes

Add your ingredients one by one

Click Find Recipes

Scroll to view suggested recipes

Click any recipe to see full instructions


🧑‍💻 Contributing
Thank you for considering contributing to FlavorPantry! 🥦🍅

Please follow these steps:

🧰 Setup
bash
git clone https://github.com/your-username/FlavorPantry.git
cd FlavorPantry
npm install

📂 Branching
Base branch: main

Feature branches: feature/<your-feature-name>

✔️ Commit Format

bash
git commit -m "feat: add button to clear pantry"

📢 Pull Requests
Write a descriptive title and body

Link issues using Closes #1

Ensure all checks pass

🤝 Code of Conduct
Be respectful, inclusive, and kind. See our Code of Conduct.


🔮 Some ideas for PR's 
 Add pantry-based search

 Recipe card listing

 Modal with full recipe details

 LocalStorage support for pantry

 Theme toggle (light/dark)

 PWA support

 Unit testing with React Testing Library

📃 License
MIT License. See LICENSE for details.

