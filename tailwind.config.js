/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2387C0',
        'alt': '#C4C4C4',
        'light-gray': '#F6F6F6',
      },
      fontSize: {
        'xs': ['14px', '21px'],
        'sm': ['16px', '28px'],
        'md': ['18px', {
          lineHeight: '37px',
          fontWeight: '500',
        }],
        'lg': ['24px', {
          lineHeight: '36px',
          fontWeight: '600',
        }],
        'lg-1': ['28px', {
          lineHeight: '42px',
          fontWeight: '600',
        }],
        'xl': ['46px', {
          lineHeight: '69px',
          fontWeight: '600',
        }],
        'xxl': ['64px', '96px'],
      },
    },
  },
  plugins: [],
}