/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f0f7',
          100: '#cce0ef',
          200: '#99c2df',
          300: '#66a3cf',
          400: '#3385bf',
          500: '#0066af',
          600: '#063D64', // main brand blue
          700: '#053456',
          800: '#042a45',
          900: '#021522',
        },
        secondary: {
          50: '#f0f4ea',
          100: '#e1e9d4',
          200: '#c3d3a9',
          300: '#a5bd7e',
          400: '#86a753',
          500: '#679128',
          600: '#527B14', // main brand green
          700: '#486b11',
          800: '#3d5b0e',
          900: '#1f2e07',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};