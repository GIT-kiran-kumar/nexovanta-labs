"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP split text animation on headline
    const tl = gsap.timeline({ delay: 1 });
    if (headlineRef.current) {
      const words = headlineRef.current.querySelectorAll(".word");
      tl.fromTo(
        words,
        { y: 80, opacity: 0, rotateX: -40 },
        { y: 0, opacity: 1, rotateX: 0, duration: 0.8, stagger: 0.12, ease: "power4.out" }
      );
    }
  }, []);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const lenis = (window as any).lenis;
      if (lenis) lenis.scrollTo(el, { offset: -72 });
      else el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-[72px] px-[5vw] overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      {/* Glow blobs */}
      <div className="absolute w-[500px] h-[500px] -top-[100px] -right-[100px] rounded-full animate-float1 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(26,109,255,0.22) 0%, transparent 70%)", filter: "blur(80px)" }}
      />
      <div className="absolute w-[350px] h-[350px] bottom-[100px] left-[5%] rounded-full animate-float2 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%)", filter: "blur(80px)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left content */}
        <div>
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="inline-flex items-center gap-2 text-[#00d4ff] border border-[rgba(0,212,255,0.3)] px-3 py-1.5 rounded-sm mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] animate-pulse2" />
            <span style={{ fontFamily: "Rajdhani, sans-serif" }} className="text-xs font-semibold tracking-[0.2em] uppercase">
              Android App Development Studio
            </span>
          </motion.div>

          {/* Headline — split into words for GSAP */}
          <h1
            ref={headlineRef}
            style={{ fontFamily: "Rajdhani, sans-serif", perspective: "600px" }}
            className="text-[clamp(2.5rem,5.5vw,5rem)] font-bold leading-[1.05] tracking-[0.02em] text-white overflow-hidden"
          >
            <span className="word inline-block opacity-0">We Build</span>
            <br />
            <span className="word inline-block opacity-0 gradient-text">Apps That</span>
            <br />
            <span className="word inline-block opacity-0">Define</span>{" "}
            <span className="word inline-block opacity-0 gradient-text">Experiences</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="text-base font-light text-[#7a94b0] leading-[1.75] mt-6 mb-10 max-w-[480px]"
            style={{ fontFamily: "Exo 2, sans-serif" }}
          >
            Nexovanta Labs crafts premium Android applications with cutting-edge architecture, pixel-perfect UI, and performance that scales.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.45, duration: 0.6 }}
            className="flex items-center gap-4 flex-wrap"
          >
            <button
              onClick={() => handleScroll("#contact")}
              style={{ fontFamily: "Rajdhani, sans-serif" }}
              className="inline-flex items-center gap-2 text-sm font-bold tracking-[0.12em] uppercase text-[#050d1a] bg-gradient-to-r from-[#1a6dff] to-[#00d4ff] px-8 py-3.5 rounded hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300"
            >
              Start Your Project <ArrowRight size={16} />
            </button>
            <button
              onClick={() => handleScroll("#portfolio")}
              style={{ fontFamily: "Rajdhani, sans-serif" }}
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.1em] uppercase text-[#c8d6e5] border border-[rgba(200,214,229,0.25)] px-8 py-3.5 rounded hover:border-[#1a6dff] hover:text-[#3d9bff] transition-all duration-300"
            >
              <Play size={14} /> View Portfolio
            </button>
          </motion.div>
        </div>

        {/* Right — Phone mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="flex justify-center items-center relative"
        >
          {/* Orbit rings */}
          <div className="orbit-spin absolute w-[360px] h-[360px] border border-[rgba(26,109,255,0.12)] rounded-full pointer-events-none"
            style={{ boxSizing: "border-box" }}>
            <div className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-[#00d4ff] rounded-full shadow-[0_0_12px_#00d4ff]" />
          </div>
          <div className="orbit-spin-rev absolute w-[430px] h-[430px] border border-[rgba(0,212,255,0.06)] rounded-full pointer-events-none" />

          {/* Phone */}
          <div
            className="relative w-[260px] rounded-[40px] border border-[rgba(26,109,255,0.3)] flex flex-col items-center gap-3 px-4 py-6 overflow-hidden"
            style={{
              background: "linear-gradient(145deg, #0d1f3c, #050d1a)",
              boxShadow: "0 0 0 1px rgba(0,212,255,0.1), 0 40px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)",
              aspectRatio: "9/19",
            }}
          >
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-2 bg-[#0a1628] rounded-b-lg" />

            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mt-6"
              style={{ background: "linear-gradient(135deg,#1a6dff,#00d4ff)", boxShadow: "0 8px 24px rgba(26,109,255,0.5)" }}>
              📱
            </div>

            {[75, 55, 85].map((w, i) => (
              <div key={i} className="w-full h-2 rounded-full bg-[rgba(26,109,255,0.15)] relative overflow-hidden">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "linear-gradient(90deg,#1a6dff,#00d4ff)",
                    width: `${w}%`,
                    animation: `loadbar 3s ease-in-out ${i * 0.3}s infinite`,
                  }}
                />
              </div>
            ))}

            <div className="w-full flex flex-col gap-2 mt-auto">
              {[["#1a6dff","#00d4ff"], ["#0ea5e9","#06b6d4"]].map(([from, to], i) => (
                <div key={i} className="w-full flex items-center gap-2 p-2.5 rounded-xl border border-[rgba(26,109,255,0.15)] bg-[rgba(26,109,255,0.08)]">
                  <div className="w-7 h-7 rounded-lg flex-shrink-0 opacity-70"
                    style={{ background: `linear-gradient(135deg,${from},${to})` }} />
                  <div className="flex-1 flex flex-col gap-1">
                    <div className="h-1.5 rounded bg-[rgba(200,214,229,0.2)] w-[70%]" />
                    <div className="h-1.5 rounded bg-[rgba(200,214,229,0.2)] w-[45%]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
