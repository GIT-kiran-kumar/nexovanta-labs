"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  {
    icon: "🏗️",
    title: "Custom App Development",
    desc: "Native Android apps built with Kotlin & Jetpack Compose, designed for performance, scalability, and stunning user experience.",
    tags: ["Kotlin", "Jetpack", "MVVM"],
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    desc: "Material You design systems with pixel-perfect implementation. We craft interfaces users love to interact with every day.",
    tags: ["Material 3", "Figma", "Animations"],
  },
  {
    icon: "🔗",
    title: "API & Backend Integration",
    desc: "Seamless REST/GraphQL API integration, Firebase, cloud databases, and real-time synchronization for data-driven apps.",
    tags: ["Firebase", "REST API", "GraphQL"],
  },
  {
    icon: "🚀",
    title: "App Optimization",
    desc: "Performance profiling, crash reduction, battery optimization, and cold-start improvements to hit 60fps buttery smoothness.",
    tags: ["ProGuard", "Profiling", "R8"],
  },
  {
    icon: "🔒",
    title: "Security & Compliance",
    desc: "End-to-end encryption, secure storage, OAuth2, biometric authentication — your app hardened from the ground up.",
    tags: ["OAuth2", "Biometrics", "TLS"],
  },
  {
    icon: "📊",
    title: "Maintenance & Growth",
    desc: "Post-launch monitoring, Play Store ASO, analytics dashboards, and iterative feature development to keep your app ahead.",
    tags: ["ASO", "Analytics", "CI/CD"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.23, 1, 0.32, 1] },
  }),
};

export function ServicesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" className="relative z-10 px-[5vw] py-28 bg-gradient-to-b from-[#050d1a] to-[#081429]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="section-tag mb-3">// What We Do</div>
        <h2 style={{ fontFamily: "Rajdhani, sans-serif" }}
          className="text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.1] text-white">
          End-to-End <span className="gradient-text">Android</span> Solutions
        </h2>
        <p className="text-base font-light text-[#7a94b0] leading-[1.7] max-w-[560px] mx-auto mt-4">
          From ideation to launch and beyond — we handle every layer of your Android product with precision.
        </p>
      </motion.div>

      {/* Grid */}
      <div ref={ref} className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            custom={i}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={cardVariants}
            whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(26,109,255,0.14)" }}
            className="relative bg-[rgba(8,20,41,0.8)] border border-[rgba(26,109,255,0.15)] rounded-xl p-10 overflow-hidden group cursor-default"
          >
            {/* Hover gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(26,109,255,0.06)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />

            <div className="w-13 h-13 w-[52px] h-[52px] bg-[rgba(26,109,255,0.15)] border border-[rgba(26,109,255,0.3)] rounded-xl flex items-center justify-center text-2xl mb-6">
              {s.icon}
            </div>
            <h3 style={{ fontFamily: "Rajdhani, sans-serif" }}
              className="text-lg font-bold tracking-[0.05em] text-white mb-3">
              {s.title}
            </h3>
            <p className="text-sm font-light text-[#7a94b0] leading-[1.65] mb-5">{s.desc}</p>
            <div className="flex flex-wrap gap-2">
              {s.tags.map((t) => (
                <span key={t} style={{ fontFamily: "Rajdhani, sans-serif" }}
                  className="text-[0.65rem] font-semibold tracking-[0.1em] uppercase text-[#3d9bff] border border-[rgba(26,109,255,0.25)] px-2.5 py-1 rounded-sm">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
