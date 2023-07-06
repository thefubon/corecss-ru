/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem', // md: '1rem',
        xs: '1rem',
        sm: '1rem',
        lg: '1rem',
        xl: '1rem',
      },
    },
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    extend: {
      colors: {
        'light': {
          primary: '#3984FE',
          'hover': {
            primary: '#1D72FE'
          },
        },
      },
      spacing: {
        3.5: '0.875rem',
        4.5: '1.125rem',
        13: '3.25rem',
        15: '3.75rem',
        128: '32rem',
        144: '36rem',
      },
      height: {
        7.5: '1.875rem',
        18: '4.5rem'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    },
  },
  plugins: [],
}
