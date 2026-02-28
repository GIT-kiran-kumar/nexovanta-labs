"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹49,999",
    per: "/ project",
    desc: "Perfect for MVPs and early-stage startups testing a concept.",
    features: [
      { text: "Up to 5 Screens", active: true },
      { text: "REST API Integration", active: true },
      { text: "Firebase Backend", active: true },
      { text: "Play Store Submission", active: true },
      { text: "Custom Admin Panel", active: false },
      { text: "Source Code Handover", active: false },
    ],
    featured: false,
    cta: "Get Started",
  },
  {
    name: "Growth",
    price: "₹1,29,999",
    per: "/ project",
    desc: "Full-featured apps for growing businesses ready to scale.",
    features: [
      { text: "Up to 15 Screens", active: true },
      { text: "Custom Backend / API", active: true },
      { text: "Payment Gateway", active: true },
      { text: "Push Notifications", active: true },
      { text: "Admin Dashboard", active: true },
      { text: "Source Code Handover", active: true },
    ],
    featured: true,
    cta: "Get Started",
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    per: "",
    desc: "Complex, multi-platform products with dedicated team engagement.",
    features: [
      { text: "Unlimited Screens", active: true },
      { text: "Microservices Architecture", active: true },
      { text: "AI/ML Integration", active: true },
      { text: "Dedicated Team", active: true },
      { text: "SLA & 24/7 Support", active: true },
      { text: "Full IP Ownership", active: true },
    ],
    featured: false,
    cta: "Talk to Us",
  },
];

export function PricingSection() {
  const handleContact = () => {
    const el = document.querySelector("#contact");
    if (el) {
      const lenis = (window as any).lenis;
      if (lenis) lenis.scrollTo(el, { offset: -72 });
      else el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="relative z-10 px-[5vw] py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="section-tag mb-3">// Investment</div>
        <h2 style={{ fontFamily: "Rajdhani, sans-serif" }}
          className="text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.1] text-white">
          Transparent <span className="gradient-text">Pricing</span>
        </h2>
        <p className="text-base font-light text-[#7a94b0] leading-[1.7] max-w-[480px] mx-auto mt-4">
          No hidden costs. No surprises. Just great apps at a fair price.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ y: -6 }}
            className={`relative rounded-xl p-10 overflow-hidden transition-all duration-300 ${
              plan.featured
                ? "border border-[rgba(26,109,255,0.5)] bg-gradient-to-b from-[rgba(26,109,255,0.08)] to-[rgba(0,212,255,0.04)] shadow-[0_0_40px_rgba(26,109,255,0.12)]"
                : "border border-[rgba(26,109,255,0.15)] bg-[rgba(8,20,41,0.9)]"
            }`}
          >
            {plan.badge && (
              <div style={{ fontFamily: "Rajdhani, sans-serif" }}
                className="absolute top-6 right-6 text-[0.65rem] font-bold tracking-[0.15em] uppercase bg-gradient-to-r from-[#1a6dff] to-[#00d4ff] text-[#050d1a] px-2.5 py-1 rounded-sm">
                {plan.badge}
              </div>
            )}

            <div style={{ fontFamily: "Rajdhani, sans-serif" }}
              className="text-[0.75rem] font-semibold tracking-[0.2em] uppercase text-[#00d4ff] mb-4">
              {plan.name}
            </div>

            <div style={{ fontFamily: "Rajdhani, sans-serif" }}
              className="text-[2.75rem] font-bold text-white leading-none">
              {plan.price}
              {plan.per && <span className="text-base font-light text-[#7a94b0] ml-1">{plan.per}</span>}
            </div>

            <p className="text-sm font-light text-[#7a94b0] mt-4 mb-6 leading-[1.6]">{plan.desc}</p>

            <ul className="flex flex-col gap-3 mb-8">
              {plan.features.map((f) => (
                <li key={f.text} className={`flex items-center gap-3 text-sm font-light ${f.active ? "text-[#c8d6e5]" : "text-[#7a94b0]"}`}>
                  <Check size={14} className={f.active ? "text-[#00d4ff] flex-shrink-0" : "text-[rgba(200,214,229,0.3)] flex-shrink-0"} />
                  {f.text}
                </li>
              ))}
            </ul>

            <button
              onClick={handleContact}
              style={{ fontFamily: "Rajdhani, sans-serif" }}
              className={`w-full py-3 rounded text-sm font-bold tracking-[0.12em] uppercase transition-all duration-300 ${
                plan.featured
                  ? "bg-gradient-to-r from-[#1a6dff] to-[#00d4ff] text-[#050d1a] hover:shadow-glow hover:-translate-y-0.5"
                  : "border border-[rgba(200,214,229,0.25)] text-[#c8d6e5] hover:border-[#1a6dff] hover:text-[#3d9bff]"
              }`}
            >
              {plan.cta}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
