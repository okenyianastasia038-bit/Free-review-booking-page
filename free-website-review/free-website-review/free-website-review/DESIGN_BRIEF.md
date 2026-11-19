# UI/UX Design Brief: Free Website Review Booking Page

| | |
|---|---|
| **Project** | Free Website Review booking page |
| **Client and designer** | Anastasia A.O, UI/UX designer |
| **Version** | 1.0 |
| **Date** | November 2026 |
| **Status** | Approved and built |

---

## 1. Background

Anastasia A.O is a UI/UX designer who helps online stores improve their websites and conversion rates. She is building a client base among small and mid-sized e-commerce brands, mostly outside Nigeria, through short educational videos on TikTok and carousels on LinkedIn.

Her offer is a two-step service:

1. **A free 30-minute website review.** She looks at the store’s homepage, product pages and checkout, then shares the top three things costing the owner sales and clear next steps.
2. **A paid full-site redesign.** A fixed-price redesign built on what the review found. The store stays live during the rebuild, and conversion is tracked before and after launch.

Social content creates interest, but there is no single place to send that interest. Store owners currently have to send a direct message, which is slow and easy to forget. This project creates that place.

## 2. The problem to solve

Store owners see traffic but not enough sales, and they do not know why. They are busy, they have been burned by agencies before, and they are wary of “free” offers that turn into hard sales calls.

The page must persuade a sceptical owner to share their store link with a designer they have never met, in under a minute, usually on a phone.

## 3. Objectives

**Business objectives**

1. Turn social media traffic into booked free reviews.
2. Collect enough information to prepare a useful review before the call.
3. Position the paid redesign as the natural next step.
4. Show Anastasia’s skill through the quality of the page itself.

**User objectives**

1. Understand quickly whether the offer is relevant to their store.
2. Know exactly what they will get and what it costs (nothing).
3. Trust the person behind the offer.
4. Book with as little effort as possible.

## 4. Target audience

**Primary audience:** owners and founders of online stores with 1 to 20 staff, selling fashion, food, beauty, home goods and lifestyle products. They are based mainly in the UK, US, Canada, Europe and Australia, and they run their stores on Shopify, WooCommerce, Wix or Squarespace.

**What they have in common**

- They wear many hats and have little time.
- They know their numbers but not always the reasons behind them.
- They are comfortable online but are not designers or developers.
- Most of them browse and decide on their phones.

**Secondary audience:** marketers and freelancers who manage stores for clients.

Detailed proto-personas are in [CASE_STUDY.md](CASE_STUDY.md#user-personas).

## 5. Key message

> Your store gets visitors. Let’s turn more of them into buyers.

**Supporting messages**

- It is free, it takes 30 minutes and there is no obligation.
- You will see exactly what is costing you sales.
- You will leave with clear fixes, whether you work with me or not.
- I am a real designer who cares about your sales, and I speak plain English.

## 6. Scope

**In scope**

- A single responsive landing and booking page
- Page structure, copy, visual design, illustrations and motion
- A booking form that sends requests to email
- A confirmation state after booking
- A design system and documentation for future pages

**Out of scope for version 1.0**

- Online payments for the redesign
- A client login or dashboard
- A blog or case study library
- Multi-language versions
- A calendar embedded inside the page (owners who want to pick a time themselves use a Calendly button that opens in a new tab)

## 7. Page requirements

### Sections

| # | Section | Purpose | Must include |
|---|---|---|---|
| 1 | Header | Identify the brand and offer a fast route to booking | Wordmark, “Book a review” button |
| 2 | Hero | State the promise and the offer | Overline, headline, supporting line, main call to action, “No cost, no obligation” |
| 3 | Problems pinboard | Help owners recognise their own problem | Five illustrated frustrations with captions, threads to a centre card naming Anastasia as the fix |
| 4 | Offer cards | Explain what the review includes | Three cards with titles, descriptions and links to the form |
| 5 | Who it’s for | Build trust with a face and a clear audience | Photo, audience statement, short introduction |
| 6 | Booking form | Capture the request | Name, email, store link, biggest frustration, submit button, success state, and a Calendly button for picking a time directly |
| 7 | Footer | Close with a promise and contact options | Brand line, email, WhatsApp, Calendly, oversized name |

### Functional requirements

1. Every call to action scrolls to the booking form and moves focus to the first field.
2. Name, email and store link are required. The frustration field is optional.
3. The email and store link fields validate their format before sending.
4. Submitting shows a “Sending…” state and prevents double submission.
5. A successful submission replaces the form with a thank-you message and an option to send another request.
6. A failed submission shows a clear error with an alternative contact route.
7. Requests arrive at `uiuxanastasiadesigns@gmail.com` with all fields labelled.
8. A hidden spam trap blocks simple bots.

### Non-functional requirements

| Area | Requirement |
|---|---|
| Responsiveness | Works from 320px to 1920px wide, with designed layouts for phone (up to 600px), tablet (601 to 1023px) and desktop (1024px and up) |
| Accessibility | WCAG 2.1 AA: text contrast of at least 4.5:1, visible focus states, labelled fields, 44px touch targets, keyboard access, reduced-motion support |
| Performance | Largest Contentful Paint under 2.5 seconds on a mid-range phone over 4G; no frameworks; total page weight under 500KB excluding fonts |
| Hosting | Static files only, deployable to GitHub Pages |
| Privacy | Collect only the four form fields; no tracking cookies in version 1.0 |
| Browser support | Latest two versions of Chrome, Safari, Edge and Firefox, plus Safari on iOS and Chrome on Android |

## 8. Look and feel

**Mood:** warm, confident, playful and honest. A boutique studio, not a faceless agency.

**Visual direction**

- Cream background with burgundy as the main colour and black for strong contrast
- Butter yellow and blush pink as playful supporting colours
- Editorial serif headlines paired with a friendly sans-serif
- Hand-drawn line illustrations of everyday store moments
- A detective pinboard to tell the story of “the case of the missing sales”
- Springy, quick motion that rewards interaction

**References that shaped the direction**

- Bold, tall, colourful product cards with line illustrations, large titles and divider lines
- A scrapbook-style pinboard with polaroids, pins, threads and handwritten notes
- A full-width poster-style wordmark in a heavy condensed typeface

Full details are in [BRAND_CONCEPT.md](BRAND_CONCEPT.md) and [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md).

## 9. Content requirements

- Plain international English, with no local idioms or slang
- Short sentences, active voice, written to “you”
- No invented statistics, testimonials or client logos
- Every claim about the review must be something Anastasia will actually deliver

Full rules are in [CONTENT_GUIDELINES.md](CONTENT_GUIDELINES.md).

## 10. Deliverables

1. Low-fidelity wireframes for phone, tablet and desktop (Figma)
2. High-fidelity interactive prototype (Claude design canvas)
3. Production page: `index.html`, `assets/css/styles.css`, `assets/js/main.js`
4. Brand concept, design brief, content guidelines and design system documents
5. User flow and case study
6. GitHub repository ready for GitHub Pages

## 11. Success measures

The page launched in November 2026. Targets for the first 90 days:

| Measure | Target |
|---|---|
| Visitor-to-booking conversion rate | 5% or higher |
| Form completion rate | 60% or higher |
| Booked reviews per month | 10 or more |
| Reviews that become paid redesigns | 20% or higher |
| Lighthouse accessibility score | 95 or higher |
| Mobile Largest Contentful Paint | Under 2.5 seconds |

## 12. Timeline

| Phase | Duration | Output |
|---|---|---|
| Discovery and research | 3 days | Research notes, proto-personas, page outline |
| Copy and information architecture | 2 days | Page copy and section order |
| Wireframes | 2 days | Phone, tablet and desktop wireframes |
| Visual design and prototype | 4 days | High-fidelity, interactive prototype |
| Iteration | 5 days | Responsive layouts, illustrated cards, pinboard, footer wordmark |
| Build and documentation | 3 days | Production files and GitHub documentation |

## 13. Risks and mitigations

| Risk | Mitigation |
|---|---|
| Visitors doubt a free offer | Real photo, plain promises, “whether you work with me or not” |
| Too much animation slows the page or distracts | CSS-only motion, no animation libraries, reduced-motion support, motion only where it tells the story |
| Form spam | Hidden honeypot field and FormSubmit filtering |
| Time zone confusion for international clients | Times are agreed by email; the confirmation promises a reply within a day |
| The form service is unavailable | The error message offers WhatsApp as a backup |
