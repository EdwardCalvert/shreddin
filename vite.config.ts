import { reactRouter } from "@react-router/dev/vite";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { VitePWA } from 'vite-plugin-pwa'

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
    devOptions: {
      enabled: true
    },
    manifest: {
      name: 'My PWA App',
      short_name: 'PWA App',
      description: 'A Progressive Web App with Vite and PWA support',
      theme_color: '#ffffff',
      
      icons: [
        {
          src: '/icons/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/icons/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
  })],
});
