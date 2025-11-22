# GitHub Setup Instructions

Your project has been initialized with Git! Follow these steps to push it to GitHub:

## Step 1: Create a New Repository on GitHub

1. Go to [GitHub](https://github.com) and log in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Name your repository (e.g., `verdant-vibes-plant-shop`)
5. **Do NOT** initialize with README, .gitignore, or license (we already have these)
6. Click **"Create repository"**

## Step 2: Connect Your Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these in your terminal:

```bash
# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/verdant-vibes-plant-shop.git

# Rename the branch to main (if needed)
git branch -M main

# Push your code to GitHub
git push -u origin main
```

## Step 3: Future Updates

After the initial push, whenever you make changes:

```bash
# Stage all changes
git add .

# Commit with a descriptive message
git commit -m "Description of your changes"

# Push to GitHub
git push
```

## Quick Commands Reference

```bash
# Check status of your files
git status

# View commit history
git log --oneline

# Create a new branch
git checkout -b feature-name

# Switch branches
git checkout branch-name

# Pull latest changes from GitHub
git pull
```

## Current Status

✅ Git repository initialized
✅ Initial commit created with all project files
✅ Git user configured:
   - Email: salmandev15@gmail.com
   - Name: Salman

**Next step:** Create a repository on GitHub and run the commands from Step 2!
