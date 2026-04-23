
Implement the Instagram click behavior only in `src/components/WhatsAppButton.tsx`, without changing layout, icon, size, spacing, animation, or position.

1. Update the Instagram item inside the floating contact menu so its click behavior explicitly calls:
   `window.open('https://instagram.com/languagenowpa', '_blank')`

2. Keep the existing visual element and styling exactly as-is:
   - same circular button
   - same gradient Instagram icon
   - same glass/white background
   - same fade/slide animation
   - same stacking above the main chat button

3. Add the click handler directly on the Instagram interactive element and ensure it does not get blocked by parent interactions:
   - stop the menu toggle container from interfering with the click
   - keep `pointerEvents: open ? "auto" : "none"` so it is clickable only when visible
   - preserve the existing high fixed positioning and `z-[9999]`

4. Keep safe external-link semantics where applicable:
   - if the element remains an anchor, keep `target="_blank"` and `rel="noopener noreferrer"`
   - if the click is fully driven by JavaScript, ensure the handler always opens the exact Instagram URL in a new tab

5. Verify no other logic overrides or cancels the Instagram click:
   - no `preventDefault` blocking navigation
   - no placeholder href
   - no parent click handler closing the menu before `window.open` executes

Technical details:
- File to edit: `src/components/WhatsAppButton.tsx`
- Current state: the Instagram button is already a visible top menu item in the floating contact stack, while WhatsApp already uses `window.open(...)`
- Recommended implementation pattern: mirror the WhatsApp button’s reliable click behavior for Instagram, but use the Instagram URL exactly:
  `https://instagram.com/languagenowpa`
