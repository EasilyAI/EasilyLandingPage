# Easily AI - Landing Page

A modern, bilingual (Hebrew/English) landing page for Easily AI - an AI solutions company helping businesses implement intelligent automation and data strategies.

## 🚀 Features

- **Bilingual Support**: Seamless switching between Hebrew and English
- **Responsive Design**: Fully responsive across all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Component-Based Architecture**: Modular and maintainable code structure
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

## 📁 Project Structure

```
EasilyLandingPage/
├── public/                 # Static assets
├── src/
│   ├── components/
│   │   ├── layout/        # Layout components
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   ├── pages/         # Page components
│   │   │   ├── Hero.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── ServiceDetail.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Blog.jsx
│   │   │   ├── BlogDetail.jsx
│   │   │   └── Contact.jsx
│   │   └── ui/            # Reusable UI components
│   │       ├── Logo.jsx
│   │       ├── IconMap.jsx
│   │       └── VisualPlaceholder.jsx
│   ├── content/           # Content dictionary
│   │   └── index.js
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # App entry point
│   └── index.css          # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🎨 Brand Colors

- **EZ Dark**: `#172736` - Primary dark color
- **EZ Purple**: `#817DFF` - Brand accent color
- **EZ Light**: `#FAFAFA` - Light background

## 🛠️ Technologies

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Google Fonts** - Typography (Heebo, Space Mono, Noto Sans Hebrew, Montserrat)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd EasilyLandingPage
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Build

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🌐 Pages

- **Home** - Hero section, services overview, and blog preview
- **Services** - Detailed view of all AI solutions offered
- **About** - Company mission, founder story, and values
- **Blog** - Insights and case studies on AI implementation
- **Contact** - Contact form and direct communication channels

## 🎯 Key Features by Section

### Services
- Chatbots & Sales Automation
- Knowledge Management (RAG)
- Workflow Automation
- Call Insights & Analytics
- Data Strategy for AI
- Real-Time Web Agents

### Blog Topics
- Product Design with AI
- Qualitative Data Analysis
- Automation Case Studies
- AI Memory & Personalization
- Real-time AI Integration
- Future Skills for AI Era

## 🔧 Customization

### Changing Content

All content is centralized in `src/content/index.js`. To update text:

1. Open `src/content/index.js`
2. Modify the `content` object for Hebrew (`he`) or English (`en`)
3. Save and the changes will reflect immediately

### Styling

- Global styles: `src/index.css`
- Tailwind config: `tailwind.config.js`
- Component-specific styles: Inline Tailwind classes

### Adding New Pages

1. Create a new component in `src/components/pages/`
2. Import it in `src/App.jsx`
3. Add routing logic in the `renderContent()` function

## 📱 Responsive Breakpoints

- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 🌍 RTL Support

The app automatically switches to RTL (Right-to-Left) layout when Hebrew is selected:
- Direction changes are applied to `<html>` element
- Tailwind's RTL utilities are used throughout

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload the 'dist' folder to Netlify
```

### Manual
After running `npm run build`, upload the contents of the `dist` folder to your hosting provider.

## 📄 License

All rights reserved © 2024 Easily AI

## 👥 Contact

- **Email**: info@easilyai.co.il
- **LinkedIn**: [Easily AI Solutions](https://linkedin.com/company/easily-ai-solutions/)
- **Instagram**: [@easilyaisolutions](https://www.instagram.com/easilyaisolutions/)

---

Built with ❤️ by Easily AI

