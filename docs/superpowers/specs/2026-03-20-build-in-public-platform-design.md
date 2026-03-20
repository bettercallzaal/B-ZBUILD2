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
    events/               — CRUD for events
```

## Visual Design

- **Theme**: Dark backgrounds with warm gold/amber accents
- **Cards**: Glassmorphism effect (semi-transparent backgrounds with backdrop blur)
- **Primary background**: `#111` → `#1e272e` gradient
- **Accent colors**: Gold `#ffeaa7` / `#fdcb6e`, Blue `#74b9ff`, Green `#55efc4`
- **Typography**: Clean sans-serif, high contrast white text on dark
- **Borders**: Subtle colored borders with low-opacity fills on interactive elements

## Data Model

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
| createdAt     | DateTime | When the member was added                      |

### Content

| Field     | Type     | Description                                          |
|-----------|----------|------------------------------------------------------|
| id        | UUID     | Primary key                                          |
| type      | Enum     | `link`, `clip`, `bookmark`, `quote`, `note`          |
| title     | String   | Content title                                        |
| body      | Text     | Body text, excerpt, or quote                         |
| url       | String   | Source URL (nullable for notes)                      |
| thumbnail | String   | Preview image URL (nullable)                         |
| tags      | String[] | Categorization tags                                  |
| memberId  | UUID     | FK → Member who added/owns it                        |
| createdAt | DateTime | When it was added                                    |

### FeedItem

| Field       | Type     | Description                                          |
|-------------|----------|------------------------------------------------------|
| id          | UUID     | Primary key                                          |
| platform    | Enum     | `github`, `twitter`, `youtube`, `spotify`, `twitch`, `podcast`, `nft` |
| externalId  | String   | ID from the source platform (for deduplication)      |
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
- Filter by role or tag

### Member Profile (`/members/[slug]`)

- Header: avatar, bio, platform links (icons linking to their profiles)
- **Activity feed**: auto-pulled items from all connected platforms, displayed as a timeline
- **Curated content**: links, clips, bookmarks, quotes added by admin
- Filters: by platform, by content type

### Combined Feed (`/feed`)

- Unified timeline of activity across all members
- Filter by: platform, member, content type
- "Build in public" view of everything happening in the community

### Learning Tracks (`/learn`)

- List of available tracks with descriptions
- Each track links to its lessons page

### Track Detail (`/learn/[trackId]`)

- Ordered list of lessons
- Lesson content rendered from markdown

### Admin Dashboard (`/admin`)

- Protected by NextAuth.js (admin role only)
- **Members**: Add/edit/remove members, set their platform usernames
- **Content**: Add links, clips, bookmarks, quotes, notes — assign to members
- **Integrations**: View integration status, trigger manual refresh, configure API keys
- **Events**: Create/edit events and schedules
- **Learning**: Manage tracks and lessons

## External Integrations

Each integration polls its platform's API on a schedule (cron job via Vercel Cron or similar) and caches results as FeedItems in the database.

| Platform  | Data Pulled                              | API/Method                    |
|-----------|------------------------------------------|-------------------------------|
| GitHub    | Repos, commits, PRs, contribution graph  | GitHub REST/GraphQL API       |
| Twitter/X | Tweets, threads                          | Twitter API v2                |
| YouTube   | Videos, streams, channel info            | YouTube Data API v3           |
| Spotify   | Releases, playlists, artist profile      | Spotify Web API               |
| Twitch    | Streams, VODs, live status               | Twitch Helix API              |
| Podcasts  | Episodes                                 | RSS feed parsing              |
| NFT/Web3  | On-chain activity, mints, token data     | Etherscan API, OpenSea API    |

Integration polling runs on configurable intervals (e.g. every 15 minutes for GitHub, hourly for Spotify). Results are deduplicated by `externalId` per platform.

## Auth

- NextAuth.js with credentials provider (email/password) or GitHub OAuth
- Only admin users can log in — no public signup
- Admin role gates access to `/admin/*` routes
- Initial admin accounts seeded via Prisma seed script (bettercallzaal + Ohnahji)

## Error Handling

- Integration failures are logged but do not break the public site — stale cached data is shown with a "last updated" timestamp
- API routes return standard JSON error responses
- Admin dashboard shows integration health status (last successful poll, error count)

## Testing Strategy

- Unit tests for API route handlers and data transformation logic
- Integration tests for database operations via Prisma
- E2E tests for critical flows: admin login, adding a member, viewing a profile
