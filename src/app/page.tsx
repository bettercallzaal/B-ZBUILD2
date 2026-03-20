"use client";

import { useEffect } from "react";

/* ------------------------------------------------------------------ */
/*  Ohnahji & The ZAO — Full Homepage                                 */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  /* smooth-scroll for anchor links */
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
      {/* ===== 1. NAVIGATION BAR ===== */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#111]/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <a href="#hero" className="text-xl font-bold text-[#ffeaa7] tracking-tight">
            Ohnahji &amp; The ZAO
          </a>
          {/* Desktop links */}
          <div className="hidden md:flex gap-6 text-sm font-medium text-white/70">
            {["Home", "About", "Team", "Learning", "Feed", "Apply"].map((l) => (
              <a
                key={l}
                href={l === "Home" ? "#hero" : `#${l.toLowerCase()}`}
                className="hover:text-[#ffeaa7] transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
          {/* Mobile menu button */}
          <button
            className="md:hidden text-white/70 hover:text-[#ffeaa7]"
            onClick={(e) => {
              const menu = document.getElementById("mobile-menu");
              if (menu) menu.classList.toggle("hidden");
              (e.currentTarget as HTMLButtonElement).blur();
            }}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Mobile menu */}
        <div id="mobile-menu" className="hidden md:hidden px-4 pb-4 flex flex-col gap-3 text-sm font-medium text-white/70">
          {["Home", "About", "Team", "Learning", "Feed", "Apply"].map((l) => (
            <a
              key={l}
              href={l === "Home" ? "#hero" : `#${l.toLowerCase()}`}
              className="hover:text-[#ffeaa7] transition-colors"
              onClick={() => document.getElementById("mobile-menu")?.classList.add("hidden")}
            >
              {l}
            </a>
          ))}
        </div>
      </nav>

      <main className="min-h-screen bg-gradient-to-b from-[#111] to-[#1e272e] text-white font-sans">
        {/* ===== 2. HERO SECTION ===== */}
        <section
          id="hero"
          className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center overflow-hidden"
        >
          {/* Decorative gradient orb */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#fdcb6e]/10 blur-[160px] pointer-events-none" />

          <h1 className="relative text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight max-w-4xl">
            Educate &amp; Empower:{" "}
            <span className="text-[#ffeaa7]">The Web3 Creator&rsquo;s Launchpad</span>
          </h1>
          <p className="relative mt-6 text-lg sm:text-xl text-white/70 max-w-2xl">
            Ohnahji University and The ZAO have partnered to provide the ultimate
            ecosystem for artists in the new digital age.
          </p>
          <div className="relative mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#learning"
              className="px-8 py-3 rounded-lg bg-[#fdcb6e] text-[#111] font-semibold hover:bg-[#ffeaa7] transition-colors"
            >
              Start Learning
            </a>
            <a
              href="#team"
              className="px-8 py-3 rounded-lg border border-white/30 text-white font-semibold hover:border-[#ffeaa7] hover:text-[#ffeaa7] transition-colors"
            >
              Meet the Team
            </a>
          </div>
        </section>

        {/* ===== 3. ABOUT SECTION ===== */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Who We Are
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Ohnahji University */}
            <div className="rounded-2xl border border-[#fdcb6e]/30 bg-white/5 backdrop-blur-lg p-8">
              <h3 className="text-2xl font-bold text-[#ffeaa7] mb-4">
                Ohnahji University
              </h3>
              <p className="text-white/70 leading-relaxed">
                Ohnahji is a Web3-native brand focused on one thing: education.
                Through Ohnahji University, we educate, incubate, and elevate our
                community, providing the foundational knowledge needed to succeed
                in the world of crypto and blockchain.
              </p>
            </div>
            {/* The ZAO */}
            <div className="rounded-2xl border border-[#74b9ff]/30 bg-white/5 backdrop-blur-lg p-8">
              <h3 className="text-2xl font-bold text-[#74b9ff] mb-4">
                The ZAO
              </h3>
              <p className="text-white/70 leading-relaxed">
                The ZAO (ZTalent Artist Organization) empowers independent
                musicians to reclaim their profit margins, data, and IP rights.
                Through community events like ZAO-PALOOZA and our $ZAO engagement
                token, we provide a platform for artists to thrive in the Web3
                economy.
              </p>
            </div>
          </div>
        </section>

        {/* ===== 4. TEAM SECTION ===== */}
        <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Meet the Team
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              {
                name: "bettercallzaal",
                bio: "A passionate advocate for creator empowerment and a key partner in the Ohnahji & The ZAO collaboration.",
                accent: "#74b9ff",
              },
              {
                name: "Ohnahji",
                bio: "Web3-native educator and founder of Ohnahji University. Focused on empowering creators through blockchain education.",
                accent: "#ffeaa7",
              },
            ].map((m) => (
              <div
                key={m.name}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-8 flex flex-col items-center text-center"
              >
                {/* Avatar placeholder */}
                <div
                  className="w-24 h-24 rounded-full mb-6 flex items-center justify-center text-3xl font-bold"
                  style={{
                    border: `2px solid ${m.accent}`,
                    color: m.accent,
                    background: `${m.accent}15`,
                  }}
                >
                  {m.name[0].toUpperCase()}
                </div>
                <h3 className="text-xl font-bold mb-2">{m.name}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  {m.bio}
                </p>
                {/* Social icons row */}
                <div className="flex gap-3 text-white/40">
                  {/* Twitter / X */}
                  <a href="#" aria-label="Twitter" className="hover:text-[#74b9ff] transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  {/* GitHub */}
                  <a href="#" aria-label="GitHub" className="hover:text-white transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>
                  {/* YouTube */}
                  <a href="#" aria-label="YouTube" className="hover:text-red-400 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== 5. BUILD IN PUBLIC / ACTIVITY FEED ===== */}
        <section id="feed" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">Build in Public</h2>
            <p className="mt-3 text-white/60">
              Follow what we&rsquo;re building in real-time
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                platform: "GitHub",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                ),
                title: "Pushed homepage layout",
                detail: "bandz-builds/main",
                date: "Mar 20, 2026",
                accent: "text-white",
              },
              {
                platform: "YouTube",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                ),
                title: "Web3 for Musicians Ep. 1",
                detail: "Ohnahji University",
                date: "Mar 18, 2026",
                accent: "text-red-400",
              },
              {
                platform: "X / Twitter",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                ),
                title: "Announced ZAO-PALOOZA dates",
                detail: "@bettercallzaal",
                date: "Mar 16, 2026",
                accent: "text-[#74b9ff]",
              },
              {
                platform: "Spotify",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                  </svg>
                ),
                title: "New single: 'On Chain'",
                detail: "ZAO Artists",
                date: "Mar 14, 2026",
                accent: "text-[#55efc4]",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-6 flex flex-col gap-3"
              >
                <div className={`flex items-center gap-2 ${item.accent}`}>
                  {item.icon}
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    {item.platform}
                  </span>
                </div>
                <h4 className="font-semibold leading-snug">{item.title}</h4>
                <p className="text-white/50 text-sm">{item.detail}</p>
                <p className="text-white/30 text-xs mt-auto">{item.date}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="/feed"
              className="inline-block px-8 py-3 rounded-lg border border-white/20 text-white/80 font-semibold hover:border-[#ffeaa7] hover:text-[#ffeaa7] transition-colors"
            >
              View Full Feed
            </a>
          </div>
        </section>

        {/* ===== 6. LEARNING TRACKS ===== */}
        <section id="learning" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Learning Tracks
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Web3 Fundamentals",
                desc: "Start your journey with the basics of blockchain, crypto, and decentralized technology.",
                border: "border-[#ffeaa7]/50",
                tag: "bg-[#ffeaa7]/10 text-[#ffeaa7]",
              },
              {
                title: "NFT Creation & Minting",
                desc: "A hands-on guide to creating, deploying, and managing your own NFT project.",
                border: "border-[#74b9ff]/50",
                tag: "bg-[#74b9ff]/10 text-[#74b9ff]",
              },
              {
                title: "Smart Contract Development",
                desc: "An introduction to Solidity and building simple, effective smart contracts.",
                border: "border-[#55efc4]/50",
                tag: "bg-[#55efc4]/10 text-[#55efc4]",
              },
            ].map((t) => (
              <div
                key={t.title}
                className={`rounded-2xl border ${t.border} bg-white/5 backdrop-blur-lg p-8 flex flex-col`}
              >
                <span
                  className={`self-start text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4 ${t.tag}`}
                >
                  Track
                </span>
                <h3 className="text-xl font-bold mb-3">{t.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">
                  {t.desc}
                </p>
                <a
                  href="#"
                  className="inline-block text-center px-6 py-2.5 rounded-lg bg-[#fdcb6e] text-[#111] font-semibold text-sm hover:bg-[#ffeaa7] transition-colors"
                >
                  Start Learning
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ===== 7. STREAMS & EVENTS ===== */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Streams &amp; Events
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Schedule */}
            <div className="space-y-6">
              {[
                {
                  name: "Smart Contract Sundays",
                  type: "Weekly Workshop",
                  accent: "#55efc4",
                },
                {
                  name: "Artist Spotlight & Live AMA",
                  type: "Community Showcase",
                  accent: "#74b9ff",
                },
                {
                  name: "Web3 News & Trends with Ohnahji",
                  type: "Live Q&A",
                  accent: "#ffeaa7",
                },
              ].map((ev) => (
                <div
                  key={ev.name}
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-6 flex items-center gap-4"
                >
                  <div
                    className="w-3 h-3 rounded-full shrink-0"
                    style={{ background: ev.accent }}
                  />
                  <div>
                    <h4 className="font-semibold">{ev.name}</h4>
                    <p className="text-white/50 text-sm">{ev.type}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Twitch embed placeholder */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg flex items-center justify-center min-h-[280px]">
              <div className="text-center text-white/30">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mx-auto mb-3"
                >
                  <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z" />
                </svg>
                <p className="text-sm font-medium">Twitch Stream Embed</p>
                <p className="text-xs mt-1">Coming soon</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 8. CONTACT / CTA ===== */}
        <section id="apply" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-8 sm:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3">
              Get in Touch
            </h2>
            <p className="text-white/60 text-center mb-10">
              Have questions or want to collaborate?
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="max-w-lg mx-auto flex flex-col gap-5"
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#fdcb6e] transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#fdcb6e] transition-colors"
              />
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#fdcb6e] transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-[#fdcb6e] text-[#111] font-semibold hover:bg-[#ffeaa7] transition-colors"
              >
                Send Message
              </button>
              <a
                href="/apply"
                className="text-center text-[#ffeaa7] text-sm font-medium hover:underline"
              >
                Or apply to join the community &rarr;
              </a>
            </form>
          </div>
        </section>
      </main>

      {/* ===== 9. FOOTER ===== */}
      <footer className="border-t border-white/10 bg-[#111] py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; 2025 Ohnahji &amp; The ZAO. All rights reserved.
          </p>
          <div className="flex gap-4 text-white/40">
            {/* Twitter / X */}
            <a href="#" aria-label="Twitter" className="hover:text-[#74b9ff] transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* GitHub */}
            <a href="#" aria-label="GitHub" className="hover:text-white transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            {/* YouTube */}
            <a href="#" aria-label="YouTube" className="hover:text-red-400 transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            {/* Spotify */}
            <a href="#" aria-label="Spotify" className="hover:text-[#55efc4] transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
