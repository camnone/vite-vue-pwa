import vue from "@vitejs/plugin-vue";
import dotenv from "dotenv";
import { defineConfig } from "vite";

dotenv.config();
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  envDir: "/.env",
});
