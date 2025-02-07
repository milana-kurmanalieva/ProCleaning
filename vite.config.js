import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components':'/src/components',
      '@assets': '/src/assets',
      '@pages': '/src/pages',
      '@utils': '/src/utils',
      '@modules': '/src/modules',
      '@ui': '/src/ui',
      '@app': '/src/app',
      '@store': '/src/store'
    }
  },
  build: {
    sourcemap: true,
  }
})
