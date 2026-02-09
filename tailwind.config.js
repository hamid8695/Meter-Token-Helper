/** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    colors: {
      primary: "#2C3E50", // Navy Blue
      secondary: "#F1C40F", // Gold
    },

    height: {
      footer: "360px",
    },
  },
};
export const plugins = [];
