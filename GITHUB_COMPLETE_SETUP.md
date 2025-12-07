# ?? GITHUB SETUP - COMPLETE GUIDE & EXECUTION

## ? What You'll Get
- GitHub account with your portfolio repository
- All files backed up on GitHub
- GitHub Pages deployed (live website)
- Version control for future changes
- Easy updates via Git

## Step 1: Create GitHub Account (If You Don't Have One)

### Go to GitHub
1. Open browser and go to: **https://github.com**
2. Click **"Sign up"**
3. Enter email address
4. Create password
5. Choose username (will be in your portfolio URL)
6. Verify email

**Save your GitHub username** - you'll need it!

---

## Step 2: Create GitHub Personal Access Token

This allows secure access from Command Prompt.

### Generate Token
1. Go to: **https://github.com/settings/tokens/new**
2. Give it a name: **"Portfolio Deployment"**
3. Set expiration: **30 days** or **90 days**
4. Select scopes (checkboxes):
   - ? `repo` (full control of repositories)
   - ? `workflow` (update GitHub Action workflows)
5. Click **"Generate token"**
6. **COPY THE TOKEN** (you won't see it again!)
7. Save it somewhere safe (Notepad file)

**You'll need this token for the next steps!**

---

## Step 3: Create GitHub Repository

### Web Interface Method (Easiest)
1. Go to: **https://github.com/new**
2. Fill in details:
   - **Repository name:** `portfolio` (or `fintech-portfolio`)
   - **Description:** "My FinTech and Trading Portfolio"
   - **Visibility:** Select **"Public"**
   - **Initialize repository:** Leave unchecked (we'll push existing code)
3. Click **"Create repository"**

**Copy the repository URL** (should be: `https://github.com/YOUR_USERNAME/portfolio.git`)

---

## Step 4: Setup Git on Your Computer

### Check if Git is Installed
1. Open **Command Prompt**:
   - Press Windows Key + R
   - Type: `cmd`
   - Press Enter

2. Type and run:
   ```bash
   git --version
   ```

3. If Git is installed, you'll see a version number

### If Git is NOT Installed
1. Download from: **https://git-scm.com/download/win**
2. Run the installer
3. Use default settings
4. Restart Command Prompt

---

## Step 5: Configure Git (First Time Only)

In Command Prompt, run these commands:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

Replace with your actual name and email.

---

## Step 6: Initialize & Push to GitHub

### Navigate to Portfolio Folder
```bash
cd C:\Users\aayus\portfolio-website
```

### Initialize Git Repository
```bash
git init
```

### Add All Files
```bash
git add .
```

### Create Initial Commit
```bash
git commit -m "Initial portfolio upload - all files"
```

### Create Main Branch
```bash
git branch -M main
```

### Add Remote Repository
```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
```
**Replace YOUR_USERNAME with your GitHub username!**

### Push to GitHub
```bash
git push -u origin main
```

When prompted:
- **Username:** Your GitHub username
- **Password:** Paste your Personal Access Token (not your GitHub password!)

**Wait for upload to complete!**

---

## Step 7: Enable GitHub Pages

### On GitHub Website
1. Go to your repository: `https://github.com/YOUR_USERNAME/portfolio`
2. Click **Settings** (gear icon, top right)
3. Left sidebar ? Click **"Pages"**
4. Under "Source":
   - Branch: Select **main**
   - Folder: Select **/ (root)**
5. Click **Save**

**Your portfolio is now live!** 

Your site will be available at:
```
https://YOUR_USERNAME.github.io/portfolio
```

Wait 1-2 minutes for GitHub to build and deploy.

---

## Step 8: Verify Your Live Site

1. Go to: `https://YOUR_USERNAME.github.io/portfolio`
2. You should see your portfolio website
3. Click around to test all features
4. Open admin.html to test admin dashboard

---

## Helpful Commands for Future Updates

### After Making Changes Locally:

```bash
# Check what changed
git status

# Add all changes
git add .

# Commit with message
git commit -m "Update portfolio content"

# Push to GitHub (auto-deploys!)
git push
```

---

## Common Issues & Solutions

### "fatal: not a git repository"
```bash
# Navigate to correct folder
cd C:\Users\aayus\portfolio-website
```

### "fatal: remote origin already exists"
```bash
# Remove old remote
git remote remove origin

# Add correct remote
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
```

### "Please tell me who you are"
```bash
# Configure Git first
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Token Authentication Failed
1. Make sure you're using Personal Access Token (not password)
2. Token must have `repo` scope enabled
3. Try generating a new token

### Site Not Live Yet
- Wait 2-3 minutes for GitHub to build
- Refresh your browser
- Clear cache: Ctrl+Shift+Del
- Check repository Settings ? Pages again

---

## Your GitHub URLs

After setup, you'll have:

```
Repository:
https://github.com/YOUR_USERNAME/portfolio

Live Portfolio:
https://YOUR_USERNAME.github.io/portfolio

Admin Dashboard:
https://YOUR_USERNAME.github.io/portfolio/admin.html

Clone Command (for others):
git clone https://github.com/YOUR_USERNAME/portfolio.git
```

---

## Next Steps

1. ? GitHub account created
2. ? Repository created
3. ? Files pushed to GitHub
4. ? GitHub Pages enabled
5. ? Portfolio is LIVE!

Now:
- [ ] Add content in admin dashboard
- [ ] Keep making commits as you update
- [ ] Share your portfolio link!

---

## Share Your Portfolio

Tell people about your live portfolio:

**Email:**
> Check out my FinTech portfolio: https://YOUR_USERNAME.github.io/portfolio

**LinkedIn:**
> Portfolio: https://YOUR_USERNAME.github.io/portfolio

**Resume:**
> Portfolio: https://YOUR_USERNAME.github.io/portfolio

---

## Keep Your Backup Safe

After pushing to GitHub:
- Your files are backed up
- You can restore anytime by cloning
- You have version history
- You can deploy updates easily

**You're all set! Your portfolio is now live on GitHub! ??**
