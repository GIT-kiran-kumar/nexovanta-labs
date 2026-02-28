"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const lenis = (window as any).lenis;
      if (lenis) lenis.scrollTo(el, { offset: -72 });
      else el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5vw] h-[72px] transition-all duration-300 ${
          scrolled
            ? "glass border-b border-[rgba(26,109,255,0.15)] shadow-[0_0_40px_rgba(26,109,255,0.08)]"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 relative">
            <Image src="/logo.png" alt="Nexovanta Labs" fill className="object-contain" />
          </div>
          <span
            style={{ fontFamily: "Rajdhani, sans-serif" }}
            className="text-lg font-bold tracking-[0.12em] uppercase text-white"
          >
            Nexovanta <span className="text-[#00d4ff]">Labs</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => handleNavClick(l.href)}
                style={{ fontFamily: "Rajdhani, sans-serif" }}
                className="relative text-sm font-semibold tracking-[0.1em] uppercase text-[#7a94b0] hover:text-white transition-colors duration-200 group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 right-0 h-[1px] bg-[#00d4ff] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            </li>
          ))}

          {/* Theme Toggle */}
          {mounted && (
            <li>
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-[rgba(26,109,255,0.2)] bg-[rgba(26,109,255,0.08)] text-[#7a94b0] hover:text-white hover:border-[rgba(26,109,255,0.5)] transition-all duration-300"
              >
                {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
              </button>
            </li>
          )}

          <li>
            <button
              onClick={() => handleNavClick("#contact")}
              style={{ fontFamily: "Rajdhani, sans-serif" }}
              className="text-sm font-bold tracking-[0.12em] uppercase text-navy-DEFAULT bg-gradient-to-r from-[#1a6dff] to-[#00d4ff] text-[#050d1a] px-5 py-2 rounded hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300"
            >
              Get a Quote
            </button>
          </li>
        </ul>

        {/* Mobile: theme + hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-[rgba(26,109,255,0.2)] text-[#7a94b0]"
            >
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </button>
          )}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-9 h-9 flex items-center justify-center text-[#c8d6e5]"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[72px] z-40 glass flex flex-col items-center justify-center gap-8"
          >
            {links.map((l, i) => (
              <motion.button
                key={l.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => handleNavClick(l.href)}
                style={{ fontFamily: "Rajdhani, sans-serif" }}
                className="text-2xl font-bold tracking-[0.15em] uppercase text-[#c8d6e5] hover:text-[#00d4ff] transition-colors duration-200"
              >
                {l.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.07 }}
              onClick={() => handleNavClick("#contact")}
              style={{ fontFamily: "Rajdhani, sans-serif" }}
              className="mt-4 text-lg font-bold tracking-[0.12em] uppercase bg-gradient-to-r from-[#1a6dff] to-[#00d4ff] text-[#050d1a] px-8 py-3 rounded"
            >
              Get a Quote
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
