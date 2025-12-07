# GitHub Deployment Quick Setup

This file contains quick setup instructions for deploying to GitHub using command line.

## One-Time Setup

### 1. Install Git
- **Windows**: Download from https://git-scm.com/download/win
- **Mac**: `brew install git`
- **Linux**: `sudo apt-get install git`

### 2. Configure Git
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Deployment Steps

### First Time Deployment

```bash
# Navigate to portfolio folder
cd C:\Users\aayus\portfolio-website

# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial portfolio upload"

# Create GitHub repository at: https://github.com/new
# Then run (replace YOUR_USERNAME and REPO_NAME):
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

### Update Deployment (After Making Changes)

```bash
# Navigate to folder
cd C:\Users\aayus\portfolio-website

# Check what changed
git status

# Add changes
git add .

# Commit changes
git commit -m "Update portfolio content"

# Push to GitHub
git push
```

## GitHub Pages Setup

After pushing to GitHub:

1. Go to your repository: `https://github.com/YOUR_USERNAME/REPO_NAME`
2. Click **Settings** (gear icon)
3. Scroll to **Pages** section
4. Under "Source", select:
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **Save**
6. Your site will be live at: `https://YOUR_USERNAME.github.io/REPO_NAME`

?? Note: It may take 1-2 minutes for GitHub Pages to build and deploy.

## Create GitHub Personal Access Token

1. Go to https://github.com/settings/tokens/new
2. Give it a name: "Portfolio Deployment"
3. Select scopes:
   - ? repo (full control of private repositories)
   - ? workflow (update GitHub Action workflows)
4. Click "Generate token"
5. Copy the token (you won't see it again!)
6. Use this token in the admin panel for secure deployments

## Troubleshooting Git

### "fatal: not a git repository"
```bash
# You're not in the right folder
cd C:\Users\aayus\portfolio-website
```

### "fatal: remote origin already exists"
```bash
# Remove old remote
git remote remove origin
# Then add new one
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
```

### "Your branch is ahead of 'origin/main'"
```bash
# Push your changes
git push
```

### "Changes not committed"
```bash
# Check status
git status
# Add changes
git add .
# Commit
git commit -m "Your message"
```

## Useful Git Commands

```bash
# Check status
git status

# See commit history
git log

# Undo last commit (keep changes)
git reset --soft HEAD~1

# View changes
git diff

# View branches
git branch

# Switch branch
git checkout branch-name

# Create new branch
git checkout -b new-branch-name
```

## Automated Deployment Script (Optional)

Create a file `deploy.bat` in your portfolio folder:

```batch
@echo off
cd /d "%~dp0"
git add .
git commit -m "Update portfolio - %date% %time%"
git push
echo Deployment complete!
pause
```

Then just double-click `deploy.bat` to deploy!

## Using GitHub Desktop (GUI Alternative)

If command line is too complex:

1. Download GitHub Desktop from https://desktop.github.com
2. Sign in with GitHub account
3. Clone your repository
4. Make changes to files
5. Write commit message
6. Click "Commit to main"
7. Click "Push"

Much easier than command line!

---

**Need help?** See ADMIN_GUIDE.md or DEPLOYMENT.md for more details.
