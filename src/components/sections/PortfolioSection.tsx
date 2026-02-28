"use client";

import { motion } from "framer-motion";

const projects = [
  { bg: "from-[#0d1f3c] to-[#1a3a6e]", emoji: "💳", cat: "FinTech", title: "PayFlow Wallet", desc: "Peer-to-peer payment app with real-time transactions, biometric auth, and spending analytics. 100K+ installs." },
  { bg: "from-[#0f2d0f] to-[#1a5c1a]", emoji: "🏋️", cat: "Health & Fitness", title: "FitTrack Pro", desc: "AI-powered workout planner with wearable sync, nutrition tracking, and social challenges. 4.8★ rating." },
  { bg: "from-[#2d0d1f] to-[#6e1a3a]", emoji: "🛒", cat: "E-Commerce", title: "Kart — Flash Deals", desc: "Hyperlocal shopping app with dynamic pricing engine, live inventory, and AR product preview." },
  { bg: "from-[#1a1a0d] to-[#3a3a1a]", emoji: "📚", cat: "EdTech", title: "LearnSpark", desc: "Adaptive learning platform with video lessons, quizzes, and offline-first architecture for low-bandwidth users." },
  { bg: "from-[#0d1a2d] to-[#1a2d3a]", emoji: "🏠", cat: "PropTech", title: "NestFind", desc: "Real estate discovery app with map-based search, virtual tours, and AI-powered property recommendations." },
  { bg: "from-[#2d1a0d] to-[#6e3a1a]", emoji: "🚗", cat: "On-Demand", title: "RideNex", desc: "Ride-hailing platform with surge pricing, driver tracking, multi-stop trips, and seamless payment integration." },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="relative z-10 px-[5vw] py-28 bg-gradient-to-b from-[#081429] to-[#050d1a]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="section-tag mb-3">// Our Work</div>
        <h2 style={{ fontFamily: "Rajdhani, sans-serif" }}
          className="text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.1] text-white">
          Apps We're <span className="gradient-text">Proud Of</span>
        </h2>
        <p className="text-base font-light text-[#7a94b0] leading-[1.7] max-w-[560px] mx-auto mt-4">
          A selection of projects that showcase our craft, depth, and range.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            whileHover={{ y: -8, boxShadow: "0 24px 50px rgba(0,0,0,0.5)" }}
            className="rounded-xl overflow-hidden bg-[#081429] border border-[rgba(26,109,255,0.12)] hover:border-[rgba(26,109,255,0.35)] transition-all duration-300 group"
          >
            {/* Thumb */}
            <div className={`h-44 bg-gradient-to-br ${p.bg} flex items-center justify-center relative overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(26,109,255,0.15)] to-[rgba(0,212,255,0.08)]" />
              <span className="text-5xl relative z-10">{p.emoji}</span>
            </div>
            <div className="p-6">
              <div style={{ fontFamily: "Rajdhani, sans-serif" }}
                className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-[#00d4ff] mb-2">
                {p.cat}
              </div>
              <h3 style={{ fontFamily: "Rajdhani, sans-serif" }}
                className="text-lg font-bold text-white mb-2">{p.title}</h3>
              <p className="text-sm font-light text-[#7a94b0] leading-[1.6]">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
