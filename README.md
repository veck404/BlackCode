# BlackCode

An interactive learning platform that helps developers master Data Structures & Algorithms (DSA). BlackCode blends curated content, rich visualisations, and Firebase authentication into a polished React + Vite experience optimised for modern browsers.

- **Live demo:** https://bl4ck-code.vercel.app

---

## ✨ Features
- **Personalised dashboard** with streaks, completion progress, and charts powered by Recharts.
- **Curated DSA sheet** that can be filtered by topic, difficulty, and search keywords.
- **Responsive UI** built with Tailwind CSS and theming support (light/dark).
- **Firebase authentication** with Google sign-in, redirect fallback, and toast-based feedback.
- **Content-rich marketing pages** (Home, Blog, About) featuring testimonials, team profiles, and creator highlights.
- **Performance tweaks** such as route-level code-splitting, memoised selectors, and lazy media loading.

---

## 🧱 Tech Stack
| Layer        | Details                                  |
|--------------|-------------------------------------------|
| Frontend     | React 18, TypeScript, Vite                |
| UI Styling   | Tailwind CSS, Lucide Icons                |
| State/Auth   | React Context API, Firebase Auth          |
| Charts       | Recharts (Activity + Difficulty tracking) |
| Tooling      | ESLint, PostCSS, TypeScript               |

---

## 🚀 Getting Started

### 1. Clone & Install
```bash
git clone https://github.com/<your-org>/BlackCode.git
cd BlackCode
npm install
```

### 2. Environment Variables
Create `.env` (or `.env.local`) and provide your Firebase configuration:
```env
VITE_FIREBASE_API_KEY=xxx
VITE_FIREBASE_AUTH_DOMAIN=xxx
VITE_FIREBASE_PROJECT_ID=xxx
VITE_FIREBASE_STORAGE_BUCKET=xxx
VITE_FIREBASE_MESSAGING_SENDER_ID=xxx
VITE_FIREBASE_APP_ID=xxx
VITE_FIREBASE_MEASUREMENT_ID=xxx
```
> The development build currently reads from `src/config/firebase.ts`. Move secrets to environment variables before pushing public repos.

### 3. Run locally
```bash
npm run dev
```

### 4. Production build
```bash
npm run build
npm run preview
```

---

## 📁 Project Structure
```
.
├── public/               # Static assets (favicons, hero imagery, etc.)
├── src/
│   ├── components/       # Reusable UI (dashboard cards, sheets, home sections)
│   ├── context/          # Theme + Auth providers
│   ├── data/             # Static datasets (problems, testimonials)
│   ├── pages/            # Route-level screens (Home, Sheet, Dashboard, Blog, About, Login)
│   ├── config/           # Firebase setup
│   └── types/            # Shared TypeScript types
├── package.json
├── vite.config.ts
└── tailwind.config.js
```

---

## 🧪 Quality Checks

| Script            | Purpose                               |
|-------------------|----------------------------------------|
| `npm run dev`     | Start local dev server                 |
| `npm run lint`    | Run ESLint across the codebase         |
| `npm run build`   | Generate production bundle via Vite    |
| `npm run preview` | Serve the production bundle locally    |

Run `npm audit` or `npm audit fix` periodically to address dependency alerts.

---

## 📦 Deployment
The production build ships to [Vercel](https://vercel.com/) via the `vercel.app` domain. Ensure the following for smooth deployments:

1. Provide the Firebase keys as [Vercel Environment Variables](https://vercel.com/docs/environment-variables).
2. Enable automatic builds on push to `main`.
3. Optionally add [Vercel Analytics](https://vercel.com/analytics) or [Speed Insights](https://vercel.com/docs/speed-insights) for real-time performance monitoring.

---

## 🤝 Contributing
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/awesome-idea`).
3. Commit your changes (`git commit -m "feat: add awesome idea"`).
4. Push the branch (`git push origin feature/awesome-idea`).
5. Open a Pull Request against `main`.

Please keep PRs focused and include tests or manual verification steps where relevant.

---

## 📬 Contact
- **Creator:** Victor Umaru ([@vector404](https://vector404.vercel.app))
- **Email:** victor7ultimate@gmail.com
- **Live app:** https://blackcode.vercel.app

If you run into bugs or have feature suggestions, open an issue or reach out directly. Happy coding!

