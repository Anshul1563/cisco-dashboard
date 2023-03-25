/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "cisco-purple":"#5267df",
        "cisco-red":"#fa5959",
        "cisco-blue":"#242a45",
        "cisco-grey":"#9194a2",
        "cisco-white":"#f7f7f7",
    },
  },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
  },
  
  }
  
}
