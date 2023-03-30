/** @type {import('$fresh/plugins/twind').Options} */
export default {
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        primary: "#2FD180",
        "primary-dark": "#003232",
        "primary-light": "#C5FFE9",
        transparent: "transparent",
      },
      fontFamily: {
        sans: ["acumin-pro-wide","rocgrotesc", "sans-serif"],
        serif: ["serif"],
      },
      outline: {
        red: [
          "0.2rem solid #cd0b14",
          "0px",
        ],
      },
      keyframes: {
        pulseZoom: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' }
        },
        textMarquee:{
          '0%':{transform: 'translateX(0)'},
          'to':{transform: 'translateX(-50%)'}
        }
      },
      animation: {
        'spin-slow': 'spin 3s reverse linear infinite',
        'pulse-zoom': 'pulseZoom 2s linear infinite',
        'text-Marquee': 'textMarquee 3s linear infinite'
      },
      boxShadow:{
        "buttonsShadow": '#ec8b8b 0px 3px 3px 2px inset, #310709 0px -3px 4px 3px inset'
      },
      cursor:{
        'fancy': 'url(/icons/cursor.png), pointer'
      }
    },
  },
};
