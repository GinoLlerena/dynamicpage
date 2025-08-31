/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          600: '#2563eb',
          700: '#1d4ed8',
        },
        muted: '#6b7280',
        border: '#e5e7eb',
        surface: '#ffffff',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
