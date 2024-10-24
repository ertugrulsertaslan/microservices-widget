import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // 0.0.0.0'ı dinlemek için true yap
    port: 5173, // Vite'nin dinleyeceği port
  },
});
