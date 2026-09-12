# Design System Strategy: The Empathetic Anchor

## 1. Overview & Creative North Star
This design system is built upon the Creative North Star of **"The Empathetic Anchor."** In the high-stakes world of healthcare AI, the interface must act as a steady, calming presence—not just a tool, but a sanctuary. 

To move beyond the generic "medical dashboard" look, we employ an **Editorial Sanctuary** aesthetic. This approach prioritizes excessive white space, intentional asymmetry, and a radical rejection of traditional UI boundaries. We replace rigid grids with organic, layered surfaces that feel like fine stationary or frosted glass, ensuring that every interaction feels premium, authoritative, and profoundly accessible.

---

## 2. Colors & Atmospheric Tones
The palette is rooted in medical precision but executed with high-end digital craftsmanship.

### Tonal Hierarchy
*   **Primary (`#005598`):** Our "Trust Anchor." Used for high-priority actions and authoritative branding.
*   **Secondary (`#1b6d24`):** Representing "Vitality." Used for health indicators, positive progress, and growth.
*   **Tertiary (`#005d63`):** "The Calm." A deep teal used for secondary guidance and informational accents.

### The "No-Line" Rule
Traditional 1px borders are strictly prohibited for sectioning. They create visual noise and "boxes" the user in. Instead, define boundaries through:
*   **Background Shifts:** Contrast `surface` (`#f7f9fb`) against `surface-container-low` (`#f2f4f6`).
*   **Nesting:** Use the `surface-container` scale to create organic depth. An inner card should sit on `surface-container-lowest` (`#ffffff`) when placed on a `surface-container-high` (`#e6e8ea`) section.

### The "Glass & Gradient" Rule
To add soul to the interface:
*   **Glassmorphism:** Floating elements (modals, floating action buttons) must use `surface` at 80% opacity with a `24px` backdrop blur.
*   **Signature Textures:** For Hero sections or primary CTAs, use a subtle linear gradient (135°) transitioning from `primary` (`#005598`) to `primary-container` (`#106ebe`). This mimics the natural depth of professional medical photography.

---

## 3. Typography: The Editorial Voice
We use **Public Sans**—a typeface that balances neutrality with immense legibility. 

*   **Display (lg/md/sm):** Set in `on-surface`. Used for welcome states or critical health summaries. These should feel like magazine headlines—bold and commanding.
*   **Headline & Title:** Use `title-lg` (`1.375rem`) for card headers. Ensure tracking is slightly tightened (-1%) to maintain a premium feel.
*   **Body (lg/md):** Our workhorse. `body-lg` (`1rem`) is the default for assistant dialogue to ensure maximum accessibility for users under stress.
*   **Labels:** Use `label-md` exclusively for metadata.

**The Hierarchy Rule:** Accessibility is not just size; it’s contrast. Always pair `on-surface-variant` (`#414751`) with `surface` for secondary info, but never for critical medical data—that remains `on-surface` (`#191c1e`).

---

## 4. Elevation & Depth: Tonal Layering
We do not use shadows to create "pop." We use layering to create "presence."

*   **The Layering Principle:** Depth is achieved by stacking. A typical screen layout:
    1.  **Base:** `surface`
    2.  **Section:** `surface-container-low`
    3.  **Content Card:** `surface-container-lowest` (pure white)
*   **Ambient Shadows:** If a floating state is required, use a shadow with a `32px` blur, `0%` spread, and `4%` opacity of `on-surface`. It should feel like a soft glow, not a drop shadow.
*   **The "Ghost Border" Fallback:** In high-density data views where containment is vital, use the `outline-variant` (`#c1c7d3`) at **15% opacity**. It should be felt, not seen.

---

## 5. Component Architecture

### Buttons: The Tactile Response
*   **Primary:** Solid `primary` with `on-primary` text. Radius: `md` (`0.75rem`).
*   **Secondary:** `secondary-container` background with `on-secondary-container` text. This provides a soft, accessible alternative to high-contrast buttons.
*   **Tertiary:** No background. Use `primary` text with a `label-md` weight.

### Input Fields: Frictionless Entry
*   **Style:** Background-filled using `surface-container-highest`. No bottom line.
*   **States:** On focus, transition the background to `surface-container-lowest` and add a `2px` "Ghost Border" of `primary`.
*   **Accessibility:** Helper text must always be visible; never hide essential instructions in tooltips.

### Cards & Lists: The No-Divider Standard
*   **Rule:** Forbid 1px dividers between list items. 
*   **Alternative:** Use `16px` of vertical whitespace or a subtle background toggle between `surface` and `surface-container-low` for alternating items.
*   **Rounding:** Apply `xl` (`1.5rem`) to large parent containers and `md` (`0.75rem`) to internal nested chips.

### Specialist Component: The "Vitality Pulse"
For AI-generated insights, use a container with a `surface-tint` (`#0060a9`) at 5% opacity and a `secondary` left-hand accent bar (`4px` width). This signals "AI is processing/assisting" without being intrusive.

---

## 6. Do’s and Don’ts

### Do
*   **Do** use asymmetrical layouts (e.g., a wide left margin for headlines) to create an editorial feel.
*   **Do** prioritize the `surface-container` scale for hierarchy over font weight.
*   **Do** use `full` rounding (`9999px`) for status chips and search bars to convey a friendly, approachable tone.

### Don’t
*   **Don’t** use pure black (`#000000`). Use `on-surface` (`#191c1e`) to keep the "calm" vibe.
*   **Don’t** use standard 4px or 8px corners. Stick to the defined scale, favoring `md` (`0.75rem`) and `xl` (`1.5rem`) for a more modern, softened look.
*   **Don’t** crowd the screen. If a medical result is important, it deserves its own `surface-container-low` section with at least `48px` of padding.