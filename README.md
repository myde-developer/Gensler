# Gensler Clone (Starter)

This repository provides a starter full-stack app to recreate a corporate architecture/design site layout with a login/register flow. It's intentionally generic and designed as a learning scaffold — not an exact copy of any website.

Features:
- React + Vite + Tailwind CSS frontend
- Node + Express backend with JWT authentication
- Postgres DB for user storage

Important note: This is a scaffolding and demo. It doesn't include copyrighted content from any external websites.

## Setup

Prerequisites:
- Node 18+ and npm or yarn
- Postgres (13+ recommended)

1) Create a Postgres database

```bash
createdb gensler_clone
psql gensler_clone -c "CREATE USER gensler WITH PASSWORD 'password';"
psql gensler_clone -c "GRANT ALL PRIVILEGES ON DATABASE gensler_clone TO gensler;"
psql gensler_clone -f ./api/migrations/create_users.sql
```

2) Configure environment variables

Copy `api/.env.example` to `api/.env` and update `DATABASE_URL` and `JWT_SECRET`.

3) Run backend

```bash
cd api
npm install
# Run migrations using the script
npm run migrate
# start dev server
npm run dev
```

4) Run frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173` and the backend at `http://localhost:4000` by default.

## Deployment

This repository can be deployed to any hosting provider. Ensure you set the following environment variables for the API service:

- `DATABASE_URL` (e.g., `postgres://user:password@host:5432/dbname`)
- `JWT_SECRET` (secret for signing JWTs)
- `PORT` (optional; defaults to 4000 for the backend)
- `VITE_API_URL` (set on the frontend build to the API base URL, e.g., `https://api.example.com/api`)

After deploying the backend, run the database migration script:

```bash
# run on the API instance to create required tables
npm run migrate
```

Option A — run migrations automatically before the app starts (recommended):

- If your service root is the repository root: `cd api && npm install && npm run start:prod`
- If your service root is the `api` directory: `npm install && npm run start:prod`

This uses the provided `start:prod` script which runs migrations (`npm run migrate`) and then starts the server. If your hosting provider supports deployment hooks, you can still run migrations as part of the deploy process; otherwise run the migration manually after deployment.

## What's included
- Basic auth endpoints: `/api/auth/register`, `/api/auth/login`.
- Protected route `/api/site` returning placeholder content for the site layout.
- React pages for login, register, and a protected home page that fetches content from the backend.

## UI / Layout

- The frontend uses Google Fonts `Inter` and `Playfair Display` to recreate a corporate architecture/design aesthetic.
- A simple navigation bar, a large hero with CTA, and responsive cards for "Work", "People" and "Insights" are included.
- Layout and typography are implemented with Tailwind CSS and `Hero`, `FeatureCard`, and `Nav` components.

## Next steps (Suggestions)
- Add user profiles, password reset, and email verification.
- Add production build steps and environment-specific configurations.
- Add migration tooling (e.g., Flyway, node-pg-migrate) for real deployments.
# Gensler