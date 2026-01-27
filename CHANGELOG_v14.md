# Assistio v14 — Mobile Navigation & Arabic RTL Fixes

**Release Date:** January 25, 2026  
**Type:** Production Bugfix  
**Scope:** All pages (index.html, privacy.html, terms.html) + CSS + JS

---

## What Was Broken

### 1. **Mobile Menu Not Working Reliably**
- **Problem:** Hamburger button had inconsistent class naming (`.open` vs `.is-open`)
- **Issue:** Menu didn't close on outside clicks reliably across iOS Safari and Android Chrome
- **Impact:** Mobile users (320px–414px) couldn't navigate or close the menu once opened
- **Result:** Horizontal scroll and menu overlap on real phones

### 2. **Arabic RTL Broken Layout**
- **Problem:** Arabic text was RTL but layout remained LTR (text-align: left, borders on wrong side)
- **Issue:** Mixed Latin content (emails, URLs, prices) displayed scrambled next to Arabic text
- **Impact:** Arabic users saw unprofessional, unreadable layout; dropdowns positioned wrong
- **Result:** Unusable site in Arabic mode; legal pages unreadable

### 3. **Hamburger Icon Rendering**
- **Problem:** Icon was missing the middle bar (only showed top + bottom bars)
- **Cause:** CSS expected `<span>` inside `.nav-toggle-bars` but HTML didn't have it
- **Result:** Unclear button state; users couldn't tell if menu was open/closed

### 4. **Privacy/Terms Pages Inconsistent**
- **Problem:** Different nav markup from home page (FAB language selector, different classes)
- **Impact:** Navigation behavior inconsistent across site; harder to maintain

---

## What Was Changed

### **PART A: Mobile Menu Fixes**

#### 1. **HTML (All 3 pages: index.html, privacy.html, terms.html)**
```html
<!-- BEFORE -->
<span aria-hidden="true" class="nav-toggle-bars"></span>

<!-- AFTER -->
<span aria-hidden="true" class="nav-toggle-bars"><span></span></span>
```
✅ Added middle `<span>` to render 3-bar hamburger icon correctly.

#### 2. **CSS (styles.css)**
```css
/* BEFORE */
.nav-menu.is-open, .nav-menu.open{display:flex}

/* AFTER */
.nav-menu.is-open{display:flex}
/* Added to mobile styles: */
  max-height:calc(100vh - 54px);
  touch-action:manipulation;
  /* Added RTL support: */
  html[dir="rtl"] .nav-menu{right:auto;left:0;border-left:none;border-right:1px solid rgba(255,255,255,.10)}
```
✅ Unified class to `.is-open` only  
✅ Added viewport height constraint (no off-screen menu)  
✅ Added touch-action for better mobile performance  
✅ RTL positioning flip  

#### 3. **JavaScript (scripts.js)**

**Before:** Inconsistent close logic, mixed `.open` and `.is-open` classes  
**After:**
- `initNav()` now uses unified `.is-open` class
- **Scroll lock:** Body overflow locked when menu open (prevents background scroll)
- **Click-outside:** Robust detection with null checks
- **ESC key:** Closes menu and refocuses button
- **Touchend:** Nav links trigger close on mobile
- **Improved aria-expanded:** Always synced with menu state

```javascript
// NEW: Scroll lock helper
const lockBodyScroll = (lock) => {
  if (lock) {
    document.body.style.overflow = 'hidden';
    document.body.style.overscrollBehavior = 'contain';
  } else {
    document.body.style.overflow = '';
    document.body.style.overscrollBehavior = '';
  }
};

// NEW: Proper open/close functions
const closeMenu = () => {
  toggle.setAttribute('aria-expanded', 'false');
  menu.classList.remove('is-open');  // ← Single class
  lockBodyScroll(false);
};

const openMenu = () => {
  toggle.setAttribute('aria-expanded', 'true');
  menu.classList.add('is-open');  // ← Single class
  lockBodyScroll(true);
};
```

---

### **PART B: Arabic RTL Fixes**

#### 1. **CSS (styles.css) — Logical Properties + RTL Isolation**

**Added comprehensive RTL section:**

```css
/* Mixed LTR isolation for Arabic (email, URLs, prices, dates, Latin text) */
html[dir="rtl"] [dir="ltr"],
html[dir="rtl"] a[href*="mailto:"],
html[dir="rtl"] a[href*="http"],
html[dir="rtl"] .email,
html[dir="rtl"] .price-amt,
html[dir="rtl"] .contact-name{
  direction:ltr;
  unicode-bidi:isolate;  /* ← Prevent scrambling in Arabic context */
  text-align:start;
}

/* Form elements in RTL */
html[dir="rtl"] input,
html[dir="rtl"] textarea,
html[dir="rtl"] select{
  text-align:right;
  direction:rtl;
}
html[dir="rtl"] input[type="email"],
html[dir="rtl"] input[type="number"]{
  text-align:center;  /* ← Email should be readable */
}

/* Header controls order in RTL */
html[dir="rtl"] .header-right{
  flex-direction:row-reverse;  /* ← Theme toggle + language selector flip */
}

/* Dropdown positioning RTL */
html[dir="rtl"] .lang-dd-menu{right:auto;left:0}
html[dir="rtl"] .form-dd-menu{left:auto;right:0}

/* Hamburger mirror in RTL */
html[dir="rtl"] .nav-toggle-bars{transform:scaleX(-1)}
```

**Benefits:**
- ✅ Emails, URLs, prices display correctly in Arabic context
- ✅ Form fields work naturally in RTL (caret on right, text right-aligned)
- ✅ Dropdowns align to correct side of screen
- ✅ Hamburger icon flips for RTL context

#### 2. **Font Stack for Arabic**
```css
html[dir="rtl"] body{
  font-family: ui-sans-serif, system-ui, -apple-system, 
               "Noto Naskh Arabic", "Noto Sans Arabic", 
               Tahoma, Arial, sans-serif;
}
```
✅ Fallback fonts with Arabic glyph support  
✅ Professional Arabic rendering  

#### 3. **Legal Page RTL**
```css
html[dir="rtl"] .legal-content ul{padding-left:0;padding-right:18px}
html[dir="rtl"] .legal-content h2{text-align:right}
html[dir="rtl"] .legal-content a{direction:ltr;unicode-bidi:isolate}
```
✅ Legal content readable and properly aligned in Arabic  

---

## Acceptance Criteria Met

### ✅ Mobile Menu Working

- **Breakpoints tested:** 320px, 360px, 390px, 414px, 768px, 1024px
- **No horizontal scrolling** at any width
- **Menu opens/closes** correctly on iOS Safari + Android Chrome
- **Clicking nav link closes menu** ✓
- **Clicking outside closes menu** ✓
- **ESC key closes menu** ✓
- **Background scroll locked** when menu open ✓
- **Tap targets ≥ 44px** (hamburger button, nav links) ✓

### ✅ Arabic RTL Formatting

- **Direction:** `dir="rtl"` applied on language change ✓
- **Text alignment:** Headings, paragraphs right-aligned ✓
- **Mixed LTR content:** Emails/URLs/prices isolated, readable ✓
- **Form fields:** Right-to-left entry, centered email input ✓
- **Dropdowns:** Position flips to correct side ✓
- **Header controls:** Theme/language selector reordered ✓
- **No scrambled text** in Arabic context ✓
- **Legal pages** readable in Arabic ✓

### ✅ Cross-language & Theme Support

- **EN/RO/AR** all work consistently ✓
- **Dark + light themes** function correctly ✓
- **Language switching** doesn't break layout ✓
- **Theme persistence** works (localStorage) ✓
- **All pages unified** (index, privacy, terms) ✓

---

## Files Modified

1. **index.html** — Added middle bar to hamburger icon
2. **privacy.html** — Added middle bar to hamburger icon
3. **terms.html** — Added middle bar to hamburger icon
4. **scripts.js** — Enhanced `initNav()` with scroll lock, unified classes, improved close logic
5. **styles.css** — Added comprehensive RTL support, logical properties, mixed LTR isolation, form RTL handling

---

## Testing Checklist

- [x] Hamburger opens menu on all pages
- [x] Menu closes on outside click
- [x] Menu closes on ESC key
- [x] Menu closes on nav link click
- [x] Body scroll locked when menu open
- [x] Tap targets all ≥ 44px × 44px
- [x] No horizontal scroll at 320px–1024px
- [x] Arabic mode: dir="rtl" applied
- [x] Arabic mode: text-align: right on headings
- [x] Arabic mode: emails/URLs isolate correctly
- [x] Arabic mode: form fields respond to RTL
- [x] Light theme + Arabic works
- [x] Dark theme + Arabic works
- [x] Language switch persists in localStorage
- [x] Theme switch persists in localStorage
- [x] Legal pages readable in Arabic
- [x] Mobile menu works on iOS Safari
- [x] Mobile menu works on Android Chrome
- [x] No console errors

---

## Breaking Changes

**None.** This is a backwards-compatible bugfix release.  
All existing functionality preserved; only fixes and enhancements added.

---

## Future Improvements

1. Add touch gesture support (swipe to close menu)
2. Add `prefers-reduced-motion` media query respect for menu animations
3. Consider CSS containment for performance optimization
4. Monitor Arabic font rendering on different devices

---

## Notes for Maintainers

- Do **not** add `.open` class back; use only `.is-open` going forward
- Test all new features on real devices, not just Chrome DevTools
- When adding new nav items, ensure they use `[data-navlink]` attribute
- Keep RTL and LTR content properly isolated with `dir` attributes
- For new form fields in Arabic, test text entry and alignment

---

**Version:** 14  
**Status:** ✅ Production Ready  
**Last Updated:** January 25, 2026
