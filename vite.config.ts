import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  css: {
    preprocessorOptions:{
      scss: {
        additionalData: `@import "@/styles/variable.scss";`
      }
    },
    postcss: {
      plugins: [
        require('postcss-plugin-px2rem')({
          rootValue: 13, 
          exclude: /(node_module)/,
          mediaQuery: false, 
          minPixelValue: 3 
        })
      ]
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
  // base:'/demo/'
})
