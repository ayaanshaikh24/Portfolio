/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0a0a0c',
          surface: '#111115',
          card: '#16161c',
          border: '#1f1f28',
          text: '#ededed',
          muted: '#8e8e99',
        },
        light: {
          bg: '#f6f6f8',
          surface: '#ffffff',
          card: '#f0f0f4',
          border: '#e2e2e8',
          text: '#121216',
          muted: '#686875',
        },
        accent: {
          DEFAULT: '#3b82f6',
          cyan: '#00f0ff',
          electric: '#4f46e5',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      transitionTimingFunction: {
        'editorial': 'cubic-bezier(0.16, 1, 0.3, 1)',
      }
    },
  },
  plugins: [],
}
