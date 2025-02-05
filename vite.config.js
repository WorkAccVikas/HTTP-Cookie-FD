import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

import dotenv from "dotenv";
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/*": process.env.VITE_BACKEND_URL,
    },
  },
  plugins: [react()],
});
