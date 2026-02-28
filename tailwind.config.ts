import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#050d1a",
          2: "#081429",
          3: "#0d1f3c",
        },
        brand: {
          blue: "#1a6dff",
          "blue-bright": "#3d9bff",
          cyan: "#00d4ff",
        },
        silver: {
          DEFAULT: "#c8d6e5",
          dim: "#7a94b0",
        },
      },
      fontFamily: {
        rajdhani: ["var(--font-rajdhani)", "sans-serif"],
        exo: ["var(--font-exo)", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(26,109,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(26,109,255,0.04) 1px, transparent 1px)",
        "brand-gradient": "linear-gradient(135deg, #1a6dff, #00d4ff)",
        "hero-radial":
          "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
      },
      backgroundSize: {
        grid: "60px 60px",
      },
      animation: {
        float1: "float1 8s ease-in-out infinite",
        float2: "float2 10s ease-in-out infinite",
        pulse2: "pulse2 2s ease infinite",
        spin2: "spin2 18s linear infinite",
        spin3: "spin2 30s linear infinite reverse",
        loadbar: "loadbar 3s ease-in-out infinite",
      },
      keyframes: {
        float1: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(-30px, 30px) scale(1.05)" },
        },
        float2: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(20px, -20px) scale(0.95)" },
        },
        pulse2: {
          "0%,100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.7)" },
        },
        spin2: {
          to: { transform: "rotate(360deg)" },
        },
        loadbar: {
          "0%": { transform: "scaleX(0)", transformOrigin: "left" },
          "50%": { transform: "scaleX(1)", transformOrigin: "left" },
          "50.01%": { transform: "scaleX(1)", transformOrigin: "right" },
          "100%": { transform: "scaleX(0)", transformOrigin: "right" },
        },
      },
      boxShadow: {
        glow: "0 0 30px rgba(26,109,255,0.35)",
        "glow-sm": "0 0 20px rgba(26,109,255,0.25)",
        "glow-cyan": "0 0 20px rgba(0,212,255,0.3)",
      },
    },
  },
  plugins: [],
};
export default config;
