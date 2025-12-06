# Development Guide

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Initial Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open in browser**:
   Navigate to `http://localhost:5173`

## Development Workflow

### File Structure Overview

```
src/
├── components/
│   ├── layout/         # Persistent layout components
│   ├── pages/          # Page-specific components
│   └── ui/             # Reusable UI components
├── content/            # All text content (bilingual)
├── App.jsx             # Main application logic
├── main.jsx            # React entry point
└── index.css           # Global styles
```

### Adding New Content

#### To add a new service:

1. Open `src/content/index.js`
2. Add to `services.items` array in both `he` and `en`:

```javascript
{
  id: "new-service",
  title: "Service Name",
  short_desc: "Brief description",
  icon: "IconName", // Must exist in IconMap
  full_content: {
    headline: "Detailed headline",
    pain_point: "Problem description",
    solution: "Solution description",
    benefits: ["Benefit 1", "Benefit 2"]
  }
}
```

#### To add a new blog post:

1. Open `src/content/index.js`
2. Add to `blog.items` array in both `he` and `en`:

```javascript
{
  id: "post-slug",
  title: "Post Title",
  excerpt: "Short excerpt",
  category: "Category",
  date: "Month Year",
  content: [
    "Paragraph 1",
    "Paragraph 2"
  ]
}
```

### Styling Guidelines

#### Brand Colors

Always use Tailwind CSS custom colors:
- `bg-[#172736]` or `bg-ez-dark` - Dark backgrounds
- `bg-[#817DFF]` or `bg-ez-purple` - Accent color
- `bg-[#FAFAFA]` or `bg-ez-light` - Light backgrounds

#### Typography

- Headlines: Use `font-display` class
- Code/Technical: Use `font-mono` class
- Body text: Default font (changes based on language)

#### Responsive Design

Use Tailwind breakpoints:
- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px
- `xl:` - 1280px

### Adding New Icons

1. Import from `lucide-react` in `src/components/ui/IconMap.jsx`
2. Add to the `icons` object:

```javascript
import { NewIcon } from 'lucide-react';

const icons = {
  // ...existing icons
  NewIcon: <NewIcon className={className} />
};
```

### Adding New Pages

1. Create component in `src/components/pages/`:

```javascript
// src/components/pages/NewPage.jsx
import React from 'react';

export const NewPage = ({ t, setPage }) => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <h1>{t.newPage.title}</h1>
      {/* Your content */}
    </div>
  </section>
);
```

2. Add content to `src/content/index.js`:

```javascript
newPage: {
  title: "Page Title"
}
```

3. Import and add to routing in `src/App.jsx`:

```javascript
import { NewPage } from './components/pages/NewPage';

// In renderContent():
case 'newpage':
  return <div className="pt-24"><NewPage t={t} setPage={setCurrentPage} /></div>;
```

4. Add to navigation in content dictionary and Header component

## Common Tasks

### Change Language Defaults

In `src/App.jsx`, modify:
```javascript
const [lang, setLang] = useState('he'); // Change 'he' to 'en'
```

### Update Brand Colors

1. Edit `tailwind.config.js`:
```javascript
extend: {
  colors: {
    'ez-dark': '#YOUR_COLOR',
    'ez-purple': '#YOUR_COLOR',
    'ez-light': '#YOUR_COLOR',
  },
}
```

2. Update the comment in `src/content/index.js`

### Add Google Analytics

1. Install package:
```bash
npm install react-ga4
```

2. Initialize in `src/main.jsx`:
```javascript
import ReactGA from 'react-ga4';
ReactGA.initialize('YOUR_TRACKING_ID');
```

### Connect Contact Form to Backend

Replace the dummy `handleSubmit` in `src/components/pages/Contact.jsx`:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setFormState('submitting');
  
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    
    if (response.ok) {
      setFormState('success');
    } else {
      setFormState('error');
    }
  } catch (error) {
    setFormState('error');
  }
};
```

## Testing

### Manual Testing Checklist

- [ ] Test all pages in both languages (Hebrew/English)
- [ ] Verify RTL layout works correctly in Hebrew
- [ ] Test mobile responsiveness (< 768px)
- [ ] Test tablet view (768px - 1024px)
- [ ] Check all navigation links
- [ ] Test service detail pages
- [ ] Test blog post detail pages
- [ ] Verify contact form (dummy submission)
- [ ] Check all external links open in new tab
- [ ] Test language switcher
- [ ] Verify smooth scrolling

### Browser Testing

Test in:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

## Building for Production

### Create Production Build

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

### Performance Optimization

- All images should be optimized (use WebP format)
- Enable lazy loading for images
- Consider code splitting for large components
- Enable Gzip compression on server

## Deployment

### Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Netlify

1. Build:
```bash
npm run build
```

2. Deploy `dist/` folder via Netlify dashboard or CLI

### Custom Server

1. Build the project
2. Upload `dist/` contents to your web server
3. Configure server to serve `index.html` for all routes (SPA)

### Environment Variables

For production, set environment variables in your hosting platform:
- Vercel: Project Settings → Environment Variables
- Netlify: Site Settings → Build & Deploy → Environment

## Troubleshooting

### Port Already in Use

Change port in `vite.config.js`:
```javascript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000 // Change to any available port
  }
})
```

### Tailwind Classes Not Working

1. Ensure file is in Tailwind content paths
2. Restart dev server
3. Check for typos in class names

### RTL Issues

- Verify `dir="rtl"` is set on `<html>` tag
- Use Tailwind RTL utilities: `rtl:text-right`
- Some flex/grid properties need specific RTL handling

### Build Errors

1. Clear cache:
```bash
rm -rf node_modules dist
npm install
npm run build
```

2. Check for:
   - Missing imports
   - Typos in file names
   - Incorrect file paths

## Best Practices

1. **Component Organization**: Keep components small and focused
2. **Content Separation**: Always update both `he` and `en` content
3. **Accessibility**: Use semantic HTML and ARIA labels
4. **Performance**: Lazy load images and heavy components
5. **Git Commits**: Make atomic commits with clear messages
6. **Code Style**: Run `npm run lint` before committing

## Useful Commands

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint

# Clear cache and reinstall
rm -rf node_modules package-lock.json && npm install
```

## Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)

## Support

For questions or issues:
- Create an issue in the repository
- Contact: info@easilyai.co.il

