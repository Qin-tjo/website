# Qin Tjokrosurjo, PhD Consulting Website

A polished one-page Next.js site for an independent oncology biomarker strategy consulting practice.

## Edit Content

Most meaningful site content lives in:

```text
src/config/site.ts
```

Edit this file to update the name, positioning, email, social links, services, selected work, SEO metadata, CTAs, and headshot path.

To add a headshot, save the image in `public/`, for example:

```text
public/qin-headshot.jpg
```

Then set:

```ts
headshot: {
  src: "/qin-headshot.jpg",
  alt: "Qin Tjokrosurjo, PhD",
  initials: "QT",
}
```

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push the `website/` folder to a GitHub repository, or set this repository's Vercel root directory to `website`.
2. Use the default Vercel framework detection for Next.js.
3. Build command: `npm run build`.
4. Output directory: use the default Next.js setting.

## Content Guardrails

- Keep email as the primary CTA.
- Do not add fixed package prices or pricing tables.
- Do not use legal-entity language unless a legal entity exists.
- Label portfolio items as client work, sample work, concept work, mock work, or example deliverables.
- Do not imply sample work is a paid client project.
- Do not add fake clients, metrics, testimonials, publications, affiliations, regulatory claims, or case-study results.
