# Boyzeth Solutions Website

A static Next.js website deployed on Cloudflare Pages with Cloudflare Functions for API routes.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Build

```bash
npm run build
```

The static output is in the `out/` directory. API routes are handled by Cloudflare Functions in `functions/api/`.

## Deploy to Cloudflare Pages

```bash
npx wrangler pages deploy out --branch main
```

Set the required environment variables (`RESEND_API_KEY`, `PAGESPEED_API_KEY`) in the Cloudflare Pages dashboard under **Settings > Environment variables**.
