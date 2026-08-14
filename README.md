# 🚀 My Portfolio Website

This is a customizable personal portfolio website.  
Fork the repository, customize the content, and deploy automatically to **GitHub Pages**.

Live site: https://atirek-pothiwala.github.io/portfolio

---

## 📌 Quick Start

### 1. Fork and clone

```bash
git clone https://github.com/atirek-pothiwala/portfolio.git
cd portfolio
```

### 2. Install and run locally

```bash
npm install
npm start
```

The dev server runs at http://localhost:3000/portfolio.

### 3. Build for production

```bash
npm run build
```

### 4. Commit and push

```bash
git add .
git commit -m "Updated portfolio content"
git push origin master
```

---

## 🚀 Automatic Deployment (GitHub Pages)

This repository deploys automatically when changes are pushed to `master`.

### One-time GitHub setup

1. Open **Settings → Pages** in your GitHub repository.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Merge to `master` (or push directly). The workflow in `.github/workflows/deploy.yml` builds and publishes the site.

### Custom domain / repository name

If you fork the repo or change its name, update the `homepage` field in `package.json`:

```json
"homepage": "https://your-username.github.io/your-repo-name"
```

### Workflow behavior

| Event | Action |
| --- | --- |
| Push to `master` | Build + deploy to GitHub Pages |
| Pull request to `master` | Build only (no deploy) |
| Manual | Run **Deploy to GitHub Pages** from the Actions tab |

---

## 📁 Project Structure

```text
portfolio/
├── .github/workflows/deploy.yml   # CI build + GitHub Pages deploy
├── .cursor/environment.json       # Cloud Agent install config
├── public/                        # Static assets (favicon, resume PDF, index.html)
├── src/
│   ├── App.js                     # Root layout composing all sections
│   ├── index.js                   # React entry point
│   ├── global.css                 # Theme variables + style imports
│   ├── assets/                    # Images, icons, audio grouped by category
│   ├── components/                # Section and UI components (one per view)
│   ├── styles/                    # Component-scoped CSS files
│   └── utils/
│       └── navigation.js          # Shared scroll + external link helpers
└── package.json
```

### Architecture notes

- **Section-based layout:** Each portfolio section (home, profile, projects, etc.) is a top-level component rendered in `App.js`.
- **Presentational components:** Items like `ProjectViewItem`, `ExperienceViewItem`, and `TechViewItem` receive data via props from their parent views.
- **Styling:** Global theme tokens live in `global.css`; most section styles are imported there. A few small components import their own CSS directly.
- **Navigation:** Toolbar and contact CTA use shared `scrollToSection` from `src/utils/navigation.js`.
- **External links:** Social, project, and image buttons use shared `openExternalLink` for consistent `target="_blank"` behavior.

---

## 💡 Notes

- After deploying, wait 1–2 minutes for GitHub Pages to update.
- If changes aren't showing, try a hard refresh:
  - Windows: `Ctrl + Shift + R`
  - Mac: `Cmd + Shift + R`

---

## ✅ That's it!

If you run into trouble, open an [Issue](https://github.com/atirek-pothiwala/portfolio/issues).

Happy Coding! 🎉
