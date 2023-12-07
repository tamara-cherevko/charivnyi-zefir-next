import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: {
          DEFAULT: 'rgba(255, 255, 255)',
          500: 'rgba(255, 255, 255, 0.5)',
          200: 'rgba(255, 255, 255, 0.2)',
        },
        burgundy: {
          DEFAULT: 'rgba(61, 44, 46)',
          900: 'rgba(61, 44, 46, 0.9)',
        },
        pink: {
          DEFAULT: 'rgba(209, 159, 187)',
          500: 'rgba(209, 159, 187, 0.5)',
          200: 'rgba(209, 159, 187, 0.2)',
          300: 'rgba(209, 159, 187, 0.3)',
          100: 'rgba(209, 159, 187, 0.1)',
          light: 'rgba(245, 237, 240, 0.9)',
          middle: 'rgba(245, 237, 240, 0.5)', // pinkLightE6
        },
        purple: {
          DEFAULT: 'rgba(87, 49, 70)',
          500: 'rgba(87, 49, 70, 0.5)',
        },
        green: 'rgba(203, 230, 229)',

        grey: {
          DEFAULT: 'rgba(112, 111, 111)',
          100: 'rgba(112, 111, 111, 0.1)',
          200: 'rgba(112, 111, 111, 0.2)',
          500: 'rgba(112, 111, 111, 0.5)',
          light: 'rgba(243, 243, 245, 1)',
          middle: 'rgba(160, 160, 159, 1)', //greyLightDark
          dark: 'rgb(25, 25, 25)',
          text: 'rgb(60, 60, 60)',
        },

        black: {
          DEFAULT: 'rgba(25, 25, 25, 1)',
          100: 'rgba(0, 0, 0, 0.1)',
          200: 'rgba(0, 0, 0, 0.2)',
          light: 'rgba(23, 23, 23, 0.6)',
          lighter: 'rgba(25, 25, 25, 0.3)', //blackLight03
          greyish: 'rgba(25, 25, 25, 0.2)', //blackSuperLight
        },
        blue: {
          DEFAULT: 'rgba(74, 91, 197, 1)',
          300: 'rgba(74, 91, 197, 0.3)',
          200: 'rgba(74, 91, 197, 0.2)',
          100: 'rgba(74, 91, 197, 0.1)',
        },
      },
      boxShadow: {
        header: 'grey 0px 0px 18px -10px',
      },
      fontFamily: {
        futura: ['"Futura"'],
        verdana: ['"Verdana"'],
        palatino: 'Palatino Linotype',
        amatic: 'Amatic',
        fixel: 'Fixel Regular',
        headings: 'Fixel SemiBold',
        selection: 'Fixel Medium',
        din: 'din',
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      const newUtilities = {
        '@keyframes waveAnimation': {
          '0%': {
            transform: 'translateX(0) translateZ(0) scaleY(1)',
          },
          '50%': {
            transform: 'translateX(-25%) translateZ(0) scaleY(0.55)',
          },
          '100%': {
            transform: 'translateX(-50%) translateZ(0) scaleY(1)',
          },
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
}
export default config
