/** @type {import('tailwindcss').Config} */
module.exports = {
  content :
          [
            './pages/**/*.{js,ts,jsx,tsx,mdx}',
            './components/**/*.{js,ts,jsx,tsx,mdx}',
            './app/**/*.{js,ts,jsx,tsx,mdx}',
          ],
  theme : {
    extend : {
      colors : {
        primary : {
          50 : '#f3e8ff',
          100 : '#e9d5ff',
          200 : '#d8b4fe',
          300 : '#c084fc',
          400 : '#a855f7',
          500 : '#9333ea',
          600 : '#7c3aed',
          700 : '#6b21a8',
          800 : '#581c87',
          900 : '#3b0764',
        },
        teal : {
          200 : '#5eead4',
          700 : '#0f766e',
        },
        purple : {
          200 : '#BB86FC',
          500 : '#6200EE',
          700 : '#3700B3',
        },
        dark : {
          50 : '#f8fafc',
          100 : '#f1f5f9',
          200 : '#e2e8f0',
          300 : '#cbd5e1',
          400 : '#94a3b8',
          500 : '#64748b',
          600 : '#475569',
          700 : '#334155',
          800 : '#1e293b',
          900 : '#0f172a',
        }
      },
      fontFamily : {
        sans : ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins : [],
}