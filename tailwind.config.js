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
      backgroundImage: {
        'gradient': "url('/img/bg.png')"
      },
      colors: {
        colors,
        'navy': '#000E30',
        'darqua': '#06131D',
        'light-navy': '#202E4C',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
        'white': '#fafafa',
        'pure-white':'#ffffff',
        'green-contrast': '#4EF07B',
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
          '1': '4.375rem',
          '2': '8rem',
          '3': '16rem',
          '4': '24rem',
          '5': '32rem',
          '6': '48rem',
          '7': '64rem',
          '8': '80rem',
          '9': '96rem',
          '10': '112rem',
          '11': '128rem',
          '12': '144rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
      }
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }
}
