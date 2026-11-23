/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,ts}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#070b14",
          900: "#0b0f19",
          850: "#0f1524",
          800: "#141b2e",
          700: "#1c2540",
        },
        vaix: {
          cyan: "#6EE7FF",
          blue: "#538BF6",
          violet: "#7C3AED",
          pink: "#D81B60",
          red: "#EC4054",
          orange: "#FB8C1A",
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', "ui-sans-serif", "system-ui", "sans-serif"],
        body: ['Inter', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        glow: "0 0 24px rgba(83, 139, 246, 0.45), 0 8px 40px rgba(124, 58, 237, 0.25)",
        "glow-lg": "0 0 44px rgba(110, 231, 255, 0.5), 0 14px 64px rgba(124, 58, 237, 0.35)",
      },
      animation: {
        float: "float 9s ease-in-out infinite",
        "float-slow": "float 14s ease-in-out infinite",
        "spin-slow": "spin 24s linear infinite",
        marquee: "marquee 32s linear infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
        blink: "blink 1.1s step-end infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(0,-28px,0) scale(1.06)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
