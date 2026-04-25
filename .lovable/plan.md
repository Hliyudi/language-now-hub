## Update Facebook Links

Replace the existing Facebook URL with the correct profile URL in the two locations where it appears. No design or behavior changes — links already use `target="_blank"` and `rel="noopener noreferrer"`.

**New URL:** `https://www.facebook.com/profile.php?id=61560973617683`

### Changes

1. **`src/components/Navbar.tsx`** (line 33)
   - Update `href` in the `socials` array Facebook entry from `https://www.facebook.com/languagenowpa` → new URL.

2. **`src/components/Footer.tsx`** (line 35)
   - Update the Facebook anchor `href` from `https://www.facebook.com/languagenowpa` → new URL.
   - Keep visible link text as `Facebook: @languagenowpa` (display label only, design unchanged).

### Out of scope
- No layout, icon, color, or styling changes.
- No changes to other social links (Instagram, TikTok, LinkedIn, WhatsApp).
