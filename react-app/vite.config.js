import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import path from "path";

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
      "@components": path.resolve(__dirname, "src/components"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@routes": path.resolve(__dirname, "src/routes") ,
      "@layouts": path.resolve(__dirname, "src/layouts") 
    }
  }
})
