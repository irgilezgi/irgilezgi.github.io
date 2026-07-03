# Academic Personal Website

A single-page academic site: About, Publications (styled as a real numbered
bibliography with expandable abstracts), CV timeline, Teaching, and Contact.
No build step — just HTML, CSS, and a few lines of JS.

## Files

```
index.html     the whole page
style.css      styling
script.js      publication toggle + footer year
assets/        put your photo (photo.jpg) and cv.pdf here, or in the repo root
```

## 1. Put this on GitHub Pages

You said you already have a GitHub account, so:

1. Go to **github.com → New repository**.
2. Name it exactly **`YOUR-USERNAME.github.io`** (replace with your actual
   GitHub username). This exact name is what makes GitHub serve it as your
   personal site at `https://YOUR-USERNAME.github.io`.
   - If you'd rather use a different repo name, that's fine too — it'll just
     be published at `https://YOUR-USERNAME.github.io/REPO-NAME` instead,
     and Pages needs to be enabled manually (see step 4).
3. Make it **Public**, don't initialize with a README (we already have one).
4. Create the repo.

Then, from this folder on your computer:

```bash
cd academic-site
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
git push -u origin main
```

5. If your repo is named `YOUR-USERNAME.github.io`, Pages is usually enabled
   automatically within a minute or two. If not (or you used a different repo
   name), go to **Settings → Pages** in the repo, and under "Build and
   deployment" set **Source: Deploy from a branch**, **Branch: main / (root)**,
   then Save.
6. Visit your URL — it can take a minute to go live the first time.

## 2. Customize the content

Everything you need to change is in `index.html`. Look for bracketed text
like `[Lab Name]` or the highlighted `<span class="placeholder">` text, and
your real name/title/affiliation in the `<head>` and header section:

- **Name & title:** top of `index.html`, in `.identity` and the `<title>` tag
- **About:** the `#about` section — bio, degrees, advisor, links
- **Publications:** each `<li class="pub-entry">` in `#publications` — title,
  authors, venue, and the abstract text/links inside `.pub-abstract`. Copy
  an existing `<li>` block to add more; just give each one a unique `id`.
- **CV timeline:** the `<ol class="timeline">` in `#cv`
- **Teaching:** the `<ul class="teaching-list">` in `#teaching`
- **Contact:** the `#contact` section and the `mailto:` links throughout

## 3. Add your photo and CV

- Drop a photo in as `assets/photo.jpg` (square photos work best — the frame
  crops to a square). If no photo is found, a placeholder box shows instead.
- Drop your CV PDF into the repo root as `cv.pdf` (the page already links to
  it in two places).

## 4. Custom domain (optional)

If you have your own domain (e.g. `janeresearcher.com`), go to
**Settings → Pages → Custom domain** in the repo and follow GitHub's DNS
instructions.

## Design notes

Publications are laid out as a real numbered bibliography rather than cards
— clicking a title expands its abstract in place, similar to how a reference
list works in a paper. Palette and type (Source Serif 4 + JetBrains Mono for
metadata like dates and venues) are meant to feel like ink on paper, not a
generic template.
