# Nivo website

Official Nivo product website source: Next.js App Router, TypeScript and Tailwind CSS. Android app in development. No public app availability or release date is claimed. Features are described as planned. All visual data is fictional.

## Run locally

Use Node.js 22 or 24. Run `npm ci`, then `npm run dev`. Open http://127.0.0.1:3000. Validate with `npm run typecheck` and `npm run build`. The static export is written to `out/`.

## Maintain

- `config/site.ts`: release status, description, Android app URL, screenshot paths and feature copy.
- `app/page.tsx`: semantic page structure and narrative.
- `app/globals.css`: responsive design, animations and reduced-motion support.
- `public/images/`: Android visuals exclusively.

When the app is actually released, set status to `released`, add the verified HTTPS store link to `androidUrl`, and update the label and description. Review the page’s development narrative too. The app button appears only with released status and a configured link. Replace concepts with genuine app screenshots when available; do not claim beta availability without confirmation.

The current asset is a generated Android design concept, not a working-app capture. Its captions preserve this distinction. See `ASSETS.md` for the ImageGen prompt.

## Deploy

Import `bendavid01/nivo-showcase` into Vercel using Next.js, repository root and default build settings. No environment variables or secrets are needed. Git integration deploys future main-branch commits automatically. A GitHub push alone does not prove a deployment is live.

The existing repository was reused because the connected GitHub tools do not support deleting/recreating repositories. History is preserved. This project contains website source only, not the Android app or personal financial data.
