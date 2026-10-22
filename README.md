# B-ZBUILD2 - Ohnahji & The ZAO, Build in Public

The public home for B&Z Builds, the show where things get built live on stream by
[bettercallzaal](https://x.com/bettercallzaal) of The ZAO and
[Ohnahji](https://x.com/ohnahji) of Ohnahji University.

When we build something live, it lands here.

Live site: https://b-zbuild-2.vercel.app

## Who

- **bettercallzaal** - co-founder of The ZAO, a community helping
  independent musicians keep their margins, data and IP.
  [X](https://x.com/bettercallzaal) / [GitHub](https://github.com/bettercallzaal) /
  [Twitch](https://twitch.tv/bettercallzaal)
- **Ohnahji** - founder of Ohnahji University: Web3 education that
  educates, incubates and elevates. [X](https://x.com/ohnahji) /
  [YouTube](https://youtube.com/@ohnahji) / [Twitch](https://twitch.tv/ohnahji)

## What lands here

- **Live-build artifacts.** Anything we build on stream ships as a pull request to
  this repo, so the code outlives the stream.
- **The site.** A split ZAO x Ohnahji homepage: who we are, the team, both
  Twitch streams embedded side by side, and an apply link for creators who want
  to build with us.
- **The admin area** (`/admin`, sign-in required) and a Prisma schema for
  members, curated content, platform feeds and events. The public pages for
  those are not built yet.

## Run it

Requires Node 20+.

```bash
npm install          # also runs prisma generate
cp .env.example .env # fill in what you need
npm run dev          # http://localhost:3000
```

The homepage runs without a database. `/admin` and anything that reads data
needs `DATABASE_URL` (PostgreSQL), the `NEXTAUTH_*` values, and GitHub OAuth
(`GITHUB_ID`, `GITHUB_SECRET`). The integration keys in `.env.example` are
optional.

Database scripts:

```bash
npm run prisma:migrate   # apply migrations in development
npm run prisma:seed      # seed the founding member profiles
npm run prisma:studio    # browse the database
```

The Twitch embeds only load on `b-zbuild-2.vercel.app` and `localhost`. To run
the site on another domain, add it as a `parent` in the embed URLs in
`src/app/page.tsx`.

## Stack

Next.js 16 (App Router), React 19, Tailwind CSS 4, Prisma with PostgreSQL,
NextAuth v5. Deployed on Vercel.

## Contributing

Open a pull request against `master`. Builds from stream come in the same way.

## License

[MIT](LICENSE)
