/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E5C76B',
          dark: '#B3941F',
        },
        noir: {
          DEFAULT: '#111111',
          light: '#333333',
          dark: '#000000',
        },
        rouge: {
          DEFAULT: '#C41E3A',
          light: '#E42B4C',
          dark: '#A31126',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        script: ['Great Vibes', 'cursive'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        'texture': "url('https://images.pexels.com/photos/6212991/pexels-photo-6212991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      },
      animation: {
        'fade-in': 'fadeIn 1.5s ease-in-out',
        'slide-up': 'slideUp 1s ease-out',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};