# Assistio v14 — Quick Reference

**Version:** 14 (Mobile Nav + RTL Fixes)  
**Date:** January 25, 2026

---

## What Changed?

### 🔧 Mobile Menu
- Fixed hamburger icon (added middle bar)
- Unified menu classes to `.is-open`
- Added scroll lock when menu open
- Improved click-outside detection
- Added ESC key support
- Added tap target sizing (44×44px)

### 🌍 Arabic/RTL
- Applied `dir="rtl"` when language is Arabic
- Added logical CSS properties
- Mixed LTR content isolation (emails, prices, URLs)
- Form field RTL support
- Dropdown positioning flip
- Header controls reordering
- Arabic font fallback stack

---

## Files Changed

| File | Changes | Lines |
|------|---------|-------|
| index.html | Hamburger icon fix | +1 |
| privacy.html | Hamburger icon fix | +1 |
| terms.html | Hamburger icon fix | +1 |
| scripts.js | Mobile menu logic + changelog | +30 |
| styles.css | RTL + logical properties | +150 |

**Total:** 5 files, ~180 lines changed

---

## Key Code Patterns

### Hamburger Icon (HTML)
```html
<span aria-hidden="true" class="nav-toggle-bars"><span></span></span>
```

### Menu Classes (CSS/JS)
```css
.nav-menu.is-open { display: flex; }  /* Only this */
```

### Mobile Menu (JS)
```javascript
const lockBodyScroll = (lock) => {
  document.body.style.overflow = lock ? 'hidden' : '';
};

const closeMenu = () => {
  menu.classList.remove('is-open');
  lockBodyScroll(false);
};
```

### RTL Support (CSS)
```css
html[dir="rtl"] input {
  text-align: right;
  direction: rtl;
}

html[dir="rtl"] [dir="ltr"] {
  unicode-bidi: isolate;  /* Prevent mixing */
}
```

---

## Testing Basics

### Mobile Menu
1. ✓ Click hamburger — menu opens
2. ✓ Click outside — menu closes
3. ✓ Press ESC — menu closes
4. ✓ Click nav link — menu closes
5. ✓ Try to scroll — body locked
6. ✓ Tap target ≥ 44×44px

### Arabic RTL
1. ✓ Switch to AR — `dir="rtl"` applied
2. ✓ Text right-aligned
3. ✓ Emails/URLs isolated (not scrambled)
4. ✓ Form fields respond to RTL
5. ✓ Dropdowns position correctly

### Breakpoints
1. ✓ 320px–414px — Menu hamburger
2. ✓ 768px+ — Menu horizontal
3. ✓ No horizontal scroll at any width
4. ✓ No layout shift at boundaries

---

## Browser Support

| Browser | Mobile | Desktop | Status |
|---------|--------|---------|--------|
| Chrome | ✓ | ✓ | Fully supported |
| Safari | ✓ | ✓ | Fully supported |
| Firefox | — | ✓ | Fully supported |
| Edge | — | ✓ | Fully supported |

---

## Common Issues & Fixes

### Issue: Menu not closing
**Fix:** Verify `.is-open` class is being removed, check console for errors

### Issue: Arabic text scrambled
**Fix:** Ensure `dir="rtl"` is applied, check unicode-bidi rules in CSS

### Issue: Horizontal scroll on mobile
**Fix:** Check max-height is set on .nav-menu, verify no absolute positioning

### Issue: Dropdowns misaligned in RTL
**Fix:** Check `html[dir="rtl"] .lang-dd-menu` has `left:0` (not `right:0`)

### Issue: Form fields backward in Arabic
**Fix:** Ensure RTL form rules exist: `html[dir="rtl"] input { text-align:right; direction:rtl; }`

---

## Important Notes

- **Keep `.is-open` class** — Don't mix with `.open` class
- **Check `dir` attribute** — `<html dir="rtl">` for Arabic, `dir="ltr"` for English
- **Test on real devices** — DevTools emulation not always accurate for touch
- **Clear localStorage** — When testing language switching
- **Check console** — No errors should appear during navigation

---

## Adding New Features

### New Nav Link
```html
<a class="nav-link" data-navlink="" data-i18n="nav_feature" href="#section">Feature</a>
```

### New RTL Element
```css
html[dir="rtl"] .new-element {
  text-align: right;  /* or start/end */
  margin-inline-start: 10px;  /* instead of margin-left */
}
```

### New Form Field
```html
<input type="text" data-i18n-placeholder="placeholder_key" />
```

---

## Performance Tips

- Use `max-height` instead of `height` for expandable menus
- Apply `touch-action:manipulation` for faster clicks
- Use logical CSS properties for maintainability
- Use `unicode-bidi:isolate` for mixed content (don't use `bidi-override`)

---

## Deployment

1. **Review:** Read CHANGELOG_v14.md
2. **Test:** Use TESTING_GUIDE_v14.md
3. **Deploy:** Replace 5 files (all backwards compatible)
4. **Verify:** Check homepage loads, menu opens, Arabic works
5. **Monitor:** Watch error console for 24 hours

---

## Rollback

If issues arise:
```bash
git checkout HEAD~1 index.html privacy.html terms.html scripts.js styles.css
```

---

## Resources

- **CHANGELOG:** CHANGELOG_v14.md (detailed changes)
- **Testing:** TESTING_GUIDE_v14.md (comprehensive QA)
- **Summary:** IMPLEMENTATION_SUMMARY.md (full overview)

---

**Questions?** Check the documentation files above.

**Status:** ✅ PRODUCTION READY
