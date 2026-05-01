# Premium Quality Page Implementation Plan

This plan details the creation of a new, premium "Quality" page for Ramros Wire and Cable Industries, adhering to the brand's established visual identity, typography, and animation standards.

## Proposed Changes

---

### Routing & Navigation
* Update routing to support `/quality`
* Update navigation links to point to the new page.

#### [MODIFY] [App.jsx](file:///d:/Harsh%20Work/Ramros/Website%20(v2)/src/App.jsx)
- Import the new `Quality` component.
- Add `<Route path="/quality" element={<Quality />} />` within the `<Routes>` block.

#### [MODIFY] [Navbar.jsx](file:///d:/Harsh%20Work/Ramros/Website%20(v2)/src/components/Navbar/Navbar.jsx)
- Change the anchor link `<a href="#quality">Quality</a>` to a React Router `<Link to="/quality">Quality</Link>`.
- Apply the conditional active link class logic to the new route.

---

### Quality Page Component
* Create the structure, layout, and scroll animation logic for the Quality page.

#### [NEW] [Quality.jsx](file:///d:/Harsh%20Work/Ramros/Website%20(v2)/src/pages/Quality/Quality.jsx)
This file will contain the primary React component for the page. It will implement the `IntersectionObserver` pattern (similar to `About.jsx`) to handle smooth scroll-reveal animations (`revealRefs`).

**Sections Breakdown:**
1. **Hero Section:** Will use the animated wavy SVG background and display the multi-line "QUALITY BUILT INTO EVERY WIRE AND CABLE" heading, revealing line-by-line.
2. **Certifications Section:** A structured, premium 3-column or 2-column grid displaying the BIS, CE, RoHS, ASHCO, ERDA, and FIA TAC icons imported from `src/assets/certifications/`. Each item will feature the icon, title, and support text.
3. **Quality Philosophy Section:** A spacious, typography-led text block.
4. **Quality Process Section:** A numbered layout (01 to 04) with clean dividers, minimal design, and spacious text blocks.
5. **Testing & Checks Section:** A premium checklist using red accent marks.
6. **Manufacturing Strength Section:** An industrial visual placeholder with floating trust labels overlaid.
7. **Quality Across Product Categories:** A custom expandable accordion component (state-managed) for listing product ranges (House Wires, Power Cables, etc.).
8. **Final CTA:** Reusing the existing `<CTA />` component with custom props for the heading, subtext, and buttons.

#### [NEW] [Quality.module.css](file:///d:/Harsh%20Work/Ramros/Website%20(v2)/src/pages/Quality/Quality.module.css)
This file will contain the modular CSS styles for the page.

**Styling Guidelines:**
- **Colors:** `#ffffff` (white background), `#fafafa` (off-white for section variation), `#423E3C` (dark text), `#E31E24` (brand red accents).
- **Typography:** `var(--font-main)` with bold weights (`700`, `900`) for headings and lighter weights (`300`, `400`) for descriptions.
- **Animations:** `.reveal` (opacity 0, translateY 40px) transitioning to `.revealVisible` (opacity 1, translateY 0) over `1s cubic-bezier`.
- **Layout:** Heavy use of `clamp()` for responsive typography, large paddings (e.g., `10rem 8%`) for whitespace, and CSS Grid/Flexbox for structured sections.

## User Review Required

> [!IMPORTANT]
> - Please review the proposed **Quality Across Product Categories** section. I plan to build a custom CSS-driven Accordion interaction directly in `Quality.jsx`. Is this acceptable, or do you have an existing Accordion component?
> - For the **Manufacturing Strength Section**, I will use a generic placeholder colored box for the industrial image unless you have a specific asset path you'd like me to use (e.g., `src/assets/manufacturing.jpg`).

## Verification Plan

### Automated/Code Verification
- Ensure the React Router properly navigates to `/quality` without reloading.
- Verify that `IntersectionObserver` correctly applies the `.revealVisible` class upon scroll.

### Manual Verification
- Scroll through the page to ensure all entrance animations feel premium and synchronized.
- Ensure the accordion items open and close correctly.
- Verify mobile responsiveness (stacked grids, adjusted typography sizes) across all new sections.
