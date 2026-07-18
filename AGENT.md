# AGENT.md

## Project overview
This project is a bilingual landing page starter for a social media management business. It uses Next.js with TypeScript, is intended for deployment on Cloudflare Pages, and is structured to support Indonesian and English routes.

## Primary goal
Maintain a clean, conversion-focused website for service sales. The site should clearly explain services, pricing, workflow, and contact options for prospective clients.

## Stack
- Next.js App Router
- TypeScript
- Static-friendly deployment target: Cloudflare Pages
- Route structure: `/id` and `/en`
- Translation files stored in `src/messages/`

## Core rules
- Keep the website lightweight and easy to deploy.
- Preserve bilingual routing structure.
- Do not mix Indonesian and English copy in the same section unless explicitly requested.
- Prefer reusable components over duplicated markup.
- Keep the landing page focused on one main offer: social media management and content posting services.
- Maintain clean SEO-friendly headings and metadata.

## Content structure
The main landing page should keep this order unless there is a strong reason to change it:
1. Hero
2. Services
3. Pricing
4. Process
5. FAQ
6. Contact

## Localization rules
- Indonesian is the default business language.
- English is the secondary language for broader reach.
- All user-facing text should come from the dictionary files.
- When adding new sections, update both `src/messages/id.ts` and `src/messages/en.ts`.
- Keep message keys aligned across languages.

## Design direction
- Visual style should feel modern, clean, and trustworthy.
- Avoid generic AI-style gradients, over-decorated sections, and vague startup copy.
- Use strong hierarchy, good whitespace, and straightforward CTAs.
- The website is for a real service business, so clarity is more important than flashy effects.

## Coding conventions
- Use TypeScript strictly.
- Prefer server components unless interactivity is required.
- Keep components small and readable.
- Use semantic HTML for accessibility.
- External links must use `target="_blank" rel="noopener noreferrer"` where relevant.
- Do not hardcode language-specific copy directly in components when it belongs in dictionaries.

## Suggested next additions
- Replace placeholder brand name with the final business name.
- Replace the WhatsApp link with the real number.
- Add metadata per locale.
- Add Open Graph tags and favicon.
- Add a portfolio/testimonial section only after the core sales structure is solid.
- Add analytics only after deployment is stable.

## Deployment notes
- Connect the GitHub repository to Cloudflare Pages.
- Use a custom domain from the start.
- Keep the project compatible with static or edge-friendly deployment.
- If adding forms, prefer simple external form handling or a Cloudflare-compatible endpoint.

## What to avoid
- Do not turn the landing page into a general agency marketplace site.
- Do not overload the homepage with too many unrelated services.
- Do not introduce unnecessary libraries for simple UI needs.
- Do not break `/id` and `/en` route consistency.
- Do not add visual effects that reduce readability or performance.

## Definition of done
A change is considered complete when:
- both languages are updated,
- layout works on mobile and desktop,
- content remains focused on conversion,
- links and buttons are valid,
- the page is ready to deploy on Cloudflare Pages.
