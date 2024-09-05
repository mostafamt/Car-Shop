import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";
import glob from "glob";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
  },
  base: "",
  root: "src",
  build: {
    outDir: "../dist",
  },
});
