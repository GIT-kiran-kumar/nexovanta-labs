"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";

const contactDetails = [
  { icon: Mail, text: "nexovantalabs@gmail.com" },
  { icon: Phone, text: "+91 93923 35414" },
  { icon: MapPin, text: "India (Remote-first studio)" },
  { icon: Clock, text: "Response within 24 hours" },
];

export function ContactSection() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const form = e.target as HTMLFormElement;
    const data = {
      name: (form[0] as HTMLInputElement).value,
      email: (form[1] as HTMLInputElement).value,
      phone: (form[2] as HTMLInputElement).value,
      budget: (form[3] as HTMLSelectElement).value,
      message: (form[4] as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setLoading(false);
        setSent(true);
        form.reset();
        setTimeout(() => setSent(false), 5000);
      } else {
        throw new Error("Failed");
      }
    } catch {
      setLoading(false);
      setError(true);
      setTimeout(() => setError(false), 5000);
    }
  };

  return (
    <section id="contact" className="relative z-10 px-[5vw] py-28">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        {/* Left info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag mb-3">// Let&apos;s Talk</div>
          <h2
            style={{ fontFamily: "Rajdhani, sans-serif" }}
            className="text-[clamp(2rem,4vw,3rem)] font-bold text-white mb-4"
          >
            Start Your <span className="gradient-text">Project</span>
          </h2>
          <p className="text-[0.95rem] font-light text-[#7a94b0] leading-[1.7] mb-10 max-w-[420px]">
            Fill out the form and our team will get back to you within 24 hours
            with a detailed proposal tailored to your requirements.
          </p>

          <div className="flex flex-col gap-5">
            {contactDetails.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[rgba(26,109,255,0.1)] border border-[rgba(26,109,255,0.2)] flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-[#3d9bff]" />
                </div>
                <span className="text-sm font-light text-[#c8d6e5]">{text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label
                style={{ fontFamily: "Rajdhani, sans-serif" }}
                className="text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-[#7a94b0]"
              >
                Your Name
              </label>
              <input
                type="text"
                required
                placeholder="John Doe"
                className="bg-[rgba(8,20,41,0.8)] border border-[rgba(26,109,255,0.2)] rounded-lg px-4 py-3.5 text-sm font-light text-white placeholder-[rgba(122,148,176,0.5)] outline-none focus:border-[#1a6dff] focus:shadow-[0_0_0_3px_rgba(26,109,255,0.12)] transition-all duration-300"
                style={{ fontFamily: "Exo 2, sans-serif" }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                style={{ fontFamily: "Rajdhani, sans-serif" }}
                className="text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-[#7a94b0]"
              >
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="john@example.com"
                className="bg-[rgba(8,20,41,0.8)] border border-[rgba(26,109,255,0.2)] rounded-lg px-4 py-3.5 text-sm font-light text-white placeholder-[rgba(122,148,176,0.5)] outline-none focus:border-[#1a6dff] focus:shadow-[0_0_0_3px_rgba(26,109,255,0.12)] transition-all duration-300"
                style={{ fontFamily: "Exo 2, sans-serif" }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label
                style={{ fontFamily: "Rajdhani, sans-serif" }}
                className="text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-[#7a94b0]"
              >
                Phone (optional)
              </label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                className="bg-[rgba(8,20,41,0.8)] border border-[rgba(26,109,255,0.2)] rounded-lg px-4 py-3.5 text-sm font-light text-white placeholder-[rgba(122,148,176,0.5)] outline-none focus:border-[#1a6dff] focus:shadow-[0_0_0_3px_rgba(26,109,255,0.12)] transition-all duration-300"
                style={{ fontFamily: "Exo 2, sans-serif" }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                style={{ fontFamily: "Rajdhani, sans-serif" }}
                className="text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-[#7a94b0]"
              >
                Budget Range
              </label>
              <select
                className="bg-[rgba(8,20,41,0.8)] border border-[rgba(26,109,255,0.2)] rounded-lg px-4 py-3.5 text-sm font-light text-[#7a94b0] outline-none focus:border-[#1a6dff] focus:shadow-[0_0_0_3px_rgba(26,109,255,0.12)] transition-all duration-300 cursor-pointer"
                style={{ fontFamily: "Exo 2, sans-serif" }}
              >
                <option value="">Select budget...</option>
                <option>Under ₹50,000</option>
                <option>₹50,000 – ₹1,50,000</option>
                <option>₹1,50,000 – ₹5,00,000</option>
                <option>Above ₹5,00,000</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label
              style={{ fontFamily: "Rajdhani, sans-serif" }}
              className="text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-[#7a94b0]"
            >
              Project Description
            </label>
            <textarea
              required
              rows={5}
              placeholder="Tell us about your app idea, target audience, key features..."
              className="bg-[rgba(8,20,41,0.8)] border border-[rgba(26,109,255,0.2)] rounded-lg px-4 py-3.5 text-sm font-light text-white placeholder-[rgba(122,148,176,0.5)] outline-none focus:border-[#1a6dff] focus:shadow-[0_0_0_3px_rgba(26,109,255,0.12)] transition-all duration-300 resize-none"
              style={{ fontFamily: "Exo 2, sans-serif" }}
            />
          </div>

          {/* Error message */}
          {error && (
            <div className="text-sm text-red-400 text-center bg-red-400/10 border border-red-400/20 rounded-lg py-3 px-4">
              Something went wrong. Please try again or email us directly.
            </div>
          )}

          <motion.button
            type="submit"
            disabled={loading || sent}
            whileHover={{ y: -2, boxShadow: "0 0 30px rgba(26,109,255,0.35)" }}
            whileTap={{ scale: 0.98 }}
            style={{ fontFamily: "Rajdhani, sans-serif" }}
            className={`w-full py-4 rounded text-sm font-bold tracking-[0.12em] uppercase flex items-center justify-center gap-2 transition-all duration-300 ${
              sent
                ? "bg-gradient-to-r from-[#16a34a] to-[#22c55e] text-white"
                : error
                ? "bg-gradient-to-r from-red-600 to-red-500 text-white"
                : "bg-gradient-to-r from-[#1a6dff] to-[#00d4ff] text-[#050d1a]"
            } disabled:opacity-70 disabled:cursor-not-allowed`}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-[#050d1a] border-t-transparent rounded-full animate-spin" />
                Sending...
              </span>
            ) : sent ? (
              "✓ Message Sent! We'll reply within 24 hours."
            ) : error ? (
              "Failed — Try Again"
            ) : (
              <>
                Send Message <ArrowRight size={16} />
              </>
            )}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}