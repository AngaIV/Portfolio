# Personal Portfolio Website

A responsive, neo-brutalist portfolio website built to showcase my projects and technical background across **Software Engineering**, **Cybersecurity Operations**, and **Data Analytics**.

**Live Demo:** [anga-peter.vercel.app](https://anga-peter.vercel.app)

---

## Technical Overview

* **Framework:** [Next.js](https://nextjs.org/) (App Router, React 19)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with custom neo-brutalist styling rules
* **Deployment:** [Vercel](https://vercel.com/) (Automated CI/CD via GitHub integration)
* **SEO & Metadata:** Custom `layout.tsx` OpenGraph configuration, dynamic `sitemap.ts`, and `robots.ts`

---

## Key Features

* **Neo-Brutalist Design System:** Custom high-contrast UI components, sharp borders, hard box-shadows, and accessible color palettes.
* **Featured Projects Carousel:** Dynamic project showcase with filter tags and direct GitHub repository links.
* **Certifications Sidebar:** Quick access to verified credentials across security, cloud, and data analytics.
* **SEO & Social Previews:** Configured with OpenGraph cards and Twitter metadata for rich social link previews on LinkedIn, WhatsApp, and X.
* **Production Build Optimized:** Configured for fast page loads and type-safe Next.js production builds.

---

## Local Development Setup

To run this project locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AngaIV/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
my-portfolio/
├── app/
│   ├── components/       # Custom UI sections (Hero, ProjectsAndCerts, etc.)
│   ├── data/             # Static JSON/TS project and certification entries
│   ├── globals.css       # Global styles and Tailwind directives
│   ├── layout.tsx        # App layout, root fonts, and metadata
│   ├── page.tsx          # Homepage layout
│   ├── robots.ts         # Automated search engine crawler rules
│   └── sitemap.ts        # Automated XML sitemap generation
├── public/               # Static assets and icons
└── next.config.ts        # Next.js configuration settings
```

---

## Deployment

This repository is connected to Vercel. Any changes pushed to the `main` branch automatically trigger a production build and deployment.
