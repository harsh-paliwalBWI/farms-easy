/** @type {import('tailwindcss').Config} */

// import bg from "./src/images/"
import dgfdg from "./src/images/"
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          "healthier-image":"url('../images/healthierBanner.svg')",
          "category-bg":"url('../images/Rectangle 3 (1).svg')",
          "our-mission-bg":"url('../images/bg-image01 1.svg')",
          "playstore-image":"url('../images/hero-bg.svg')",
          "have-questions-bg":"url('../images/Rectangle 24013.svg')"
      },
    },
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '976px',
      'xl': '1280px',
      '2xl': '1440px',
      '3xl': '1536px',

    }
  },
  plugins: [],
}
