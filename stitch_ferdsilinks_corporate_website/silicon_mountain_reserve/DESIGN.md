# Design System Specification: The Digital Architect

## 1. Overview & Creative North Star
**Creative North Star: "The Digital Architect"**
This design system moves beyond the standard corporate "blue-box" template. It is an editorial-first framework that treats data as an art form. Inspired by the burgeoning "Silicon Mountain" ecosystem of Buea, the aesthetic balances the rigid precision of data science with the vibrant, forward-moving energy of African tech innovation. 

We avoid "generic" layouts by employing **The Architect’s Grid**: a philosophy of intentional asymmetry, massive typographic scales, and layered depth. The goal is to make every screen feel like a custom-designed piece of thought leadership—authoritative, futuristic, and meticulously polished.

---

## 2. Colors & Surface Philosophy
The palette is rooted in deep, intellectual navies, accented by a high-energy orange that signals action and innovation.

### Palette Application
- **Primary & Deep Tones:** Use `primary` (#000a1e) for deep immersion and `primary_container` (#002147) for authoritative backgrounds.
- **The Conversion Engine:** `tertiary_fixed` (#ffdcc3) and `on_tertiary_container` (#cf7000) drive the vibrant orange CTA experience.
- **Surface Hierarchy:** Use the `surface` tokens to create a "stepped" depth.
    - **Base:** `surface` (#f8f9fa)
    - **Secondary Content:** `surface_container_low` (#f3f4f5)
    - **Elevated Interactive Elements:** `surface_container_highest` (#e1e3e4)

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to define sections. Boundaries must be defined through:
1. **Background Color Shifts:** Use a `surface_container_low` section sitting against a `surface` background.
2. **Tonal Transitions:** Sophisticated depth is achieved by nesting a `surface_container_lowest` (#ffffff) card inside a `surface_container_high` (#e7e8e9) section.

### The "Glass & Gradient" Rule
To bridge "Corporate" and "Futuristic," use **Glassmorphism** for floating navigation or overlay modals:
- **Material:** Semi-transparent `surface` with a 20px-40px Backdrop Blur.
- **Gradients:** Apply a subtle linear gradient from `primary` to `primary_container` (135°) on Hero sections to add "soul" and dimension to otherwise flat data layouts.

---

## 3. Typography
We use a tri-font system to establish a high-end editorial hierarchy.

| Level | Font Family | Usage | Tone |
| :--- | :--- | :--- | :--- |
| **Display** | Manrope | Large hero headers, data points | Tech-forward, geometric |
| **Headline** | Manrope | Section titles, impact statements | Authoritative, bold |
| **Title** | Inter | Sub-headers, card titles | Clean, professional |
| **Body** | Inter | Long-form reading, descriptions | Highly legible, neutral |
| **Label** | Space Grotesk | Micro-copy, "Silicon Mountain" cues | Technical, futuristic |

**Editorial Contrast:** Pair a `display-lg` (3.5rem) headline with a `body-md` (0.875rem) description. The drastic difference in scale creates a premium "magazine" feel that conveys confidence.

---

## 4. Elevation & Depth
Depth in this system is organic and atmospheric, mimicking natural light over the Buea landscape.

*   **The Layering Principle:** Stack `surface-container` tiers. A `surface_container_lowest` card placed on a `surface_container_low` background creates a "soft lift" without visual clutter.
*   **Ambient Shadows:** Use shadows only for floating components (Modals/Dropdowns). 
    *   *Value:* `0px 24px 48px rgba(0, 33, 71, 0.08)`
    *   *Note:* Shadow color must be a tint of `primary_container`, never pure black or grey.
*   **The "Ghost Border" Fallback:** If accessibility requires a border, use `outline_variant` at 15% opacity. Never use 100% opaque lines.
*   **Silicon Cues:** Use subtle, low-opacity geometric patterns (inspired by Cameroonian textiles) as a background "watermark" on `surface_container_high` sections to ground the tech in its local ecosystem.

---

## 5. Components

### Buttons (The Conversion Drivers)
*   **Primary:** Background `on_tertiary_container` (#cf7000), Text `white`. 
    *   *Shape:* `md` (0.375rem) for a modern, sharp look.
*   **Secondary:** Ghost style with `outline`. On hover, fill with `surface_container_high`.
*   **Interaction:** 200ms ease-in-out transition. Subtle "lift" on hover (Shadow 4% opacity).

### Cards
*   **Rule:** Forbid divider lines. Use `body-sm` typography and `surface` shifts to separate header from footer.
*   **Style:** `surface_container_lowest` background, `xl` (0.75rem) roundedness for a friendly yet professional tech vibe.

### Input Fields
*   **Style:** Minimalist. No bottom border; instead, use a `surface_container_high` fill.
*   **Focus State:** A 2px "Ghost Border" of `secondary` (#115cb9) with a soft outer glow.

### Chips (Data Visualization)
*   **Tech Chips:** Use `Space Grotesk` (label-md) in all-caps. 
*   **Color:** Background `primary_fixed`, text `on_primary_fixed_variant`.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use massive amounts of white space. If a section feels crowded, double the padding.
*   **Do** use intentional asymmetry. Place a small `label-sm` tag high above a massive `display-lg` header.
*   **Do** use high-quality photography of Buea's tech scene combined with abstract data visualizations.

### Don't:
*   **Don't** use 1px grey lines (`#ccc`) to separate content. Use space or tonal shifts.
*   **Don't** use standard "drop shadows." If it doesn't look like ambient light, it doesn't belong.
*   **Don't** use generic icons. Use thin-stroke, custom-styled SVG icons that feel "architectural."
*   **Don't** over-round corners. Keep `DEFAULT` at `0.25rem` for buttons to maintain an "authoritative" edge.

---
*This system is designed to evolve. It is not a rigid cage, but a structural blueprint for the future of tech in Cameroon.*