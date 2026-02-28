"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  Services: ["App Development", "UI/UX Design", "API Integration", "Optimization", "Maintenance"],
  Company: ["Our Process", "Portfolio", "Pricing", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "NDA Template"],
};

export function Footer() {
  return (
    <footer className="relative z-10 bg-[rgba(5,13,26,0.95)] border-t border-[rgba(26,109,255,0.1)] pt-16 pb-8 px-[5vw]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 relative">
                <Image src="/logo.png" alt="Nexovanta Labs" fill className="object-contain" />
              </div>
              <span
                style={{ fontFamily: "Rajdhani, sans-serif" }}
                className="text-lg font-bold tracking-[0.1em] uppercase text-white"
              >
                Nexovanta <span className="text-[#00d4ff]">Labs</span>
              </span>
            </div>
            <p className="text-sm font-light text-[#7a94b0] leading-relaxed max-w-[280px]">
              Premium Android app development studio. We build apps that define experiences and drive business growth.
            </p>
            <div className="flex gap-3 mt-6">
              {["in", "𝕏", "⌥", "◎"].map((icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-[rgba(26,109,255,0.08)] border border-[rgba(26,109,255,0.2)] flex items-center justify-center text-sm text-[#7a94b0] hover:bg-[rgba(26,109,255,0.2)] hover:border-[rgba(26,109,255,0.5)] hover:text-white transition-all duration-300"
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, items]) => (
            <div key={title}>
              <h4
                style={{ fontFamily: "Rajdhani, sans-serif" }}
                className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c8d6e5] mb-5"
              >
                {title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm font-light text-[#7a94b0] hover:text-[#3d9bff] transition-colors duration-200"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[rgba(26,109,255,0.1)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-light text-[#7a94b0]">
            © 2026 Nexovanta Labs. All rights reserved.
          </p>
          <p className="text-xs font-light text-[#7a94b0]">
            Built with ❤️ in India
          </p>
        </div>
      </div>
    </footer>
  );
}
