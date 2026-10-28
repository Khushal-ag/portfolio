# How to edit the portfolio

1. Open [https://www.khushalagarwal.dev/studio](https://www.khushalagarwal.dev/studio) (or `http://localhost:3000/studio` locally).
2. Sign in with your Sanity account (only project members can edit).
3. Edit the document you need:
   - **Site settings** — name, SEO, social links, **resume link**, nav
   - **Home page** — hero, about, footer, GitHub CTA, achievements
   - **Skills / Education** — single documents
   - **Jobs / Projects / Testimonials** — lists; drag to reorder via the `order` field
4. For a project screenshot: upload an image and fill in **alt text** (required).
5. Click **Publish**.
6. Within a few seconds the live site refreshes (webhook → cache tag). No Vercel deploy.

## Rules

- Do not put secrets or private notes in the CMS (the free dataset is public).
- Project **slugs lock after the first create** so URLs stay stable. Need a rename? Add a redirect first, then ask for a one-off unlock.
- New technology logos: most common ones are already in the registry. An unknown skill still shows a generic icon plus its name. Adding a brand-new logo later is a one-line code change.

## Rollback

In Studio, open the document → History → restore an earlier revision → Publish.

## If the site looks stale

Wait up to ~10 minutes (timer safety net), or hit Publish again so the webhook fires. Check Vercel logs for `/api/revalidate`.

## Repo snapshot

`src/content.ts` remains an emergency fallback if Sanity is unreachable. Regenerate text exports with `bun run cms:sync`.
