# Sanity CMS setup (Phase 0)

Do this once. About five minutes.

## 1. Create a free Sanity project

1. Open [https://www.sanity.io/get-started](https://www.sanity.io/get-started) and sign up (GitHub login is fine).
2. Create a project named **portfolio** (or similar).
3. Choose dataset **production**.
4. On the free plan the dataset is **public** — only put already-public portfolio content in it.
5. Copy the **Project ID** from [https://www.sanity.io/manage](https://www.sanity.io/manage).

## 2. Local environment

```bash
cp .env.example .env.local
```

Fill in:

| Variable | Value |
| --- | --- |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Project ID from the dashboard |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` |
| `SANITY_REVALIDATE_SECRET` | A long random string (e.g. `openssl rand -hex 32`) |
| `SANITY_API_WRITE_TOKEN` | Create under Project → API → Tokens → Add API token → **Editor**. Only needed for `bun run cms:import`. |

## 3. Import today’s content

```bash
bun run cms:import
```

Uploads text and the project screenshots from `public/images/projects` into Sanity.

## 4. Studio login

```bash
bun run dev
```

Open [http://localhost:3000/studio](http://localhost:3000/studio) and sign in with the same Sanity account. Only project members can edit.

## 5. Vercel (production)

In the Vercel project → Settings → Environment Variables, add the same three public/runtime vars (`NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `SANITY_REVALIDATE_SECRET`). Redeploy once.

## 6. Webhook (after deploy)

In Sanity Manage → API → Webhooks → Create webhook:

- **URL:** `https://www.khushalagarwal.dev/api/revalidate?secret=YOUR_SANITY_REVALIDATE_SECRET`
- **Dataset:** `production`
- **Trigger:** Create, Update, Delete
- **Projection / filter:** leave default, or filter to published documents
- **HTTP method:** POST
- **Secret:** same value as `SANITY_REVALIDATE_SECRET` (also sent as query param above)

After Publish in Studio, the live site should refresh within seconds with no Vercel deployment.

## Without Sanity env vars

The site still builds and serves from the repo snapshot in `src/content.ts`. Studio shows a setup message until the project ID is set.

`bun run cms:sync` writes plain-text exports under `content-snapshot/` (gitignored). The emergency content backup is always `src/content.ts`.
