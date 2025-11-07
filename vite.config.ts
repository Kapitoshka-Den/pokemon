/// <reference types="vitest/config" />
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  preview: {
    port: 4001,
    host: true,
    allowedHosts: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    css: false,
    reporters: ['default', 'html'],
    outputFile: './reports/test-results.html',
    open: false,
    ui: true,
    coverage: {
      provider: 'v8',
      exclude: ['./**'],
    },
    api: {
      port: 4002,
      host: true,
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
