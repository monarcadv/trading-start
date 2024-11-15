/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*{html,js}","./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "coluns-re": "repeat(auto-fill, minmax(200px, 1fr))",
      },
      gridAutoRows: {
        "rowauto": "auto",
      },
      gridTemplateRows:{
        'cubo':'200px'
      },
      keyframes: {
        view: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        viewx: {
          '0%': { opacity: '0', transform: 'translatex(40px)' },
          '100%': { opacity: '1', transform: 'translatex(0)' },
        },
        
      },
      animation: {
        'timeline-view': 'view 2s ease-out ',
        'timeline-viewx': 'viewx 1s ease-out ',
      },

    },
  },
  plugins: [],
};
