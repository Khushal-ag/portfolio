# Production go-live checklist

- [ ] Sanity project created; dataset `production`
- [ ] Vercel env: `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `SANITY_REVALIDATE_SECRET`
- [ ] Redeployed once after env vars
- [ ] Ran `bun run cms:import` (with write token) and published documents in Studio
- [ ] Webhook points at `https://www.khushalagarwal.dev/api/revalidate?secret=…`
- [ ] `/studio` opens; only you can sign in
- [ ] Publish a small text change → live site updates in seconds; no Vercel deployment
- [ ] Add a project with screenshot → home, project page, sitemap update; delete again
- [ ] Page source shows title, description, JSON-LD from CMS
- [ ] `/studio` and `/api/*` disallowed in `robots.txt`
- [ ] Lighthouse: a11y 100, SEO 100, performance no worse
- [ ] Submit sitemap in Google Search Console
- [ ] Disable webhook briefly → site catches up within ~10 minutes (cacheLife)
- [ ] Confirm CMS down still serves cached / snapshot content
