# Changelog

All notable changes to the Free Website Review page design are recorded here.
The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and versions follow [Semantic Versioning](https://semver.org/).

- **Major** versions mark a public release or a change to the page’s purpose.
- **Minor** versions add sections, features or a visual direction.
- **Patch** versions fix bugs or polish details.

---

## [1.1.0] - 2026-11-19

### Added
- “Book a free review on Calendly” button below the booking form, linking to https://calendly.com/uiuxanastasiadesigns in a new tab, for owners who want to pick a time themselves.
- Calendly link in the footer contact row.

### Changed
- The free review is now 30 minutes instead of 15. Updated the hero overline, supporting line, offer heading, page description and all documentation.
- Booking flow: after a form request, owners now receive the Calendly link to choose their time.

## [1.0.0] - 2026-11-19

First public release, prepared for GitHub Pages.

### Added
- Standalone production build: `index.html`, `assets/css/styles.css` and `assets/js/main.js`, with no framework or build step.
- Working booking form that sends requests to `uiuxanastasiadesigns@gmail.com` through FormSubmit, with a hidden spam trap.
- Error message with a WhatsApp fallback when a request cannot be sent.
- Email and WhatsApp contact links in the footer.
- Skip link to the booking form, `autocomplete` values on fields and focus moved to the confirmation after booking.
- Favicon: a cream sparkle on a burgundy rounded square.
- Page title, description and social sharing tags.
- Documentation: README, brand concept, design brief, content guidelines, case study, design system, user flow, changelog and MIT licence.

### Changed
- Styles reorganised into design tokens and reusable classes instead of inline styles.
- The pinboard entrance now waits until the board scrolls into view.

## [0.6.0] - 2026-11-19

### Added
- Oversized “ANASTASIA A.O” signature in a tall poster typeface (Anton), set in burgundy on a cream panel across the full width of the footer.
- Tilted first letter and a letter-by-letter ripple on hover.

### Changed
- Removed the small name line under the footer promise. The promise “No pressure and no jargon. Just honest feedback from a UI/UX designer who cares about your sales.” stays unchanged.

## [0.5.0] - 2026-11-19

### Added
- Problems pinboard, “The usual suspects behind lost sales”, with five illustrated panels: carts left behind, a confusing checkout, slow product pages, cluttered on mobile and visitors leave without buying.
- Red threads connecting every panel to a burgundy centre card: “The fix · Anastasia · Book a free review or a redesign”.
- Pinboard motion: panels drop in, pins pop, threads draw, dots flow toward the centre and a ring pulses around the centre card.
- Handwritten margin notes, tape, hearts and squiggles in the scrapbook style.
- Phone layout for the pinboard: a two-column grid with a pin on each panel and the centre card at the bottom.

### Changed
- Every call to action (header, hero, centre card and all three card links) now scrolls to the booking form and places the cursor in the Name field. If a request was already sent, the form returns.

## [0.4.0] - 2026-11-19

### Added
- Playful motion: staggered hero entrance, floating pink circle, spinning yellow star, burgundy squiggle, rotating logo sparkle and scroll-triggered section reveals.
- Interactive button states: lift on hover, press on click, sliding arrows and visible keyboard focus.
- “Sending…” state on the submit button and a pop-in confirmation with a “Send another request” button.
- Reduced-motion support that turns off all animation.

### Changed
- Redesigned the three offer cards as tall, bold colour blocks in butter yellow, burgundy and blush pink, with line illustrations, large serif titles, divider lines and arrow links.
- Cards now lift and tilt when hovered, with bobbing illustrations and twinkling sparkles.

## [0.3.0] - 2026-11-19

### Added
- Responsive layouts for tablet (601 to 1023px) and phone (up to 600px).
- Portrait photo of Anastasia in the “Who it’s for” section.

### Changed
- On phones, the main button stretches to full width, cards stack in one column, headings shrink and form padding is reduced.
- On tablets, cards sit in two columns with the third centred below.

## [0.2.0] - 2026-11-06

### Changed
- New visual direction based on a travel-style design system, recoloured to the brand: cream background, burgundy as the main colour and black for headlines and dark sections.
- New type pairing: Young Serif for headlines and Figtree for body text.
- Pill-shaped buttons, white cards with soft shadows and small spaced-out overlines above each heading.
- “Who it’s for” and the footer moved onto black bands.

## [0.1.0] - 2026-11-06

### Added
- First version of the booking page: header, hero, “What you’ll get” cards, “Who it’s for”, booking form and footer.
- Copy for the offer: “Your store gets visitors. Let’s turn more of them into buyers.”
- Four-field form: name, email, store link and biggest frustration.
- Tea green, cream and burgundy palette with Fraunces and Inter typefaces.
