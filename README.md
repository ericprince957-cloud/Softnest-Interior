# Softnest Interior — Digital Showroom Concept

A free, mobile-first concept preview for Softnest Interior: premium fabric showcase with WhatsApp quote requests, built for the 95% TikTok/Instagram audience.

## Stack
- Next.js 14 (App Router) + Tailwind CSS 3
- Static data — no backend, deploys instantly on Vercel

## Quick start
```bash
npm install
npm run dev
```

## Deploy to Vercel
```bash
npx vercel
```
Push to GitHub and import at vercel.com — zero config needed.

## Structure
```
app/            page.tsx, layout.tsx, globals.css
components/     PreviewBanner, Hero, TrustBadge, FabricCatalog,
                FabricCard, MeasurementGuide, Footer
data/           fabrics.json  <- edit catalog here
lib/config.ts   WhatsApp number + message template
public/fabrics/ drop fabric photos here (WebP/AVIF, <200KB)
```

## Customizing
1. **Fabrics** — edit `data/fabrics.json`. Set `image` to a filename inside `public/fabrics/`.
   Until you add photos, cards render an elegant colorway gradient (no broken images).
2. **WhatsApp** — change `WHATSAPP_NUMBER` in `lib/config.ts`. The pre-filled message is built there.
3. **Hero photo** — replace the gradient in `components/Hero.tsx` with a `<Image src="/fabrics/hero.jpg">`.

## Performance notes
- Fonts self-hosted via `next/font` (no external requests at runtime)
- `next/image` serves AVIF/WebP with responsive sizes
- Fully static prerender (SSG) — sub-second first paint

---
Concept by **Vector Codes**
