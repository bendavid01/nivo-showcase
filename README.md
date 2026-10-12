# Nivo — In Development

A cinematic product and engineering showcase for the planned human-first, local-first Nivo finance companion. Built with Next.js, TypeScript, Tailwind CSS and Lucide icons.

**The Android app is not publicly released. Beta testing has not yet been confirmed.** This repository contains only the showcase website. Architecture and security descriptions are proposed goals, not audited or implemented guarantees. All dashboard balances, names, transactions and SMS examples are fictional.

## Local development

Use Node.js 20.9 or newer with npm.

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:3000.

## Checks and production build

```sh
npm run typecheck
npm run build
```

The build exports a static website into `out/`. Upload the contents of that directory to a static hosting provider. No environment variables, API keys, accounts or database are needed. Publishing this source repository does not automatically enable GitHub Pages.

## Website interactions

- Responsive navigation and reduced-motion support.
- Architecture layers with click and up/down keyboard navigation.
- Four discovery stages with an explicit replay control.
- Engineering notes using native expandable details.

## Source provenance

This is the existing Nivo cinematic case study created in the “Build Nivo cinematic case study” Work chat on October 10, 2026. Its original source was verified on the owner's Windows computer under `Documents/Codex/2026-10-10/referenced-chatgpt-conversation-this-is-an-2/outputs/nivo`. A public Sites deployment also exists. This GitHub copy omits deployment identity, Git history, generated output and local runtime files.

The finance app, signing material, personal financial records and recovery secrets do not belong in this repository.
