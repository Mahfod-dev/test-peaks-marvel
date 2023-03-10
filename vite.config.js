import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint(),
    VitePWA({
      registerType: "autoUpdate",
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
  },
  build: {
    sourcemap: true,
  },
});
