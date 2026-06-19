---
name: agents-md
description: Enforces Next.js 16 project conventions for this repository. Use before writing any Next.js code — routing, components, API routes, config, or any file under app/. Reminds the agent to read the bundled docs and heed deprecation notices.
---

# Next.js 16 — Project Rules

This is NOT the Next.js you know.

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data.

## Before Writing Any Code

1. Locate the relevant guide:
   ```
   node_modules/next/dist/docs/
   ```
2. Read the guide for the feature you are about to use (routing, Image, Link, font, middleware, etc.).
3. Heed all deprecation notices in the guide.

## Why This Matters

Next.js 16 introduces breaking changes across:
- App Router conventions
- Component APIs (`next/image`, `next/link`, `next/font`, etc.)
- Config schema (`next.config.ts`)
- Middleware and edge runtime behavior

Do not assume behavior from Next.js 13–15. Always verify against the bundled docs.
