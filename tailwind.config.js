/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#009dff",

          secondary: "#0000ff",

          accent: "#0a00ff",

          neutral: "#172128",

          "base-100": "#fff7fb",

          info: "#00dbff",

          success: "#00a681",

          warning: "#f67b00",

          error: "#ff4462",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
