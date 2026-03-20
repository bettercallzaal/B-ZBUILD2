# Ohnahji & The ZAO — Build in Public Platform

**Date**: 2026-03-20
**Status**: Approved

## Overview

A full-stack "build in public" hub for the Ohnahji & The ZAO community. The platform aggregates activity across developer and creator platforms, lets admins curate content (links, clips, bookmarks, quotes), and provides member profiles that showcase what people are building. It also hosts Web3 education tracks and event schedules.

The two founding members are **bettercallzaal** and **Ohnahji** (same handle across all platforms).

## Tech Stack

- **Framework**: Next.js (App Router)
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Auth**: NextAuth.js (admin-only, no open signup)
- **Deployment**: Vercel
- **Styling**: Tailwind CSS
- **Image Storage**: Vercel Blob (for avatar and thumbnail uploads)

## Architecture

Monolithic Next.js application. All public pages, admin dashboard, and API routes live in a single codebase.

```
app/
  (public)/
    page.tsx              — Homepage
    members/
      page.tsx            — Members directory
      [slug]/page.tsx     — Member profile
    feed/page.tsx         — Combined activity feed
    learn/
      page.tsx            — Learning tracks list
      [trackId]/page.tsx  — Track detail / lessons
  admin/
    page.tsx              — Admin dashboard
    members/page.tsx      — Manage members
    content/page.tsx      — Manage content/clips
    integrations/page.tsx — Configure platform connections
    events/page.tsx       — Manage events/schedule
    learning/page.tsx     — Manage tracks/lessons
  api/
    auth/[...nextauth]/   — Auth endpoints
    members/              — CRUD for members
    content/              — CRUD for content items
    feeds/                — Feed aggregation endpoints
    integrations/         — Integration polling/webhooks
    integrations/poll/    — Cron-triggered polling endpoint
    events/               — CRUD for events
    learning/             — CRUD for tracks and lessons
    upload/               — Image upload endpoint (Vercel Blob)
```

## Visual Design

- **Theme**: Dark backgrounds with warm gold/amber accents
- **Cards**: Glassmorphism effect (semi-transparent backgrounds with backdrop blur)
- **Primary background**: `#111` → `#1e272e` gradient
- **Accent colors**: Gold `#ffeaa7` / `#fdcb6e`, Blue `#74b9ff`, Green `#55efc4`
- **Typography**: Clean sans-serif, high contrast white text on dark
- **Borders**: Subtle colored borders with low-opacity fills on interactive elements

## Data Model

All models include `createdAt` and `updatedAt` (DateTime, auto-managed by Prisma).

### Member

| Field         | Type     | Description                                    |
|---------------|----------|------------------------------------------------|
| id            | UUID     | Primary key                                    |
| name          | String   | Display name                                   |
| slug          | String   | URL-friendly handle (unique)                   |
| bio           | Text     | Member biography                               |
| avatar        | String   | Avatar image URL                               |
| role          | Enum     | `admin` or `member`                            |
| platformLinks | JSON     | Map of platform → username (e.g. `{ github: "ohnahji", twitter: "ohnahji" }`) |

### MemberIntegration

Links a member to a specific platform for automated polling. Created automatically when a platform username is added to a member's `platformLinks`, but can be individually enabled/disabled.

| Field        | Type     | Description                                       |
|--------------|----------|---------------------------------------------------|
| id           | UUID     | Primary key                                       |
| memberId     | UUID     | FK → Member                                       |
| platform     | Enum     | `github`, `twitter`, `youtube`, `spotify`, `twitch`, `podcast`, `nft` |
| username     | String   | Platform-specific username or identifier           |
| enabled      | Boolean  | Whether polling is active for this integration     |
| lastPolledAt | DateTime | Last successful poll timestamp (nullable)          |
| lastError    | String   | Last error message (nullable)                      |
| errorCount   | Int      | Consecutive error count (default 0)                |

### Content

A content item is a piece of curated material added by an admin. Types:
- **link**: A URL with title and optional note (article, tool, resource)
- **clip**: A short excerpt or highlight from external content (a quoted passage, a key takeaway, a screenshot description)
- **bookmark**: A saved URL for reference, lighter than a link (no editorial note required)
- **quote**: A standalone quote or statement worth preserving
- **note**: A freeform text entry (no URL required)

| Field     | Type     | Description                                          |
|-----------|----------|------------------------------------------------------|
| id        | UUID     | Primary key                                          |
| type      | Enum     | `link`, `clip`, `bookmark`, `quote`, `note`          |
| title     | String   | Content title                                        |
| body      | Text     | Body text, excerpt, or quote                         |
| url       | String   | Source URL (nullable for notes/quotes)                |
| thumbnail | String   | Preview image URL (nullable)                         |
| tags      | String[] | Freeform categorization tags                         |
| memberId  | UUID     | FK → Member who added/owns it                        |

### FeedItem

| Field       | Type     | Description                                          |
|-------------|----------|------------------------------------------------------|
| id          | UUID     | Primary key                                          |
| platform    | Enum     | `github`, `twitter`, `youtube`, `spotify`, `twitch`, `podcast`, `nft` |
| externalId  | String   | ID from the source platform (unique per platform, for deduplication) |
| title       | String   | Item title or summary                                |
| description | Text     | Item description (nullable)                          |
| url         | String   | Link to the original item                            |
| thumbnail   | String   | Preview image (nullable)                             |
| metadata    | JSON     | Platform-specific data (e.g. commit SHA, track duration) |
| memberId    | UUID     | FK → Member whose feed this belongs to               |
| publishedAt | DateTime | When the item was originally published               |
| fetchedAt   | DateTime | When we last fetched/updated this item               |

### LearningTrack

| Field       | Type     | Description                     |
|-------------|----------|---------------------------------|
| id          | UUID     | Primary key                     |
| title       | String   | Track title                     |
| description | Text     | Track description               |
| category    | String   | e.g. "Web3", "NFT", "Smart Contracts" |
| order       | Int      | Display order                   |
| published   | Boolean  | Whether publicly visible        |

### Lesson

| Field    | Type   | Description                    |
|----------|--------|--------------------------------|
| id       | UUID   | Primary key                    |
| title    | String | Lesson title                   |
| content  | Text   | Lesson content (markdown)      |
| order    | Int    | Order within the track         |
| trackId  | UUID   | FK → LearningTrack             |

### Event

| Field       | Type     | Description                          |
|-------------|----------|--------------------------------------|
| id          | UUID     | Primary key                          |
| title       | String   | Event title                          |
| description | Text     | Event description                    |
| type        | Enum     | `stream`, `workshop`, `showcase`, `ama` |
| date        | DateTime | When the event occurs                |
| streamUrl   | String   | Link to stream/recording (nullable)  |
| recurring   | Boolean  | Whether it repeats                   |
| memberId    | UUID     | FK → Member hosting the event (nullable — community-wide events have no host) |

## Pages

### Homepage (`/`)

- Hero banner with tagline: "Educate & Empower: The Web3 Creator's Launchpad"
- About section (Ohnahji University + The ZAO)
- Featured activity feed (latest items across all members)
- Latest curated content/clips
- Upcoming events
- CTAs to Apply and Learn sections

### Members Directory (`/members`)

- Grid of member cards (avatar, name, role)
- Quick links to individual profiles
- Filter by role

### Member Profile (`/members/[slug]`)

- Header: avatar, bio, platform links (icons linking to their profiles)
- **Activity feed**: auto-pulled FeedItems from all connected platforms, displayed as a timeline
- **Curated content**: Content items (links, clips, bookmarks, quotes) added by admin
- Filters: by platform, by content type

### Combined Feed (`/feed`)

The combined feed merges both **FeedItems** (auto-pulled) and **Content** items (curated) into a single timeline, sorted by date (`publishedAt` for FeedItems, `createdAt` for Content). Filters:
- **Platform**: filter FeedItems by platform (Content items shown under "curated")
- **Member**: filter by member
- **Type**: filter by content type or feed platform

### Learning Tracks (`/learn`)

- List of available tracks with descriptions
- Each track links to its lessons page

### Track Detail (`/learn/[trackId]`)

- Ordered list of lessons
- Lesson content rendered from markdown

### Admin Dashboard (`/admin`)

- Protected by NextAuth.js (admin role only)
- **Members**: Add/edit/remove members, set their platform usernames
- **Content**: Add links, clips, bookmarks, quotes, notes — assign to members. Tags are freeform text.
- **Integrations**: View integration status per member/platform, trigger manual refresh, see error counts and last poll times. API keys are stored as environment variables (not in DB) since there are few integrations.
- **Events**: Create/edit events and schedules, optionally assign a host member
- **Learning**: Manage tracks and lessons

## External Integrations

Each integration polls its platform's API on a schedule and caches results as FeedItems in the database. Polling is triggered by Vercel Cron hitting `GET /api/integrations/poll`.

### Cron Configuration (`vercel.json`)

```json
{
  "crons": [
    {
      "path": "/api/integrations/poll?platforms=github",
      "schedule": "*/15 * * * *"
    },
    {
      "path": "/api/integrations/poll?platforms=twitter,youtube,twitch",
      "schedule": "0 * * * *"
    },
    {
      "path": "/api/integrations/poll?platforms=spotify,podcast,nft",
      "schedule": "0 */6 * * *"
    }
  ]
}
```

The poll endpoint iterates over all enabled `MemberIntegration` records for the requested platforms, fetches new items, deduplicates by `externalId`, and upserts into the `FeedItem` table. Errors are logged to `MemberIntegration.lastError` and `errorCount` is incremented. Successful polls reset `errorCount` to 0.

### Platform Details

| Platform  | Data Pulled                              | API/Method                    | Notes |
|-----------|------------------------------------------|-------------------------------|-------|
| GitHub    | Repos, commits, PRs, contribution graph  | GitHub REST/GraphQL API       | Free tier sufficient. Uses personal access token. |
| Twitter/X | Tweets, threads                          | Twitter API v2 (Basic tier)   | Basic tier ($100/mo) required for read access. Fallback: manual content entry as Content items if API cost is prohibitive. |
| YouTube   | Videos, streams, channel info            | YouTube Data API v3           | Free quota (10,000 units/day) is sufficient. |
| Spotify   | Artist profile, releases, top tracks     | Spotify Web API (public endpoints) | Uses client credentials flow (no user OAuth needed) for public artist data. Playlist data excluded. |
| Twitch    | Streams, VODs, live status               | Twitch Helix API              | Free. Uses app access token. |
| Podcasts  | Episodes                                 | RSS feed parsing              | No API key needed. `username` field stores the RSS feed URL. |
| NFT/Web3  | On-chain activity, mints, token data     | Etherscan API, OpenSea API    | Ethereum mainnet. `username` field stores wallet address. Free tier APIs. |

### API Key Storage

Integration API keys are stored as environment variables (e.g. `GITHUB_TOKEN`, `TWITTER_BEARER_TOKEN`, `YOUTUBE_API_KEY`, etc.) and accessed via `process.env`. This is appropriate given the small number of integrations.

## Auth

- NextAuth.js with **GitHub OAuth** as the sole auth provider
- Only admin users can log in — no public signup
- Admin role gates access to `/admin/*` routes via Next.js middleware
- Initial admin accounts seeded via Prisma seed script:
  - `bettercallzaal` — GitHub username: `bettercallzaal`, role: `admin`
  - `Ohnahji` — GitHub username: `ohnahji`, role: `admin`
- Login flow: user clicks "Admin Login" → redirected to GitHub OAuth → on callback, NextAuth checks if the GitHub username matches a seeded admin → grants or denies access

## Image Storage

- Avatar and thumbnail uploads use **Vercel Blob**
- Admin uploads images via the `/api/upload` endpoint
- The endpoint returns a public URL that is stored in the relevant model field (`avatar`, `thumbnail`)
- External URLs (e.g. from platform APIs) are stored directly without re-uploading

## Error Handling

- Integration failures are logged to `MemberIntegration` (`lastError`, `errorCount`) but do not break the public site — stale cached data is shown with a "last updated" timestamp
- API routes return standard JSON error responses with appropriate HTTP status codes
- Admin dashboard shows integration health status per member/platform (last successful poll, error count, last error message)

## Testing Strategy

- Unit tests for API route handlers and data transformation logic
- Integration tests for database operations via Prisma
- E2E tests for critical flows: admin login, adding a member, viewing a profile
