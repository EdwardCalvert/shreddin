import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import path from "path";

console.log(__dirname);
// https://vite.dev/config/
export default defineConfig({
  postcss: {
    plugins: 
    [
      tailwindcss, 
      autoprefixer,  
      
  ],
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@routes": path.resolve(__dirname, "src/routes") ,
      "@layouts": path.resolve(__dirname, "src/layouts") 
    }
  }
})
