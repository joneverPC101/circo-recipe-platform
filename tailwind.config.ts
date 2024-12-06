import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Include files from src
    "./public/**/*.html",         // Include any static HTML in public
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',       // Example custom color
        secondary: '#F59E0B',     // Example custom color
      },
    },
  },
  plugins: [],
};

export default config;
