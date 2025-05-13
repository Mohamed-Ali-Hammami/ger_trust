/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Marine Blue color palette
        marine: {
          50: "#eaf1f8",
          100: "#c9d6e6",
          200: "#a2bad3",
          300: "#7495b5",
          400: "#45709a",
          500: "#17426c", // Base marine blue
          600: "#13365a",
          700: "#102840",
          800: "#0c1d2e",
          900: "#091522",
          950: "#060d13", // Very dark marine
        },
        // Dark Gray color palette
        grey: {
          50: "#23262b",
          100: "#23262b",
          200: "#23262b",
          300: "#23262b",
          400: "#23262b",
          500: "#23262b",
          600: "#23262b",
          700: "#1a1d21",
          800: "#181b20",
          900: "#14161a",
          950: "#101216", // Almost black
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
  light: "#45709a", // Lighter marine blue
  DEFAULT: "#17426c", // Base marine blue
  dark: "#102840", // Dark marine blue
},
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Georgia", "serif"],
        mono: ["Menlo", "monospace"],
      },
      boxShadow: {
        'marine': '0 4px 14px 0 rgba(23, 66, 108, 0.18)',
        'marine-lg': '0 10px 28px 0 rgba(23, 66, 108, 0.22)',
      },
      backgroundImage: {
        'marine-gradient': 'linear-gradient(135deg, #17426c 0%, #102840 100%)',
        'dark-gradient': 'linear-gradient(135deg, #181b20 0%, #101216 100%)',
      }
    },
  },
  plugins: [],
};