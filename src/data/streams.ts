/* ------------------------------------------------------------------ */
/*  B&Z Builds streams - one entry per stream page                    */
/*  Add a stream here and /streams/<date> is built for it             */
/* ------------------------------------------------------------------ */

export type Clip = {
  title: string;
  /** Seconds into the VOD */
  start: number;
  end: number;
};

export type Credit = {
  /** Track names as written on screen */
  tracks: string[];
  artist: string;
  /** Shown as @handle next to the name, on the platform url points to */
  handle?: string;
  url?: string;
};

export type Stream = {
  /** YYYY-MM-DD, also the URL segment */
  date: string;
  /** Display date, e.g. "21 Oct 2026" */
  label: string;
  youtubeId: string;
  /** One-line summary under the title */
  summary: string;
  clips: Clip[];
  music: Credit[];
  showNotesUrl?: string;
};

export const streams: Stream[] = [
  {
    date: "2026-10-21",
    label: "21 Oct 2026",
    youtubeId: "uEIT4rvgsNo",
    summary:
      "the ZAO TCG card generator pitch, Zaal's Hypersnap node, and his agent workflow on screen.",
    clips: [{ title: "the TCG card generator pitch", start: 2331, end: 2395 }],
    music: [
      {
        tracks: ["OHNAHJI", "HENG DEM"],
        artist: "IMan Afrikah",
        handle: "IManAfrikah",
        url: "https://audius.co/IManAfrikah",
      },
    ],
    showNotesUrl:
      "https://bettercallzaal.github.io/zao-media/appearances/2026-10-21-b-and-z-build/",
  },
];

export function getStream(date: string): Stream | undefined {
  return streams.find((s) => s.date === date);
}
