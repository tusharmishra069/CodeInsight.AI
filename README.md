# CodeInsight AI

## 🧐 What does this project do?

**CodeInsight AI** is an intelligent developer analytics platform that takes user profiles from platforms like **GitHub** and **LeetCode**, analyzes them, and provides actionable insights and recommendations.

- **GitHub Analysis:**
  - Connect your GitHub profile and CodeInsight AI will analyze your repositories and activity.
  - It generates a personalized dashboard with insights such as **Reliability, Security, Maintainability, Contribution, Uniqueness, and Influence**.
  - You get an overview and detailed breakdown based on your projects, contributions, and code quality.
  - All analysis and insights are powered by **Gemini AI** for deep, contextual understanding.

- **LeetCode Analysis:**
  - Connect your LeetCode profile to see all your stats and coding activity.
  - The platform provides insights into your strengths and weaknesses, and suggests personalized next steps to help you improve and grow as a developer.

---

A modern, full-stack code analysis and developer intelligence platform. Built with Next.js, React, and Tailwind CSS, CodeInsight AI provides deep insights into your code, repositories, and developer journey—all with a beautiful, responsive UI.

---

## 🚀 Features

- **GitHub Scanning:** Analyze your GitHub profile and repositories for code quality, security, maintainability, and more.
- **Dashboard:** Visualize your coding metrics, language usage, tech stacks, and progress with interactive charts and cards.
- **Responsive UI:** Mobile-first, accessible design with smooth transitions and modern glassmorphism effects.
- **Authentication:** (Planned) Secure login with GitHub.
- **Open Source:** Built for extensibility and community contribution.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, SSR/SSG)
- **UI:** [React](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/)
- **Charts:** [Recharts](https://recharts.org/)
- **Icons:** [Lucide](https://lucide.dev/)
- **State:** React hooks
- **Styling:** Tailwind, CSS variables, glassmorphism
- **Tooling:** ESLint, Prettier, PostCSS

---

## 📦 Folder Structure

```
codeinsight.ai/
├── app/                # Next.js app directory (pages, layouts, routes)
│   ├── dashboard/      # Dashboard page and logic
│   ├── scanning/       # Scanning/analysis page
│   ├── not-found/      # 404 page
│   └── Analyzer        # analyzer page
├── components/         # Reusable UI components (cards, buttons, nav, charts, etc.)
│   └── ui/             # Design system components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── public/             # Static assets
├── styles/             # Global and component CSS (if any)
├── tailwind.config.js  # Tailwind CSS config
├── postcss.config.js   # PostCSS config
├── package.json        # Project metadata and scripts
└── README.md           # Project documentation
```

---

## ⚡ Getting Started

### 1. **Clone the repository**
```sh
 git clone https://github.com/yourusername/codeinsight.ai.git
 cd codeinsight.ai
```

### 2. **Install dependencies**
```sh
npm install
# or
yarn install
```

### 3. **Run the development server**
```sh
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

---

## 🧩 Usage

- **Scanning:** Go to `/scanning` to analyze your GitHub profile.
- **Dashboard:** View your coding metrics and insights at `/dashboard`.
- **Responsive:** The UI adapts to mobile, tablet, and desktop screens.

---

## 🗂️ Key Components

- `app/scanning/page.tsx` — Scanning progress and analysis UI
- `app/dashboard/page.tsx` — Main dashboard with charts and metrics
- `components/ui/` — Design system: Card, Button, Badge, Progress, etc.
- `components/Particles.tsx` — (Optional) Animated background particles
- `hooks/` — Custom React hooks
- `lib/utils.ts` — Utility functions

---

## 🤝 Contributing

Contributions are welcome! To get started:

1. Fork the repo
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Commit and push (`git commit -m 'Add feature' && git push`)
5. Open a Pull Request

Please follow the code style and add tests where appropriate.

---

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Recharts](https://recharts.org/)
- [Lucide Icons](https://lucide.dev/)

---

> _Crafted with care by developers, for developers. Happy coding!_

