# Deployment Guide

This guide will help you deploy your FinTech portfolio website online.

## Option 1: GitHub Pages (Recommended for Beginners)

### Setup:
1. Create a GitHub account at https://github.com

2. Create a new repository:
   - Click "New" ? Name it `portfolio` or `fintech-portfolio`
   - Add description
   - Make it public
   - Click "Create repository"

3. Upload your files:
   - You can drag and drop files into the GitHub web interface, or:
   - Use Git command line:
     ```bash
     cd C:\Users\aayus\portfolio-website
     git init
     git add .
     git commit -m "Initial portfolio commit"
     git branch -M main
     git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
     git push -u origin main
     ```

4. Enable GitHub Pages:
   - Go to Settings ? Pages
   - Select "Deploy from a branch"
   - Choose main branch
   - Save
   - Your site will be available at: `https://YOUR_USERNAME.github.io/portfolio`

## Option 2: Netlify (Easiest - Recommended)

### Setup:
1. Go to https://netlify.com
2. Click "Sign up" ? Connect with GitHub
3. Click "New site from Git"
4. Authorize Netlify to access your GitHub
5. Select your portfolio repository
6. Click "Deploy site"
7. Your site will be live in seconds!
8. You can set a custom domain under Site Settings ? Domain Management

### Benefits:
- Automatic deployments on every GitHub push
- Free SSL certificate
- Automatic previews for pull requests
- Easy to add custom domain

## Option 3: Vercel (Modern Alternative)

### Setup:
1. Go to https://vercel.com
2. Click "Sign Up" ? Continue with GitHub
3. Import your repository
4. Click "Deploy"
5. Access at: `https://YOUR_PROJECT.vercel.app`

## Option 4: Traditional Web Hosting

### Setup:
1. Purchase hosting from:
   - Hostinger
   - Bluehost
   - NameCheap
   - GoDaddy
   - etc.

2. Access File Manager or FTP
3. Upload all files:
   - index.html
   - styles.css
   - script.js
   - README.md

4. Access via your domain name

## Option 5: Local Testing Server

### Using Python (Built-in):
```bash
# Python 3
cd C:\Users\aayus\portfolio-website
python -m http.server 8000

# Then open: http://localhost:8000
```

### Using Node.js:
```bash
npm install -g http-server
cd C:\Users\aayus\portfolio-website
http-server

# Then open: http://localhost:8080
```

### Using VS Code Live Server Extension:
1. Install "Live Server" extension in VS Code
2. Right-click index.html
3. Select "Open with Live Server"

## Post-Deployment

### 1. Update Contact Information
- Email: Update `your.email@example.com`
- Phone: Update phone number
- Social links: Add your LinkedIn, GitHub, Twitter

### 2. Add Project Links
- Update project card links to point to:
  - GitHub repositories
  - Live demos
  - Documentation

### 3. SEO Optimization
Add to index.html `<head>`:
```html
<meta name="keywords" content="FinTech, Trading, Portfolio, Student">
<meta name="author" content="Your Name">
<meta property="og:title" content="FinTech Portfolio">
<meta property="og:description" content="Master of FinTech and Trading Student">
<meta property="og:url" content="https://your-portfolio-url.com">
```

### 4. Add Google Analytics
```html
<!-- Add before closing </head> tag -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

## Custom Domain Setup

### Using GitHub Pages:
1. Buy domain from GoDaddy, Namecheap, etc.
2. Go to Settings ? Pages
3. Add custom domain
4. Follow DNS configuration instructions

### Using Netlify:
1. Buy domain or connect existing domain
2. Go to Site Settings ? Domain Management
3. Add custom domain
4. Update DNS records
5. Done! (Usually takes 1-2 hours)

## Making Updates

After deployment, to update your site:

1. Edit files locally
2. Push to GitHub:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push
   ```
3. Your changes will automatically deploy to Netlify/Vercel

## Troubleshooting Deployment

### Files not showing up:
- Check file names are lowercase
- Verify file paths in HTML are correct
- Clear browser cache

### Styles not loading:
- Check CSS file path in HTML
- Verify styles.css is in same directory as index.html

### JavaScript not working:
- Check script.js path in HTML
- Open browser developer tools (F12) for errors
- Check browser console for JavaScript errors

### Custom domain not working:
- DNS changes can take 24-48 hours
- Verify DNS records are correct
- Check with your domain provider

## Performance Optimization

### Compress Images (if added):
- Use tools like TinyPNG or ImageOptim
- Keep image sizes under 500KB

### Minify CSS/JS (optional):
- Use tools like minifier.org
- Reduces file sizes slightly

### CDN for icons:
- Font Awesome is already loaded from CDN
- This improves loading speed

## Security Checklist

- ? Use HTTPS (GitHub Pages, Netlify provide this free)
- ? Don't commit sensitive information
- ? Keep contact info current
- ? Validate form inputs (already done)
- ? Regular backups (GitHub = automatic)

## Share Your Portfolio

Once deployed, share your link:
- LinkedIn
- Resume/CV
- Email signature
- GitHub profile
- Professional network

Example:
> "Check out my FinTech portfolio: https://your-portfolio.com"

---

Need help? Check the main README.md file or visit the respective platform's documentation.
