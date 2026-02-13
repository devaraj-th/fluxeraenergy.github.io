# Fluxera Energy Website - Deployment Guide

## Quick Start for Going Live

### Option 1: GitHub Pages (Free, Simple)

**Current Status:** Already configured!

1. **Enable GitHub Pages:**
   - Go to repository settings
   - Navigate to "Pages" section
   - Source: Deploy from `main` branch
   - Your site will be live at: `https://fluxeraenergy.github.io`

2. **Custom Domain (Optional):**
   - Add `CNAME` file with your domain (already done: `CNAME` file exists)
   - Configure DNS at your domain provider:
     ```
     A Record: 185.199.108.153
     A Record: 185.199.109.153
     A Record: 185.199.110.153
     A Record: 185.199.111.153
     ```
   - Or CNAME: `fluxeraenergy.github.io`

### Option 2: Netlify (Recommended for Contact Form)

**Why Netlify:** Built-in form handling, faster deploys, better performance

1. **Deploy to Netlify (5 minutes):**
   ```bash
   # If you haven't already, install Netlify CLI
   npm install -g netlify-cli
   
   # Login to Netlify
   netlify login
   
   # Deploy from your repository
   netlify init
   ```

2. **Or use Netlify UI:**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect GitHub account
   - Select `fluxeraenergy.github.io` repository
   - Click "Deploy site"
   - **Done!** Your site is live with automatic form handling

3. **View Form Submissions:**
   - Netlify Dashboard → Your site → Forms tab
   - All contact form submissions appear here
   - Set up email notifications in settings

4. **Custom Domain on Netlify:**
   - Dashboard → Domain settings → Add custom domain
   - Follow DNS configuration instructions
   - SSL certificate automatically provisioned

### Option 3: Other Hosting Providers

**Vercel, Cloudflare Pages, AWS S3, etc.**

The website is static HTML/CSS/JS, so it works on any static hosting:
- Just upload the entire folder
- Set `index.html` as the entry point
- Enable HTTPS

**Note for Forms:** You'll need to integrate a form backend service:
- Formspree: Replace form action with Formspree endpoint
- EmailJS: Add EmailJS SDK and configure
- Custom backend: Build your own API

## Post-Deployment Checklist

### Immediate Actions:
- [ ] Test all pages load correctly
- [ ] Test contact form submission
- [ ] Verify mobile responsiveness
- [ ] Check all navigation links work
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)

### Within First Week:
- [ ] Replace placeholder images with professional photos
- [ ] Set up Google Analytics or Plausible Analytics
- [ ] Create LinkedIn company page and update footer link
- [ ] Submit sitemap to Google Search Console
- [ ] Test contact form email delivery
- [ ] Set up form submission notifications

### SEO Setup:
- [ ] Submit `sitemap.xml` to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Add Google Analytics tracking code (optional)
- [ ] Verify meta descriptions on all pages
- [ ] Set up Google My Business listing

### Content Updates:
- [ ] Replace example project metrics with actual numbers (when available)
- [ ] Add real client testimonials (when available)
- [ ] Update LinkedIn company page link once created
- [ ] Add team photos/bios if desired

## Form Backend Alternatives

If NOT using Netlify, update `contact.html` form:

### Formspree (Free tier: 50 submissions/month):
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```
Get YOUR_FORM_ID from [formspree.io](https://formspree.io)

### EmailJS (Free tier: 200 emails/month):
1. Sign up at [emailjs.com](https://emailjs.com)
2. Add EmailJS SDK to contact.html
3. Configure email template
4. Update form with JavaScript integration

### Custom Backend:
Build your own API endpoint and update form action URL

## Performance Optimization

The website is already optimized, but you can further improve:

1. **Compress Images:**
   ```bash
   # Use tools like:
   - TinyPNG
   - ImageOptim
   - Squoosh (squoosh.app)
   ```

2. **Add CDN (if using custom hosting):**
   - Cloudflare (free tier)
   - AWS CloudFront
   - BunnyCDN

3. **Enable Caching:**
   - Already handled by GitHub Pages/Netlify
   - For custom hosting, add cache headers

## Monitoring & Analytics

### Recommended Tools:
- **Analytics:** Google Analytics 4 or Plausible (privacy-friendly)
- **Uptime Monitoring:** UptimeRobot (free)
- **Performance:** Google PageSpeed Insights
- **SEO:** Google Search Console

### Add Analytics (Optional):

1. **Google Analytics 4:**
   Add before closing `</head>` tag in all pages:
   ```html
   <!-- Google tag (gtag.js) -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

2. **Plausible Analytics (Privacy-friendly):**
   Add before closing `</head>` tag:
   ```html
   <script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
   ```

## Troubleshooting

### Contact Form Not Working:
- **GitHub Pages:** Forms won't work without backend. Deploy to Netlify or use Formspree
- **Netlify:** Check Forms tab in dashboard. May take a few minutes after first deploy
- **Spam:** Check spam folder for form notifications

### Images Not Loading:
- Verify image files are in the repository
- Check file names match exactly (case-sensitive)
- Use browser developer tools (F12) to check 404 errors

### Custom Domain Not Working:
- DNS propagation takes 24-48 hours
- Verify DNS records are correct
- Check CNAME file contains only the domain (no http://)
- Enable "Enforce HTTPS" in GitHub Pages settings (after DNS propagates)

## Support & Maintenance

### Regular Updates:
- Update project examples quarterly
- Add new case studies as projects complete
- Review and update standards/compliance information
- Check for broken links monthly

### Security:
- GitHub Pages/Netlify automatically handles SSL/HTTPS
- Keep dependencies updated (none currently, pure HTML/CSS/JS)
- Monitor form submissions for spam

## Next Steps

1. **Deploy immediately:** Use GitHub Pages or Netlify
2. **Test thoroughly:** All pages, forms, and links
3. **Update content:** Replace placeholders with real data
4. **Marketing:** Share on LinkedIn, industry forums
5. **SEO:** Submit to search engines, build backlinks

---

Need help? Contact technical support or refer to:
- GitHub Pages Docs: https://docs.github.com/pages
- Netlify Docs: https://docs.netlify.com
- Formspree Docs: https://help.formspree.io

**Your website is production-ready and can go live immediately!** 🚀
