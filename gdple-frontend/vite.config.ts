import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

// https://vitejs.dev/config/
export default defineConfig({
  sourcemap: false,
  treeshake: true,
  cssCodeSplit: false,
  plugins: [preact()],
});
