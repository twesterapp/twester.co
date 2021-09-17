module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    colors: {
      transparent: 'transparent',
      currentColor: 'currentColor',
      alter: '#040F0F',
      onAlterHover: '#0A2727',
      background: '#00171F',
      background2: '#003459',
      primary: '#00A8E8',
      onPrimaryHover: '#1484CF',
      secondary: '#FFB703',
      white: '#F1F1F1',
    },
    fontFamily: {
      karla: ['Karla', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
     extend: {
       dropShadow: {
         'screenshot': '0px 16px 40px rgba(0, 168, 232, 0.2)',
       }
     }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
