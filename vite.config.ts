import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  base: "./",
  server: {
    port: 1430,
    strictPort: true,
  },
  build: {
    target: "es2020",
    chunkSizeWarningLimit: 900,
  },
});
