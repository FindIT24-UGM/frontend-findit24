/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {
      colors: {
        primary: {
          300: '#F1A56A',
          500: '#EE8478',
        },
        secondary: {
          green: '#58D3AC',
          blue: '#92C2D0',
          purple: '#CA45C5',
        },
        'text-placeholder': {
          dark: '#233E51',
          light: '#FCFCFC',
        },
        background: {
          skyblue: '#2A93C2',
        },
        success: {
          100: '#9FE7CB',
          300: '#6EE7B7',
          500: '#10B981',
          700: '#047B57',
          900: '#064E3B',
        },
        warning: {
          100: '#EDD761',
          300: '#E8C81B',
          500: '#E1820A',
          700: '#A12D06',
          900: '#631505',
        },
        error: {
          100: '#DFA1AD',
          300: '#D17486',
          500: '#C70026',
          700: '#960009',
          900: '#60000B',
        },
        neutral: {
          100: '#F5F5F5',
          300: '#B6B7BA',
          500: '#747680',
          700: '#393A41',
          900: '#1D1D21',
        },
        shade: {
          black: '#000000',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
        Ava: ['AVA'],
        GameOfSquid: ['Game Of Squid'],
        CreatoDisplay: ['Creato Display'],
      },
    },
  },
  plugins: [],
};
