module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1120px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        gray_700: "#63686c",
        gray_400: "#bfc4c9",
        gray_401: "#cacaca",
        amber_600: "#f4b301",
        amber_700: "#f5a302",
        gray_900: "#121416",
        amber_300: "#fed154",
        bluegray_900: "#2a2f35",
        orange_50: "#fef4e0",
        bluegray_400: "#8a8a8a",
        white_A701: "#fffffe",
        white_A700: "#ffffff",
        amber_700_33: "#f5a30233",
        bluegray_901: "#2d2d2d",
      },
      fontFamily: {
        circularstd: "Circular Std",
        andersongrotesk: "Anderson Grotesk",
      },
      borderRadius: {
        radius50: "50%",
        radius558: "55.8px",
        radius775: "7.75px",
        radius868: "86.8px",
        radius1085: "10.85px",
        radius2325: "23.25px",
        radius7595: "75.95px",
      },
      opacity: { op2: 0.02, op5: 0.5, op79: 0.79 },
      borderWidth: { bw155: "1.55px" },
      backgroundImage: {
        gradient: "linear-gradient(139.07927deg ,#fffffe,#2a2f35)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
