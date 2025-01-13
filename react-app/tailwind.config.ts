import type { Config } from "tailwindcss";

const colors = require('tailwindcss/colors')

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'gold':
        {
          DEFAULT: '#C39424',
          dark: '#95721F'
        },
        'blue': {
          DEFAULT: '#163C76',
          dark:"#122747"
        },
        'warn-red':'#dc0000',
        'success-green' :'#32D655'
      },
      fontFamily: {
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
