const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        "lato-regular": ["Lato Regular"],
        "lato-black": ["Lato Black"],
        "lato-bold": ["Lato Bold"],
        "lato-light": ["Lato Light"],
        "lato-thin": ["Lato Thin"],
      },
    },
  },
  plugins: [flowbite.plugin()],
};
