import flowbite from "flowbite-react/tailwind";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        "lato-regular": ["Lato Regular"],
        "lato-black": ["Lato Black"],
        "lato-bold": ["Lato Bold"],
        "lato-light": ["Lato Light"],
        "lato-thin": ["Lato Thin"],
        "forced-square": ["Forced Square"],
        "work-sans-reg": ["Work Sans Regular"],
        "work-sans-bold": ["Work Sans Bold"],
        "space-grotesk-reg": ["Space Grotesk Regular"],
        "space-grotesk-light": ["Space Grotesk Light"],
      },
      colors: {
        "fluo-green": "#3CFFD0",
        "techno-black": "#131313",
        "pale-green": "#9DFFE7",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
