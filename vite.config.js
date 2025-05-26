// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],

  // 1) Pre-bundle Popper so its own imports are compiled ahead of time
  optimizeDeps: {
    include: ['@popperjs/core']
  },

  resolve: {
    alias: {
      // 2) Ensure all `import ... from '@popperjs/core'` uses the ESM build
      '@popperjs/core$': resolve(
        __dirname,
        'node_modules/@popperjs/core/dist/esm/index.js'
      )
    }
  }
})