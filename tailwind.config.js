export default {
    content: [
      // Nuxt 3 defaults + your custom paths
      "./app.vue",
      "./nuxt.config.{js,ts}",
      "./components/**/*.{vue,js,ts,jsx,tsx}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      // if you have composables or utils that use Tailwind classes:
      "./composables/**/*.{js,ts}",
      "./utils/**/*.{js,ts}",
    ],
    theme: {
      extend: {
        fontFamily: {
          zentry: ["zentry", "sans-serif"],
          general: ["general", "sans-serif"],
          "circular-web": ["circular-web", "sans-serif"],
          "robert-medium": ["robert-medium", "sans-serif"],
          "robert-regular": ["robert-regular", "sans-serif"],
        },
        colors: {
          blue: {
            50: "#DFDFF0",
            75: "#dfdff2",
            100: "#F0F2FA",
            200: "#010101",
            300: "#4FB7DD",
          },
          violet: {
            300: "#5724ff",
          },
          yellow: {
            100: "#8e983f",
            300: "#edff66",
          },
        },
      },
    },
    plugins: [],
  };