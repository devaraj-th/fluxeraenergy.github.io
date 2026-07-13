# Fluxera Website

AI-first engineering website for Fluxera with Energy business continuity and Innovation Studio expansion.

## Overview

Fluxera is positioned as an Engineering, Artificial Intelligence and Innovation company.

Mission: Engineering Intelligent Infrastructure for the Future.

Tagline: Learn Less. Build More. Deliver Value.

## Website Structure

### Primary Pages
- **Home** (`index.html`) - AI-first homepage with Energy continuity and Beyond Energy section
- **Innovation Studio** (`innovation/index.html`) - Main studio page with fellowships, challenge banner, projects, and timeline
- **Legacy Studio URL** (`innovation-studio.html`) - Redirects to `/innovation/`
- **Solutions** (`solutions.html`) - Energy + AI solution index
- **AI Products** (`ai-products.html`) - Product roadmap and statuses
- **Resources** (`resources.html`) - Blogs, research, papers, GitHub, YouTube, podcasts
- **Careers** (`careers.html`) - Founding Intern, Builder Fellowship, Mentor, Partnerships
- **Energy Pages (unchanged core)** (`intelligence.html`, `compliance.html`, `infrastructure.html`, `industries.html`)
- **About / Contact** (`about.html`, `contact.html`)

### Shared Config
- `config.js` stores configurable values (Google Form URL and contact information).
- `script.js` handles nav behavior, smooth scrolling, reveal animations, counters, and form link injection.

## Key Features

✅ **Enterprise-Grade Design** - Clean, professional aesthetic similar to Siemens Energy  
✅ **Mobile Responsive** - Fully responsive across all devices  
✅ **SEO Optimized** - Proper meta tags, semantic HTML, sitemap.xml  
✅ **AI-first Positioning + Energy Continuity**  
✅ **Innovation Studio at `/innovation/`**  
✅ **Configurable Google Form URL from one place (`config.js`)**  
✅ **Animated counters, smooth scrolling, and reveal effects**  
✅ **Responsive premium cards and project status system**  

## Deployment

### GitHub Pages (Current Setup)
The website is configured to deploy via GitHub Pages at `https://fluxeraenergy.github.io`

### Configuration Updates

Update all Google Form redirects in one place:

```js
// config.js
window.FLUXERA_CONFIG = {
  googleFormUrl: "<your-google-form-url>"
};
```

### Contact Information

- Location: Tumakuru, Karnataka, India
- Website: https://fluxeraenergy.com
- Email: fluxeraenergy@gmail.com
- Phone: +91 8088372814

## Assets

Images used in the website:
- `fluxera.jpeg` - Company logo
- `ess.jpeg` - Energy storage systems imagery
- `battery_ai.jpeg` - Battery intelligence imagery
- `test.jpeg` - Additional imagery

**Recommendation:** Replace with high-quality, professional infrastructure photography showing:
- Actual BESS installations
- Testing facilities
- Industrial infrastructure
- Safety systems in operation

## Standards & Compliance Referenced

- IEC 62619 (Lithium-ion cells and batteries)
- UL 9540 (Energy Storage Systems)
- UL 1973 (Stationary Batteries)
- IEC 62933 (Energy Storage Systems)
- NFPA 855 (Energy Storage Systems Installation)

## LinkedIn Integration

Footer includes LinkedIn link: `https://linkedin.com/company/fluxera-energy`

Update this URL once the LinkedIn company page is live.

## Future Enhancements

- Add dedicated blog detail templates with RSS feed
- Add JSON-LD structured data for Organization and WebSite entities
- Add case study pages with filters by domain and status
- Add lightweight analytics dashboard

## Technical Stack

- HTML5
- CSS3 (Custom, no frameworks)
- Vanilla JavaScript (minimal, for mobile menu)
- GitHub Pages hosting
- Central config-based external form routing

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Company Information

**Fluxera**  
Tumakuru, Karnataka, India  
Founded: 2026

---

© 2026 Fluxera. All rights reserved.
