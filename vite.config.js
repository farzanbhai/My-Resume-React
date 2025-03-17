import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",  // Vercel expects the output in the "dist" folder
  },
  server: {
    allowedHosts: ["6a3c-182-187-151-131.ngrok-free.app"]
  }
})
