# Perceptya — Website Project

## Stack
Pure HTML + CSS + Vanilla JS. No build step. Open any `.html` file locally in browser.

## Structure

```
perceptya/
│
├── index.html          ← Home (Hero ✅ + 7 sections TODO)
├── manifesto.html      ← Manifesto (4 sections TODO)
├── services.html       ← Services / PERCEPTYA AI VALUE SYSTEM™ (5 sections TODO)
├── industries.html     ← Industries / 6 verticals (3 sections TODO)
├── contact.html        ← Contact / AI Value Discovery form (3 sections TODO)
│
├── assets/
│   ├── css/
│   │   ├── tokens.css  ← Design tokens (colors, fonts, spacing vars)
│   │   ├── base.css    ← Reset, buttons, cards, grids, animations
│   │   ├── header.css  ← Header + mobile nav styles
│   │   └── footer.css  ← Footer styles
│   ├── js/
│   │   ├── header.js       ← Hamburger, mobile nav, lang toggle, active link
│   │   ├── terminal.js     ← Terminal animation (reusable)
│   │   └── video-cover.js  ← Cloudinary iframe object-fit:cover simulation
│   ├── img/            ← Favicon, OG image, any local images
│   └── video/          ← Notes about Cloudinary video URL
│
└── components/
    ├── header.html     ← Header HTML snippet (copy-paste reference)
    └── footer.html     ← Footer HTML snippet (copy-paste reference)
```

## Video Background
Hosted on Cloudinary. URL used in index.html:
```
https://player.cloudinary.com/embed/?cloud_name=dklf3lssu&public_id=gemini_generated_video_C2BF10B3_wndj7w&autoplay=true&loop=true&muted=true&controls=false&showLogo=false&showInfo=false
```

## Design Tokens (key values)
- Background: `#080808`
- Orange accent: `#FF6B2B`
- Font: Urbanist (display/body) + DM Mono (code/labels)
- Max container width: `1440px`
- Header height: `58px` mobile / `66px` desktop

## Sitemap & Section Status

### Home (index.html)
- [x] 4.1 Hero (video bg, terminal animation, mobile responsive)
- [ ] 4.2 The Problem We Solve (4 pain-point cards)
- [ ] 4.3 Our Methodology (Phase 1 + 2 visual)
- [ ] 4.4 Proprietary Accelerators (4 cards)
- [ ] 4.5 Differentials (9 cards, copy locked)
- [ ] 4.6 Industries Snapshot (6-sector teaser)
- [ ] 4.7 Delivery Model (3 tracks)
- [ ] 4.8 Home CTA Strip

### Manifesto (manifesto.html)
- [ ] 5.1 Hero
- [ ] 5.2 Manifesto Body (long-form)
- [ ] 5.3 The 9 Differentials
- [ ] 5.4 CTA

### Services (services.html)
- [~] 6.1 Hero (headline + body stubbed)
- [ ] 6.2 Phase 1 — AI Value Discovery (4 sub-phases)
- [ ] 6.3 Phase 2 — AI Industrialization (5 modules)
- [ ] 6.4 Proprietary Accelerators (mirror home §4.4)
- [ ] 6.5 Engagement Model (3 tracks)

### Industries (industries.html)
- [~] 7.1 Hero (headline + body stubbed)
- [ ] 7.2 Industry Tabs (6 sectors with template: Context · KPIs · Use Cases)
- [ ] 7.3 Industries CTA

### Contact (contact.html)
- [~] 8.1 Hero (copy stubbed)
- [~] 8.2 Contact Form (HTML ready, needs backend wiring)
- [ ] 8.3 What Happens Next (3 steps)

## TODO — Open Decisions
- [ ] Form handler: Formspree / Notion / HubSpot / custom
- [ ] Calendly embed on Contact page
- [ ] Analytics: GA4 + GTM
- [ ] Favicon + OG meta tags
- [ ] SEO: meta descriptions per page
- [ ] Multilingual: full site or landing-page only
