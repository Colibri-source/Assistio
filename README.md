# Assistio — MVP Website

This folder contains a static, dark-theme website for the Assistio MVP (first 60 days only).

## Live Links (wired into buttons)
- Book a call: https://calendar.app.google/GMchKdxTNZm9UJVS6
- Automation Pack (Stripe): https://buy.stripe.com/cNi6oH3XA13u6bD8NI8IU01
- Setup Fee (Stripe): https://buy.stripe.com/14AaEX2Tw4fGgQhe828IU02

## Pages
- index.html (Home + Features + Pricing + FAQ + Contact)
- privacy.html
- terms.html

## Deploy (GitHub Pages)
1. Upload these files to the root of your GitHub repo.
2. Settings → Pages → Deploy from branch → main → /(root)
3. Open your GitHub Pages URL.

## Notes
- This site is static; payments are handled via Stripe Payment Links.
- If the price shown on-site differs from Stripe Checkout, update the Stripe Payment Link price (Stripe is the source of truth).
