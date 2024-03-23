import typography from "@tailwindcss/typography"
import forms from "@tailwindcss/forms"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    typography,
    forms,
  ],
}
