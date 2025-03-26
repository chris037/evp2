import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/evp/',
  plugins: [react()],
  host: "0.0.0.0", // ✅ Required for Render to expose the port
  port: 4173, // Optional: set default port
})
