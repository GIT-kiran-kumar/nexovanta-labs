"use client";

import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";

const stats = [
  { value: 50, suffix: "+", label: "Apps Delivered" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 4.9, suffix: "★", label: "Play Store Rating Avg" },
  { value: 5, suffix: "M+", label: "Total App Installs" },
];

function StatItem({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const numRef = useRef<HTMLSpanElement>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
  if (inView && numRef.current) {
    const obj = { val: 0 };
    gsap.to(obj, {
      val: value,
      duration: 2,
      delay,
      ease: "power2.out",
      onUpdate: () => {
        if (numRef.current) {
          numRef.current.textContent =
            value % 1 !== 0 ? obj.val.toFixed(1) : Math.floor(obj.val).toString();
        }
      },
    });
  }
}, [inView, value, delay]);

  return (
    <div ref={ref} className="bg-[#081429] py-10 px-8 text-center hover:bg-[rgba(26,109,255,0.08)] transition-colors duration-300 group">
      <div className="gradient-text font-bold leading-none mb-2"
        style={{ fontFamily: "Rajdhani, sans-serif", fontSize: "clamp(2rem,3.5vw,3rem)" }}>
        <span ref={numRef}>0</span>{suffix}
      </div>
      <div className="text-xs font-light tracking-[0.15em] uppercase text-[#7a94b0] mt-2"
        style={{ fontFamily: "Rajdhani, sans-serif" }}>
        {label}
      </div>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="relative z-10 px-[5vw] py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 border border-[rgba(26,109,255,0.15)] rounded-lg overflow-hidden divide-x divide-y lg:divide-y-0 divide-[rgba(26,109,255,0.1)]">
        {stats.map((s, i) => (
          <StatItem key={s.label} {...s} delay={i * 0.15} />
        ))}
      </div>
    </section>
  );
}
