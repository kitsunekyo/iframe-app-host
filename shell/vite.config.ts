import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4000,
    headers: {
      "Content-Security-Policy": `frame-src 'self' http://localhost:4001;`,
    },
  },
});
