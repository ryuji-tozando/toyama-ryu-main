/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'toyama': {
          'dark': '#264653',
          'teal': '#2A9D8F',
          'yellow': '#E9C46A',
          'orange': '#F4A261',
          'base': '#F8F9FA',
        },
      },
      fontFamily: {
        'serif': ['Noto Serif JP', 'serif'],
        'sans': ['Noto Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
