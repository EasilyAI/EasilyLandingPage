# Quick Start Guide

Get your Easily AI landing page running in 3 simple steps!

## Step 1: Install Dependencies

```bash
npm install
```

This will install all required packages including React, Vite, Tailwind CSS, and Lucide icons.

## Step 2: Start Development Server

```bash
npm run dev
```

Your site will be available at: **http://localhost:5173**

## Step 3: Start Customizing!

### Change Content

All content is in one place: `src/content/index.js`

```javascript
// Example: Update hero title
hero: {
  title: "Your New Title Here",
  subtitle: "Your new subtitle..."
}
```

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  'ez-dark': '#YOUR_DARK_COLOR',
  'ez-purple': '#YOUR_ACCENT_COLOR',
  'ez-light': '#YOUR_LIGHT_COLOR',
}
```

### Add Your Logo

Replace the Logo component in `src/components/ui/Logo.jsx` or add an image to the public folder.

## Common Tasks

### Switch Default Language

In `src/App.jsx`:
```javascript
const [lang, setLang] = useState('en'); // 'he' for Hebrew
```

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder, ready to deploy!

## Need Help?

- **Full documentation**: See `DEVELOPMENT.md`
- **Project structure**: See `README.md`
- **Contact**: info@easilyai.co.il

---

That's it! You're ready to go! 🚀

