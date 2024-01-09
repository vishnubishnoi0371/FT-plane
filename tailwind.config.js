/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundSize: { "100%": "100% 100%" },

      fontFamily: {
        "ff-mon": "Montserrat, sans-serif",
        "ff-inter": "Inter, sans-serif",
        "ff-rub": "Rubik, sans-serif",
        "ff-pop": "Poppins, sans-serif",
      },
      boxShadow: {
        btn_sh_1: "0px 10px 14px 0px rgba(49, 62, 247, 0.25)",
        btn_sh_2: "0px 100px 200px 0px rgba(1, 23, 54, 0.10)",
      },
      screens: {
        xs: "310px",
        xs_2: "570px",
        900: "900px",
        xxs: "450px",
      },
    },
  },
  plugins: [],
};
