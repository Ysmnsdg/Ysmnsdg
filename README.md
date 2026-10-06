# Atelier Hale — Personal Dentist Brand System

A premium, reusable personal-brand website for **one** high-end private dentist.

Built with Next.js, TypeScript, and Tailwind CSS.

## Replace the dentist

All identity content lives in centralized data files:

| File | Purpose |
|------|---------|
| `src/data/dentist.ts` | Name, bio, portrait, contact, credentials, trust signals |
| `src/data/treatments.ts` | Signature treatments |
| `src/data/concerns.ts` | Treatment discovery concerns |
| `src/data/technologies.ts` | Enabled clinical technologies |
| `src/data/cases.ts` | Anonymized case studies |
| `src/data/testimonials.ts` | Patient stories |
| `src/data/articles.ts` | Journal articles |
| `src/data/faq.ts` | FAQ, journey steps, principles |

**Never invent credentials, ratings, patient volumes, or technologies.** Leave optional fields empty/`undefined`/`enabled: false` — the UI hides them automatically.

## Develop

```bash
cd Projects/dentist-atelier
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Design principles

- Personal brand first (not a clinic template)
- Warm ivory / espresso palette with champagne gold accents only
- Editorial serif + contemporary sans
- Calm motion with `prefers-reduced-motion` support
- Educational content ≠ medical diagnosis
- Virtual consultation photo uploads are mock-only until a secure backend exists

## Pages

`/`, `/about`, `/treatments`, `/treatments/[slug]`, `/results`, `/cases/[slug]`, `/experience`, `/technology`, `/virtual-consultation`, `/journal`, `/journal/[slug]`, `/faq`, `/contact`, `/book`
