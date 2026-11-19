# Shopfront implementation plan

## Product and implementation

Build a responsive technology-storefront homepage closely modeled on the supplied Pentium City HTML: a compact service strip and stacked navigation, promotional hero, technology categories, featured merchandise, trust/service details, and a substantial footer. Use the approved Shopfront brand treatment and sample technology inventory. This is a frontend-only demonstration: there is no selected Shopify connection, server, database, payment processor, actual store catalog, or real business contact data. Keep sample records and contact settings visibly replaceable; never imply a payment was accepted. The cart persists in browser local storage; checkout opens an honest connection-required state rather than collecting personal or payment information.

Use semantic static HTML, CSS, and vanilla JavaScript (no application framework or external runtime dependency). Store catalog records in a dedicated JS module, use local storage for cart state, and implement client-side search, category/brand/stock/price filtering, sorting, product detail view, cart quantity/removal/subtotal, and checkout entry point. Use exact product photographs linked from the user-provided source HTML where useful, and generate one panoramic custom hero visual with no embedded copy so promotional text remains accessible/editable in HTML. Keep browser requests same-origin/relative. Use a static build that copies the website into `dist/`; serve local Preview on the configured port 3000.

## Project structure

- `index.html` — semantic storefront shell, SEO title/description, route-manifest link target, dialogs, and content landmarks.
- `styles.css` — design tokens, desktop and mobile storefront layouts, product cards, menu, drawers, dialogs, and motion/accessibility behavior.
- `app.js` — sample product data, filtering/search/sort, client-side cart persistence, product details, and transparent checkout state.
- `public/assets/` — the custom hero art, authentic product imagery sourced from the attached HTML, and the custom Shopfront mark/favicon.
- `public/manus-routes.json` — the current static route manifest (`/`).
- `dist/` — generated static production output, not edited by hand.
- `plan.md`, `TODO.md` — approved design/implementation direction and delivery outcomes.

## Design direction

### Design Movement

Reference-led technology megastore: adapt the source’s dense, high-energy electronics retail composition with a cleaner, contemporary finish.

### Core Principles

1. Merchandise and prices are scannable before decoration.
2. Strong sales cues live in predictable red accents, never obscure product information.
3. Clear service, availability, and checkout limitations build trust.
4. Dense desktop merchandising reflows to touch-friendly mobile controls and cards.

### Color Philosophy

Midnight navy frames the store and creates a confident hardware-shop identity; bright white and cool pale gray keep product browsing legible; signal red brings the reference’s promotional urgency; restrained vivid green is reserved for purchase actions. Use red for campaigns and status, not every interaction.

### Layout Paradigm

A layered retail shell (thin service bar, dark identity/search row, dark primary navigation, white secondary category rail) leads into an asymmetric editorial hero and full-width merchandising shelves. Keep section rhythm and anchored product browsing rather than imposing a generic centered landing-page grid. Product grids are used where shoppers need direct comparison and collapse naturally at smaller breakpoints.

### Signature Elements

- Layered navy storefront chrome with a white category/navigation rail.
- Red offer markers and small angled campaign cuts, paired with green purchase controls.
- Square, white-backed product windows with crisp stock/sale badges and visible rating/price hierarchy.

### Interaction Philosophy

Search and filters should change products immediately; all primary controls work by pointer and keyboard; the cart stays available and survives reloads; product detail and cart views do not discard the shopper’s context. Checkout clearly states that payment is unavailable until the owner connects a commerce provider.

### Animation

Use quick 160–220 ms fades/lifts for menus, cards, and drawers, with reduced-motion support. No autoplay carousel or attention-stealing looping effects. Keep focus visible and dialogs dismissible with Escape and a clear close button.

### Typography System

Use Rajdhani for compact, bold retail headings and navigation, with Inter/system sans-serif for product descriptions and body copy. Prices are tabular, bold, and high contrast. Preserve readable minimum sizes and avoid typography embedded in the hero image.

### Brand Essence

Shopfront is a straightforward, helpful place to compare everyday computer and technology essentials; practical, energetic, dependable.

### Brand Voice

Use concise product-first headlines and candid buying guidance; sale copy can be energetic but never invent stock claims or guarantee savings. Example lines: “Build a setup that keeps up.” “Good gear. Clear specs. No guesswork.”

### Wordmark & Logo

A custom compact square circuit/monitor mark plus SHOPFRONT wordmark, built as a simple high-contrast vector that stays legible at header and favicon sizes.

### Signature Brand Color

Signal red `#e5322b` is the ownable campaign color, with ink navy `#10182d` as the stable frame.

## Serving and dependencies

The application is pure static HTML/CSS/JS and requires no server-side feature or database. A tiny dependency-free local static server listens on the project’s configured port 3000 for Preview; the declared production build copies `index.html`, `styles.css`, `app.js`, route metadata, and assets into `dist/`. No Shopify secrets or commerce credentials are assumed. The checkout entry point is present as requested, but real product sync, customer order storage, and secure payment require a future approved commerce integration.
