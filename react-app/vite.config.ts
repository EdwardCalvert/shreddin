
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import fs from 'fs';

export default defineConfig({
  css: {
    postcss: {
      plugins: 
      [
        tailwindcss, 
        autoprefixer,  
        
    ],
    },
  },
  
  plugins: []
});
