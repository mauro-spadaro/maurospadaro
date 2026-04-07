# maurospadaro.com

Personal blog by Mauro Spadaro. Writing about tech, product management, and digital innovation.

## Stack

- **Frontend** — Next.js 14 (App Router), Tailwind CSS
- **Backend/CMS** — Strapi 5

## Running locally

```bash
bash start-servers.command
```

This will start both servers:
- Blog: http://localhost:3000
- Strapi admin: http://localhost:1337/admin

Logs are written to `/tmp/strapi.log` and `/tmp/nextjs.log`.

## Project structure

```
├── frontend/        # Next.js app
│   └── src/app/
│       ├── page.js           # Homepage
│       ├── articles/         # Articles list + detail pages
│       ├── about/            # About me page
│       ├── tags/             # Tag pages
│       └── components/       # Navbar, Footer, ArticleCard
├── backend/         # Strapi CMS
└── start-servers.command
```

## Environment variables

Frontend requires a `.env.local` file in `/frontend`:

```
NEXT_PUBLIC_API_URL=http://localhost:1337
STRAPI_API_TOKEN=your_token_here
```
