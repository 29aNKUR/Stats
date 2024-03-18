/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        coral: "#ff8e5d",
        violet: "#ff7bf2",
        mediumslateblue: "#aa75ff",
        sandybrown: "#ffc46a",
        aqua: "#75ffff",
        lightskyblue: "#75d6ff",
        white: "#fff",
        gainsboro: "#d9d9d9",
      },
      spacing: {},
      fontFamily: {
        "ibm-plex-sans": "'IBM Plex Sans'",
      },
      borderRadius: {
        "15xl-6": "34.6px",
      },
    },
    fontSize: {
      "11xl": "30px",
      "36xl-3": "55.3px",
      "5xl": "24px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
