/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cherry: ['"Cherry Bomb One"', 'serif'],
      },
      colors: {
        background: '#D4D2D5',
        background2: '#AA968A',
        background3: '#BFAFA6',
        foreground: '#1c1c1c',
        primary: '#6C698D',
        secondary: '#6E6A6F',
        destructive: '#9e4646'
      },
    },
  },
  plugins: [],
};
