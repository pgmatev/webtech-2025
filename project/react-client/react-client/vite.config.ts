import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    cors: true, // Enables CORS
    // Optional: custom CORS headers
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
});
