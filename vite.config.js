import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/evp/',
  plugins: [react()],
  server: {
    host: '0.0.0.0', // ✅ Required for local dev and Render to expose port
    port: 4173,
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
    allowedHosts: ['evp-xs9f.onrender.com'], // ✅ Add your Render domain here
  },
})