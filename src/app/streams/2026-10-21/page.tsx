import type { Metadata } from "next";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  B&Z Builds - 21 Oct 2026 stream page                              */
/*  Full stream + one clip, both from the public YouTube VOD          */
/* ------------------------------------------------------------------ */

const VIDEO_ID = "uEIT4rvgsNo";

export const metadata: Metadata = {
  title: "B&Z Builds - 21 Oct 2026",
  description:
    "B&Z Builds with BetterCallZaal and Ohnahji B, streamed 21 October 2026.",
};

export default function Stream20261021() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <Link href="/#streams" className="text-sm text-white/50 hover:text-white">
          &larr; Back home
        </Link>

        <h1 className="mt-6 text-3xl sm:text-4xl font-bold">
          <span className="text-[#e0ddaa]">B&amp;Z Builds</span>{" "}
          <span className="text-white/40">/</span>{" "}
          <span className="text-[#F1C40F]">21 Oct 2026</span>
        </h1>
        <p className="mt-3 text-white/60">
          <a href="https://x.com/bettercallzaal" className="hover:text-white">
            BetterCallZaal
          </a>{" "}
          and{" "}
          <a href="https://x.com/Ohnahji" className="hover:text-white">
            Ohnahji B
          </a>{" "}
          bring back B&amp;Z Builds: the ZAO TCG card generator pitch, Zaal&apos;s
          Hypersnap node, and his agent workflow on screen.
        </p>

        <section className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Full stream</h2>
          <div className="aspect-video rounded-2xl overflow-hidden border border-white/10">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}`}
              title="B&Z Builds - 2026-10-21"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold mb-1">Clip: the TCG card generator pitch</h2>
          <p className="text-white/50 text-sm mb-4">0:38:51 to 0:39:55</p>
          <div className="aspect-video rounded-2xl overflow-hidden border border-white/10">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?start=2331&end=2395`}
              title="B&Z Builds - TCG card generator pitch"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </section>

        <p className="mt-12 text-sm text-white/50">
          Music: OHNAHJI and HENG DEM by IMan Afrikah.
        </p>

        <p className="mt-2 text-sm text-white/50">
          Watch on{" "}
          <a
            href={`https://www.youtube.com/watch?v=${VIDEO_ID}`}
            className="underline hover:text-white"
          >
            YouTube
          </a>
          . Show notes on the{" "}
          <a
            href="https://bettercallzaal.github.io/zao-media/appearances/2026-10-21-b-and-z-build/"
            className="underline hover:text-white"
          >
            ZAO Media archive
          </a>
          .
        </p>
      </div>
    </main>
  );
}
