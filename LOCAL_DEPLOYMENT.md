# ?? LOCAL GITHUB DEPLOYMENT - STEP BY STEP

## ? Prerequisites Check

Before we start, let's verify everything is ready:

### 1. Check Git Installation
Open Command Prompt and run:
```bash
git --version
```

If you see a version number, Git is installed! ?

If NOT, download from: https://git-scm.com/download/win

### 2. GitHub Account
- Create at: https://github.com
- Save your USERNAME

### 3. Personal Access Token
- Go to: https://github.com/settings/tokens/new
- Create token with `repo` and `workflow` scopes
- COPY & SAVE IT

---

## ?? LOCAL DEPLOYMENT STEPS

### Step 1: Open Command Prompt
```
Windows Key + R
Type: cmd
Press Enter
```

### Step 2: Navigate to Portfolio Folder
```bash
cd C:\Users\aayus\portfolio-website
```

### Step 3: Configure Git (First Time Only)
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Step 4: Initialize Git Repository
```bash
git init
```

### Step 5: Add All Files
```bash
git add .
```

### Step 6: Create Initial Commit
```bash
git commit -m "Initial portfolio upload - all files"
```

### Step 7: Create Main Branch
```bash
git branch -M main
```

### Step 8: Add GitHub Repository
```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
```
?? **Replace YOUR_USERNAME with your actual GitHub username!**

### Step 9: Push to GitHub
```bash
git push -u origin main
```

When prompted:
- **Username:** YOUR_USERNAME
- **Password:** PASTE YOUR PERSONAL ACCESS TOKEN (NOT your GitHub password!)

### Step 10: Enable GitHub Pages
1. Go to: https://github.com/YOUR_USERNAME/portfolio/settings/pages
2. Source branch: **main**
3. Folder: **/ (root)**
4. Click **Save**

### Step 11: Wait & Verify
Wait 1-2 minutes for deployment, then visit:
```
https://YOUR_USERNAME.github.io/portfolio
```

---

## ?? Troubleshooting

### "Git is not recognized"
- Git not installed
- Solution: Download from git-scm.com

### "fatal: not a git repository"
- Wrong folder
- Solution: Run `cd C:\Users\aayus\portfolio-website`

### "Authentication failed"
- Wrong credentials
- Solution: Use Personal Access Token, not password

### "fatal: remote origin already exists"
- Already initialized
- Solution: Run `git remote remove origin` first

---

## ? Success Indicators

Your deployment is successful when:
- ? Files appear on GitHub
- ? All 27 files uploaded
- ? GitHub Pages enabled
- ? Portfolio accessible at your GitHub Pages URL
- ? Admin dashboard loads
- ? Website displays correctly

---

Ready? Let's go! Follow the steps above in Command Prompt.
