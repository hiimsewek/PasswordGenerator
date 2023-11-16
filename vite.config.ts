import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: "/src/assets",
      components: "/src/components",
      constants: "/src/constants",
      contexts: "/src/contexts",
      services: "/src/services",
      styles: "/src/styles",
      utils: "/src/utils",
    },
  },
});
