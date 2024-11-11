/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#188ABC',
        lightPrimary: '#32A9DD',
        grayBg: '#252525',
        avatarBg: '#D9D9D9',
        welcomeBg: '#0B0B0B',
        orange: '#F29C1F',
        light: '#C1C1C1',
        lightGray: '#9C9898',
        gray: '#3C3C3C',
        white: '#fff',
        welcomeHeadBg: '#1E1E1E',
        textGray: '#8D8EA0',
        welcomeText: '#909090',
        cardBg: '#2D2D2D',
        inputBg: '#2c2c2c',
        textColor: '#ADADAD',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
