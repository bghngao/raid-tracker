# ⚔️ GW2 Raid Tracker — GitHub Pages Setup Guide

A Jekyll-powered weekly raid completion tracker for Guild Wars 2.

---

## 🗂️ Project Structure

```
gw2-raid-tracker/
├── _config.yml            # Jekyll site config
├── _data/
│   ├── raids.yml          # All raids, wings & bosses
│   └── accounts.yml       # Cleared bosses per account
├── _layouts/
│   └── default.html       # Base HTML layout
├── assets/
│   └── css/
│       └── main.css       # Site stylesheet
├── index.html             # Main page (Liquid templated)
├── Gemfile                # Ruby dependencies
└── SETUP.md               # This file
```

---

## 🚀 Setup Steps

### Step 1 — Create a GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Name the repository `gw2-raid-tracker` (or any name you like)
3. Set it to **Public** (required for free GitHub Pages)
4. Click **Create repository**

---

### Step 2 — Upload the Files

**Option A — GitHub Web UI (easiest):**
1. In your new repo, click **Add file → Upload files**
2. Drag and drop all files maintaining the folder structure
3. Commit the changes

**Option B — Git CLI:**
```bash
git clone https://github.com/YOUR_USERNAME/gw2-raid-tracker.git
cd gw2-raid-tracker
# Copy all files into this folder
git add .
git commit -m "Initial raid tracker setup"
git push
```

---

### Step 3 — Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, select **Deploy from a branch**
4. Set branch to `main` and folder to `/ (root)`
5. Click **Save**

Your site will be live at:
```
https://YOUR_USERNAME.github.io/gw2-raid-tracker/
```
> ⚠️ It may take 1–2 minutes for the first deploy to complete.

---

### Step 4 — Update `_config.yml`

Open `_config.yml` and update these two lines with your actual GitHub username:

```yaml
baseurl: "/gw2-raid-tracker"   # your repo name
url: "https://YOUR_USERNAME.github.io"
```

Commit and push the change.

---

## 🔄 Updating Clears Each Week

After raid reset (Monday 07:30 UTC), update `_data/accounts.yml` with the new cleared boss IDs:

```yaml
main:
  label: "Main"
  cleared:
    - vale_guardian
    - gorseval
    # ... add/remove as needed

alt:
  label: "Alt"
  cleared:
    - slothasor
    # ... add/remove as needed
```

Push the change — GitHub Pages will automatically rebuild and redeploy.

---

## 🏠 Running Locally (Optional)

To preview the site on your machine before pushing:

```bash
# Install Ruby & Bundler if not already installed
gem install bundler

# Install Jekyll dependencies
bundle install

# Start the local server
bundle exec jekyll serve

# Open in browser
open http://localhost:4000/gw2-raid-tracker/
```

---

## 🔗 API Reference

| Endpoint | Requires Auth | Description |
|---|---|---|
| `GET /v2/raids` | No | All raids, wings & boss IDs |
| `GET /v2/account/raids?access_token=YOUR_KEY` | Yes (API key) | Bosses cleared this week |

Get your API key at [account.arena.net/applications](https://account.arena.net/applications).
