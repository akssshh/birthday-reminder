/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: "#6739F6",
        yellow: "#FFDE66",
        secondary: "#7239C7",
        black: "#001141",
        grey: "#71787E",
        blue: "#00B7F6",
        purple: "#491d8b",
        golden: "#F5BF1C"
      },
    },

  },
  plugins: [],
}
