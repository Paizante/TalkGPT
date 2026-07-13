/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        evergreen: '#1F3D34',
        'deep-green': '#132F29',
        'mid-green': '#385D50',
        'soft-green': '#A8BCAE',
        beige: '#E7DCC6',
        ivory: '#FAF7F1',
        bronze: '#C9A276',
        terracotta: '#C56A4D',
        graphite: '#29312F',
        'warm-gray': '#777873',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'ui-serif', 'serif'],
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
