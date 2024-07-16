/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "delft-blue": "#0f2c5b",
        sapphire: "#1a57b8",
        "background-color-primary": "#fff",
        gray: "#482626",
        periwinkle: "#c3daff",
      },
      spacing: {
        "space-2400": "96px",
      },
      fontFamily: {
        "text-regular-normal": "Montserrat",
      },
      borderRadius: {
        "17xl": "36px",
      },
    },
    fontSize: {
      base: "16px",
      "29xl": "48px",
      lg: "18px",
      xl: "20px",
      "37xl": "56px",
      xs: "12px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
