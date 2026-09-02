# Portfolio

Personal portfolio website.

**Live:** [https://mercado.es.eu.org](https://mercado.es.eu.org)


## Tech

- Pure HTML / CSS / JavaScript — no frameworks
- Hosted on Oracle Cloud Free Tier (Ubuntu 24.04)
- nginx as web server
- HTTPS via Let's Encrypt / Certbot
- DNS on Cloudflare
- Domain on nic.eu.org
- Deploy on push to `main` via GitHub Actions (`.github/workflows/deploy.yml`)


## Structure

```
frontend/
  index.html            home
  pages/                about · projects · cv · contact
  projects/             self-contained project dashboards, one HTML file each
  css/style.css         the whole stylesheet
  js/main.js            feature flags, mobile nav, scroll effects, typewriter
  assets/
    files/              CV in PDF
    fonts/              the 7 woff2 actually used, plus their OFL licenses
    images/
```

Paths are lowercase everywhere. macOS ignores case but the Ubuntu server does
not, so a folder renamed to `Frontend/` or `Css/` would break the live site.

`js/main.js` holds a `PAGE_FLAGS` object: setting a page to `false` hides its
links across the site and redirects the page itself to the home page.
