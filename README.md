# Ayaan Shaikh — Personal Portfolio Website

A modern, production-ready developer portfolio built with **React (Vite)**, **Tailwind CSS**, and **Framer Motion**. Designed for the **Sqrock IT Solutions** Web Development Internship (Phase 2, Task 4) deliverable.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production (Vercel Ready)
```bash
npm run build
```

---

## 📋 What to Personally Swap In Before Deploying

All code logic, responsive styles, animations, dark mode, and client-side form validations are 100% complete and working. Before publishing or submitting, simply customize the following placeholder files and links:

| Item | Location | Instructions |
| :--- | :--- | :--- |
| **Profile Photo** | `public/images/profile.jpg` | Drop your real photo named `profile.jpg` into `public/images/`. |
| **Resume PDF** | `public/resume.pdf` | Drop your actual resume PDF named `resume.pdf` into the `public/` directory. |
| **PriceWiseAI Screenshot** | `public/images/projects/pricewise.png` | Drop your real project screenshot into `public/images/projects/`. |
| **GitHub Project Repo Link** | `src/data/projects.js` (line 14) | Update `github: "https://github.com/Git-ayaanshaikh24/PriceWiseAI"` with the exact repo URL. |
| **LinkedIn & Twitter Links** | `src/components/Hero.jsx`, `Contact.jsx`, `Footer.jsx` | Search for `// TODO:` comments and paste your LinkedIn & Twitter profile URLs. |
| **Additional Projects** | `src/data/projects.js` | Replace the 2 placeholder project cards marked with `// TODO: add project` when you are ready. |
| **EmailJS Integration (Optional)** | `src/components/Contact.jsx` (line 48) | Wire up your free EmailJS keys to send emails directly to your inbox. |

---

## 🛠️ Tech Stack & Features

- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS with dark mode persistence (`localStorage` + system preference)
- **Animations**: Framer Motion for scroll-triggered entrance, progress bars, and tabs
- **Icons**: Lucide React
- **Typography**: Inter & Outfit via Google Fonts
- **Contact Form**: Client-side validation (regex for email, required fields) + success toast
- **SEO Ready**: Meta tags, OpenGraph previews, semantic HTML5 structure
- **Deployment**: Configured for zero-config one-click deployment on [Vercel](https://vercel.com)

---

## 🚢 Deploying to Vercel

1. Push your code to your GitHub repository:
   ```bash
   git add .
   git commit -m "Complete portfolio website with modern UI and dark mode"
   git push -u origin master
   ```
2. Go to [vercel.com](https://vercel.com), click **Add New Project**, and import your GitHub repository.
3. Keep default settings (`Framework Preset: Vite`, `Build Command: npm run build`, `Output Directory: dist`).
4. Click **Deploy**.
