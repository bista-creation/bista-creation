# Bista Creation — Website

Production-grade Next.js (App Router) website for **Bista Creation**.

## Concept

Cinematic, AI-powered music and video studio site. Dark obsidian base, champagne gold and crimson accents, liquid glass cards, `Cinzel` + `Plus Jakarta Sans` typography.

Tagline: **“Sound you can see.”**

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS 4 (`@tailwindcss/postcss`)
- Motion (`motion`) for animation
- lucide-react icons
- Zod for form validation
- fast-xml-parser for YouTube RSS parsing

## Scripts

- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint
- `npm run typecheck` — TypeScript check

## Environment

Copy `.env.example` to `.env.local`.

- `YOUTUBE_API_KEY` — optional YouTube Data API v3 key (free tier). RSS is used as fallback.
- `YOUTUBE_CHANNEL_ID` — YouTube channel ID (default: `UCLJK80I7OcbMTqIWNEpF5aw`).
- `INSTAGRAM_ACCESS_TOKEN` / `INSTAGRAM_BUSINESS_ACCOUNT_ID` — optional for live Instagram feed.
- `FACEBOOK_PAGE_ID` / `FACEBOOK_PAGE_ACCESS_TOKEN` / `META_GRAPH_VERSION` — optional for Facebook feed.
- `NEXT_PUBLIC_SITE_URL` — public site URL.

## API routes

- `GET /api/youtube` — YouTube releases (RSS + optional Data API), cached 1h.
- `GET /api/instagram` — Instagram feed (Graph API when configured, fallback otherwise), cached 1h.
- `GET /api/facebook` — Facebook posts (Graph API when configured, fallback otherwise), cached 1h.

## Contact

- WhatsApp: +9779851150987 → `https://wa.me/9779851150987`
- Email: bistacreation@gmail.com
