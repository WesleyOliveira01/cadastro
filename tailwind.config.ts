import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'defaultColor':'#001683',
        'textColor':'#F58F29',
        'defaultBg':'#F4F5FA'
      }
    },
  },
  plugins: [],
}
export default config
