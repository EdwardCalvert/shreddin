import { reactRouter } from "@react-router/dev/vite";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { VitePWA } from 'vite-plugin-pwa'
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
  
  plugins: [reactRouter(), tsconfigPaths(),  VitePWA({
    registerType: 'autoUpdate', // auto-update service worker on each load
    injectRegister: 'auto',
    workbox: {
      clientsClaim: true,
      skipWaiting: true
    },
    devOptions: {
      enabled: true,
      type: 'module',
    }
  })],
  // server:{
  //   https: {
  //     key: fs.readFileSync('key.pem'),
  //     cert: fs.readFileSync('cert.pem'),
  //     rejectUnauthorized: false,
  //     requestCert: false,
      
  //   }
  // }
});
