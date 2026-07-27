# Portfolio Website

A modern, interactive portfolio website built with React, Vite, and Tailwind CSS.

## Features

- Responsive design with light/dark theme (persisted to `localStorage`)
- Animated with Framer Motion — scroll reveals, animated counters, typewriter hero
- Interactive sections: filterable skills, expandable experience timeline,
  medallion-architecture explorer, tag-filtered projects
- Particle background effects
- Modern UI with Tailwind CSS

## Installation

Follow these steps to set up the project locally:

### Prerequisites

- Node.js `^20.19.0 || >=22.12.0` (required by Vite 7)
- npm

### Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## Project Structure

```
portfolio/
├── public/                # Served as-is (resume PDF, favicon)
├── src/
│   ├── assets/            # Logos, certification badges, profile photo
│   ├── App.jsx            # All UI components and page layout
│   ├── data.js            # All résumé content — edit this to update the site
│   ├── main.jsx           # Entry point
│   └── index.css          # Tailwind directives + base styles
├── index.html             # HTML template
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration (darkMode: 'class')
├── postcss.config.js      # PostCSS configuration
└── package.json           # Project dependencies
```

## Updating content

All résumé-derived content lives in [`src/data.js`](src/data.js) — experience,
skills, projects, certifications, contact details and the hero highlight badge.
`src/App.jsx` contains no hardcoded copy, so updating the site is a one-file edit.

To add a company or certification logo, drop the image in `src/assets/`, import
it at the top of `data.js`, and assign it to the relevant `logo`/`img` field.
Entries left as `null` render a generated initials tile instead.

## Deployment

Pushing to `master` triggers [`.github/workflows/static.yml`](.github/workflows/static.yml),
which builds the site and publishes `dist/` to GitHub Pages.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Technologies Used

- React 19
- Vite 7
- Tailwind CSS 3
- Framer Motion
- Lucide React Icons
- TS Particles
