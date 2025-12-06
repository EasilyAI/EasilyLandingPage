# Project Structure

```
EasilyLandingPage/
│
├── 📁 public/
│   └── vite.svg                    # Vite logo (placeholder for favicon)
│
├── 📁 src/
│   ├── 📁 components/
│   │   ├── 📁 layout/
│   │   │   ├── Header.jsx          # Main navigation header
│   │   │   └── Footer.jsx          # Site footer with links
│   │   │
│   │   ├── 📁 pages/
│   │   │   ├── Hero.jsx            # Landing page hero section
│   │   │   ├── Services.jsx        # Services overview grid
│   │   │   ├── ServiceDetail.jsx   # Individual service detail view
│   │   │   ├── About.jsx           # About page with mission & values
│   │   │   ├── Blog.jsx            # Blog posts grid
│   │   │   ├── BlogDetail.jsx      # Individual blog post view
│   │   │   └── Contact.jsx         # Contact form & details
│   │   │
│   │   └── 📁 ui/
│   │       ├── Logo.jsx            # Easily AI logo component
│   │       ├── IconMap.jsx         # Icon mapping utility
│   │       └── VisualPlaceholder.jsx # Abstract visual graphics
│   │
│   ├── 📁 content/
│   │   └── index.js                # ALL CONTENT (Hebrew + English)
│   │
│   ├── App.jsx                     # Main application logic & routing
│   ├── main.jsx                    # React entry point
│   └── index.css                   # Global styles & fonts
│
├── 📄 Configuration Files
├── index.html                      # HTML entry point
├── package.json                    # Dependencies & scripts
├── vite.config.js                  # Vite configuration
├── tailwind.config.js              # Tailwind CSS configuration
├── postcss.config.js               # PostCSS configuration
├── .eslintrc.cjs                   # ESLint rules
└── .gitignore                      # Git ignore patterns
│
├── 📚 Documentation
├── README.md                       # Main project documentation
├── QUICKSTART.md                   # Quick start guide (3 steps!)
├── DEVELOPMENT.md                  # Comprehensive dev guide
└── PROJECT_STRUCTURE.md            # This file
```

## File Purposes

### Core Application Files

| File | Purpose |
|------|---------|
| `src/App.jsx` | Main app logic, routing, state management |
| `src/main.jsx` | React DOM rendering entry point |
| `src/index.css` | Global styles, font imports, custom animations |
| `src/content/index.js` | **All bilingual content** (single source of truth) |

### Layout Components

| Component | Description |
|-----------|-------------|
| `Header.jsx` | Navigation bar, language switcher, mobile menu |
| `Footer.jsx` | Footer with links, social media, contact info |

### Page Components

| Component | Description |
|-----------|-------------|
| `Hero.jsx` | Landing page hero with CTA buttons |
| `Services.jsx` | Grid of 6 AI service offerings |
| `ServiceDetail.jsx` | Detailed view of single service |
| `About.jsx` | Company mission, founder story, values |
| `Blog.jsx` | Blog posts grid (6 articles) |
| `BlogDetail.jsx` | Full blog post reading view |
| `Contact.jsx` | Contact form with social links |

### UI Components

| Component | Description |
|-----------|-------------|
| `Logo.jsx` | EASILY AI logo/wordmark |
| `IconMap.jsx` | Maps icon names to Lucide components |
| `VisualPlaceholder.jsx` | Abstract geometric visuals |

## Content Structure

All content in `src/content/index.js`:

```javascript
{
  he: { /* Hebrew content */ },
  en: { /* English content */ }
}
```

Each language has:
- `nav` - Navigation labels
- `hero` - Hero section text
- `services` - 6 services with full details
- `about` - About page content
- `blog` - 6 blog posts with full articles
- `contact` - Contact page text

## Styling System

### Tailwind CSS Classes
- Custom colors: `ez-dark`, `ez-purple`, `ez-light`
- Font classes: `font-display`, `font-mono`
- Language-specific: `font-hebrew`, `font-english`
- RTL support: `rtl:*` utilities

### Google Fonts Used
1. **Heebo** - Hebrew display font
2. **Noto Sans Hebrew** - Hebrew body text
3. **Montserrat** - English font
4. **Space Mono** - Monospace for both

## Data Flow

```
User Action
    ↓
App.jsx (State Management)
    ↓
Content Dictionary (src/content/index.js)
    ↓
Page Components
    ↓
UI Components
    ↓
Rendered Output
```

## Key Features

✅ Fully bilingual (Hebrew/English with RTL support)
✅ Responsive design (mobile-first)
✅ Component-based architecture
✅ Single source of truth for content
✅ Modern tech stack (React 18 + Vite + Tailwind)
✅ Fast development & production builds
✅ Clean, maintainable code structure
✅ Comprehensive documentation

## Development Workflow

1. **Content changes** → Edit `src/content/index.js`
2. **Styling changes** → Use Tailwind classes or edit `tailwind.config.js`
3. **New features** → Add component in appropriate folder
4. **Build** → `npm run build`
5. **Deploy** → Upload `dist/` folder

## Tech Stack Summary

| Technology | Purpose |
|------------|---------|
| React 18 | UI library |
| Vite | Build tool & dev server |
| Tailwind CSS | Styling framework |
| Lucide React | Icon library |
| PostCSS | CSS processing |
| ESLint | Code linting |

## Next Steps

1. **Customize content** in `src/content/index.js`
2. **Update brand colors** in `tailwind.config.js`
3. **Add real images** (replace VisualPlaceholder)
4. **Connect contact form** to backend API
5. **Deploy** to Vercel/Netlify

---

For detailed instructions, see:
- Quick setup: `QUICKSTART.md`
- Full guide: `DEVELOPMENT.md`
- Overview: `README.md`

