# Mobile Navigation & RTL Testing Guide

**Document:** Assistio v14 QA Checklist  
**Date:** January 25, 2026  
**Status:** Ready for testing

---

## Pre-Test Setup

1. Open all three pages in a browser:
   - `index.html` (Home)
   - `privacy.html` (Privacy Policy)
   - `terms.html` (Terms of Service)

2. Keep browser console open (F12) to check for errors

3. Test in both browsers:
   - Chrome/Edge (Android emulation: 320px, 390px, 768px)
   - Safari (iOS emulation: 390px, 414px)

4. Test both themes:
   - Dark mode (default)
   - Light mode (toggle button)

5. Test all languages:
   - English (EN)
   - Romanian (RO)
   - Arabic (AR)

---

## SECTION A: Mobile Menu Functionality

### Test A1: Hamburger Button Visibility (All Breakpoints)

| Breakpoint | Device | Expected | Status |
|-----------|--------|----------|--------|
| 320px | iPhone SE | Hamburger visible, 44×44px touch target | ✓ |
| 360px | Android small | Hamburger visible, clickable | ✓ |
| 390px | iPhone 12 | Hamburger visible, clickable | ✓ |
| 414px | iPhone 13 | Hamburger visible, clickable | ✓ |
| 768px | iPad mini | Menu expanded horizontally (no hamburger) | ✓ |
| 1024px | Desktop | Menu expanded horizontally (no hamburger) | ✓ |

**Verification:**
- [ ] Hamburger button shows 3 bars (top, middle, bottom)
- [ ] Button is centered and not cut off
- [ ] Touch target is at least 44×44px
- [ ] No overlap with logo or other header elements

---

### Test A2: Menu Open/Close Behavior

**Steps:**
1. Open page at 390px breakpoint
2. Click hamburger button
3. Verify menu opens from right side
4. Check aria-expanded="true" (inspect element)

**Expected:**
- [ ] Menu slides in smoothly
- [ ] Menu content visible (Home, Features, How it works, etc.)
- [ ] Hamburger button aria-expanded="true"
- [ ] No horizontal scroll appears
- [ ] Body background scrolls are locked (try scrolling)

**Steps for Close:**
1. Click hamburger button again
2. Verify menu closes

**Expected:**
- [ ] Menu slides out
- [ ] aria-expanded="false"
- [ ] Body scrolling re-enabled

---

### Test A3: Outside Click to Close

**Steps:**
1. Open menu (click hamburger)
2. Click on the content area (outside the menu)
3. Verify menu closes

**Expected:**
- [ ] Menu closes immediately
- [ ] No error in console
- [ ] Body scroll re-enabled

---

### Test A4: ESC Key to Close

**Steps:**
1. Open menu
2. Press ESC key
3. Verify menu closes
4. Check that focus returns to hamburger button

**Expected:**
- [ ] Menu closes
- [ ] Hamburger button has focus (keyboard outline visible)
- [ ] No errors in console

---

### Test A5: Nav Link Click Closes Menu

**Steps:**
1. Open menu
2. Click "Features" link (or any nav link)
3. Verify menu closes

**Expected:**
- [ ] Menu closes after clicking link
- [ ] Page scrolls/navigates to section
- [ ] aria-expanded reverts to "false"

---

### Test A6: Scroll Lock When Menu Open

**Steps:**
1. Open menu at mobile breakpoint
2. Attempt to scroll page content with menu open
3. Verify content doesn't scroll

**Expected:**
- [ ] Page content behind menu doesn't scroll
- [ ] Menu itself is scrollable if taller than viewport
- [ ] When menu closes, page scrolling resumes

---

### Test A7: Menu Persistence Across Pages

**Steps:**
1. At 390px breakpoint, open menu on index.html
2. Click "Privacy" link
3. Verify menu closes and navigates to privacy.html
4. Verify Privacy page header has same menu structure
5. Click hamburger on Privacy page
6. Verify menu opens with same content

**Expected:**
- [ ] All 3 pages have identical menu markup
- [ ] Menu works consistently on all pages
- [ ] Nav items link back to index sections correctly

---

## SECTION B: Arabic RTL Layout

### Test B1: Language Switch to Arabic

**Steps:**
1. Open page in dark theme
2. Click language dropdown (top right, shows "EN")
3. Select "AR"
4. Verify page updates

**Expected Changes:**
- [ ] Page dir="rtl" (inspect `<html dir="rtl">`)
- [ ] Page lang="ar" (inspect `<html lang="ar">`)
- [ ] Text alignment flips to right-aligned
- [ ] Header logo moves to right
- [ ] Menu text right-aligned
- [ ] All navigation items translated to Arabic

---

### Test B2: RTL Text Alignment (Headings & Body)

**Steps:**
1. Switch to Arabic (AR)
2. Scroll to Features section
3. Check heading alignment
4. Check paragraph alignment
5. Check card titles

**Expected:**
- [ ] All headings right-aligned
- [ ] All body text right-aligned
- [ ] Card titles right-aligned
- [ ] No text overflow or clipping

---

### Test B3: Mixed LTR Content (Emails, URLs, Prices)

**Steps:**
1. Stay in Arabic mode
2. Scroll to footer
3. Look for email addresses (e.g., "sales@assistio.co")
4. Scroll to pricing section
5. Check prices ($150, $250, etc.)
6. Scroll to contact form
7. Check form labels and submit button

**Expected:**
- [ ] Emails display left-to-right but integrated naturally
- [ ] Prices display correctly (not reversed)
- [ ] URLs/links display correctly
- [ ] No scrambled text next to Arabic
- [ ] Currency symbol appears correctly

---

### Test B4: Form Fields in Arabic RTL

**Steps:**
1. Stay in Arabic mode
2. Scroll to Contact form at bottom
3. Click on "Name" input field
4. Type some Arabic text
5. Check email field

**Expected:**
- [ ] Text cursor appears on the RIGHT side of field (RTL entry)
- [ ] Text displays right-to-left
- [ ] Email field: text centered (special case)
- [ ] Placeholder text positioned correctly
- [ ] Labels (Name, Email, etc.) are right-aligned

---

### Test B5: Dropdowns in Arabic RTL

**Steps:**
1. Stay in Arabic mode
2. Click language dropdown (top right)
3. Verify dropdown menu alignment
4. Scroll to Contact form
5. Click "Industry" dropdown
6. Verify dropdown menu alignment

**Expected:**
- [ ] Language dropdown menu opens to LEFT of button
- [ ] Industry dropdown menu opens to FULL WIDTH below button
- [ ] Menu items are readable
- [ ] Selection works correctly

---

### Test B6: Arabic on Mobile Menu

**Steps:**
1. Switch to Arabic
2. Go to 390px breakpoint
3. Click hamburger
4. Verify menu opens from LEFT (RTL)

**Expected:**
- [ ] Menu slides in from LEFT side
- [ ] Menu items right-aligned
- [ ] Menu closes from left
- [ ] Outside click/ESC key still works

---

### Test B7: Legal Pages (Privacy/Terms) in Arabic

**Steps:**
1. Switch to Arabic
2. Navigate to Privacy page
3. Check heading "سياسة الخصوصية" (Privacy Policy in Arabic)
4. Check body text alignment
5. Check email links
6. Navigate to Terms page
7. Repeat for terms

**Expected:**
- [ ] Headings right-aligned
- [ ] Body text flows naturally right-to-left
- [ ] Email links display correctly (not scrambled)
- [ ] Lists have proper bullet positioning (right side)
- [ ] No overflow or clipping

---

## SECTION C: Light Theme + RTL

### Test C1: Light Theme + Arabic

**Steps:**
1. Switch to Light theme (click theme toggle)
2. Verify page colors change
3. Switch to Arabic
4. Verify Arabic layout works in light theme

**Expected:**
- [ ] Light theme applies (light background, dark text)
- [ ] Arabic mode still works correctly
- [ ] Text remains readable
- [ ] Dropdowns/menu visible
- [ ] Form fields usable

---

### Test C2: Light Theme + Mobile Menu

**Steps:**
1. Light theme enabled
2. At 390px breakpoint
3. Click hamburger
4. Verify menu opens with light theme styling

**Expected:**
- [ ] Menu background light (not dark)
- [ ] Text visible and readable
- [ ] Menu closes/opens correctly

---

## SECTION D: Cross-Language Consistency

### Test D1: Language Persistence

**Steps:**
1. Switch to Arabic
2. Refresh page (F5)
3. Verify page is still in Arabic

**Expected:**
- [ ] Language persists in localStorage
- [ ] Page loads in Arabic without re-selecting

**Steps:**
1. Switch to Romanian
2. Reload page
3. Verify stays in Romanian

**Expected:**
- [ ] Language switching works for EN/RO/AR
- [ ] Each language persists

---

### Test D2: Theme Persistence

**Steps:**
1. Switch to Light theme
2. Switch to Arabic
3. Refresh page
4. Verify theme AND language both persist

**Expected:**
- [ ] Both localStorage keys saved
- [ ] Page loads with correct theme AND language
- [ ] No conflicts between settings

---

### Test D3: Page Navigation Preserves Language

**Steps:**
1. Set to Arabic
2. Click "Privacy" link
3. Verify Privacy page loads in Arabic
4. Click "Terms" link
5. Verify Terms page loads in Arabic
6. Click Home
7. Verify Home loads in Arabic

**Expected:**
- [ ] Language selection persists across ALL pages
- [ ] No need to re-select language

---

## SECTION E: Breakpoint Testing

### Test E1: No Horizontal Scroll

**Steps:**
Test at each breakpoint. Use DevTools to set viewport width.

| Breakpoint | Method | Status |
|-----------|--------|--------|
| 320px | Narrow phone | No scroll |
| 360px | Android | No scroll |
| 390px | iPhone 12 | No scroll |
| 414px | iPhone 13 | No scroll |
| 768px | iPad portrait | No scroll |
| 1024px | Desktop | No scroll |

**Verification:**
- [ ] No horizontal scrollbar at any breakpoint
- [ ] Content fits within viewport
- [ ] Text doesn't overflow

---

### Test E2: Menu Behavior at Breakpoint Boundaries

**Steps:**
1. Start at 390px (menu open)
2. Resize to 768px
3. Verify menu switches to horizontal
4. Resize back to 390px
5. Verify hamburger reappears

**Expected:**
- [ ] At <980px: hamburger menu
- [ ] At ≥980px: horizontal menu (no hamburger)
- [ ] Smooth transition
- [ ] No layout shift

---

## SECTION F: Browser Compatibility

### Test F1: iOS Safari (iPhone 12/13)

**Steps:**
1. Open site on physical iPhone or Safari emulation
2. Test hamburger menu
3. Test language switching
4. Test Arabic RTL

**Expected:**
- [ ] All features work
- [ ] No zoom/scaling issues
- [ ] Touch events responsive

---

### Test F2: Android Chrome (Pixel 4/5)

**Steps:**
1. Open site on physical Android or Chrome emulation
2. Test hamburger menu
3. Test outside click
4. Test Arabic

**Expected:**
- [ ] Menu opens/closes
- [ ] Touch targets responsive
- [ ] Smooth scrolling
- [ ] No layout jumps

---

## SECTION G: Accessibility (A11y)

### Test G1: Keyboard Navigation

**Steps:**
1. Press TAB multiple times
2. Verify focus order:
   - Skip link first
   - Logo
   - Hamburger (mobile)
   - Nav items (desktop)
   - Theme toggle
   - Language dropdown
   - CTA buttons

**Expected:**
- [ ] Focus visible (outline or highlight)
- [ ] Logical tab order
- [ ] No focus trap

---

### Test G2: Screen Reader (NVDA/JAWS/VoiceOver)

**Steps:**
1. Enable screen reader
2. Navigate to hamburger button
3. Verify announcement: "Menu button, aria-expanded: false"
4. Click button
5. Verify announcement: "aria-expanded: true"
6. Navigate menu items
7. Verify each link announced

**Expected:**
- [ ] Button role announced
- [ ] aria-expanded state announced
- [ ] Menu items navigable
- [ ] Links have purpose

---

## SECTION H: Console Errors

### Test H1: No JavaScript Errors

**Steps:**
1. Open DevTools Console (F12)
2. Go through all tests above
3. Check for errors, warnings, or messages

**Expected:**
- [ ] No red errors in console
- [ ] No "Uncaught" exceptions
- [ ] Warnings acceptable (third-party, etc.)

---

## Test Summary

| Category | Result | Notes |
|----------|--------|-------|
| Mobile Menu | PASS/FAIL | |
| Arabic RTL | PASS/FAIL | |
| Light Theme | PASS/FAIL | |
| Cross-page Navigation | PASS/FAIL | |
| Breakpoints | PASS/FAIL | |
| iOS Safari | PASS/FAIL | |
| Android Chrome | PASS/FAIL | |
| Accessibility | PASS/FAIL | |
| Console Errors | PASS/FAIL | |

---

## Sign-Off

- **Tested by:** _______________
- **Date:** _______________
- **Overall Status:** ✓ PASS / ✗ FAIL
- **Ready for Production:** YES / NO
- **Notes:**

---

**End of Testing Guide**
