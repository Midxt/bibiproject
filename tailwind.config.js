/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#132238',
        cream: '#f8f7f3',
        coral: '#f47764',
        mint: '#dff6ee',
      },
      fontFamily: {
        display: ['Arial', 'Helvetica', 'sans-serif'],
        body: ['Arial', 'Helvetica', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 60px rgba(19, 34, 56, 0.08)',
      },
    },
  },
  plugins: [],
};
