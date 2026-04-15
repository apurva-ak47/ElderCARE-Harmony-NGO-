/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef7ff',
          100: '#d8edff',
          200: '#badeff',
          300: '#8cc9ff',
          400: '#56abff',
          500: '#2e8fff',
          600: '#1d74f2',
          700: '#195edb',
          800: '#1b4cae',
          900: '#1b4389',
        },
      },
      boxShadow: {
        soft: '0 12px 40px rgba(19, 58, 110, 0.14)',
      },
    },
  },
  plugins: [],
};