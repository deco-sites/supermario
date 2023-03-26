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
    },
  },
};
