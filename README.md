# FinTech Portfolio Website

A modern, professional portfolio website for a Master of FinTech and Trading student at University of Sunderland London.

## Features

? **Modern Design**
- Responsive and mobile-friendly layout
- Smooth scrolling and animations
- Professional color scheme optimized for fintech

?? **Key Sections**
- **Hero Section**: Eye-catching introduction
- **About**: Personal overview and interests
- **Education**: Timeline of academic achievements
- **Projects**: Showcase of fintech and trading projects
- **Skills**: Technical proficiency visualization
- **Contact**: Easy way to get in touch

?? **Functionality**
- Sticky navigation with smooth scrolling
- Mobile hamburger menu
- Contact form with validation
- Intersection Observer animations
- Skill bars animation on scroll
- Social media links integration

## Files

```
portfolio-website/
??? index.html      # Main HTML structure
??? styles.css      # Complete styling and responsive design
??? script.js       # Interactivity and animations
??? README.md       # This file
```

## How to Use

### 1. **Open in Browser**
   - Simply open `index.html` in your web browser
   - No server or installation required for basic viewing

### 2. **Customize Content**

   **Edit Personal Information:**
   - Open `index.html` and search for placeholder text like:
     - `your.email@example.com` ? Replace with your email
     - `+44123456789` ? Replace with your phone
     - Social media links in the contact section

   **Update About Section:**
   - Modify the about text in the `<section id="about">` to match your story

   **Add Your Projects:**
   - Edit or duplicate project cards in `<section id="projects">`
   - Update project titles, descriptions, technologies, and links

   **Update Education:**
   - Modify the education timeline in `<section id="education">`
   - Add bachelor's degree details and other qualifications

   **Adjust Skills:**
   - Edit skill categories and percentages in `<section id="skills">`
   - Modify the width values (0-100%) in the style attribute of skill-progress divs

### 3. **Deploy Online**

   **GitHub Pages (Free):**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```
   Then enable GitHub Pages in repository settings.

   **Netlify (Recommended - Easiest):**
   - Connect your GitHub repository
   - Netlify automatically deploys on every push
   - https://netlify.com

   **Vercel:**
   - Connect GitHub repository
   - Automatic deployments
   - https://vercel.com

   **Traditional Web Host:**
   - FTP all files to your web server
   - Access via your domain

## Customization Tips

### Colors
Edit the CSS variables at the top of `styles.css`:
```css
:root {
    --primary-color: #1a73e8;      /* Main blue */
    --secondary-color: #34a853;    /* Green accent */
    --accent-color: #fbbc04;       /* Yellow accent */
    --dark-color: #1f1f1f;         /* Dark text */
    --light-color: #f5f5f5;        /* Light background */
}
```

### Fonts
The website uses 'Segoe UI' and system fonts. To change:
1. Open `styles.css`
2. Find `font-family` property
3. Replace with your preferred font (e.g., 'Poppins', 'Inter', 'Roboto')

### Sections
To add new sections:
1. Add HTML in `index.html`
2. Add CSS styling in `styles.css`
3. Add navigation link in the navbar

### Contact Form
Currently shows success messages locally. To make it functional:
- Use a backend service like FormSubmit, Netlify Forms, or EmailJS
- Example with Netlify:
  ```html
  <form name="contact" method="POST" netlify>
    <!-- form content -->
  </form>
  ```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized CSS with minimal dependencies
- No heavy JavaScript frameworks
- Fast loading times
- Mobile-first responsive design
- Uses Font Awesome CDN for icons

## Icons

This portfolio uses Font Awesome icons. The library is loaded from CDN. If you want to change icons:
1. Find the icon code in HTML (e.g., `<i class="fas fa-bitcoin"></i>`)
2. Visit https://fontawesome.com/icons
3. Replace with your desired icon class

## SEO Optimization

The portfolio includes meta tags for:
- Description
- Viewport settings
- Open Graph support

To improve SEO further:
1. Add more specific meta descriptions
2. Use semantic HTML5 tags
3. Add JSON-LD structured data
4. Optimize images with alt text

## JavaScript Features

- **Navigation**: Active link highlighting on scroll
- **Mobile Menu**: Hamburger menu for responsive design
- **Form Validation**: Email validation and error handling
- **Animations**: Scroll-triggered animations for elements
- **Intersection Observer**: Efficient scroll animations
- **Notifications**: Toast notifications for form submission

## Troubleshooting

**Navigation not updating?**
- Check that section IDs match href values in nav links

**Form not submitting?**
- Form is set up for local validation only
- Implement backend service for actual email sending

**Images not showing?**
- Icon CDN might be blocked - use fallback or download FontAwesome locally

**Styles not applying?**
- Clear browser cache (Ctrl+Shift+Del or Cmd+Shift+Del)
- Check that styles.css is in the same directory

## Future Enhancements

Consider adding:
- Blog section for articles
- Certificate showcases
- Interactive charts for financial data
- Dark mode toggle
- Multi-language support
- CMS integration (Headless CMS)
- Analytics tracking (Google Analytics)
- Email integration for contact form

## License

This portfolio template is open for personal use. Feel free to modify and customize it as needed.

## Support

For issues or questions:
1. Check the troubleshooting section
2. Review the HTML/CSS comments
3. Test in different browsers
4. Check browser console for errors (F12)

---

**Good luck with your FinTech studies at University of Sunderland London!** ??
