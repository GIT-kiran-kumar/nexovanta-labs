"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function PageTransition() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ background: "#081429" }}
          initial={{ scaleY: 1, transformOrigin: "top" }}
          exit={{ scaleY: 0, transformOrigin: "top" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center gap-3"
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse" />
              <span
                style={{ fontFamily: "Rajdhani, sans-serif" }}
                className="text-white text-xl font-bold tracking-[0.2em] uppercase"
              >
                Nexovanta <span className="text-[#00d4ff]">Labs</span>
              </span>
            </div>
            <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#1a6dff] to-transparent" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
