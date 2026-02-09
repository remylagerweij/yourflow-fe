import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // YourFlow Brand Colors
        'yf-navy': '#082536',
        'yf-blue': '#1399FA',
        'yf-pink': '#FD47F6',
        'yf-grey': '#C7C7C7',
        // Utility shades
        'yf-navy-light': '#0d3348',
        'yf-navy-dark': '#051a26',
      },
      fontFamily: {
        heading: ['"Montserrat Alternates"', 'sans-serif'],
        sans: ['"Open Sans"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        float: 'float 6s ease-in-out infinite',
        // Original gradient animations (slower)
        first: 'moveVertical 30s ease infinite',
        second: 'moveInCircle 20s reverse infinite',
        third: 'moveInCircle 40s linear infinite',
        fourth: 'moveHorizontal 40s ease infinite',
        fifth: 'moveInCircle 20s ease infinite',
        // Fast gradient animations (more dynamic)
        'first-fast': 'moveVerticalFast 8s ease-in-out infinite',
        'second-fast': 'moveInCircleFast 6s reverse infinite',
        'third-fast': 'moveInCircleFast 10s linear infinite',
        'fourth-fast': 'moveHorizontalFast 12s ease-in-out infinite',
        'fifth-fast': 'moveDiagonal 9s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        // Original gradient blob animations
        moveHorizontal: {
          '0%': { transform: 'translateX(-50%) translateY(-10%)' },
          '50%': { transform: 'translateX(50%) translateY(10%)' },
          '100%': { transform: 'translateX(-50%) translateY(-10%)' },
        },
        moveInCircle: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        moveVertical: {
          '0%': { transform: 'translateY(-50%)' },
          '50%': { transform: 'translateY(50%)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        // Fast gradient blob animations (more movement)
        moveVerticalFast: {
          '0%': { transform: 'translateY(-30%) translateX(-10%)' },
          '25%': { transform: 'translateY(20%) translateX(15%)' },
          '50%': { transform: 'translateY(40%) translateX(-5%)' },
          '75%': { transform: 'translateY(-10%) translateX(10%)' },
          '100%': { transform: 'translateY(-30%) translateX(-10%)' },
        },
        moveInCircleFast: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '25%': { transform: 'rotate(90deg) scale(1.1)' },
          '50%': { transform: 'rotate(180deg) scale(1)' },
          '75%': { transform: 'rotate(270deg) scale(0.9)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
        moveHorizontalFast: {
          '0%': { transform: 'translateX(-40%) translateY(0%)' },
          '25%': { transform: 'translateX(20%) translateY(-20%)' },
          '50%': { transform: 'translateX(40%) translateY(10%)' },
          '75%': { transform: 'translateX(-10%) translateY(25%)' },
          '100%': { transform: 'translateX(-40%) translateY(0%)' },
        },
        moveDiagonal: {
          '0%': { transform: 'translateX(-25%) translateY(-25%)' },
          '25%': { transform: 'translateX(25%) translateY(-15%)' },
          '50%': { transform: 'translateX(30%) translateY(25%)' },
          '75%': { transform: 'translateX(-15%) translateY(30%)' },
          '100%': { transform: 'translateX(-25%) translateY(-25%)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
