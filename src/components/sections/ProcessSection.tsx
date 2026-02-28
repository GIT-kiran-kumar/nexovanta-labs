"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Discovery & Architecture", desc: "We deep-dive into your business goals, define user stories, and architect a technical blueprint before writing a single line of code." },
  { num: "02", title: "Design & Prototype", desc: "High-fidelity Figma designs with interactive prototypes. You see and feel the app before development begins." },
  { num: "03", title: "Agile Development", desc: "2-week sprints with demo deliverables. Full transparency via shared project board and weekly standups." },
  { num: "04", title: "QA & Launch", desc: "Rigorous testing across 20+ device profiles, Play Store optimization, and a smooth production rollout." },
];

const tech = [
  { icon: "🤖", name: "Kotlin" },
  { icon: "🖼️", name: "Compose" },
  { icon: "🔥", name: "Firebase" },
  { icon: "☁️", name: "Retrofit" },
  { icon: "🗄️", name: "Room DB" },
  { icon: "⚙️", name: "Hilt / DI" },
  { icon: "🔄", name: "Coroutines" },
  { icon: "🗺️", name: "Maps SDK" },
  { icon: "📦", name: "WorkManager" },
];

export function ProcessSection() {
  return (
    <section id="process" className="relative z-10 px-[5vw] py-28">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        {/* Left: Steps */}
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="section-tag mb-3">// How We Work</div>
            <h2 style={{ fontFamily: "Rajdhani, sans-serif" }}
              className="text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.1] text-white">
              A Process Built for <span className="gradient-text">Clarity</span>
            </h2>
            <p className="text-base font-light text-[#7a94b0] leading-[1.7] mt-4 mb-12 max-w-[480px]">
              No surprises, no scope creep. Our structured approach delivers on time, every time.
            </p>
          </motion.div>

          <div className="relative pl-8 border-l border-[rgba(26,109,255,0.15)]">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative pb-10 last:pb-0 group"
              >
                {/* Dot */}
                <div className="absolute -left-[41px] top-0 w-[9px] h-[9px] rounded-full bg-[#050d1a] border-2 border-[rgba(26,109,255,0.4)] group-hover:border-[#00d4ff] group-hover:bg-[#00d4ff] transition-all duration-300" />
                <div className="flex gap-5">
                  <span style={{ fontFamily: "Rajdhani, sans-serif" }}
                    className="text-3xl font-bold text-[rgba(26,109,255,0.3)] leading-none w-10 flex-shrink-0">
                    {step.num}
                  </span>
                  <div>
                    <h3 style={{ fontFamily: "Rajdhani, sans-serif" }}
                      className="text-lg font-bold tracking-[0.05em] text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm font-light text-[#7a94b0] leading-[1.65]">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Tech Stack */}
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
            <div className="section-tag mb-3">// Tech Stack</div>
            <h2 style={{ fontFamily: "Rajdhani, sans-serif" }}
              className="text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.1] text-white mb-8">
              Tools We <span className="gradient-text">Master</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-3 gap-3">
            {tech.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                whileHover={{ y: -4, borderColor: "rgba(0,212,255,0.5)" }}
                className="bg-[rgba(8,20,41,0.9)] border border-[rgba(26,109,255,0.15)] rounded-xl p-5 text-center cursor-default transition-colors duration-300"
              >
                <div className="text-2xl mb-2">{t.icon}</div>
                <div style={{ fontFamily: "Rajdhani, sans-serif" }}
                  className="text-xs font-semibold tracking-[0.08em] uppercase text-[#7a94b0]">
                  {t.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
