/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      // Brand palette ("Waves") — see styles/globals.css for CSS variable mirror
      colors: {
        sage: '#70AC90',
        shoreline: '#C59F82',
        shadow: '#264D52',
        ocean: '#496A49',
        sand: '#D8C0AA',
        cream: '#F7F4EC'
      },
      // Fonts wired from next/font CSS variables (set in app/layout.tsx)
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
        script: ['var(--font-allura)', 'cursive']
      },
      borderRadius: {
        '2xl': '1rem'
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(38,77,82,0.18)',
        lift: '0 18px 50px -12px rgba(38,77,82,0.28)'
      },
      maxWidth: {
        content: '1200px'
      },
      letterSpacing: {
        widearrow: '0.18em'
      }
    }
  },
  plugins: []
}
