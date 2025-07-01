import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: false, // Vite dev server remains on HTTP
    proxy: {
      '/api': {
        target: 'https://localhost:44335',
        changeOrigin: true,
        secure: false, // allow self-signed SSL cert
      }
    }
  }
})