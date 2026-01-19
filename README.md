# Ashish Bardhan Portfolio

A modern, high-performance portfolio website built with Astro, showcasing frontend engineering expertise and creative projects.

**Live Site**: [ashbardhan.github.io](https://ashbardhan.github.io)

## Features

- Lightning-fast performance with Astro's static site generation
- Responsive design optimized for all devices
- SEO optimized with meta tags, Open Graph, JSON-LD, and sitemap
- Fully accessible (a11y) with keyboard navigation and ARIA labels
- Modal-based UI for project and career details
- Contact form with validation

## Tech Stack

- **Framework**: Astro 4.16+
- **Language**: TypeScript (Strict mode)
- **Styling**: CSS Custom Properties
- **Deployment**: GitHub Pages with GitHub Actions

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# Visit http://localhost:4321

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```text
/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Auto-deployment configuration
├── public/                     # Static assets
│   ├── assets/
│   │   ├── css/
│   │   └── images/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/             # Reusable Astro components
│   │   ├── Header.astro        # Navigation header
│   │   ├── Hero.astro          # Hero section with profile and CTAs
│   │   ├── About.astro         # About Me section
│   │   ├── Career.astro        # Employment timeline with modals
│   │   ├── Projects.astro      # Project showcase with modals
│   │   └── Contact.astro       # Contact form
│   ├── data/
│   │   └── portfolio.ts        # Content configuration (EDIT THIS)
│   ├── layouts/
│   │   └── BaseLayout.astro    # Base layout with SEO
│   ├── pages/
│   │   └── index.astro         # Main page
│   ├── styles/
│   │   └── global.css          # Global styles
│   └── utils/
│       └── animations.ts       # Animation utilities
├── astro.config.mjs            # Astro configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies and scripts
```

## Component Overview

### Header

- Fixed position with auto-hide on scroll down, show on scroll up
- Navigation with smooth scrolling and active section highlighting
- Responsive mobile hamburger menu
- Keyboard accessible

### Hero Section

- Profile image with fade-in animations
- Name, tagline, and social media links
- Scroll indicator
- Fully responsive layout

### About Section

- Bio content with reveal-on-scroll animations
- External profile links
- Responsive typography

### Career Section

- Timeline layout with visual markers
- Job cards displaying role, company, duration, and location
- "View Contributions" buttons that open modals
- Modal displays detailed contributions and tech stack
- Easily expandable for additional jobs

### Projects Section

- Responsive grid layout
- Project cards with image overlays on hover
- "View Details" buttons that open modals
- Modal shows role, tech stack, achievements, and links
- Support for GitHub and live demo links
- Featured project flag

### Contact Section

- Contact information display
- Form with validation (name, email, subject, message)
- Mailto functionality (works on static sites)

## Deployment

### Automatic Deployment (GitHub Pages)

The repository includes GitHub Actions workflow for automatic deployment:

1. **Initial Setup**
   - Go to GitHub repository Settings > Pages
   - Under "Source", select "GitHub Actions"

2. **Deploy**

   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin master
   ```

The site will automatically build and deploy to `https://ashbardhan.github.io`

### Manual Build

```bash
# Build the site
npm run build

# Output will be in dist/ folder
# Upload contents to your hosting provider
```

## Testing Checklist

Before deploying, verify:

- [ ] All navigation links work correctly
- [ ] Project modals open and display correctly
- [ ] Career modals open and display correctly
- [ ] Contact form validates and submits
- [ ] Responsive design works on mobile (resize browser)
- [ ] Keyboard navigation works (Tab, Enter, Escape keys)
- [ ] All images load properly
- [ ] Build completes without errors (`npm run build`)

## Performance Features

### Implemented

- Minimal JavaScript bundle (approximately 10KB gzipped)
- Static HTML generation for instant page loads
- CSS Custom Properties (no runtime overhead)
- Lazy loading for images
- Semantic HTML5 elements
- Optimized font loading
- Reduced motion support for accessibility

### Recommended Optimizations

- Convert images to WebP or AVIF format
- Implement Service Worker for PWA capabilities
- Add preload hints for critical resources
- Configure CDN for asset delivery

## SEO Features

- Comprehensive meta tags (title, description, author)
- Open Graph tags for social media sharing (Facebook, LinkedIn)
- Twitter Card tags for Twitter sharing
- JSON-LD structured data (Person schema)
- Automatically generated sitemap (sitemap-index.xml)
- robots.txt for search engine crawling
- Canonical URLs
- Semantic HTML5 structure

## Accessibility Features

- Skip to main content link
- Keyboard navigation support (Tab, Enter, Escape)
- Focus-visible styles for keyboard users
- ARIA labels and roles
- Screen reader compatible
- Semantic HTML5 elements
- Reduced motion support (prefers-reduced-motion)
- Sufficient color contrast ratios
- Form labels and validation messages

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

- **Advanced Animations**: Integrate GSAP for smooth scroll-based animations, parallax effects, and micro-interactions
  - Hero section fade-in and slide animations
  - Scroll-triggered section reveals with ScrollTrigger
  - Project card hover effects and stagger animations
  - Smooth page transitions
- **Blog Section**: Add a blog powered by Astro Content Collections for sharing technical articles and insights
- **Theme Switcher**: Implement dark/light mode toggle with system preference detection
- **Analytics**: Add privacy-friendly analytics (e.g., Plausible or Fathom)
- **RSS Feed**: Auto-generate RSS feed for blog content
- **Search Functionality**: Client-side search for projects and blog posts

## License

ISC

## Author

**Ashish Bardhan** - Frontend Engineer | UI/UX Specialist

- Website: [ashbardhan.github.io](https://ashbardhan.github.io)
- LinkedIn: [@ashbardhan](https://www.linkedin.com/in/ashbardhan/)
- GitHub: [@AshBardhan](https://github.com/AshBardhan)
- Twitter: [@CreativeBakchod](https://x.com/CreativeBakchod)
- CodePen: [@AshBardhan](https://codepen.io/AshBardhan)
