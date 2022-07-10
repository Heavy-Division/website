const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        colors,
        'navy': '#080D19',
        'light-navy': '#202E4C',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
        'white': '#f4f4f4',
        'pure-white':'#ffffff',
        blue: {
          'tailwind': '#0761e2',
          'sky': '#3eb1ff',
        }
      },
      fontFamily: {
        sans: ['Noto Sans'],
      },
      fontSize: {
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
      extend: {
        spacing: {
          '8xl': '96rem',
          '9xl': '128rem',
          '1': '8rem',
          '2': '12rem',
          '3': '16rem',
          '4': '24rem',
          '5': '32rem',
          '6': '48rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
      }
    },
    plugins: [],
  }
}
