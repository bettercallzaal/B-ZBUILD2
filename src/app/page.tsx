"use client";

import { useEffect } from "react";

/* ------------------------------------------------------------------ */
/*  Ohnahji & The ZAO — Split-Theme Homepage                          */
/*  Left = bettercallzaal / ZAO (#141e27 + #e0ddaa)                   */
/*  Right = Ohnahji (#FE517E pink + #3C0010 burgundy + #F1C40F gold)  */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === "A" && target.hash) {
        const el = document.querySelector(target.hash);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <>
      {/* ===== NAVIGATION ===== */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0d1117]/90 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <a href="#hero" className="flex items-center gap-3">
            <span className="text-lg font-bold text-[#e0ddaa]">The ZAO</span>
            <span className="text-white/30 text-sm">&times;</span>
            <span className="text-lg font-bold text-[#F1C40F]">Ohnahji</span>
          </a>
          <div className="hidden md:flex gap-6 text-sm font-medium text-white/70">
            {["Home", "About", "Team", "Feed", "Learning", "Streams", "Apply"].map((l) => (
              <a
                key={l}
                href={l === "Home" ? "#hero" : `#${l.toLowerCase()}`}
                className="hover:text-white transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
          <button
            className="md:hidden text-white/70 hover:text-white"
            onClick={(e) => {
              document.getElementById("mobile-menu")?.classList.toggle("hidden");
              (e.currentTarget as HTMLButtonElement).blur();
            }}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <div id="mobile-menu" className="hidden md:hidden px-4 pb-4 flex flex-col gap-3 text-sm font-medium text-white/70">
          {["Home", "About", "Team", "Feed", "Learning", "Streams", "Apply"].map((l) => (
            <a
              key={l}
              href={l === "Home" ? "#hero" : `#${l.toLowerCase()}`}
              className="hover:text-white transition-colors"
              onClick={() => document.getElementById("mobile-menu")?.classList.add("hidden")}
            >
              {l}
            </a>
          ))}
        </div>
      </nav>

      <main className="min-h-screen text-white font-sans">
        {/* ===== HERO — SPLIT ===== */}
        <section id="hero" className="relative pt-24 pb-20 overflow-hidden">
          {/* Split background */}
          <div className="absolute inset-0 flex">
            <div className="w-1/2 bg-gradient-to-br from-[#141e27] to-[#1a2634]" />
            <div className="w-1/2 bg-gradient-to-bl from-[#3C0010] to-[#141e27]" />
          </div>
          {/* Center glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#e0ddaa]/10 via-[#F1C40F]/8 to-[#FE517E]/10 blur-[120px] pointer-events-none" />
          {/* Divider line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center min-h-[70vh]">
              {/* Left — ZAO */}
              <div className="text-center md:text-left space-y-6">
                <div className="inline-block px-4 py-1.5 rounded-full border border-[#e0ddaa]/30 bg-[#e0ddaa]/10 text-[#e0ddaa] text-xs font-semibold uppercase tracking-widest">
                  The ZAO
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                  Empowering{" "}
                  <span className="text-[#e0ddaa]">Creators</span>
                </h1>
                <p className="text-white/60 text-lg max-w-md">
                  The ZAO empowers independent musicians to reclaim their profit margins, data, and IP rights in the Web3 economy.
                </p>
                <a
                  href="#about"
                  className="inline-block px-8 py-3 rounded-lg bg-[#e0ddaa] text-[#141e27] font-semibold hover:bg-[#e0ddaa]/90 transition-colors"
                >
                  Learn More
                </a>
              </div>
              {/* Right — Ohnahji */}
              <div className="text-center md:text-right space-y-6">
                <div className="inline-block px-4 py-1.5 rounded-full border border-[#F1C40F]/30 bg-[#F1C40F]/10 text-[#F1C40F] text-xs font-semibold uppercase tracking-widest">
                  Ohnahji University
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                  Educating{" "}
                  <span className="text-[#F1C40F]">Web3</span>
                </h1>
                <p className="text-white/60 text-lg max-w-md md:ml-auto">
                  Ohnahji University educates, incubates, and elevates our community with the knowledge to succeed in crypto and blockchain.
                </p>
                <a
                  href="#about"
                  className="inline-block px-8 py-3 rounded-lg bg-[#F1C40F] text-[#3C0010] font-semibold hover:bg-[#F1C40F]/90 transition-colors"
                >
                  Start Learning
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== ABOUT — SPLIT CARDS ===== */}
        <section id="about" className="relative py-20">
          <div className="absolute inset-0 bg-[#0d1117]" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
              Who We Are
            </h2>
            <div className="grid md:grid-cols-2 gap-0 md:gap-0">
              {/* ZAO side */}
              <div className="rounded-2xl md:rounded-r-none border border-[#e0ddaa]/20 bg-[#141e27]/80 backdrop-blur-lg p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#e0ddaa]/20 flex items-center justify-center text-[#e0ddaa] font-bold text-lg">Z</div>
                  <h3 className="text-2xl font-bold text-[#e0ddaa]">The ZAO</h3>
                </div>
                <p className="text-white/70 leading-relaxed mb-6">
                  The ZAO (ZTalent Artist Organization) empowers independent
                  musicians to reclaim their profit margins, data, and IP rights.
                  Through community events like ZAO-PALOOZA and our $ZAO engagement
                  token, we provide a platform for artists to thrive in the Web3
                  economy.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Music", "Artists", "Web3", "$ZAO Token", "ZAO-PALOOZA"].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs border border-[#e0ddaa]/30 text-[#e0ddaa]/80 bg-[#e0ddaa]/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {/* Ohnahji side */}
              <div className="rounded-2xl md:rounded-l-none border border-[#F1C40F]/20 bg-[#3C0010]/80 backdrop-blur-lg p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#F1C40F]/20 flex items-center justify-center text-[#F1C40F] font-bold text-lg">O</div>
                  <h3 className="text-2xl font-bold text-[#F1C40F]">Ohnahji University</h3>
                </div>
                <p className="text-white/70 leading-relaxed mb-6">
                  Ohnahji is a Web3-native brand focused on one thing: education.
                  Through Ohnahji University, we educate, incubate, and elevate our
                  community, providing the foundational knowledge needed to succeed
                  in the world of crypto and blockchain.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Education", "Blockchain", "NFTs", "Community", "HBCU"].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs border border-[#FE517E]/30 text-[#FE517E]/80 bg-[#FE517E]/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== TEAM — SPLIT ===== */}
        <section id="team" className="relative py-20">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117] to-[#111]" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
              Meet the Team
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* bettercallzaal */}
              <div className="rounded-2xl border border-[#e0ddaa]/20 bg-[#141e27]/60 backdrop-blur-lg p-8 flex flex-col items-center text-center">
                <div className="w-28 h-28 rounded-full mb-6 flex items-center justify-center text-4xl font-bold border-2 border-[#e0ddaa] text-[#e0ddaa] bg-[#e0ddaa]/10">
                  Z
                </div>
                <h3 className="text-xl font-bold text-[#e0ddaa] mb-1">bettercallzaal</h3>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-4">Co-Founder &middot; The ZAO</p>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  A passionate advocate for creator empowerment and a key partner in the Ohnahji &amp; The ZAO collaboration.
                </p>
                <div className="flex gap-4 text-white/40">
                  <a href="https://x.com/bettercallzaal" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-[#e0ddaa] transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://github.com/bettercallzaal" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-[#e0ddaa] transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
                  </a>
                  <a href="https://twitch.tv/bettercallzaal" target="_blank" rel="noopener noreferrer" aria-label="Twitch" className="hover:text-[#a970ff] transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z" /></svg>
                  </a>
                </div>
              </div>
              {/* Ohnahji */}
              <div className="rounded-2xl border border-[#F1C40F]/20 bg-[#3C0010]/60 backdrop-blur-lg p-8 flex flex-col items-center text-center">
                <div className="w-28 h-28 rounded-full mb-6 flex items-center justify-center text-4xl font-bold border-2 border-[#F1C40F] text-[#F1C40F] bg-[#F1C40F]/10">
                  O
                </div>
                <h3 className="text-xl font-bold text-[#F1C40F] mb-1">Ohnahji</h3>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-4">Founder &middot; Ohnahji University</p>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  Web3-native educator and founder of Ohnahji University. Focused on empowering creators through blockchain education.
                </p>
                <div className="flex gap-4 text-white/40">
                  <a href="https://x.com/ohnahji" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-[#F1C40F] transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://github.com/ohnahji" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-[#F1C40F] transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
                  </a>
                  <a href="https://youtube.com/@ohnahji" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-red-400 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                  </a>
                  <a href="https://twitch.tv/ohnahji" target="_blank" rel="noopener noreferrer" aria-label="Twitch" className="hover:text-[#a970ff] transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z" /></svg>
                  </a>
                  <a href="https://spotify.com/artist/ohnahji" target="_blank" rel="noopener noreferrer" aria-label="Spotify" className="hover:text-[#1DB954] transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== BUILD IN PUBLIC — SPLIT FEED ===== */}
        <section id="feed" className="relative py-20">
          <div className="absolute inset-0 bg-[#0d1117]" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold">Build in Public</h2>
              <p className="mt-3 text-white/50">Follow what we&apos;re building in real-time</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {/* ZAO / bettercallzaal feed */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-6 h-6 rounded-full bg-[#e0ddaa]/20 flex items-center justify-center text-[#e0ddaa] text-xs font-bold">Z</div>
                  <span className="text-sm font-semibold text-[#e0ddaa]">bettercallzaal</span>
                </div>
                <div className="space-y-4">
                  {[
                    { platform: "GitHub", icon: "⚙", title: "Pushed homepage layout", detail: "bandz-builds/main", date: "Mar 20" },
                    { platform: "X", icon: "𝕏", title: "Announced ZAO-PALOOZA dates", detail: "@bettercallzaal", date: "Mar 16" },
                  ].map((item) => (
                    <div key={item.title} className="rounded-xl border border-[#e0ddaa]/15 bg-[#141e27]/60 backdrop-blur-lg p-5">
                      <div className="flex items-center gap-2 text-[#e0ddaa]/60 text-xs font-semibold uppercase tracking-wider mb-2">
                        <span>{item.icon}</span>
                        <span>{item.platform}</span>
                        <span className="ml-auto text-white/30">{item.date}</span>
                      </div>
                      <h4 className="font-semibold text-sm">{item.title}</h4>
                      <p className="text-white/40 text-xs mt-1">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Ohnahji feed */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-6 h-6 rounded-full bg-[#F1C40F]/20 flex items-center justify-center text-[#F1C40F] text-xs font-bold">O</div>
                  <span className="text-sm font-semibold text-[#F1C40F]">Ohnahji</span>
                </div>
                <div className="space-y-4">
                  {[
                    { platform: "YouTube", icon: "▶", title: "Web3 for Musicians Ep. 1", detail: "Ohnahji University", date: "Mar 18" },
                    { platform: "Spotify", icon: "♫", title: "New single: 'On Chain'", detail: "Ohnahji", date: "Mar 14" },
                  ].map((item) => (
                    <div key={item.title} className="rounded-xl border border-[#FE517E]/15 bg-[#3C0010]/60 backdrop-blur-lg p-5">
                      <div className="flex items-center gap-2 text-[#FE517E]/60 text-xs font-semibold uppercase tracking-wider mb-2">
                        <span>{item.icon}</span>
                        <span>{item.platform}</span>
                        <span className="ml-auto text-white/30">{item.date}</span>
                      </div>
                      <h4 className="font-semibold text-sm">{item.title}</h4>
                      <p className="text-white/40 text-xs mt-1">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="text-center mt-10">
              <a href="/feed" className="inline-block px-8 py-3 rounded-lg border border-white/20 text-white/80 font-semibold hover:border-white/40 transition-colors">
                View Full Feed
              </a>
            </div>
          </div>
        </section>

        {/* ===== LEARNING TRACKS ===== */}
        <section id="learning" className="relative py-20">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117] to-[#111]" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
              Learning Tracks
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Web3 Fundamentals",
                  desc: "Start your journey with the basics of blockchain, crypto, and decentralized technology.",
                  border: "border-[#e0ddaa]/30",
                  accent: "#e0ddaa",
                },
                {
                  title: "NFT Creation & Minting",
                  desc: "A hands-on guide to creating, deploying, and managing your own NFT project.",
                  border: "border-[#F1C40F]/30",
                  accent: "#F1C40F",
                },
                {
                  title: "Smart Contract Development",
                  desc: "An introduction to Solidity and building simple, effective smart contracts.",
                  border: "border-[#F1C40F]/30",
                  accent: "#F1C40F",
                },
              ].map((t) => (
                <div
                  key={t.title}
                  className={`rounded-2xl border ${t.border} bg-white/5 backdrop-blur-lg p-8 flex flex-col`}
                >
                  <span
                    className="self-start text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4"
                    style={{ background: `${t.accent}15`, color: t.accent, border: `1px solid ${t.accent}30` }}
                  >
                    Track
                  </span>
                  <h3 className="text-xl font-bold mb-3">{t.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">{t.desc}</p>
                  <a
                    href="#"
                    className="inline-block text-center px-6 py-2.5 rounded-lg font-semibold text-sm transition-colors"
                    style={{ background: t.accent, color: "#141e27" }}
                  >
                    Start Learning
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== LIVE STREAMS — SPLIT ===== */}
        <section id="streams" className="relative py-20">
          <div className="absolute inset-0 bg-[#0d1117]" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              Live Streams
            </h2>
            <p className="text-white/50 text-center mb-12 max-w-2xl mx-auto">
              Catch us live — see who&apos;s streaming right now
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {/* bettercallzaal stream */}
              <div className="rounded-2xl border border-[#e0ddaa]/20 bg-[#141e27]/60 backdrop-blur-lg overflow-hidden">
                <div className="flex items-center gap-3 px-5 py-3 border-b border-[#e0ddaa]/10">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                  <span className="font-semibold text-[#e0ddaa]">bettercallzaal</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#a970ff" className="ml-auto"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z" /></svg>
                </div>
                <div className="aspect-video">
                  <iframe
                    src="https://player.twitch.tv/?channel=bettercallzaal&parent=b-zbuild-2.vercel.app&parent=localhost"
                    height="100%"
                    width="100%"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="px-5 py-3 border-t border-[#e0ddaa]/10">
                  <iframe
                    src="https://www.twitch.tv/embed/bettercallzaal/chat?parent=b-zbuild-2.vercel.app&parent=localhost&darkpopout"
                    height="200"
                    width="100%"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>

              {/* Ohnahji stream */}
              <div className="rounded-2xl border border-[#FE517E]/20 bg-[#3C0010]/60 backdrop-blur-lg overflow-hidden">
                <div className="flex items-center gap-3 px-5 py-3 border-b border-[#FE517E]/10">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                  <span className="font-semibold text-[#F1C40F]">Ohnahji</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#a970ff" className="ml-auto"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z" /></svg>
                </div>
                <div className="aspect-video">
                  <iframe
                    src="https://player.twitch.tv/?channel=ohnahji&parent=b-zbuild-2.vercel.app&parent=localhost"
                    height="100%"
                    width="100%"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="px-5 py-3 border-t border-[#FE517E]/10">
                  <iframe
                    src="https://www.twitch.tv/embed/ohnahji/chat?parent=b-zbuild-2.vercel.app&parent=localhost&darkpopout"
                    height="200"
                    width="100%"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Schedule */}
            <h3 className="text-xl font-bold text-center mb-6">Upcoming Schedule</h3>
            <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {[
                { name: "Smart Contract Sundays", type: "Weekly Workshop", accent: "#e0ddaa" },
                { name: "Artist Spotlight & Live AMA", type: "Community Showcase", accent: "#F1C40F" },
                { name: "Web3 News & Trends", type: "Live Q&A", accent: "#F1C40F" },
              ].map((ev) => (
                <div key={ev.name} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-5 flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full shrink-0" style={{ background: ev.accent }} />
                  <div>
                    <h4 className="font-semibold text-sm">{ev.name}</h4>
                    <p className="text-white/50 text-xs">{ev.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== APPLY / CTA ===== */}
        <section id="apply" className="relative py-20">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117] to-[#111]" />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-8 sm:p-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-3">
                Join the Community
              </h2>
              <p className="text-white/60 mb-8 max-w-lg mx-auto">
                Want to collaborate, learn, or build with us? Fill out our application form and we&apos;ll be in touch.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdN_NOMDICWNPOymcN6YfjFtL3MkYHh8HgJ5klm8w83d42BlA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 rounded-lg bg-gradient-to-r from-[#e0ddaa] via-[#F1C40F] to-[#FE517E] text-[#141e27] font-bold text-lg hover:opacity-90 transition-opacity"
              >
                Apply Now
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-white/10 bg-[#0d1117] py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-[#e0ddaa]/60 text-sm font-medium">The ZAO</span>
            <span className="text-white/20 text-xs">&times;</span>
            <span className="text-[#F1C40F]/60 text-sm font-medium">Ohnahji</span>
            <span className="text-white/30 text-sm ml-2">&copy; 2025</span>
          </div>
          <div className="flex gap-4 text-white/40">
            <a href="https://x.com/bettercallzaal" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-[#e0ddaa] transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </a>
            <a href="https://github.com/bettercallzaal" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-white transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
            </a>
            <a href="https://youtube.com/@ohnahji" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-red-400 transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
            </a>
            <a href="https://spotify.com/artist/ohnahji" target="_blank" rel="noopener noreferrer" aria-label="Spotify" className="hover:text-[#1DB954] transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" /></svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
