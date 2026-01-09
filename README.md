# nextstarter

A reusable Next.js starter with:
- next.js (app router)
- clerk auth (protected `/app/*`)
- neon postgres via vercel storage
- prisma (pinned v6) + migrations
- user table mapped to clerk user
- vercel blob storage (with test route)
- tailwind + shadcn-ready setup

## quickstart (new project)

### 1) create a new repo from this template (github)
click **use this template**.

### 2) install + link vercel
```bash
pnpm install
vercel link
```

### 3) create storage in vercel

vercel dashboard → project → storage:
- create neon postgres
- create blob

### 4) add clerk keys in vercel env

add:
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY
```
then pull env:
```bash
vercel env pull .env.local
cp .env.local .env
```

### 5) migrate
```bash
pnpm exec prisma migrate dev
```

### 6) run
```bash
pnpm dev
```

## routes

- /app/settings → proves clerk + db mapping
- POST /api/blob-test → uploads a test blob and returns a public url

## baseline rules

see `BASELINE.md`

## notes
- Next.js 16 uses proxy.ts (replaces middleware.ts).