import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getStream, streams } from "@/data/streams";

/* ------------------------------------------------------------------ */
/*  B&Z Builds - stream page, one per entry in src/data/streams.ts    */
/*  Full stream + clips, all from the public YouTube VOD              */
/* ------------------------------------------------------------------ */

type Props = { params: Promise<{ date: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return streams.map((s) => ({ date: s.date }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const stream = getStream((await params).date);
  if (!stream) return {};
  const longDate = new Date(`${stream.date}T12:00:00Z`).toLocaleDateString(
    "en-GB",
    { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" },
  );
  return {
    title: `B&Z Builds - ${stream.label}`,
    description: `B&Z Builds with BetterCallZaal and Ohnahji B, streamed ${longDate}.`,
  };
}

function timestamp(seconds: number) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export default async function StreamPage({ params }: Props) {
  const stream = getStream((await params).date);
  if (!stream) notFound();

  return (
    <main className="min-h-screen bg-[#0d1117] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <Link href="/#streams" className="text-sm text-white/50 hover:text-white">
          &larr; Back home
        </Link>

        <h1 className="mt-6 text-3xl sm:text-4xl font-bold">
          <span className="text-[#e0ddaa]">B&amp;Z Builds</span>{" "}
          <span className="text-white/40">/</span>{" "}
          <span className="text-[#F1C40F]">{stream.label}</span>
        </h1>
        <p className="mt-3 text-white/60">
          <a href="https://x.com/bettercallzaal" className="hover:text-white">
            BetterCallZaal (@bettercallzaal)
          </a>{" "}
          and{" "}
          <a href="https://x.com/Ohnahji" className="hover:text-white">
            Ohnahji B (@Ohnahji)
          </a>{" "}
          bring back B&amp;Z Builds: {stream.summary}
        </p>

        <section className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Full stream</h2>
          <div className="aspect-video rounded-2xl overflow-hidden border border-white/10">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${stream.youtubeId}`}
              title={`B&Z Builds - ${stream.date}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </section>

        {stream.clips.map((clip) => (
          <section key={clip.start} className="mt-12">
            <h2 className="text-xl font-semibold mb-1">Clip: {clip.title}</h2>
            <p className="text-white/50 text-sm mb-4">
              {timestamp(clip.start)} to {timestamp(clip.end)}
            </p>
            <div className="aspect-video rounded-2xl overflow-hidden border border-white/10">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${stream.youtubeId}?start=${clip.start}&end=${clip.end}`}
                title={`B&Z Builds - ${clip.title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </section>
        ))}

        {stream.music.map((credit) => (
          <p key={credit.artist} className="mt-12 text-sm text-white/50">
            Music: {credit.tracks.join(" and ")} by{" "}
            {credit.url ? (
              <a href={credit.url} className="underline hover:text-white">
                {credit.artist}
              </a>
            ) : (
              credit.artist
            )}
            {credit.handle && ` (@${credit.handle})`}
            .
          </p>
        ))}

        <p className="mt-2 text-sm text-white/50">
          Watch on{" "}
          <a
            href={`https://www.youtube.com/watch?v=${stream.youtubeId}`}
            className="underline hover:text-white"
          >
            YouTube
          </a>
          .
          {stream.showNotesUrl && (
            <>
              {" "}
              Show notes on the{" "}
              <a href={stream.showNotesUrl} className="underline hover:text-white">
                ZAO Media archive
              </a>
              .
            </>
          )}
        </p>
      </div>
    </main>
  );
}
