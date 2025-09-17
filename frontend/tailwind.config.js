/** @type {import('tailwindcss').Config} */
export default {
  // This is the section you need to fix
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Scans all JS, TS, JSX, and TSX files in the src folder and its subdirectories
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
