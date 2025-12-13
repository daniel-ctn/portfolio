# Daniel Nguyen - Portfolio Website

A modern, animated portfolio website built with Next.js 16, showcasing my experience as a Senior Frontend Developer with expertise in Web3 and passion for AI.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38bdf8?style=flat-square&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-ff69b4?style=flat-square&logo=framer)

## ✨ Features

- **Modern Design** - Glassmorphism, gradient accents, and smooth micro-animations
- **Dark/Light Theme** - Toggle between dark (purple/indigo) and light (teal) themes
- **Fully Responsive** - Optimized for all screen sizes
- **Smooth Animations** - Powered by Framer Motion with scroll-triggered effects
- **SEO Optimized** - Meta tags, Open Graph, and semantic HTML
- **Performance First** - Built with Next.js App Router for optimal loading

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) with App Router
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Data Fetching:** [TanStack Query](https://tanstack.com/query)

## 📁 Project Structure

```
├── app/
│   ├── globals.css      # Global styles & theme variables
│   ├── layout.tsx       # Root layout with ThemeProvider
│   └── page.tsx         # Home page
├── components/
│   ├── layout/
│   │   ├── navbar.tsx   # Navigation with theme toggle
│   │   └── footer.tsx   # Site footer
│   ├── sections/
│   │   ├── hero.tsx     # Hero section
│   │   ├── about.tsx    # About me section
│   │   ├── experience.tsx # Work experience timeline
│   │   ├── projects.tsx # Featured projects
│   │   ├── skills.tsx   # Skills & technologies
│   │   └── contact.tsx  # Contact form & info
│   ├── ui/
│   │   ├── button.tsx   # Animated button component
│   │   ├── card.tsx     # Glassmorphism card component
│   │   ├── section-heading.tsx
│   │   └── theme-toggle.tsx
│   └── theme-provider.tsx
└── lib/
    └── utils.ts         # Utility functions (cn)
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/daniel-ctn/portfolio-website.git
   cd portfolio-website
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Theme Colors

Edit the CSS variables in `app/globals.css`:

```css
/* Dark theme */
:root {
  --primary: #6366f1; /* Indigo */
  --secondary: #10b981; /* Emerald */
  --accent: #f472b6; /* Pink */
}

/* Light theme (teal) */
[data-theme='light'] {
  --primary: #0d9488; /* Teal */
  --secondary: #0891b2; /* Cyan */
}
```

### Personal Information

Update your details in:

- `components/sections/hero.tsx` - Name, title, social links
- `components/sections/about.tsx` - Bio and highlights
- `components/sections/experience.tsx` - Work history
- `components/sections/projects.tsx` - Portfolio projects
- `components/sections/skills.tsx` - Technical skills
- `components/sections/contact.tsx` - Contact information

## 📝 Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |
| `npm start`     | Start production server  |
| `npm run lint`  | Run ESLint               |

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Connect

- **GitHub:** [daniel-ctn](https://github.com/daniel-ctn)
- **LinkedIn:** [daniel-ctn](https://linkedin.com/in/daniel-ctn)
- **Email:** danielnguyen5201@gmail.com

---

Built with ❤️ by Daniel Nguyen
