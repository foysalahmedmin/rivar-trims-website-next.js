# 🚀 cPanel Static Hosting Guide (Ubuntu + Next.js)

## Overview

This guide explains how to build a Next.js static site on Ubuntu and deploy it to cPanel shared hosting.

---

## Prerequisites

- Node.js installed (v18+)
- pnpm installed (`npm install -g pnpm`)
- `next.config.ts` configured with `output: "export"`
- `.htaccess` file placed in `/public` folder (auto-copied to build output)

---

## Step 1 — Verify `next.config.ts`

Make sure `output: "export"` and `images.unoptimized: true` are set:

```ts
// next.config.ts
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};
```

---

## Step 2 — Verify `.htaccess` in `/public`

Place a `.htaccess` file at `public/.htaccess`. It will be automatically copied into the `out/` folder during build.

```apache
Options -MultiViews
RewriteEngine On
RewriteBase /

# Serve existing files and directories directly
RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]

# Serve .html version of the requested path if it exists
RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule ^(.*)$ $1.html [L]

# Fallback to index.html
RewriteRule ^ index.html [L]
```

> ⚠️ Without this file, direct URL visits (e.g. `/about`, `/products`) will return 404 on Apache servers.

---

## Step 3 — Build the Project

Run the production build from the project root:

```bash
pnpm run build
```

This generates the `out/` folder containing all static HTML, CSS, JS, and image files.

---

## Step 4 — Create a ZIP for Upload

Navigate to the `out/` folder and create a zip of **all** contents (including hidden files like `.htaccess`):

```bash
cd out
zip -r ../website.zip .
cd ..
```

> **Why `zip -r ../website.zip .` and not `zip -r ../website.zip out/`?**
> Using `.` (dot) zips the *contents* of the `out` folder — not the folder itself.
> This means when you extract on cPanel, files go directly into `public_html/` instead of `public_html/out/`.

Check the file size:

```bash
du -sh website.zip
```

---

## Step 5 — Upload to cPanel

1. Login to your **cPanel** account
2. Open **File Manager**
3. Navigate to **`public_html`**
4. Click **Upload** → select `website.zip` from your local machine
5. After upload completes, **right-click** `website.zip` → **Extract**
6. Set extraction destination to: `/public_html`
7. Click **Extract File(s)**

> If there are existing files in `public_html`, you may need to delete them first (especially `index.html` if it exists).

---

## Step 6 — Verify Deployment

1. Visit your domain (e.g. `https://rivartrimsltd.com`)
2. Check that:
   - Home page loads ✅
   - Direct URL navigation works (e.g. `/about`, `/products`) ✅
   - Images load correctly ✅

---

## Troubleshooting

### ❌ 404 on page reload / direct URL
**Cause:** `.htaccess` is missing or Apache `mod_rewrite` is not enabled.  
**Fix:** Ensure `public/.htaccess` exists and was included in the build. Contact hosting support to enable `mod_rewrite`.

### ❌ Images not loading
**Cause:** Image paths are wrong or `images.unoptimized` is not set.  
**Fix:** Verify `next.config.ts` has `images: { unoptimized: true }`.

### ❌ CSS/JS not loading (blank page)
**Cause:** If the site is deployed in a subdirectory (e.g. `public_html/mysite/`), you need to set `basePath` in `next.config.ts`.  
**Fix:**

```ts
const nextConfig: NextConfig = {
  output: "export",
  basePath: "/mysite",  // only if deployed in a subdirectory
  images: { unoptimized: true },
};
```

---

## Quick Command Reference

```bash
# Install dependencies
pnpm install

# Development server
pnpm run dev

# Production build (generates /out folder)
pnpm run build

# Create zip for cPanel upload
cd out && zip -r ../website.zip . && cd ..

# Check zip size
du -sh website.zip
```

---

## File Structure After Build

```
out/
├── .htaccess          ← copied from public/.htaccess
├── index.html         ← home page
├── about.html
├── contact.html
├── products/
│   ├── index.html
│   ├── woven-label.html
│   └── ...
├── _next/
│   ├── static/
│   │   ├── css/
│   │   └── js/
└── images/
    ├── products/
    └── ...
```

---

_Last updated: March 2026_
