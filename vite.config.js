import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./", // Usando base relativa para facilitar a integração com Electron
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Para facilitar os imports
    },
  },
  build: {
    outDir: "dist", // Diretório onde a build será gerada
    assetsDir: "assets", // Diretório para arquivos estáticos dentro de dist
  },
});
