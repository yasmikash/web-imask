module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-green": "#099470",
        "dark-green": "#07AB81",
        "light-green": "#10C091",
        "light-grey": "#F6F6F6",
        "dark-grey": "#C7C7C7",
      },
      backgroundImage: {
        breathing: `url('/src/assets/images/breathing.png')`,
        heartrate: `url('/src/assets/images/heartrate.png')`,
        cough: `url('/src/assets/images/cough.png')`,
        temparature: `url('/src/assets/images/temparature.png')`,
        oxygen: `url('/src/assets/images/oxygen.png')`,
        final: `url('/src/assets/images/final.png')`,
      },
    },
  },
  plugins: [],
};
