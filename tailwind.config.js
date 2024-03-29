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
            borderStyle: ['hover'],
            backgroundImage: {
                light: "url('/img/bg.jpg')",
                pattern: "url('/svg/pattern.svg')",
            },
            colors: {
                'navy': {
                    DEFAULT: '#000E30',
                    light: '#072650',
                    dark: '#011133',
                },
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
                'pure-white': '#ffffff',
                'green-contrast': '#4EF07B',
                'blue': {
                    tailwind: '#0761e2',
                    sky: '#3eb1ff',
                },
            },
            fontFamily: { sans: ['Noto Sans'] },
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
            borderRadius: { '4xl': '2rem' },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};
