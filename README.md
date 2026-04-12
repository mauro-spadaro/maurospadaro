# maurospadaro.com

Personal blog by Mauro Spadaro. Writing about tech, product management, and digital innovation.

Live at: [maurospadaro.com](https://maurospadaro.com)

## Stack

- **Frontend** — Next.js 14 (App Router), Tailwind CSS
- **Content** — Markdown files (`frontend/content/articles/`)
- **Hosting** — Vercel (auto-deploys on push to `main`)
- **Analytics** — Vercel Analytics + Google Analytics (G-KPTD00MC69)

Strapi has been removed. Content is managed via markdown files.

## Running locally

```bash
cd frontend && npm run dev
```

Blog runs at http://localhost:3000. No backend needed.

## Project structure

```
├── frontend/
│   ├── content/
│   │   ├── articles/       # Published articles (live on site)
│   │   ├── drafts/         # Work in progress (not published)
│   │   └── templates/      # Obsidian article template
│   └── src/
│       ├── app/
│       │   ├── page.js           # Homepage
│       │   ├── articles/         # Articles list + detail pages
│       │   ├── about/            # About me page
│       │   ├── resources/        # Resources page
│       │   ├── tags/             # Tag pages
│       │   └── components/       # Navbar, Footer, ArticleCard, etc.
│       └── lib/
│           └── articles.js       # Data layer (reads markdown files)
└── backend/                # Strapi (unused, kept for reference)
```

## Writing articles

Articles live in `frontend/content/articles/` as `.md` files with YAML frontmatter:

```yaml
---
title: "Your Article Title"
slug: "your-article-slug"
summary: "One line summary"
publishedDate: "2026-04-12"
thumbnail: "/uploads/your-image.png"
tags:
  - name: "Tag Name"
    slug: "tag-slug"
---

Article body in markdown...
```

**Workflow:**
1. Write in `drafts/` (invisible to the site)
2. Move to `articles/` when ready to publish
3. Push to `main` → Vercel deploys automatically

Images go in `frontend/public/uploads/` and are referenced as `/uploads/filename.jpg`.

## Environment variables

Create a `.env.local` file in `frontend/`:

```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-KPTD00MC69
```
