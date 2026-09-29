import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const pages = [
  "index.html",
  "portfolio.html",
  "project-2-ecommerce.html",
  "project-3-rag-chatbot.html",
  "project-4-mail-classification.html",
  "project-5-multi-agent-chatbot.html",
];

export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        pages.map((page) => [page.replace(".html", ""), resolve(process.cwd(), page)]),
      ),
    },
  },
});