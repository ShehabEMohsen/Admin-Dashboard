/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false,
  theme: {
    extend: {},
    colors:{
      'purple-main':'#763CEB',
      'main-900':'#4E55DA',
      'main-700':'#5E75FA',
      'main-600':'#7687FA',
      'main-500':'#969FFA',
      'main-300':'#B6B7FA',
      'main-100':'#EEEDFA',
      'neutral-black':'#010220',
      'neutral-900':'#393A47',
      'neutral-700':'#888890',
      'neutral-500':'#CBCBCD',
      'neutral-300':'#ECECEC',
      'neutral-white':'#FFFFFF',
      'transparent':'transparent',
      'red':'#CD0404',
      'green':'#04A928',
    }
  },
  plugins: [],
}

