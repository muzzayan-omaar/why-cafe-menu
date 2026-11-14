# WHY CAFE · Mobile Menu (Abu Dhabi)

Mobile-first digital menu for WHY CAFE. Designed for QR code scanning.

## Features

- **Auto language detection**: Arabic browsers open in Arabic (RTL) first
- Language toggle (EN | عربي) with localStorage persistence
- Sticky header with greeting + horizontal specials carousel
- Birthday / Celebration event card (upsell)
- Category tabs: Coffee · Desserts · Pizza · Fries · Drinks
- Item cards with real-style photos, name, price in AED
- Full detail modal (tap card → larger view + description)
- Modern classy warm palette (espresso, cream, gold)
- Touch-friendly, iPhone & Android friendly

## Quick start

```bash
cd why-cafe-menu
npm install
npm run dev
```

Open http://localhost:3000

## Adding / editing items

Edit `src/lib/menu-data.ts`.  
Each item supports:

- bilingual name & description
- price (AED)
- image URL (or put files in `/public/images/...`)
- tags: `"special" | "winter" | "new"` → appears in specials strip

## Replacing images

Current images are high-quality Unsplash placeholders matching each drink/dessert.  
Replace the `image` URLs in `menu-data.ts` with your own product photos (recommended path: `/public/images/coffee/spanish-latte.jpg` etc.).

## Deploy

Push to GitHub → connect to Vercel.  
Perfect for a permanent QR code URL.
