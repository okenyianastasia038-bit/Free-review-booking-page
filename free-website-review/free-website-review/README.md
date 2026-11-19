# Free Website Review: Booking Page for Online Store Owners

A conversion-focused landing and booking page that lets e-commerce store owners book a free 30-minute website and conversion review with **Anastasia A.O**, a UI/UX designer. The review is the first step toward a paid full-site redesign.

> **Your store gets visitors. Let’s turn more of them into buyers.**

![Status](https://img.shields.io/badge/status-v1.1%20released-7A1F3D) ![Made with](https://img.shields.io/badge/made%20with-HTML%20%C2%B7%20CSS%20%C2%B7%20JS-141414) ![License](https://img.shields.io/badge/license-MIT-F6D77B)

---

## Contents

1. [Overview](#overview)
2. [The problem](#the-problem)
3. [Goals](#goals)
4. [Target users](#target-users)
5. [Design process](#design-process)
6. [Key features](#key-features)
7. [Tools used](#tools-used)
8. [Folder structure](#folder-structure)
9. [Running and publishing the page](#running-and-publishing-the-page)
10. [Screenshots](#screenshots)
11. [Outcome and learnings](#outcome-and-learnings)
12. [Documentation](#documentation)
13. [Author](#author)
14. [License](#license)

---

## Overview

This repository contains the design documentation and the working front-end for a single-page booking site. Store owners who sell fashion, food, beauty and other products online land on the page, see the problems that commonly cost them sales, learn what the free review includes, and book a review through a short four-field form.

The page is the entry point of a simple service funnel:

1. **Content and outreach** (TikTok series *Good UX for e-commerce websites*, LinkedIn carousels) bring store owners to the page.
2. **The booking page** turns interested visitors into booked reviews.
3. **The free 30-minute review** shows each owner the top three things costing them sales.
4. **The paid full-site redesign** is offered at the end of the review to owners who want the fixes done for them.

Most clients are expected to be based outside Nigeria, so the page uses plain international English, avoids local idioms and works well on slower mobile connections.

## The problem

Small and mid-sized online stores often get steady traffic but lose most of it before checkout. Owners can see the drop in their analytics, but they rarely know *why* it happens, and they are wary of paying an agency before anyone has looked at their store.

For a freelance designer, the challenge is the reverse: getting a busy store owner to trust a stranger enough to share their store link and give up 30 minutes.

The booking page has to solve both sides at once:

- Make store owners recognise their own problem within seconds.
- Make the free review feel low-risk, specific and worth the time.
- Make booking take less than a minute on a phone.

## Goals

| Goal | How the page supports it |
|---|---|
| Turn visitors into booked reviews | One clear call to action repeated at every decision point, all leading to the same short form |
| Build trust quickly | A real photo, a named person, plain language, “no cost, no obligation” and “whether you work with me or not” |
| Help owners self-identify | A pinboard of five familiar frustrations, each named in the owner’s own words |
| Show expertise through the page itself | Fast, accessible, responsive and carefully animated, so the page is proof of the skills being sold |
| Prepare the paid offer | The review promises clear next steps, and the centre of the pinboard names the redesign as the fix |

## Target users

**Primary:** owners and founders of small to mid-sized online stores (1 to 20 people) selling fashion, food, beauty, home goods and similar products, mainly in the UK, US, Canada, Europe and other markets outside Nigeria. They run their stores on Shopify, WooCommerce, Wix or Squarespace, and they handle marketing themselves.

**Secondary:** e-commerce marketers and freelancers who manage a store for a client and want an outside opinion before a relaunch.

Full proto-personas are in [CASE_STUDY.md](CASE_STUDY.md#user-personas).

## Design process

### 1. Research

- Desk research on why online shoppers abandon carts and leave stores, drawing on published e-commerce usability research such as the Baymard Institute’s cart abandonment studies and Google’s mobile page speed findings.
- A review of 20 small online stores across fashion, food and beauty to find repeated friction: hidden shipping costs, forced account creation, long checkout forms, slow image-heavy product pages and crowded mobile layouts.
- A review of how other freelance designers and agencies present free audits, to find what builds trust and what feels like a sales trap.
- Proto-personas built from this research to keep decisions focused on a busy, sceptical store owner.

### 2. Information architecture

The page follows the order of questions a store owner asks themselves:

| Order | Visitor’s question | Section |
|---|---|---|
| 1 | Is this for me? | Hero |
| 2 | Does this person understand my problem? | Problems pinboard |
| 3 | What exactly do I get? | Offer cards |
| 4 | Who is behind this? | Who it’s for |
| 5 | How do I book? | Booking form |
| 6 | Can I trust this? | Footer promise and contact details |

### 3. Wireframes

Low-fidelity wireframes were drawn in Figma for desktop (1280px), tablet (820px) and phone (390px). Early versions tested a long single-column form, a calendar embed and a three-step form. The final structure keeps one short form at the bottom of the page and repeats the call to action rather than moving the form higher, so visitors understand the offer before they are asked for anything.

### 4. Visual design

The visual language pairs a warm cream background with burgundy and black, then adds butter yellow and blush pink as playful supporting colours. A serif display face gives warmth and credibility, a friendly sans-serif keeps the body text easy to read, a handwritten face is used for pinboard captions, and a tall poster face closes the page with a bold signature. See [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) and [BRAND_CONCEPT.md](BRAND_CONCEPT.md).

### 5. Iteration

The design went through six rounds of changes, documented in [CHANGELOG.md](CHANGELOG.md). Key changes included moving from tea green to burgundy as the main accent, making the page fully responsive, replacing plain white cards with bold illustrated cards, adding the animated problems pinboard, linking every call to action to the form and adding the oversized name in the footer.

## Key features

- **Problems pinboard.** A detective-style board pins five common frustrations to the wall: carts left behind, a confusing checkout, slow product pages, cluttered mobile layouts and visitors who leave without buying. Red threads run from each one to a centre card offering the fix: a free review or a redesign.
- **Illustrated offer cards.** Three tall cards in butter yellow, burgundy and blush pink explain what the review includes, each with a line illustration and a link to the form.
- **One clear path to booking.** Every button and card link scrolls smoothly to the form and puts the cursor in the first field.
- **Two ways to book.** A short four-field form (name, email, store link and the owner’s biggest frustration; the first three are required), or a Calendly button for owners who want to pick a time straight away: [calendly.com/uiuxanastasiadesigns](https://calendly.com/uiuxanastasiadesigns).
- **Friendly confirmation.** After sending, the form is replaced by a thank-you message with a clear expectation (“I’ll email you within a day”) and an option to send another request.
- **Playful, purposeful motion.** Staggered hero entrance, floating shapes, cards that lift on hover, threads that draw themselves when the board scrolls into view, and a footer name that ripples on hover. All motion turns off when the visitor’s device asks for reduced motion.
- **Fully responsive.** Designed for phone, tablet and desktop. On phones the pinboard becomes a two-column grid and buttons stretch to full width for easy tapping.
- **Accessible by default.** Semantic HTML, a skip link, visible focus states, labelled form fields, 44px minimum touch targets and colour contrast that meets WCAG 2.1 AA for text.
- **No build step.** Plain HTML, CSS and JavaScript that runs on GitHub Pages or any static host.

## Tools used

| Tool | Used for |
|---|---|
| Figma | Wireframes, layout grids and component exploration |
| Claude (design canvas) | High-fidelity, interactive prototype and front-end build |
| Canva | Social media assets for the TikTok and LinkedIn launch content |
| Google Fonts | Young Serif, Figtree, Caveat and Anton |
| HTML, CSS and JavaScript | The production page, with no framework or build step |
| FormSubmit | Sending booking requests to email without a server |
| Calendly | Self-service booking of the 30-minute review |
| GitHub and GitHub Pages | Version control and free hosting |
| WhatsApp Business | Direct contact for store owners who prefer chat |
| Chrome DevTools and Lighthouse | Responsive testing, performance and accessibility checks |

## Folder structure

```text
free-website-review/
├── index.html               # The booking page
├── favicon.svg              # Burgundy sparkle icon
├── assets/
│   ├── css/
│   │   └── styles.css       # Design tokens, layout, components, motion, breakpoints
│   ├── js/
│   │   └── main.js          # Links to form, pinboard animation, form submission
│   ├── images/
│   │   └── anastasia.jpg    # Portrait used in the pinboard and "Who it's for"
│   └── screenshots/         # Images used in this README
├── README.md                # This file
├── BRAND_CONCEPT.md         # Brand idea, personality, visual identity
├── DESIGN_BRIEF.md          # UI/UX design brief
├── CONTENT_GUIDELINES.md    # Voice, tone and copy rules
├── CASE_STUDY.md            # Full case study
├── DESIGN_SYSTEM.md         # Colours, type, spacing, components
├── USER_FLOW.md             # Journey from landing to confirmed booking
├── CHANGELOG.md             # Version history
├── LICENSE                  # MIT licence
└── .gitignore
```

## Running and publishing the page

**View it locally.** Download the repository as a ZIP from the green **Code** button on GitHub (or clone it), then open `index.html` in any modern browser. No installation is needed.

**Publish with GitHub Pages.**

1. Push the repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and the `/ (root)` folder, then save.
4. After about a minute, GitHub shows the live address at the top of the Pages settings. It ends in `github.io/free-website-review/`.

**Activate the booking form.** The form sends requests to `uiuxanastasiadesigns@gmail.com` through FormSubmit. The first time someone submits it, FormSubmit sends an activation email to that inbox. Click the link in that email once, and every request after that arrives as a formatted email. To change the receiving address, edit `FORM_ENDPOINT` at the top of `assets/js/main.js`.

## Screenshots

Screenshots live in `assets/screenshots/`. Each one is captured from the live GitHub Pages site in Chrome.

| File | What it shows |
|---|---|
| `assets/screenshots/desktop-hero.png` | The cream hero at 1280px with the serif headline, burgundy call to action and the floating pink circle, yellow star and burgundy squiggle on the right |
| `assets/screenshots/desktop-pinboard.png` | The dotted pinboard with five tilted photo panels, red pins and red threads meeting at the burgundy “The fix” card with Anastasia’s photo |
| `assets/screenshots/desktop-cards.png` | The three tall offer cards in butter yellow, burgundy and blush pink, with the middle card lifted and tilted on hover |
| `assets/screenshots/desktop-form.png` | The white booking form card on cream with four labelled fields and a full-width burgundy button |
| `assets/screenshots/desktop-footer.png` | The black footer with the “No pressure and no jargon” promise, contact links and the oversized burgundy “ANASTASIA A.O” wordmark |
| `assets/screenshots/tablet.png` | The page at 820px, with the offer cards in two columns and the third card centred below |
| `assets/screenshots/mobile.png` | The page at 390px, with a full-width call to action, the pinboard as a two-column grid and the centre card at the bottom |
## Outcome and learnings

### Outcome

Version 1.0 is a complete, responsive and accessible booking page, ready to receive traffic from the TikTok and LinkedIn launch. Because the page has only just launched, results are tracked against these targets:

| Measure | Target for the first 90 days |
|---|---|
| Visitor-to-booking conversion rate | 5% or higher |
| Form completion rate (started vs sent) | 60% or higher |
| Booked reviews per month | 10 or more |
| Reviews that turn into a paid redesign | 20% or higher |
| Lighthouse accessibility score | 95 or higher |
| Largest Contentful Paint on mobile | Under 2.5 seconds |

### Learnings

- **Name the pain before the solution.** Store owners respond to their own words. “Carts left behind” lands faster than “conversion rate optimisation”.
- **A free offer still needs a reason to trust it.** A real face, a named person and an honest line like “whether you work with me or not” do more than any badge.
- **Fewer fields, better leads.** Asking for the store link and one open question gives enough to prepare a useful review without scaring people off.
- **Motion should explain, not decorate.** The threads drawing toward the centre card tell the story of the page in two seconds. Motion that did not support the story was cut.
- **The page is part of the pitch.** A designer selling better websites has to show one. Speed, accessibility and polish are part of the offer.

## Documentation

| Document | What it covers |
|---|---|
| [BRAND_CONCEPT.md](BRAND_CONCEPT.md) | Brand idea, mission, personality, visual identity and brand dos and don’ts |
| [DESIGN_BRIEF.md](DESIGN_BRIEF.md) | Background, objectives, audience, scope, requirements and success measures |
| [CONTENT_GUIDELINES.md](CONTENT_GUIDELINES.md) | Voice, tone, word choices, page copy and microcopy |
| [CASE_STUDY.md](CASE_STUDY.md) | Challenge, role, research, personas, design decisions and results |
| [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) | Colours, typography, spacing, radii, shadows, motion and components |
| [USER_FLOW.md](USER_FLOW.md) | Step-by-step journey from landing to a confirmed booking |
| [CHANGELOG.md](CHANGELOG.md) | Version history of the design |

## Author

**Anastasia A.O**
UI/UX designer helping online stores turn browsers into buyers.

- Email: [uiuxanastasiadesigns@gmail.com](mailto:uiuxanastasiadesigns@gmail.com)
- WhatsApp: [+234 902 217 0871](https://wa.me/2349022170871)
- Book a review: [calendly.com/uiuxanastasiadesigns](https://calendly.com/uiuxanastasiadesigns)

I share practical e-commerce UX tips on TikTok in the series *Good UX for e-commerce websites* and on LinkedIn through carousels about UI/UX, business and better websites.

Want me to review your store? [Book a free 30-minute website review.](index.html#book)

## License

The code in this repository is released under the [MIT License](LICENSE). The name “Anastasia A.O”, the portrait photograph and the brand identity are not covered by the licence and may not be reused to represent another person or business.
