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
      backgroundImage:{
        defaultColorBg: ' rgb(243,204,65)',
        marioGradient: 'linear-gradient(0deg, rgba(243,204,65,1) 22%, rgba(255,255,255,1) 22%)'
      },
      fontFamily: {
        sans: ["acumin-pro-wide", "sans-serif"],
        serif: ["Delicious","serif"],
        grotesk:["rockgrotesk","serif"]
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
        },
        slideFadeIn1:{
          '0%':{opacity:0},
          '20%':{opacity:1},
          '40%':{opacity:0},
          '60%':{opacity:0},
          '80%':{opacity:0},
          'to':{opacity:0},
        },
        slideFadeIn2:{
          '0%':{opacity:0},
          '20%':{opacity:0},
          '40%':{opacity:1},
          '60%':{opacity:0},
          '80%':{opacity:0},
          'to':{opacity:0},
        },
        slideFadeIn3:{
          '0%':{opacity:0},
          '20%':{opacity:0},
          '40%':{opacity:0},
          '60%':{opacity:1},
          '80%':{opacity:0},
          'to':{opacity:0},
        },
        slideFadeIn4:{
          '0%':{opacity:0},
          '20%':{opacity:0},
          '40%':{opacity:0},
          '60%':{opacity:0},
          '80%':{opacity:1},
          'to':{opacity:0},
        }
      },
      animation: {
        'spin-slow': 'spin 3s reverse linear infinite',
        'pulse-zoom': 'pulseZoom 2s linear infinite',
        'text-Marquee': 'textMarquee 6s linear infinite',
        'slideFadeIn1': 'slideFadeIn1 13s infinite',
        'slideFadeIn2': 'slideFadeIn2 13s infinite',
        'slideFadeIn3': 'slideFadeIn3 13s infinite',
        'slideFadeIn4': 'slideFadeIn4 13s infinite',
      },
      boxShadow:{
        "buttonsShadow": '#ec8b8b 0px 3px 3px 2px inset, #310709 0px -3px 4px 3px inset'
      },
      cursor:{
        'fancy': 'url(/icons/cursor.png), pointer'
      },
    },
  },
};
