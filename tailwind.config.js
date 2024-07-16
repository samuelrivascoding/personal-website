/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-color-primary": "#fff",
        sapphire: "#1a57b8",
        "delft-blue": "#0f2c5b",
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
      xs: "12px",
      "37xl": "56px",
      xl: "20px",
      lg: "18px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
