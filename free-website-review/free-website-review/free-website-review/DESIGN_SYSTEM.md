# Design System

The foundations and components behind the Free Website Review page. All values match `assets/css/styles.css`, where colours, fonts, radii and easing curves are defined as CSS custom properties in `:root`.

---

## Colour

### Brand colours

| Swatch | Name | Hex | Token | Use |
|---|---|---|---|---|
| ![#FEF7E5](https://placehold.co/20x20/FEF7E5/FEF7E5.png) | Cream | `#FEF7E5` | `--cream-100` | Page background, text on dark surfaces |
| ![#7A1F3D](https://placehold.co/20x20/7A1F3D/7A1F3D.png) | Burgundy | `#7A1F3D` | `--burgundy-700` | Main brand colour: primary buttons, overlines, centre card, wordmark |
| ![#141414](https://placehold.co/20x20/141414/141414.png) | Black | `#141414` | `--black` | Headlines, outline buttons, “Who it’s for” band, footer |

### Supporting colours

| Swatch | Name | Hex | Token | Use |
|---|---|---|---|---|
| ![#F6D77B](https://placehold.co/20x20/F6D77B/F6D77B.png) | Butter | `#F6D77B` | `--butter` | Offer card 1, illustration fills, hero star, tape |
| ![#F4BFD0](https://placehold.co/20x20/F4BFD0/F4BFD0.png) | Blush | `#F4BFD0` | `--blush` | Offer card 3, hero circle, illustration fills |
| ![#EBD3DA](https://placehold.co/20x20/EBD3DA/EBD3DA.png) | Rose | `#EBD3DA` | `--rose` | Illustration backgrounds on the pinboard |
| ![#F8EBCB](https://placehold.co/20x20/F8EBCB/F8EBCB.png) | Cream 200 | `#F8EBCB` | `--cream-200` | Illustration backgrounds on the pinboard |
| ![#FFFCF4](https://placehold.co/20x20/FFFCF4/FFFCF4.png) | Cream 50 | `#FFFCF4` | `--cream-50` | Pinboard surface, input backgrounds |
| ![#D7263D](https://placehold.co/20x20/D7263D/D7263D.png) | Thread red | `#D7263D` | `--thread-red` | Pinboard pins and threads only. Never for text or buttons |
| ![#E0A630](https://placehold.co/20x20/E0A630/E0A630.png) | Gold | `#E0A630` | `--gold` | The sparkle on the confirmation message |
| ![#5E1730](https://placehold.co/20x20/5E1730/5E1730.png) | Burgundy 800 | `#5E1730` | `--burgundy-800` | Link hover |
| ![#F3D9E0](https://placehold.co/20x20/F3D9E0/F3D9E0.png) | Burgundy 100 | `#F3D9E0` | `--burgundy-100` | Small labels on burgundy |

### Neutrals

| Name | Hex | Token | Use |
|---|---|---|---|
| Ink 900 | `#1E1A14` | `--ink-900` | Body text |
| Ink 700 | `#4A4237` | `--ink-700` | Secondary text, form labels |
| Ink 500 | `#8C8070` | `--ink-500` | Input borders |
| Ink 200 | `#DCD2BF` | `--ink-200` | Card and form borders |
| Line soft | `#E8DFD0` | `--line-soft` | Pinboard border |
| White | `#FFFFFF` | `--white` | Form card, pinboard panels |
| On-dark muted | `#D9D2C8` | `--on-dark-muted` | Secondary text on black |
| On-dark accent | `#E8B4C2` | `--on-dark-accent` | Overlines and link hover on black |
| Error | `#B93A2B` | none | Form error text |

### Contrast

All text pairs meet WCAG 2.1 AA (4.5:1 for normal text).

| Text | Background | Ratio |
|---|---|---|
| Black `#141414` | Cream `#FEF7E5` | 17.2:1 |
| Ink 900 `#1E1A14` | Cream | 16.2:1 |
| Ink 700 `#4A4237` | Cream | 9.2:1 |
| Burgundy `#7A1F3D` | Cream | 9.4:1 |
| Cream | Burgundy | 9.4:1 |
| Black | Butter `#F6D77B` | 13.1:1 |
| Black | Blush `#F4BFD0` | 11.6:1 |
| Cream | Black | 17.2:1 |
| On-dark muted `#D9D2C8` | Black | 12.3:1 |
| Burgundy 100 `#F3D9E0` | Burgundy | 7.6:1 |
| Error `#B93A2B` | White | 5.7:1 |

Input borders (`#8C8070` on `#FFFCF4`) reach 3.8:1, which meets the 3:1 minimum for interface components.

### Colour rules

- Burgundy marks the single most important action on screen.
- Butter and blush are backgrounds and fills, never text colours.
- Thread red is only for the pinboard.
- Never place burgundy text on butter or blush.

---

## Typography

### Typefaces

All four typefaces are free on Google Fonts and load with `display=swap`.

| Role | Typeface | Weights | Fallback | Token |
|---|---|---|---|---|
| Display | Young Serif | 400 | Georgia, serif | `--font-display` |
| Body and interface | Figtree | 400, 500, 600, 700 | system-ui, sans-serif | `--font-body` |
| Handwritten | Caveat | 500, 700 | cursive | `--font-hand` |
| Poster | Anton | 400 | Arial Narrow, Impact | `--font-poster` |

### Type scale

| Style | Font | Size | Line height | Letter spacing | Weight | Used for |
|---|---|---|---|---|---|---|
| Display XL | Young Serif | `clamp(2.6rem, 6vw, 4.5rem)` (36px on phone) | 1.08 | -0.015em | 400 | Hero headline |
| H2 | Young Serif | 34px (28px on phone) | 1.08 | -0.015em | 400 | Section headings |
| Card title | Young Serif | 28px | 1.15 | -0.01em | 400 | Offer card titles |
| Statement | Young Serif | `clamp(1.5rem, 2.6vw, 2.1rem)` | 1.25 | -0.01em | 400 | “Who it’s for” statement |
| Brand line | Young Serif | 22px (19px on phone) | 1.35 | 0 | 400 | Footer promise |
| Lead | Figtree | 18px (17px on phone) | 1.55 | 0 | 400 | Hero supporting line |
| Body | Figtree | 16px | 1.55 | 0 | 400 | Default text |
| Small | Figtree | 15px | 1.55 | 0 | 400 | Card descriptions |
| Label | Figtree | 14px | 1.55 | 0 | 500 | Form labels |
| Button | Figtree | 16px / 15px / 14px | 1 | 0 | 600 | Large, medium and small buttons |
| Overline | Figtree | 12px | 1.55 | 0.14em | 600, uppercase | Section labels |
| Caption | Caveat | `max(13px, 2.1cqw)` (18px on phone) | 1.05 | 0 | 700 | Pinboard captions |
| Wordmark | Anton | 16.2cqw | 0.9 | -0.01em | 400, uppercase | Footer signature |

`cqw` units scale with the width of their container, so pinboard captions and the footer wordmark keep the same proportions at every screen size.

---

## Spacing and layout

### Spacing scale

Based on a 4px unit.

| Token | Value | Common use |
|---|---|---|
| 1 | 4px | Icon nudges |
| 1.5 | 6px | Label to input |
| 2 | 8px | Tight gaps |
| 3 | 12px | Button groups, overline to heading |
| 4 | 16px | Phone gutter, card grid gap on phone |
| 5 | 20px | Form field gap |
| 6 | 24px | Desktop gutter, card grid gap, card padding on phone |
| 7 | 28px | Card padding, booking section gap |
| 8 | 32px | Heading to content, form padding |
| 10 | 40px | Profile row gap, footer wordmark margin |
| 14 | 56px | Section padding on phone |
| 18 | 72px | Section padding on tablet |
| 24 | 96px | Section padding on desktop |

### Grid and containers

| Setting | Value |
|---|---|
| Max content width | 1240px |
| Side gutter | 24px (16px on phone) |
| Offer cards | 3 columns on desktop, 2 plus 1 centred on tablet, 1 on phone |
| Booking form width | 640px max |
| Hero text width | 880px max |

### Breakpoints

| Name | Width | Main changes |
|---|---|---|
| Phone | up to 600px | Gutter 16px, full-width buttons, one-column cards, smaller headings |
| Small tablet | up to 700px | Pinboard becomes a two-column grid without threads |
| Tablet | 601px to 1023px | Two-column cards, reduced section padding |
| Desktop | 1024px and up | Full layout |
| Wide desktop | 1180px and up | Floating hero shapes appear |

### Radius

| Token | Value | Use |
|---|---|---|
| `--radius-sm` | 8px | Inputs |
| `--radius-md` | 16px | Footer wordmark panel |
| `--radius-lg` | 24px | Offer cards |
| `--radius-xl` | 28px | Form card, pinboard |
| `--radius-pill` | 999px | All buttons |
| Photo | 20px | Portrait in “Who it’s for” |
| Panel | 4px | Pinboard photo panels |

### Elevation

| Level | Shadow | Use |
|---|---|---|
| Resting card | `0 2px 0 rgba(20,20,20,.08)` | Offer cards at rest |
| Raised | `0 10px 22px -12px rgba(20,20,20,.35)` | Pinboard panels |
| Form | `0 18px 40px -12px rgba(20,20,20,.18)` | Form and confirmation cards |
| Lifted | `0 30px 40px -18px rgba(20,20,20,.38)` | Offer card on hover |
| Brand glow | `0 24px 40px -18px rgba(122,31,61,.6)` | Centre card on the pinboard |
| Button hover | `0 14px 24px -10px rgba(122,31,61,.6)` | Primary button on hover |
| Focus ring | `0 0 0 3px rgba(122,31,61,.25)` | Inputs in focus |

---

## Components

### Buttons

All buttons are pill-shaped and use Figtree 600.

| Variant | Class | Height | Padding | Fill | Text | Border | Use |
|---|---|---|---|---|---|---|---|
| Primary | `.btn .btn-solid` | 52px | 0 28px | Burgundy | Cream | None | Main calls to action and form submit |
| Outline | `.btn .btn-outline` | 44px | 0 20px | Transparent | Black | 1px black | Header button, “Send another request” |
| Outline large | `.btn .btn-outline .btn-cal` | 48px | 0 24px | Transparent | Black | 1px black | “Book a free review on Calendly”, with a calendar icon |
| Cream | `.btn .btn-cream` | 40px (44px on phone) | 0 1.6cqw | Cream | Black | None | Button inside the burgundy centre card |

**States**

| State | Behaviour |
|---|---|
| Hover | Lifts 3px with a springy ease. Primary darkens slightly and gains a burgundy shadow. Outline fills black with cream text. The arrow slides 4px right |
| Active | Returns to place and scales to 97% |
| Focus | 3px burgundy outline, offset 3px |
| Disabled | 75% opacity, progress cursor, used while sending |

On phones, the hero button stretches to full width.

### Text link with arrow

Used at the bottom of each offer card (`.card-link`). Figtree 600, 14px, inherits the card’s text colour, minimum height 44px. On hover the text underlines and the diagonal arrow moves 3px up and to the right.

### Form fields

| Property | Value |
|---|---|
| Label | Figtree 500, 14px, Ink 700, always visible above the field |
| Input height | 48px minimum |
| Padding | 0 14px (textarea 12px 14px) |
| Border | 1px Ink 500, 8px radius |
| Background | Cream 50 |
| Text | Ink 900, 16px, which prevents zoom on iOS |
| Hint text | Browser default colour, shows an example value |
| Focus | Burgundy border with a 3px burgundy ring at 25% opacity |
| Invalid (after interaction) | Error red border |
| Textarea | 4 rows, resizes vertically only |

**Form card:** white, 1px Ink 200 border, 28px radius (20px on phone), 32px padding (20px on phone), 20px gap between fields.

### Offer card

| Part | Spec |
|---|---|
| Size | Minimum height 500px on desktop and tablet, natural height on phone |
| Padding | 28px |
| Radius | 24px |
| Top row | Brand name left, number right, Figtree 600 13px |
| Illustration | 200 × 140px line drawing, 2.5px stroke |
| Title | Young Serif 28px with a superscript asterisk |
| Dividers | 1.5px lines in the card’s text colour |
| Variants | Butter with black text, burgundy with cream text, blush with black text |
| Hover | Lifts 14px and tilts 1.5°, shadow deepens, illustration bobs, sparkles twinkle |

### Pinboard panel

A polaroid-style frame: white background, 6% padding, 4% radius, a 4:3 illustration area and a Caveat caption. Each panel has its own tilt between -5° and 4° and sways gently. On hover it lifts 8px and grows to 106%.

### Pin and thread

- **Pin:** a circle with a red radial gradient (`#FF7A7A` to `#B5121B`) and a small drop shadow. The centre pin is larger with a cream ring.
- **Thread:** a 2.5px thread-red line from each panel’s pin to the centre pin, drawn on scroll, with small white dots moving along it toward the centre.

### Centre card (the fix)

A burgundy card with a round photo, a “The fix” overline, the name in Young Serif and the cream button. A thread-red ring pulses outward from its edge.

### Overline

Figtree 600, 12px, uppercase, 0.14em letter spacing, burgundy on light backgrounds and blush pink on black.

### Footer wordmark

“ANASTASIA A.O” in Anton at 16.2% of its panel width, burgundy on a cream panel with a 16px radius. The first letter tilts -7°. On hover each letter rises 7% in a wave from left to right.

---

## Iconography and illustration

- Line style: 2 to 2.5px stroke, round caps and joins, black on light colours and cream on burgundy.
- Fills: flat brand colours only. No gradients except on pins.
- Arrows: a straight arrow for buttons that move down the page and a diagonal arrow for card links.
- The four-point sparkle is the brand’s only decorative icon.
- Meaningful illustrations get a short text description. Decorative ones are hidden from screen readers.

---

## Motion

### Easing

| Token | Curve | Feel | Use |
|---|---|---|---|
| `--ease-out` | `cubic-bezier(.22, 1, .36, 1)` | Smooth settle | Hero text rising in |
| `--ease-spring` | `cubic-bezier(.34, 1.56, .64, 1)` | Soft overshoot | Buttons, cards, panels, pins, wordmark |
| Linear | `linear` | Constant | Spinners, flowing thread dots |

### Durations

| Duration | Use |
|---|---|
| 0.2s to 0.25s | Button colour and position changes |
| 0.35s to 0.5s | Card and panel hover |
| 0.6s to 0.8s | Entrances (rise, drop, pop) |
| 1.1s to 1.6s | Thread and doodle drawing |
| 4s to 14s | Ambient loops (floating, swaying, slow spin) |

### Motion inventory

| Element | Animation |
|---|---|
| Hero text | Rises 28px into place, staggered by 0.15s |
| Hero shapes | Circle and squiggle float, star spins, sparkle twinkles |
| Logo sparkle | Rotates once every 8 seconds |
| Sections | Fade and rise as they scroll into view (browsers that support scroll-driven animation) |
| Pinboard | Panels drop in, pins pop, threads draw, centre card pops, dots flow along threads, ring pulses |
| Offer cards | Lift and tilt on hover |
| Confirmation | Pops in with a twinkling sparkle |
| Footer wordmark | Letters ripple upward on hover |

### Reduced motion

When the visitor’s device is set to reduce motion, every animation and transition is switched off and smooth scrolling becomes instant. All content stays visible and usable.

---

## Accessibility checklist

- Semantic landmarks: `header`, `main`, `section`, `footer`
- Skip link to the booking form
- One `h1`, with `h2` for each section and `h3` for cards
- Visible labels on every field and `autocomplete` values for name, email and URL
- Minimum touch target of 44 × 44px
- Visible focus on every interactive element
- Text contrast of at least 4.5:1
- Error messages announced with `role="alert"` and confirmation with `role="status"`
- Focus moves to the confirmation heading after a successful booking
- Reduced-motion support
