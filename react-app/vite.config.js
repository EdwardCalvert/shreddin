import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
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
      "@api": path.resolve(__dirname, "src/api"),
      "@components": path.resolve(__dirname, "src/components"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@routes": path.resolve(__dirname, "src/routes") ,
      "@layouts": path.resolve(__dirname, "src/layouts") 
    }
  },
  build: {
    outDir: "build",  
  },
  server: {
    historyApiFallback: true, 
  },
})
