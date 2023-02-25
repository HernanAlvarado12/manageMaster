/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      spacing: {
        '0.5': '0.5rem',
        '1': '1rem',
        '1.5': '1.5rem',
        '2': '2rem',
        '3': '3rem',
        '4': '4rem',
        '5': '5rem',
        '6': '6rem',
        '8': '8rem',
        '10': '10rem',
        '50': '50%',
        '80': '80%',
        '85': '85%',
        '90': '90%'
      },
      fontSize: {
        'xs': '1.4rem',
        'sm': '1.6rem',
        'md': '1.8rem',
        'icon': '2rem',
        'base': '2.4rem',
        'lg': '3.2rem',
        'xl': '4.2rem'
      },
      borderRadius: {
        'sm': '0.6rem',
        'md': '0.8rem',
        'lg': '1rem'
      },
      colors: {
        gray: 'hsl(0, 0%, 98%)',
        red: {
          DEFAULT: 'hsl(12, 88%, 59%)',
          '100': 'hsl(13, 100%, 96%)'
        },
        blue: {
          DEFAULT: 'hsl(228, 39%, 23%)',
          '100': 'hsl(227, 12%, 61%)',
          '200': 'hsl(233, 12%, 13%)'
        }
      },
      boxShadow: {
        'sm': '0 0.5rem 1rem -0.2rem hsl(13, 100%, 66%)',
        'menu': '0 0.2rem 1.2rem rgba(0, 0, 0, 0.5)'
      },
      backgroundImage: {
        'menu': 'linear-gradient(gray, white)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
