import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/styles/colors.scss";
        @import "./src/assets/styles/typography.scss";
        @import "./src/assets/styles/breakpoints.scss";`,
      },
    },
  },
  build: {
    target: "modules",
    sourcemap: true,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      assets: fileURLToPath(new URL("./src/assets", import.meta.url)),
    },
  },
});
