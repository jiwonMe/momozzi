import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // 다크 모드 지원 설정
  conditions: {
    _dark: "[data-theme=dark] &",
    _light: "[data-theme=light] &",
  },

  // 다크 모드를 기본적으로 ThemeProvider를 통해 적용
  globalCss: {
    body: {
      transition: "background-color 0.2s, color 0.2s",
    },
    "[data-theme=dark]": {
      backgroundColor: "#1F2937",
      color: "#F9FAFB",
    },
    "[data-theme=light]": {
      backgroundColor: "#FFFFFF",
      color: "#4D5355",
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
