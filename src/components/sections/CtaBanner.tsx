"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CtaBanner() {
  const handleScroll = () => {
    const el = document.querySelector("#contact");
    if (el) {
      const lenis = (window as any).lenis;
      if (lenis) lenis.scrollTo(el, { offset: -72 });
      else el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative z-10 px-[5vw] py-24 bg-gradient-to-r from-[rgba(26,109,255,0.12)] to-[rgba(0,212,255,0.05)] border-y border-[rgba(26,109,255,0.15)] text-center overflow-hidden">
      {/* BG glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] rounded-full opacity-20"
          style={{ background: "radial-gradient(ellipse, #1a6dff 0%, transparent 70%)", filter: "blur(60px)" }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <h2 style={{ fontFamily: "Rajdhani, sans-serif" }}
          className="text-[clamp(1.8rem,3.5vw,3rem)] font-bold text-white mb-4">
          Ready to Build Something{" "}
          <span className="gradient-text">Extraordinary?</span>
        </h2>
        <p className="text-base font-light text-[#7a94b0] mb-10">
          Let's turn your app idea into reality. Free consultation, no commitment.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <button
            onClick={handleScroll}
            style={{ fontFamily: "Rajdhani, sans-serif" }}
            className="inline-flex items-center gap-2 text-sm font-bold tracking-[0.12em] uppercase text-[#050d1a] bg-gradient-to-r from-[#1a6dff] to-[#00d4ff] px-8 py-3.5 rounded hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300"
          >
            Book Free Consultation <ArrowRight size={16} />
          </button>
          <a
            href="mailto:nexovantalabs@gmail.com"
            style={{ fontFamily: "Rajdhani, sans-serif" }}
            className="text-sm font-semibold tracking-[0.1em] uppercase text-[#c8d6e5] border border-[rgba(200,214,229,0.25)] px-8 py-3.5 rounded hover:border-[#1a6dff] hover:text-[#3d9bff] transition-all duration-300"
          >
            nexovantalabs@gmail.com
          </a>
        </div>
      </motion.div>
    </section>
  );
}
