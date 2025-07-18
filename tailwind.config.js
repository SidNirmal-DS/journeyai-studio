/**
 * Theme: JourneyAI Soft Premium UI
 * Inspired by UI palettes shared by the user
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        foreground: '#09090B',
        muted: '#71717A',
        primary: '#F97316',
        'primary-foreground': '#FFFFFF',
        secondary: '#F4F4F5',
        'secondary-foreground': '#09090B',
        border: '#E4E4E7',
        input: '#E4E4E7',
        card: '#FFFFFF',
        'card-foreground': '#09090B',
        popover: '#FFFFFF',
        'popover-foreground': '#09090B',
        accent: '#F4F4F5',
        'accent-foreground': '#09090B'
      },
      borderRadius: {
        DEFAULT: '0.5rem', // 8px
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography")
  ],
}; 