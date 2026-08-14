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

If you fork the repo or change its name, update the `base` path in `vite.config.js`:

```js
export default defineConfig({
  base: "/your-repo-name/",
});
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
├── index.html                     # Vite HTML entry point
├── vite.config.js                 # Vite config (base path for GitHub Pages)
├── public/                        # Static assets (favicon, resume PDF)
├── src/
│   ├── App.js                     # Root layout composing all sections
│   ├── index.js                   # React entry point
│   ├── global.css                 # Theme variables + style imports
│   ├── assets/                    # Images, icons, audio grouped by category
│   ├── components/                # Section and UI components
│   ├── data/                      # Portfolio content (experience, projects, skills)
│   ├── styles/                    # Component-scoped CSS files
│   └── utils/
│       └── navigation.js          # Shared scroll + external link helpers
└── package.json
```

### Architecture notes

- **Section-based layout:** Each portfolio section is a top-level component in `App.js`.
- **Content in `src/data/`:** Experience, projects, skills, and profile content live in data modules for easy editing.
- **Presentational components:** Item components receive props from parent views or mapped data arrays.
- **Styling:** Theme tokens in `global.css`; all component styles imported centrally there.
- **Navigation:** Shared `scrollToSection` and `openExternalLink` in `src/utils/navigation.js`.
- **Build tool:** Vite (faster dev server and production builds than Create React App).

### Customizing content

Edit the files in `src/data/`:

- `profile.js` — name, title, location, social links
- `experience.js` — work history
- `projects.js` — project cards and store links
- `skills.js` — technology stack

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
