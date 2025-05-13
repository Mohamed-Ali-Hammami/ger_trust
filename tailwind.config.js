/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Royal Blue (Bleu Roi) color palette
        royal: {
          50: "#f0f5ff",
          100: "#dbe8fe",
          200: "#bfd7fe",
          300: "#93bbfd",
          400: "#6094fa",
          500: "#3b76f6", // Base royal blue
          600: "#2658eb",
          700: "#1f46d8",
          800: "#1f3aaf",
          900: "#1f348a",
          950: "#172254", // Dark royal blue
        },
        // Grey color palette
        grey: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
          950: "#030712", // Almost black
        },
        // Black shades
        black: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#000000", // Pure black
        },
        // Accent colors
        accent: {
          light: "#4f9cf9", // Lighter royal blue
          DEFAULT: "#3b76f6", // Matches royal.500
          dark: "#2658eb", // Matches royal.600
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Georgia", "serif"],
        mono: ["Menlo", "monospace"],
      },
      boxShadow: {
        'royal': '0 4px 14px 0 rgba(59, 118, 246, 0.2)',
        'royal-lg': '0 10px 28px 0 rgba(59, 118, 246, 0.25)',
      },
      backgroundImage: {
        'royal-gradient': 'linear-gradient(135deg, #3b76f6 0%, #1f46d8 100%)',
        'dark-gradient': 'linear-gradient(135deg, #111827 0%, #030712 100%)',
      }
    },
  },
  plugins: [],
};