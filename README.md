# Qin Tjokrosurjo, PhD Consulting Website

A simple one-page Next.js site for an independent oncology biomarker strategy consulting practice.

## Edit Content

Most meaningful site content lives in:

```text
src/config/site.ts
```

Edit this file to update the name, positioning, email, social links, services, SEO metadata, CTAs, and headshot path.

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
```

The site is configured for static export and can be deployed to GitHub Pages through the included GitHub Actions workflow.

## Deploy to GitHub Pages

1. Push changes to `main`.
2. In GitHub repository settings, set Pages source to `GitHub Actions`.
3. The workflow builds and deploys the static `out/` directory.

## Content Guardrails

- Keep email as the primary CTA.
- Do not add fixed package prices or pricing tables.
- Do not use legal-entity language unless a legal entity exists.
- Do not add fake clients, metrics, testimonials, publications, affiliations, regulatory claims, or case-study results.
